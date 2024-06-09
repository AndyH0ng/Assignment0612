PImage forest, walking3, walking4, tiger1, tiger2, tiger3, text1, text2, text3, text4;
int walkingImageX = 2400;
int walkingImageY = 320;
int walkingImageTime = 0;
boolean showWalking3 = true;
boolean showText1 = false;
boolean showText2 = false;
boolean showText3 = false;
boolean showText4 = false;
int textToggleCount = 0;
int startTime;

void setup() {
  size(1920, 1080);
  forest = loadImage("forest.png");
  walking3 = loadImage("walking3.png");
  walking4 = loadImage("walking4.png");
  tiger1 = loadImage("tiger1.png");
  tiger2 = loadImage("tiger2.png");
  tiger3 = loadImage("tiger3.png");
  text1 = loadImage("text1.png");
  text2 = loadImage("text2.png");
  text3 = loadImage("text3.png");
  text4 = loadImage("text4.png");
  startTime = millis(); // 시작 시간 기록
}

void draw() {
  background(forest);
  
  // 5초가 지나면 text1을 캔버스 크기에 맞게 삽입
  if (millis() - startTime >= 5000 && textToggleCount == 0) {
    showText1 = true;
  }
  
  if (showText1) {
    image(text1, 0, 0, width, height);
    fill(0); // 검은색
    textSize(50); // 텍스트 크기
    text("Who are you?", 900, 940); // 텍스트 삽입
  } else if (showText2) {
    image(text2, 0, 0, width, height);
    fill(0); // 검은색
    textSize(50); // 텍스트 크기
    text("Hey guys! I have become human!", 400, 940); // 텍스트 삽입
  } else if (showText3) {
    image(text3, 0, 0, width, height);
    fill(0); // 검은색
    textSize(50); // 텍스트 크기
    text("I don't know who you are...", 900, 940); // 텍스트 삽입
  } else if (showText4) {
    image(text4, 0, 0, width, height);
    fill(0); // 검은색
    textSize(50); // 텍스트 크기
    text("I just know you're my prey...!", 900, 940); // 텍스트 삽입
  } else {
    if (walkingImageX > 1100) {
      walkingImageX -= 5; // walking3, walking4 이미지 x 좌표 감소
    }
    
    if (millis() - walkingImageTime >= 500) { // 0.5초마다 이미지 전환
      showWalking3 = !showWalking3;
      walkingImageTime = millis();
    }
    
    if (showWalking3) {
      image(walking3, walkingImageX, walkingImageY);
    } else {
      image(walking4, walkingImageX, walkingImageY);
    }
    
    // 호랑이 이미지 삽입
    image(tiger1, 140, 530);
    image(tiger2, 425, 500);
    image(tiger3, 750, 500);
  }
}

void mouseClicked() {
  if (millis() - startTime >= 5000) { // 5초가 지난 후에만 마우스 클릭 기능 활성화
    textToggleCount++;
    if (textToggleCount == 1) {
      showText1 = false;
      showText2 = true;
    } else if (textToggleCount == 2) {
      showText2 = false;
      showText3 = true;
    } else if (textToggleCount == 3) {
      showText3 = false;
      showText4 = true;
    }
  }
}
