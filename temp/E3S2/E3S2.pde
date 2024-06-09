PImage backgroundImg;
PImage flowersImg;
PImage rightwoongImg;
PImage tigerandbearImg;
PImage leftwalkingwoongImg1;
PImage leftwalkingwoongImg2;
PImage rightwalkingwoongImg1;
PImage rightwalkingwoongImg2;
PImage woongfaceImg;
PImage happyTigerandBearImg;

boolean showMessage = false;
long messageStartTime;
boolean isMoving = false;
boolean isReturning = false;
boolean flowersVisible = true;
float woongX = 1080;  // 초기 x 위치
float woongY = 346;   // 초기 y 위치
float targetX = 440;  // 목표 x 위치
float returnX = 1080; // 되돌아갈 x 위치
long moveStartTime;
float moveDuration = 2500;  // 이동 시간 2.5초
long lastImageChangeTime;
boolean useFirstImage = true;
boolean finalMessageShown = false; // 최종 메시지 표시 여부

void setup() {
  size(1920, 1080);
  
  // 이미지 로드
  backgroundImg = loadImage("flowergarden.png");
  flowersImg = loadImage("flowers.png");
  rightwoongImg = loadImage("rightwoong.png");
  leftwalkingwoongImg1 = loadImage("leftwalkingwoong1.png");
  leftwalkingwoongImg2 = loadImage("leftwalkingwoong2.png");
  rightwalkingwoongImg1 = loadImage("rightwalkingwoong1.png");
  rightwalkingwoongImg2 = loadImage("rightwalkingwoong2.png");
  tigerandbearImg = loadImage("tigerandbear.png");
  woongfaceImg = loadImage("woongface.png");
  happyTigerandBearImg = loadImage("happytigerandbear.png"); // happy 이미지 로드
}

void draw() {
  // 배경 이미지 그리기
  image(backgroundImg, 0, 0, width, height);
  
  // 축소 비율 설정
  float scale = 0.6;
  
  // flowers 이미지를 (400, 300) 위치에 그리기 (flowersVisible가 true일 때만)
  if (flowersVisible) {
    image(flowersImg, 331, 478, flowersImg.width * scale - 100, flowersImg.height * scale - 100);
  }
  
  // tigerandbear 이미지를 10% 더 줄여서 (1118, 227) 위치에 그리기
  float tigerandbearScale = scale * 0.9;  // 추가로 10% 축소
  image(tigerandbearImg, 1118, 227, tigerandbearImg.width * tigerandbearScale, tigerandbearImg.height * tigerandbearScale);
  
  // woong 이미지를 이동하는 동안 그리기
  image(rightwoongImg, woongX, woongY, rightwoongImg.width * scale, rightwoongImg.height * scale);

  // 메시지 표시
  if (showMessage && millis() - messageStartTime < 1500) {  // 1.5초 동안 메시지 표시
    stroke(#98EAE8);
    strokeWeight(4);
    fill(#FCFCF0);
    rect(width / 2 - 400, height - 220, 800, 170, 20);
    
    // woongface 이미지를 30% 축소하여 그리기
    float woongfaceScale = 0.7;
    image(woongfaceImg, width / 2 - 286, height - 200, woongfaceImg.width * woongfaceScale, woongfaceImg.height * woongfaceScale);
    
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Please wait a little bit.", width / 2, height - 140);
  } else if (showMessage && millis() - messageStartTime >= 1500) {
    showMessage = false;
    // 이동 시작 설정
    isMoving = true;
    moveStartTime = millis();
    lastImageChangeTime = millis();  // 이미지 교체 타이머 초기화
    rightwoongImg = leftwalkingwoongImg1;  // 첫 번째 이미지로 교체
  }
  
  // woong 이미지를 목표 위치로 이동
  if (isMoving) {
    float elapsedTime = millis() - moveStartTime;
    if (elapsedTime < moveDuration) {
      float t = elapsedTime / moveDuration;
      woongX = lerp(1080, targetX, t);
      
      // 0.3초마다 이미지 교체
      if (millis() - lastImageChangeTime >= 300) {
        lastImageChangeTime = millis();
        // 이미지를 교체
        if (useFirstImage) {
          rightwoongImg = leftwalkingwoongImg2;  // 두 번째 이미지로 교체
        } else {
          rightwoongImg = leftwalkingwoongImg1;  // 첫 번째 이미지로 교체
        }
        useFirstImage = !useFirstImage;  // 이미지 교체 플래그 반전
      }
    } else {
      woongX = targetX;
      rightwoongImg = leftwalkingwoongImg1;  // 최종적으로 첫 번째 이미지로 설정
      isMoving = false;
      isReturning = true;  // 되돌아가는 상태로 설정
      moveStartTime = millis();  // 되돌아가는 시작 시간 설정
      lastImageChangeTime = millis();  // 이미지 교체 타이머 초기화
      flowersVisible = false;  // flowers 이미지를 보이지 않게 설정
    }
  }
  
  // woong 이미지를 되돌아가게 이동
  if (isReturning) {
    float elapsedTime = millis() - moveStartTime;
    if (elapsedTime < moveDuration) {
      float t = elapsedTime / moveDuration;
      woongX = lerp(targetX, returnX, t);
      
      // 0.3초마다 이미지 교체
      if (millis() - lastImageChangeTime >= 300) {
        lastImageChangeTime = millis();
        // 이미지를 교체
        if (useFirstImage) {
          rightwoongImg = rightwalkingwoongImg2;  // 두 번째 이미지로 교체
        } else {
          rightwoongImg = rightwalkingwoongImg1;  // 첫 번째 이미지로 교체
        }
        useFirstImage = !useFirstImage;  // 이미지 교체 플래그 반전
      }
    } else {
      woongX = returnX;
      rightwoongImg = loadImage("rightwoong.png");  // rightwoong.png로 교체
      tigerandbearImg = happyTigerandBearImg; // happytigerandbear.png로 교체
      isReturning = false;
      finalMessageShown = true;  // 최종 메시지 표시 설정
      messageStartTime = millis();  // 메시지 표시 시간 설정
    }
  }

  // 최종 메시지 표시
  if (finalMessageShown) {
    stroke(#98EAE8);
    strokeWeight(4);
    fill(#FCFCF0);
    rect(width / 2 - 400, height - 220, 800, 170, 20);
    
    // woongface 이미지를 30% 축소하여 그리기
    float woongfaceScale = 0.7;
    image(woongfaceImg, width / 2 - 286, height - 200, woongfaceImg.width * woongfaceScale, woongfaceImg.height * woongfaceScale);
    
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Would you both marry me?", width / 2, height - 140);
  }
}

void mousePressed() {
  // rightwoong 이미지의 영역 내에서 클릭했는지 확인
  float scale = 0.6;
  if (mouseX > 1080 && mouseX < 1080 + rightwoongImg.width * scale && mouseY > 346 && mouseY < 346 + rightwoongImg.height * scale) {
    // 이미지 교체
    rightwoongImg = leftwalkingwoongImg1;
    
    // 메시지 표시 설정
    showMessage = true;
    messageStartTime = millis();
  }
}
