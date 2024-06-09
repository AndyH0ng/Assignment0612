PImage backgroundImg;
PImage cloudImg;
PImage leftHandImg;
PImage rightHandImg;
PImage bearGirlImg;
PImage cloudWoongImg;
PImage flowerWoongImg;
PImage heartWoongImg;
PImage woongface;
boolean leftHandClicked = false;
float cloudWoongX = 752;
float cloudWoongY = 71;
float cloudWoongAngle = 0;

void setup() {
  size(1920, 1080);
  
  // 이미지 파일 불러오기
  backgroundImg = loadImage("marriage.png");
  cloudImg = loadImage("cloud.png");
  leftHandImg = loadImage("flowerwoong.png"); // 새로운 이미지로 변경
  rightHandImg = loadImage("HeartWoong.png"); // 새로운 이미지로 변경
  bearGirlImg = loadImage("Beargirl.png");
  cloudWoongImg = loadImage("Cloudwoong.png");
  woongface = loadImage("woongface.png");
  
  // 배경 이미지 크기 설정
  backgroundImg.resize(1920, 1080);
}

void draw() {
  // 배경 그리기
  image(backgroundImg, 0, 0);
  
  // leftthandwoong.png를 배경 중앙에 배치
  image(leftHandImg, 752, 71, 230, 400);
  
  // RighthandBeargirl.png를 배경 중앙에 배치
  image(rightHandImg, 961, 73, 230, 400);
  
  // cloud.png를 가장 위에 중앙에 배치
  image(cloudImg, 326, -8, 1407, 993);
  
     stroke(#98EAE8);
    strokeWeight(4);
    fill(#FCFCF0);
    rect(width / 2 - 400, height - 220, 800, 170, 20);
    image(woongface, width / 2 - 280, height - 186, 90, 90);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Will you marry me?", width / 2, height - 140);
}
