PImage cave;
PImage walking3;  // walking3 이미지 추가
PImage walking4;  // walking4 이미지 추가
float tgX = 1380;
float tgY = 420;
float tgWidth;
float tgHeight;

boolean showWalking3 = true;  // 어떤 이미지를 보여줄지 추적
int lastSwitchTime = 0;  // 마지막으로 이미지를 교체한 시간
int switchInterval = 500;  // 이미지 교체 간격 (밀리초)
int stopSwitchTime = 4000;  // 이미지 교체를 멈출 시간 (밀리초)

void setup() {
  size(1920, 1080);
  cave = loadImage("cave.png");
  walking3 = loadImage("walking3.png");  // walking3 이미지 로드
  walking4 = loadImage("walking4.png");  // walking4 이미지 로드
  tgWidth = walking3.width * 0.3;  // 초기 너비 비율
  tgHeight = walking3.height * 0.3;  // 초기 높이 비율
}

void draw() {
  background(0);
  image(cave, 0, 0, width, height);

  // 현재 시간 가져오기
  int currentTime = millis();

  // 5초가 지나기 전에는 이미지 교체
  if (currentTime < stopSwitchTime) {
    // 이미지 교체 간격이 지나면 이미지 교체
    if (currentTime - lastSwitchTime > switchInterval) {
      showWalking3 = !showWalking3;  // 이미지 교체
      lastSwitchTime = currentTime;  // 마지막 교체 시간 업데이트
    }
  } else {
    // 5초가 지나면 walking3 이미지 유지
    showWalking3 = true;
  }

  // 이미지 그리기
  if (showWalking3) {
    image(walking3, tgX, tgY, tgWidth, tgHeight);
  } else {
    image(walking4, tgX, tgY, tgWidth, tgHeight);
  }

  // 위치와 크기 업데이트
  if (tgX > 1000) {
    tgX -= 3;  // 왼쪽으로 이동
    tgWidth += 2;  // 너비 증가
    tgHeight += 2.5;  // 높이 증가
  }
}
