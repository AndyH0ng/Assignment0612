PImage backgroundImg;
PImage angrybum1;
PImage angrybum2;
PImage angrybum3;
PImage angrybum4; // angrybum3을 angrybum4로 변경
PImage sword;
PImage woongfaceImg;
boolean moveAngrybum = false;
float angrybumX = -150;
float angrybumTargetX = 500;
float animationStartTime;
float animationDuration = 3.0; // 3 seconds
boolean useAngrybum1 = true;
boolean swapToAngrybum3 = false; // angrybum3로 변경할지 여부 추적
boolean showWoongface = false; // woongface 이미지와 텍스트 표시 여부
boolean timerStarted = false; // 타이머 시작 여부
float swapTime; // angrybum3으로 변경된 시간
String woongfaceText = "This isn't fair....."; // 초기 텍스트

void setup() {
  size(1920, 1080);
  // 배경 이미지 로드
  backgroundImg = loadImage("dark.png");
  // 다른 이미지 로드
  woongfaceImg = loadImage("woongface.png");
  angrybum1 = loadImage("angrybum1.png");
  angrybum2 = loadImage("angrybum2.png");
  angrybum3 = loadImage("angrybum3.png");
  angrybum4 = loadImage("angrybum4.png"); // angrybum3을 angrybum4로 변경
  sword = loadImage("sword.png");
}

void draw() {
  // 배경 이미지 그리기
  image(backgroundImg, 0, 0, width, height);
  
  // 애니메이션 처리
  if (moveAngrybum) {
    float elapsedTime = (millis() - animationStartTime) / 1000.0;
    float progress = min(elapsedTime / animationDuration, 1);
    angrybumX = lerp(-150, angrybumTargetX, progress);
    
    // 0.3초마다 이미지 교체
    if ((int)(elapsedTime * 10) % 3 < 1.5) {
      useAngrybum1 = true;
    } else {
      useAngrybum1 = false;
    }
    
    if (progress >= 1) {
      moveAngrybum = false; // 애니메이션 종료
      useAngrybum1 = true; // 최종 도착 이미지 설정
    }
  }
  
  // 지정된 위치에 이미지 그리기
  if (useAngrybum1 && !swapToAngrybum3) {
    image(angrybum1, angrybumX, 420, angrybum1.width / 2, angrybum1.height / 2);
  } else if (!swapToAngrybum3) {
    image(angrybum2, angrybumX, 420, angrybum2.width / 2, angrybum2.height / 2);
  } else {
    image(angrybum3, angrybumX-10, 440, angrybum3.width / 2, angrybum3.height / 2);
    
    if (!timerStarted) {
      swapTime = millis(); // angrybum3로 변경된 시간 기록
      timerStarted = true;
    }
    
    // angrybum3로 변경된 지 2.5초가 지나면
    if (millis() - swapTime >= 2000) {
      woongfaceText = "It's the beginning of the war"; // 텍스트 변경
      sword = null; // sword.png 삭제
      angrybum3 = angrybum4; // angrybum3를 angrybum4로 변경
    }
  }
  
  if (sword != null) {
    image(sword, 700, 600, sword.width / 2, sword.height / 2);
  }
  
  // woongface 이미지와 텍스트 표시
  if (showWoongface) {
    stroke(#98EAE8);
    strokeWeight(4);
    fill(#FCFCF0);
    rect(width / 2 - 400, height - 180, 800, 140, 20);
    float woongfaceScale = 0.25;
    image(woongfaceImg, width / 2 - 490, height-213 , woongfaceImg.width * woongfaceScale, woongfaceImg.height * woongfaceScale);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(32);
    text(woongfaceText, width / 2, height - 110); // 변경된 텍스트 출력
  }
}

void mousePressed() {
  // angrybum1 이미지 클릭 여부 확인
  if (moveAngrybum == false && useAngrybum1 && mouseX > angrybumTargetX && mouseX < angrybumTargetX + angrybum1.width / 2 && mouseY > 420 && mouseY < 420 + angrybum1.height / 2) {
    swapToAngrybum3 = true; // angrybum3로 변경
    showWoongface = true; // woongface 이미지와 텍스트 표시
    timerStarted = false; // 타이머 초기화
  } else if (mouseX > angrybumX && mouseX < angrybumX + angrybum1.width / 2 && mouseY > 420 && mouseY < 420 + angrybum1.height / 2) {
    moveAngrybum = true;
    animationStartTime = millis();
    swapToAngrybum3 = false; // angrybum3로 변경할 준비 초기화
    showWoongface = false; // woongface 이미지와 텍스트 숨기기
  }
}
