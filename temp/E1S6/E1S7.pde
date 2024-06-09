PImage backgroundImg;
PImage dan1;
PImage dan2;
PImage flagDan;
PImage peopleLeft;
PImage peopleRight;
PImage happyPeopleLeft;
PImage happyPeopleRight;
PImage currentImg;
float x, y;
float sizeW, sizeH;
float ySpeed;
int switchTime = 15;  // 0.5초마다 이미지 변경 (30프레임 기준)
int frameCounter = 0;
boolean animating = true;  // 애니메이션 상태
boolean flagClicked = false;  // flagDan이 클릭되었는지 여부
boolean peopleAnimating = false;
int happyFrameCounter = 0;

void setup() {
  size(1920, 1080);  // 창의 크기를 1920x1080으로 설정
  backgroundImg = loadImage("establish.png");
  dan1 = loadImage("dan1.png");
  dan2 = loadImage("dan2.png");
  flagDan = loadImage("flagdan.png");
  peopleLeft = loadImage("peopleleft.png");
  peopleRight = loadImage("peopleright.png");
  happyPeopleLeft = loadImage("happypeopleleft.png");
  happyPeopleRight = loadImage("happypeopleright.png");
  
  // 배경 이미지 크기를 창의 크기에 맞게 조정
  backgroundImg.resize(width, height);
  
  currentImg = dan1;
  x = 1050;
  y = 678;  // 초기 y 위치
  sizeW = 300;
  sizeH = 400;
  ySpeed = (950 - 678) / (3 * 30.0);  // 3초 동안 950까지 내려가기 위한 속도
}

void draw() {
  background(backgroundImg);
  
  // 왼쪽 사람 그리기
  imageMode(CENTER);
  if (flagClicked && peopleAnimating) {
    float happyYShift = sin((float)happyFrameCounter / 30.0 * PI) * 60;
    image(happyPeopleLeft, 512, 934 - happyYShift);
    image(happyPeopleRight, 1502, 934 - happyYShift);
    happyFrameCounter++;
    
    if (happyFrameCounter >= 30) { // 1초 애니메이션 완료 후 멈춤
      peopleAnimating = false;
    }
  } else if (flagClicked) {
    image(happyPeopleLeft, 512, 934);
    image(happyPeopleRight, 1502, 934);
  } else {
    image(peopleLeft, 512, 934);
    image(peopleRight, 1502, 934);
  }
  
  if (animating) {
    // 0.5초마다 이미지 변경
    if (frameCounter % switchTime == 0) {
      currentImg = (currentImg == dan1) ? dan2 : dan1;
    }
    
    // 크기와 위치 갱신
    y += ySpeed;
    sizeW += ySpeed * (300.0 / (950 - 678));  // 비례 증가
    sizeH += ySpeed * (400.0 / (950 - 678));  // 비례 증가
    
    frameCounter++;
    
    // 3초 후 애니메이션 고정
    if (frameCounter >= 3 * 30) {
      animating = false;
      y = 950;  // y 좌표 고정
      currentImg = dan1;
    }
  }
  
  // 이미지 중앙에 그리기
  imageMode(CENTER);
  image(currentImg, x, y, sizeW, sizeH);
}

void mousePressed() {
  // 클릭된 위치가 dan1의 영역 내에 있는지 확인
  if (!animating && !flagClicked &&
      mouseX > x - sizeW / 2 && mouseX < x + sizeW / 2 &&
      mouseY > y - sizeH / 2 && mouseY < y + sizeH / 2) {
    currentImg = flagDan;
    flagClicked = true;
    happyFrameCounter = 0;
    peopleAnimating = true;
  }
}
