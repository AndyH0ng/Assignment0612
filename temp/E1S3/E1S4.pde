PImage backgroundImg;
PImage cloudImg;
PImage leftHandImg;
PImage rightHandImg;
PImage bearGirlImg;
PImage cloudWoongImg;
PImage newBackgroundImg;
PImage flowerImg;
PImage woongface; // woongface 이미지를 위한 변수 추가
PImage cloudFlowerWoongImg; // cloudflowerwoong 이미지를 위한 변수 추가

boolean leftHandClicked = false;
boolean transitionComplete = false;
boolean cloudWoongMoving = false;
boolean cloudFlowerWoongMoving = false;
boolean flowerVisible = true; // Flower 이미지 표시 여부
float cloudWoongX = 500;
float cloudWoongY = 50;
float cloudWoongSpeedX = 0;
float cloudWoongSpeedY = 0;

void setup() {
  size(1920, 1080);
  
  // 이미지 파일 불러오기
  backgroundImg = loadImage("marriage.png");
  cloudImg = loadImage("cloud.png");
  leftHandImg = loadImage("leftthandwoong.png");
  rightHandImg = loadImage("RighthandBeargirl.png");
  bearGirlImg = loadImage("Beargirl.png");
  cloudWoongImg = loadImage("Cloudwoong.png");
  newBackgroundImg = loadImage("flowergarden.png");
  flowerImg = loadImage("Flower.png");
  woongface = loadImage("woongface.png"); // woongface 이미지 불러오기
  cloudFlowerWoongImg = loadImage("cloudflowerwoong.png"); // cloudflowerwoong 이미지 불러오기
  
  // 배경 이미지 크기 설정
  backgroundImg.resize(1920, 1080);
  newBackgroundImg.resize(1920, 1080);
}

void draw() {
  if (transitionComplete) {
    // 새로운 배경 그리기
    image(newBackgroundImg, 0, 0);
    
    // flowerVisible이 true일 때 Flower 이미지 그리기
    if (flowerVisible) {
      image(flowerImg, 900, 450, 200, 200); // flower.png의 크기를 두 배로 키움
    }
    
    if (cloudWoongMoving) {
      // CloudWoong가 목표 위치로 이동
      cloudWoongX += cloudWoongSpeedX;
      cloudWoongY += cloudWoongSpeedY;
      
      // 목표 위치에 도달하면 이동 멈춤
      if (dist(cloudWoongX, cloudWoongY, 750, 280) < 10) {
        cloudWoongMoving = false;
        cloudWoongX = 750; // 정확한 위치로 이동 후 고정
        cloudWoongY = 280;
        // cloudWoong 이미지를 cloudFlowerWoong 이미지로 변경
        cloudWoongImg = cloudFlowerWoongImg;
        // Flower 이미지 지우기
        flowerVisible = false;
        // 1.5초에 걸쳐 새로운 목표 위치로 이동 설정
        cloudWoongSpeedX = (2400 - cloudWoongX) / 90.0;
        cloudWoongSpeedY = (-500 - cloudWoongY) / 90.0;
        cloudFlowerWoongMoving = true;
      }
    }
    
    if (cloudFlowerWoongMoving) {
      // cloudFlowerWoong가 목표 위치로 이동
      cloudWoongX += cloudWoongSpeedX;
      cloudWoongY += cloudWoongSpeedY;
      
      // 목표 위치에 도달하면 이동 멈춤
      if (dist(cloudWoongX, cloudWoongY, 2400, -500) < 10) {
        cloudFlowerWoongMoving = false;
        cloudWoongX = 2400; // 정확한 위치로 이동 후 고정
        cloudWoongY = -500;
      }
    }
    
    // cloudWoong.png 또는 cloudFlowerWoong.png를 새로운 위치에 배치
    image(cloudWoongImg, cloudWoongX, cloudWoongY, 600, 800);
  } else {
    // 기존 배경 그리기
    image(backgroundImg, 0, 0);
    
    if (leftHandClicked) {
      // Beargirl 이미지 그리기
      image(bearGirlImg, 976, 74, 230, 400);
    } else {
      // leftthandwoong.png를 배경 중앙에 배치
      image(leftHandImg, 752, 71, 230, 400);
      
      // RighthandBeargirl.png를 배경 중앙에 배치
      image(rightHandImg, 976, 74, 230, 400);
    }
    
    // cloud.png를 중앙에 배치
    image(cloudImg, 326, -8, 1407, 993);
    
    if (leftHandClicked) {
      // CloudWoong가 대각선으로 날아가는 애니메이션
      cloudWoongX += cloudWoongSpeedX;
      cloudWoongY += cloudWoongSpeedY;
      
      // Cloudwoong 이미지 크기를 2배로 확대하고 가장 앞에 그리기
      image(cloudWoongImg, cloudWoongX, cloudWoongY, 800, 1000);
      
      // Cloudwoong가 목표 위치에 도달하면 전환 완료로 설정
      if (cloudWoongX <= -500) {
        transitionComplete = true;
        cloudWoongX = 1495;
        cloudWoongY = 324;
      }
    }
  }
  
  if (leftHandClicked && !transitionComplete) {
    // 네모창 그리기
    stroke(#98EAE8);
    strokeWeight(4);
    fill(#FCFCF0);
    rect(width / 2 - 400, height - 220, 800, 170, 20);
    image(woongface, width / 2 - 280, height - 186, 90, 90);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("(I want to propose to her)", width / 2, height - 140);
  }
}

void mousePressed() {
  // leftHandImg를 클릭했는지 확인
  if (!leftHandClicked && mouseX > 752 && mouseX < 752 + 230 && mouseY > 71 && mouseY < 71 + 400) {
    leftHandClicked = true;
    // 속도 설정 (x축과 y축으로 날아가도록 설정)
    cloudWoongSpeedX = (-500 - 752) / 40.0; // 0.67초(40프레임) 동안 -500까지 이동
    cloudWoongSpeedY = (800 - 71) / 40.0; // 0.67초(40프레임) 동안 800까지 이동
  }
  
  // cloudWoongImg를 클릭했는지 확인 (flowergarden 배경에서)
  if (transitionComplete && !cloudWoongMoving && !cloudFlowerWoongMoving && mouseX > cloudWoongX && mouseX < cloudWoongX + 600 && mouseY > cloudWoongY && mouseY < cloudWoongY + 800) {
    // 속도 설정 (750, 280으로 이동하도록 설정)
    cloudWoongSpeedX = (750 - cloudWoongX) / 90.0; // 1.5초(90프레임) 동안 이동
    cloudWoongSpeedY = (280 - cloudWoongY) / 90.0; // 1.5초(90프레임) 동안 이동
    cloudWoongMoving = true;
  }
}
