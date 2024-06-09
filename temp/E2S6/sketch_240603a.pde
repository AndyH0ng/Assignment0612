PImage[] images = new PImage[14];
int currentImageIndex = 0;
int lastImageChangeTime = 0;
boolean showAlternateImages = false;

void setup() {
  size(1920, 1080);
  
  for (int i = 0; i < 14; i++) {
    images[i] = loadImage("a" + (i + 1) + ".png");
  }
}

void draw() {
  background(255); // 흰색 배경
  
  int currentTime = millis();
  
  // 처음 12개의 이미지를 0.5초 간격으로 나타나게 함
  if (currentImageIndex < 12) {
    if (currentTime - lastImageChangeTime >= 200) {
      lastImageChangeTime = currentTime;
      currentImageIndex++;
    }
    image(images[currentImageIndex], 0, 0, width, height);
  }
  // a13과 a14 이미지를 0.5초 간격으로 번갈아가며 나타나게 함
  else {
    if (currentTime - lastImageChangeTime >= 500) {
      lastImageChangeTime = currentTime;
      showAlternateImages = !showAlternateImages;
    }
    if (showAlternateImages) {
      image(images[12], 0, 0, width, height); // a13 이미지
    } else {
      image(images[13], 0, 0, width, height); // a14 이미지
    }
  }
}
