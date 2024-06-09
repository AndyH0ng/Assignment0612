PImage[] bImages = new PImage[8];
int currentImageIndex = 0;
boolean showBImages = true;
int fadeAlpha = 0; // 화면 어두움을 나타내는 알파 값
int lastImageChangeTime = 0;
int imageChangeInterval = 100; // 이미지 변경 간격 (0.1초)

String message = "In the end, the tiger girl was eaten by the tiger.";
String displayedMessage = "";
int currentCharIndex = 0;
boolean showMessage = false;
int messageStartTime = 0;
int letterInterval = 100; // 텍스트가 나타나는 간격 (0.1초)

void setup() {
  size(1920, 1080);
  background(0);
  
  // 이미지 로드
  for (int i = 0; i < 8; i++) {
    bImages[i] = loadImage("b" + (i + 1) + ".png");
  }
}

void draw() {
  background(255); // 흰색 배경
  
  if (showBImages) {
    if (currentImageIndex < 8) {
      // 이미지 변경 간격마다 이미지를 변경
      if (millis() - lastImageChangeTime > imageChangeInterval) {
        currentImageIndex++;
        lastImageChangeTime = millis();
      }
      // 현재 이미지를 표시
      if (currentImageIndex < 8) {
        image(bImages[currentImageIndex], 0, 0, width, height);
      }
    } else {
      // b8 이미지가 나왔을 때 화면 어두워지기
      fadeAlpha += 5;
      if (fadeAlpha >= 255) {
        fadeAlpha = 255;
        fill(0, fadeAlpha);
        rect(0, 0, width, height);
      } else {
        fill(0, fadeAlpha);
        rect(0, 0, width, height);
      }
      
      // 1초 후에 텍스트 표시 시작
      if (millis() - lastImageChangeTime > 1000 && !showMessage) {
        showMessage = true;
        messageStartTime = millis();
      }
    }
  }
  
  if (showMessage) {
    if (currentCharIndex < message.length()) {
      // 현재 글자를 나타내기 위해 인덱스 계산
      int elapsedTime = millis() - messageStartTime;
      currentCharIndex = min(elapsedTime / letterInterval, message.length() - 1);
      displayedMessage = message.substring(0, currentCharIndex + 1);
    }
    fill(255); // 흰색
    textSize(90); // 텍스트 크기
    text(displayedMessage, 100, height/2 + 45); // x좌표를 100으로 설정하여 화면 왼쪽에 텍스트 표시
  }
}
