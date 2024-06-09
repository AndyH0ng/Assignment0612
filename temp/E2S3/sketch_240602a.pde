PImage change;
PImage tiger1;
PImage tiger2;
PImage tiger3;
PImage eat;
PImage eat2;
String textToDisplay = "Let's feed mugwort and garlic to other tigerfriends!";

void setup() {
  size(1920, 1080);
  // 이미지 파일 경로를 지정합니다.
  change = loadImage("change.png");
  tiger1 = loadImage("tiger1.png");
  tiger2 = loadImage("tiger2.png");
  tiger3 = loadImage("tiger3.png");
  eat = loadImage("eat.png");
  eat2 = loadImage("eat2.png");
}

void draw() {
  // 배경 이미지를 캔버스 크기에 맞게 조정하여 배경으로 삽입합니다.
  image(change, 0, 0, width, height);
  
  // 나머지 이미지를 지정된 위치에 삽입합니다.
  image(tiger1, 240, 330);
  image(tiger2, 525, 300);
  image(tiger3, 850, 300);
  
  // eat 이미지를 (900, 100)에 크기를 0.5배로 줄여서 삽입합니다.
  image(eat, 900, 100, eat.width / 2, eat.height / 2);
  // eat2 이미지를 (1100, 100)에 크기를 0.5배로 줄여서 삽입합니다.
  image(eat2, 1100, 100, eat2.width / 2, eat2.height / 2);
  // eat 이미지를 같은 크기로 (1300, 100)에 삽입합니다.
  image(eat, 1300, 100, eat.width / 2, eat.height / 2);
  
  // 텍스트 설정
  fill(0); // 글자색을 검은색으로 설정합니다.
  textSize(40); // 글자 크기를 40으로 설정합니다.
  text(textToDisplay, 300, 950); // 텍스트를 (300, 950)에 삽입합니다.
}

void mousePressed() {
  // 마우스를 클릭하면 텍스트를 변경합니다.
  textToDisplay = "If you do this, your tiger friends will turn into humans, right?";
}
