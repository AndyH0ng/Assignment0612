PImage cave;
PImage check;
PImage happy;

boolean isHappy = false;
float happyY;
float speed = 3;

int currentImage = 1;
int interval = 600; // 0.6초 간격 (600 밀리초)
int lastSwitchTime = 0;
int startTime;

void setup() {
  size(1920, 1080);
  
  // 이미지 로드
  cave = loadImage("cave.png"); // 동굴 이미지 파일 (PNG)
  check = loadImage("check.png"); // 체크 이미지 파일 (PNG)
  happy = loadImage("happy.png"); // 하피 이미지 파일 (PNG)
  
  // Happy 이미지 크기 조정
  happy.resize((int)(happy.width * 0.7), (int)(happy.height * 0.7));
  
  startTime = millis(); // 시작 시간 기록
}

void draw() {
  // 배경에 동굴 이미지 그리기
  image(cave, 0, 0, width, height);
  
  // 경과 시간 계산
  int elapsedTime = millis() - startTime;
  
  // 일정 시간(5초 = 5000 밀리초)이 지나면 happy 이미지로 교체
  if (elapsedTime >= 5000) {
    isHappy = true;
    happyY = 420; // 초기 위치 설정
  }
  
  if (isHappy) {
    // Happy 이미지 그리기
    image(happy, 1000, happyY);
    
    // Happy 이미지 이동
    if (happyY <= 320) {
      speed = abs(speed);
    } else if (happyY >= 420) {
      speed = -abs(speed);
    }
    happyY += speed;
  } else {
    // 이미지 교체 타이밍 체크
    if (millis() - lastSwitchTime > interval) {
      currentImage = (currentImage == 1) ? 2 : 1;
      lastSwitchTime = millis();
    }
    
    // 체크 이미지의 크기 조정 (0.7배로 줄이기)
    float checkWidth = check.width * 0.7;
    float checkHeight = check.height * 0.7;
    
    // 현재 이미지에 따라 체크 또는 체크2 그리기
    if (currentImage == 1) {
      image(check, 1000, 420, checkWidth, checkHeight);
    } else {
      PImage check2 = loadImage("check2.png"); // 체크2 이미지 로드
      image(check2, 1000, 420, checkWidth, checkHeight);
    }
  }
}

void mouseClicked() {
  // 클릭 시 Happy 이미지로 변경
  isHappy = !isHappy;
  if (isHappy) {
    happyY = 420; // 초기 위치 설정
  }
}
