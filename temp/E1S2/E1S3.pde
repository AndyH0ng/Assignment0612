PImage bg, beargirl, cloudLeft, cloudRight, prayBeargirl, beargirlFace, woongface, cloudwoong, surprisedBeargirl;
int cloudX = 400;
int cloudY = -30;
int cloudSpeed = 5;
boolean movingLeft = true;
boolean useLeftImage = true;
boolean beargirlClicked = false;
boolean rectClicked = false;
boolean cloudTransition = false;
boolean cloudChanged = false;
boolean cloudArrived = false;
float rectClickTime = 0;
float cloudStartTime;
float cloudEndX = 400; // prayBeargirl의 왼쪽 위치로 설정
float cloudEndY = 270;
float cloudStartX, cloudStartY;
float animationDuration = 2.0; // 2 seconds

void setup() {
  size(1920, 1080);
  bg = loadImage("pray.png");
  beargirl = loadImage("Beargirl.png");
  cloudLeft = loadImage("cloudwoongleft.png");
  cloudRight = loadImage("cloudwoongright.png");
  prayBeargirl = loadImage("prayBeargirl.png");
  beargirlFace = loadImage("Beargirlface.png");
  woongface = loadImage("woongface.png");
  cloudwoong = loadImage("cloudwoong.png");
  surprisedBeargirl = loadImage("surprisedBeargirl.png"); // 이미지 파일 이름 수정

  bg.resize(1920, 1080);
  beargirl.resize(300, 400);
  prayBeargirl.resize(300, 400);
  beargirlFace.resize(100, 100);
  woongface.resize(100, 100);
}

void draw() {
  background(bg);
  
  if (beargirlClicked) {
    if (cloudArrived) {
      image(surprisedBeargirl, 750, 550, 270, 400); // 구름 도착 후 이미지 변경
    } else {
      image(prayBeargirl, 750, 550, 270, 400);
    }

    if (rectClicked) {
      if (millis() - rectClickTime >= 200) {
        if (cloudArrived) {
          // 구름 도착 후 변경된 상태
          stroke(#ABE387); // 테두리 색상 다시 변경
          strokeWeight(4);
          fill(#FCFCF0);
          rect(width/2 - 400, height - 220, 800, 170, 20);
          image(beargirlFace, width/2 - 306, height - 186); // 얼굴 이미지 변경
          fill(0);
          textAlign(CENTER, CENTER);
          textSize(32);
          text("Whatt???", width/2, height - 140); // 텍스트 변경
        } else {
          // 0.2초 후 변경된 상태
          stroke(#98EAE8);
          strokeWeight(4);
          fill(#FCFCF0);
          rect(width/2 - 400, height - 220, 800, 170, 20);
          image(woongface, width/2 - 306, height - 186);
          fill(0);
          textAlign(CENTER, CENTER);
          textSize(32);
          text("Hello~", width/2, height - 140);

          if (cloudTransition) {
            float t = (millis() - cloudStartTime) / (animationDuration * 1000.0);
            if (t >= 1) {
              cloudTransition = false;
              cloudX = int(cloudEndX);
              cloudY = int(cloudEndY);
              cloudArrived = true; // 구름이 최종 위치에 도착했음을 표시
            } else {
              int currentX = int(bezierPoint(cloudStartX, cloudStartX + 200, cloudEndX - 200, cloudEndX, t));
              int currentY = int(bezierPoint(cloudStartY, cloudStartY + 400, cloudEndY - 200, cloudEndY, t));
              int currentW = int(lerp(200, 400, t));
              int currentH = int(lerp(300, 600, t));
              image(cloudwoong, currentX, currentY, currentW, currentH);
            }
          } else {
            image(cloudwoong, int(cloudEndX), int(cloudEndY), 480, 680);
          }

          cloudChanged = true; // 구름이 변경된 것으로 설정
        }
      }
    } else {
      // 초기 상태
      stroke(#ABE387);
      strokeWeight(4);
      fill(#FCFCF0);
      rect(width/2 - 400, height - 220, 800, 170, 20);
      image(beargirlFace, width/2 - 306, height - 186);
      fill(0);
      textAlign(CENTER, CENTER);
      textSize(32);
      text("I want to marry Hwanwoong!", width/2, height - 140);
    }
  } else {
    image(beargirl, 750, 550, 270, 400);
  }
  
  // 구름 이미지 그리기
  if (!cloudChanged) { // 구름이 변경되지 않았을 때만 그리기
    if (useLeftImage) {
      image(cloudLeft, cloudX, cloudY, 500, 400);
    } else {
      image(cloudRight, cloudX, cloudY, 500, 400);
    }

    if (movingLeft) {
      cloudX -= cloudSpeed;
      if (cloudX <= 0) {
        movingLeft = false;
        useLeftImage = false;
      }
    } else {
      cloudX += cloudSpeed;
      if (cloudX >= 800) {
        movingLeft = true;
        useLeftImage = true;
      }
    }
  }
  
  // 최종 위치에 도달한 경우에도 구름 이미지를 계속 그리기
  if (cloudArrived) {
    image(cloudwoong, int(cloudEndX), int(cloudEndY), 480, 680);
  }
}

void mousePressed() {
  if (mouseX >= 750 && mouseX <= 1050 && mouseY >= 550 && mouseY <= 950) {
    beargirlClicked = true;
  }

  if (beargirlClicked && mouseX >= width/2 - 400 && mouseX <= width/2 + 400 && mouseY >= height - 220 && mouseY <= height - 50) {
    rectClicked = true;
    rectClickTime = millis();
    
    cloudStartX = cloudX;
    cloudStartY = cloudY;
    
    cloudTransition = true;
    cloudStartTime = millis();
  }
}
