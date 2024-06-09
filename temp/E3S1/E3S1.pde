PImage cave;
PImage handtiger;
PImage watchtiger;
PImage handbear;
PImage watchbear;
PImage happytiger;
PImage happybear;

float tigerX = 950;
float tigerY = 400;
float bearX = 1350;
float bearY = 400;

boolean showHandtiger = true;
boolean showHandbear = true;
boolean finalImages = false; // 최종 이미지로 바뀌었는지 확인하는 변수
boolean startAnimation = false; // 애니메이션 시작 여부 확인하는 변수

int switchInterval = 800;  // 이미지 교체 간격 (밀리초)
int switchCount = 0;  // 이미지 교체 횟수
int maxSwitchCount = 4;  // 이미지 교체 최대 횟수 
int lastSwitchTime = 0;  // 마지막으로 이미지를 교체한 시간
int animationStartTime = 0; // 애니메이션 시작 시간

void setup() {
  size(1920, 1080);
  cave = loadImage("cave.png");
  handtiger = loadImage("handtiger.png");
  watchtiger = loadImage("watchtiger.png");
  handbear = loadImage("handbear.png");
  watchbear = loadImage("watchbear.png");
  happytiger = loadImage("happytiger.png");
  happybear = loadImage("happybear.png");
  lastSwitchTime = millis();
}

void draw() {
  background(0);
  image(cave, 0, 0, width, height);

  int currentTime = millis();

  if (switchCount < maxSwitchCount) {
    // 이미지 교체 간격이 지나고 교체 횟수가 최대 횟수보다 적으면 이미지 교체
    if (currentTime - lastSwitchTime > switchInterval) {
      showHandtiger = !showHandtiger;
      showHandbear = !showHandbear;
      lastSwitchTime = currentTime;
      switchCount++;
    }
  } else {
    // 교체 횟수가 최대에 도달하면 0.3초 후에 최종 이미지로 변경 및 애니메이션 시작
    if (!finalImages && currentTime - lastSwitchTime > 300) {
      finalImages = true;
      showHandtiger = false;
      showHandbear = false;
      startAnimation = true;
      animationStartTime = currentTime;
    }
  }

  // 이미지 크기 조정 (75%)
  float imgScale = 0.75;

  if (finalImages) {
    // 최종 이미지 위치 설정
    float targetY = 300;
    float finalY = 400;

    // 애니메이션 진행
    if (startAnimation) {
      float t1 = (currentTime - animationStartTime) / 1000.0;
      
      // 1초 동안 target 위치로 이동 후 바로 final 위치로 이동
      if (t1 <= 1.0) {
        tigerX = lerp(tigerX, 1020, t1);
        bearX = lerp(bearX, 1280, t1);

        tigerY = lerp(tigerY, targetY, t1);
        bearY = lerp(bearY, targetY, t1);
      } else {
        float t2 = (t1 - 1.0) * 2;  // 빠르게 0.5초 동안 이동
        tigerY = lerp(targetY, finalY, t2);
        bearY = lerp(targetY, finalY, t2);

        if (t2 >= 1.0) {
          tigerY = finalY;
          bearY = finalY;
          startAnimation = false; // 애니메이션 종료
        }
      }
    }

    // 최종 이미지 그리기
    image(happytiger, tigerX, tigerY, happytiger.width * imgScale, happytiger.height * imgScale);
    image(happybear, bearX, bearY, happybear.width * imgScale, happybear.height * imgScale);
  } else {
    // 이미지 그리기
    if (showHandtiger) {
      image(handtiger, tigerX, tigerY, handtiger.width * imgScale, handtiger.height * imgScale);
    } else {
      image(watchtiger, tigerX, tigerY, watchtiger.width * imgScale, watchtiger.height * imgScale);
    }

    if (showHandbear) {
      image(handbear, bearX, bearY, handbear.width * imgScale, handbear.height * imgScale);
    } else {
      image(watchbear, bearX, bearY, watchbear.width * imgScale, watchbear.height * imgScale);
    }
  }
}
