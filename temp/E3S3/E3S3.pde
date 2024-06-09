PImage season;
PImage baby;
PImage baby2;
PImage baby3;
PImage mini1;
PImage mini2;
PImage mini3;
PImage mini4;
PImage dangun;
PImage bumgun;

PImage[] seasons = new PImage[4]; // 배열을 사용하여 계절 사진을 저장
PImage[] miniImages = new PImage[4]; // mini 이미지를 저장

int seasonIndex = 0; // 현재 표시할 계절 사진의 인덱스
int babySwitchInterval = 1000; // baby와 baby2 이미지 전환 간격 (1초)
int miniSwitchInterval = 300; // mini 이미지 전환 간격 (0.3초)
int seasonSwitchInterval = 500; // 계절 이미지 전환 간격 (0.5초)
int lastBabySwitchTime = 0;
int lastMiniSwitchTime = 0;
int lastSeasonSwitchTime = 0;
boolean isBaby1 = true;
boolean isBaby3 = true; // 오른쪽 baby 이미지 전환용
boolean isBabyRotating = false;
boolean isDangunDisplayed = false;
float babyY;
float babySpeed = 0.3; // Baby 이미지의 움직이는 속도
int miniIndex = 0; // mini 이미지 인덱스

void setup() {
  size(1920, 1080);
  
  // 이미지 로드
  season = loadImage("season.png"); // 시즌 이미지 파일 (PNG)
  baby = loadImage("baby.png"); // 베이비 이미지 파일 (PNG)
  baby2 = loadImage("baby2.png"); // 베이비2 이미지 파일 (PNG)
  baby3 = loadImage("baby3.png"); // 베이비3 이미지 파일 (PNG)
  mini1 = loadImage("mini1.png"); // mini1 이미지 파일 (PNG)
  mini2 = loadImage("mini2.png"); // mini2 이미지 파일 (PNG)
  mini3 = loadImage("mini3.png"); // mini3 이미지 파일 (PNG)
  mini4 = loadImage("mini4.png"); // mini4 이미지 파일 (PNG)
  dangun = loadImage("dangun.png"); // dangun 이미지 파일 (PNG)
  bumgun = loadImage("bumgun.png"); // bumgun 이미지 파일 (PNG)
  
  seasons[0] = loadImage("spring.png");
  seasons[1] = loadImage("summer.png");
  seasons[2] = loadImage("fall.png");
  seasons[3] = loadImage("winter.png");
  
  miniImages[0] = mini1;
  miniImages[1] = mini2;
  miniImages[2] = mini3;
  miniImages[3] = mini4;

  babyY = height / 2; // 초기 Baby 이미지의 Y 위치 설정
}

void draw() {
  // 배경 설정
  if (isDangunDisplayed) {
    background(season);
  } else {
    background(season);
  }

  // 베이비 이미지를 화면 가운데에 그리기
  float babyWidth = baby.width;
  float babyHeight = baby.height;
  imageMode(CENTER);
  
  if (isBabyRotating) {
    // mini 이미지 순차적으로 출력
    if (miniIndex < miniImages.length) {
      image(miniImages[miniIndex], width / 2 - 150 - 100, babyY, babyWidth, babyHeight);
      image(miniImages[miniIndex], width / 2 - 150 + 500, babyY, babyWidth, babyHeight);
      if (millis() - lastMiniSwitchTime > miniSwitchInterval) {
        miniIndex++;
        lastMiniSwitchTime = millis();
      }
    } else {
      // dangun 및 bumgun 이미지 출력
      image(dangun, width / 2 - 150 - 100, babyY, babyWidth, babyHeight);
      image(bumgun, width / 2 - 150 + 500, babyY, bumgun.width * 0.72, bumgun.height * 0.72); // bumgun 이미지 20% 줄임
      isDangunDisplayed = true; // dangun 이미지가 출력되었음을 표시
    }
  } else {
    // 베이비 이미지 그리기
    image(isBaby1 ? baby : baby2, width / 2 - 150 - 100, babyY, babyWidth, babyHeight);
    image(isBaby3 ? baby3 : baby2, width / 2 - 150 + 500, babyY, babyWidth, babyHeight);
    
    // Baby 이미지의 Y 위치 변경
    babyY += babySpeed;
    
    // Baby 이미지가 화면 위 아래로 이동하면 방향을 변경
    if (babyY <= height / 2 - 5 || babyY >= height / 2 + 5) {
      babySpeed *= -1; // 이동 방향을 반대로 변경
    }
    
    // 이미지 전환 타이밍 체크
    if (millis() - lastBabySwitchTime > babySwitchInterval) {
      isBaby1 = !isBaby1;
      isBaby3 = !isBaby3;
      lastBabySwitchTime = millis();
    }
  }

  // 계절 이미지 전환 타이밍 체크
  if (millis() - lastSeasonSwitchTime > seasonSwitchInterval) {
    // 다음 계절 이미지로 전환
    seasonIndex = (seasonIndex + 1) % seasons.length;
    season = seasons[seasonIndex];
    lastSeasonSwitchTime = millis();
  }
}

void mousePressed() {
  // 마우스 클릭 시 베이비 이미지 회전 상태로 전환
  isBabyRotating = true;
  miniIndex = 0; // mini 이미지 인덱스 초기화
  lastMiniSwitchTime = millis(); // mini 이미지 전환 시작 시간 기록
  seasonSwitchInterval = 200; // 계절 이미지 전환 간격 변경
}
