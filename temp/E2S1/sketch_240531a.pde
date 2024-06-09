PImage cave;
PImage check3;
PImage happy2;

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
  check3 = loadImage("check3.png"); // 체크3 이미지 파일 (PNG)
  happy2 = loadImage("happy2.png"); // 하피2 이미지 파일 (PNG)
  
  // Happy2 이미지 크기 조정
  happy2.resize((int)(happy2.width * 0.8), (int)(happy2.height * 0.8));
  
  startTime = millis(); // 시작 시간 기록
}

void draw() {
  // 배경에 동굴 이미지 그리기
  image(cave, 0, 0, width, height);
  
  // 경과 시간 계산
  int elapsedTime = millis() - startTime;
  
  // 일정 시간(5초 = 5000 밀리초)이 지나면 happy2 이미지로 교체
  if (elapsedTime >= 5000) {
    isHappy = true;
    happyY = 420; // 초기 위치 설정
  }
  
  if (isHappy) {
    // Happy2 이미지 그리기
    image(happy2, 1000, happyY);
    
    // Happy2 이미지 이동
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
    
    // 체크3 이미지의 크기 조정 (0.7배로 줄이기)
    float checkWidth = check3.width * 0.8;
    float checkHeight = check3.height * 0.8;
    
    // 현재 이미지에 따라 check3 또는 check4 그리기
    if (currentImage == 1) {
      image(check3, 1000, 400, checkWidth, checkHeight);
    } else {
      PImage check4 = loadImage("check4.png"); // 체크4 이미지 로드
      image(check4, 1000, 400, checkWidth, checkHeight);
    }
  }
}

void mouseClicked() {
  // 클릭 시 Happy2 이미지로 변경
  isHappy = !isHappy;
  if (isHappy) {
    happyY = 420; // 초기 위치 설정
  }
}
