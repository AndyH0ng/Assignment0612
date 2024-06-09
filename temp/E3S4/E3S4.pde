PImage backgroundImg;
PImage crownwoong1;
PImage crownwoong2;
PImage crownwoong;
PImage dangun;
PImage bumgun;
PImage dangun2;
PImage bumgun2;
PImage sidewoong;
PImage woongfaceImg;
PImage bumfaceImg;
PImage angrybum1;
PImage angrybum2;
boolean moveCrownwoong = false;
String message = "I'll decide on the king today.";
float crownwoongX = 16;
float crownwoongTargetX = 450;
float animationStartTime;
float animationDuration = 2.0; // 2 seconds
boolean switchImage = false;
boolean imagesSwitched = false;
boolean changeToRed = false;
boolean changeWoongface = false;
boolean changeText = false;
boolean moveAngrybum = false;
float angrybumX = 850;
float angrybumTargetX = 2000;
float bumfaceX, bumfaceY;
boolean useAngrybum1 = true; // 추가
boolean angrybumVisible = true; // 추가

void setup() {
  size(1920, 1080);
  backgroundImg = loadImage("castle.png");
  crownwoong1 = loadImage("crownwoong1.png");
  crownwoong2 = loadImage("crownwoong2.png");
  crownwoong = crownwoong1; // 초기 이미지 설정
  dangun = loadImage("dangun1.png");
  bumgun = loadImage("bumgun1.png");
  dangun2 = loadImage("dangun2.png");
  bumgun2 = loadImage("bumgun2.png");
  sidewoong = loadImage("sidewoong.png");
  woongfaceImg = loadImage("woongface.png"); // woongface 이미지 로드
  bumfaceImg = loadImage("bumface.png");
  angrybum1 = loadImage("angrybum1.png");
  angrybum2 = loadImage("angrybum2.png"); // 추가

  // 이미지 크기 50% 축소
  crownwoong1.resize(crownwoong1.width / 2, crownwoong1.height / 2);
  crownwoong2.resize(crownwoong2.width / 2, crownwoong2.height / 2);
  dangun.resize(dangun.width / 2, dangun.height / 2);
  bumgun.resize(bumgun.width / 2, bumgun.height / 2);
  dangun2.resize(dangun2.width / 2, dangun2.height / 2);
  bumgun2.resize(bumgun2.width / 2, bumgun2.height / 2);
  sidewoong.resize(sidewoong.width / 2, sidewoong.height / 2);
  angrybum1.resize(angrybum1.width / 2, angrybum1.height / 2);
  angrybum2.resize(angrybum2.width / 2, angrybum2.height / 2); // 추가
  bumfaceImg.resize(bumfaceImg.width / 2, bumfaceImg.height / 2);
}

void draw() {
  image(backgroundImg, 0, 0, width, height);

  if (!imagesSwitched) {
    image(crownwoong, crownwoongX, 380);
    image(dangun, 600, 410);
    image(bumgun, 850, 410);
  } else {
    image(sidewoong, 380, 380);
    image(dangun2, 600, 375);
    if (moveAngrybum) {
      float elapsedTime = (millis() - animationStartTime) / 1000.0;
      float progress = min(elapsedTime / animationDuration, 1);
      angrybumX = lerp(850, angrybumTargetX, progress);
      
      // 0.4초마다 이미지 교체
      if ((int)(elapsedTime * 2.5) % 2 == 1) {
        useAngrybum1 = false;
      } else {
        useAngrybum1 = true;
      }

      if (useAngrybum1) {
        image(angrybum1, angrybumX, 420);
      } else {
        image(angrybum2, angrybumX, 420);
      }

      if (progress >= 1) {
        moveAngrybum = false; // 애니메이션 종료
        angrybumVisible = false; // 최종 도착 후 이미지 숨김
      }
    } else if (angrybumVisible) {
      image(bumgun2, 850, 420);
    }
  }

  // 하단 텍스트와 사각형
  stroke(changeToRed ? color(255, 0, 0) : #98EAE8);
  strokeWeight(4);
  fill(#FCFCF0);
  rect(width / 2 - 400, height - 220, 800, 170, 20);

  // woongface 이미지를 변경
  PImage woongfaceToDraw = changeWoongface ? bumfaceImg : woongfaceImg;
  float woongfaceScale = 0.7;
  if (changeWoongface) {
    image(woongfaceToDraw, bumfaceX, bumfaceY, woongfaceToDraw.width * woongfaceScale, woongfaceToDraw.height * woongfaceScale);
  } else {
    image(woongfaceToDraw, width / 2 - 300, height - 200, woongfaceToDraw.width * woongfaceScale, woongfaceToDraw.height * woongfaceScale);
  }

  fill(0);
  textAlign(CENTER, CENTER);
  textSize(32);
  text(changeText ? "No way...." : message, width / 2, height - 140);

  // crownwoong 이미지 이동 애니메이션
  if (moveCrownwoong) {
    float elapsedTime = (millis() - animationStartTime) / 1000.0;
    float progress = min(elapsedTime / animationDuration, 1);
    crownwoongX = lerp(16, crownwoongTargetX, progress);

    // 0.4초마다 이미지 교체
    if ((int)(elapsedTime * 2.5) % 2 == 1) {
      crownwoong = crownwoong2;
    } else {
      crownwoong = crownwoong1;
    }

    if (progress >= 1) {
      moveCrownwoong = false; // 애니메이션 종료
      crownwoong = crownwoong1; // 최종 도착 이미지 설정
      imagesSwitched = true; // 이미지 교체
      message = "Dangun!"; // 텍스트 변경
    }
  }
}

void mousePressed() {
  // rect 클릭 여부 확인
  if (mouseX > width / 2 - 400 && mouseX < width / 2 + 400 && mouseY > height - 220 && mouseY < height - 50) {
    message = "The next king is...";
    moveCrownwoong = true;
    animationStartTime = millis();
  }
  
  // bumgun2 이미지 클릭 여부 확인
  if (imagesSwitched && mouseX > 850 && mouseX < 850 + bumgun2.width && mouseY > 420 && mouseY < 420 + bumgun2.height) {
    changeToRed = true;
    changeWoongface = true;
    changeText = true;
    moveAngrybum = true;
    bumgun2 = angrybum1;
    bumfaceX = 372;
    bumfaceY = 810;
    animationStartTime = millis();
    angrybumVisible = true; // 이미지 표시
  }
}
