PImage cave, nature, think, think2, thinking, thinking2, thinking3, thinking4;
PImage cloud, cloud2, cloud3, cloud4, cloud5;
boolean showThinking2 = false;
boolean thinkChanged = false;
boolean changeBackground = false;
boolean cloudMovement = false;
boolean showThinking = true;
boolean showThinking3 = true;
boolean showThinking4 = true;
boolean showThink = true;
int lastSwitchTime = 0;
int backgroundChangeTime = 0;
float cloudX = 2500, cloud2X = -2500, cloud3X = -2300, cloud4X = 2500, cloud5X = -2500;

void setup() {
  size(1920, 1080);
  cave = loadImage("cave.png");
  nature = loadImage("nature.png");
  think = loadImage("think.png");
  think2 = loadImage("think2.png");
  thinking = loadImage("thinking.png");
  thinking2 = loadImage("thinking2.png");
  thinking3 = loadImage("thinking3.png");
  thinking4 = loadImage("thinking4.png");
  cloud = loadImage("cloud.png");
  cloud2 = loadImage("cloud2.png");
  cloud3 = loadImage("cloud3.png");
  cloud4 = loadImage("cloud4.png");
  cloud5 = loadImage("cloud5.png");
  
  // 클라우드 이미지 크기 조정
  cloud.resize(int(cloud.width * 1.3), int(cloud.height * 1.3));
  cloud2.resize(int(cloud2.width * 1.3), int(cloud2.height * 1.3));
  cloud3.resize(int(cloud3.width * 1.3), int(cloud3.height * 1.3));
  cloud4.resize(int(cloud4.width * 1.3), int(cloud4.height * 1.3));
  cloud5.resize(int(cloud5.width * 1.3), int(cloud5.height * 1.3));
}

void draw() {
  if (changeBackground && millis() - backgroundChangeTime > 3000) {
    background(nature);
  } else {
    background(cave);
  }

  // think 이미지 삽입 (0.7배로 줄임)
  if (showThink) {
    PImage currentThink = thinkChanged ? think2 : think;
    float thinkWidth = currentThink.width * 0.7;
    float thinkHeight = currentThink.height * 0.7;
    image(currentThink, 1000, 400, thinkWidth, thinkHeight);
    checkCollision(currentThink, 1000, 400, thinkWidth, thinkHeight);
  }

  // 1초 간격으로 thinking과 thinking2를 번갈아가며 표시
  if (millis() - lastSwitchTime > 500) {
    showThinking2 = !showThinking2;
    lastSwitchTime = millis();
  }

  if (showThinking && showThinking2) {
    image(thinking2, 200, 100);
    checkCollision(thinking2, 200, 100, thinking2.width, thinking2.height);
  } else if (showThinking) {
    image(thinking, 200, 100);
    checkCollision(thinking, 200, 100, thinking.width, thinking.height);
  }

  // thinking3 이미지 삽입
  if (showThinking3) {
    image(thinking3, 650, 200);
    checkCollision(thinking3, 650, 200, thinking3.width, thinking3.height);
  }

  // thinking4 이미지 삽입
  if (showThinking4) {
    image(thinking4, 800, 300);
    checkCollision(thinking4, 800, 300, thinking4.width, thinking4.height);
  }

  // 마우스 클릭 후 클라우드 이미지 이동
  if (cloudMovement) {
    cloudX -= 15;
    cloud2X += 15;
    cloud3X += 15;
    cloud4X -= 15;
    cloud5X += 15;
  }

  // 클라우드 이미지 삽입
  image(cloud, cloudX, -400);
  image(cloud2, cloud2X, 100);
  image(cloud3, cloud3X, -200);
  image(cloud4, cloud4X, 0);
  image(cloud5, cloud5X, -400);
}

void checkCollision(PImage img, float imgX, float imgY, float imgWidth, float imgHeight) {
  if (cloudMovement) {
    if (cloudX < imgX + imgWidth && cloudX + cloud.width > imgX && 400 < imgY + imgHeight && 400 + cloud.height > imgY) {
      showThink = false;
    }
    if (cloud2X < imgX + imgWidth && cloud2X + cloud2.width > imgX && 50 < imgY + imgHeight && 50 + cloud2.height > imgY) {
      showThinking = false;
    }
    if (cloud3X < imgX + imgWidth && cloud3X + cloud3.width > imgX && 150 < imgY + imgHeight && 150 + cloud3.height > imgY) {
      showThinking3 = false;
    }
    if (cloud4X < imgX + imgWidth && cloud4X + cloud4.width > imgX && 50 < imgY + imgHeight && 50 + cloud4.height > imgY) {
      showThinking4 = false;
    }
    if (cloud5X < imgX + imgWidth && cloud5X + cloud5.width > imgX && 380 < imgY + imgHeight && 380 + cloud5.height > imgY) {
      showThinking2 = false;
    }
  }
}

void mousePressed() {
  // 마우스로 thinking 이미지를 클릭하면 think 이미지 교체 및 클라우드 이동 시작
  if (mouseX >= 200 && mouseX <= 200 + thinking.width && 
      mouseY >= 100 && mouseY <= 100 + thinking.height) {
    thinkChanged = true;
    cloudMovement = true;
    changeBackground = true;
    backgroundChangeTime = millis();
  }
}
