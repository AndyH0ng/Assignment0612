PImage change2, tiger1, tiger2, tiger3, eat, eat2, people1, people2, cloud, cloud2, forest;
float tiger1Angle = 0;
float tiger2Angle = 0;
float tiger3Angle = 0;
float tiger1RotationSpeed = 0;
float tiger2RotationSpeed = 0;
float tiger3RotationSpeed = 0;
int rotationStartTime = 0;
boolean rotationStarted = false;
float cloudX = -2800;
float cloud2X = -2500;
int backgroundChangeTime = 0;
boolean tiger1Visible = true;
boolean tiger2Visible = true;
boolean tiger3Visible = true;
boolean people1Visible = true;
boolean people2Visible = true;

void setup() {
  size(1920, 1080);
  change2 = loadImage("change2.png");
  tiger1 = loadImage("tiger1.png");
  tiger2 = loadImage("tiger2.png");
  tiger3 = loadImage("tiger3.png");
  eat = loadImage("eat.png");
  eat2 = loadImage("eat2.png");
  people1 = loadImage("people1.png");
  people2 = loadImage("people2.png");
  cloud = loadImage("cloud.png");
  cloud2 = loadImage("cloud2.png");
  forest = loadImage("forest.png");
}

void draw() {
  if (millis() - backgroundChangeTime > 4000) {
    image(forest, 0, 0, width, height);
  } else {
    image(change2, 0, 0, width, height);

    float scaledMouseX = mouseX + 100;
    float scaledMouseY = mouseY + 100;
    image(eat, scaledMouseX - 500, scaledMouseY - 300, eat.width * 0.5, eat.height * 0.5);
    image(eat2, scaledMouseX - 300, scaledMouseY - 300, eat2.width * 0.5, eat2.height * 0.5);

    fill(0);
    textSize(40);
    text("Okay then, let's go into the forest!", 300, 950);
  }

  pushMatrix();
  translate(240, 530);
  tiger1Angle += tiger1RotationSpeed;
  rotate(radians(tiger1Angle));
  if (millis() - rotationStartTime > 2000 && rotationStarted) {
    if (people1Visible && !checkCollision(cloudX, 100, people1)) {
      image(people1, -people1.width/2, -people1.height/2);
    } else {
      people1Visible = false;
    }
  } else {
    if (tiger1Visible && !checkCollision(cloudX, 100, tiger1)) {
      image(tiger1, -tiger1.width/2, -tiger1.height/2);
    } else {
      tiger1Visible = false;
    }
  }
  popMatrix();

  pushMatrix();
  translate(525, 500);
  tiger2Angle += tiger2RotationSpeed;
  rotate(radians(tiger2Angle));
  if (millis() - rotationStartTime > 2000 && rotationStarted) {
    if (people2Visible && !checkCollision(cloudX, 400, people2)) {
      image(people2, -people2.width/2, -people2.height/2);
    } else {
      people2Visible = false;
    }
  } else {
    if (tiger2Visible && !checkCollision(cloudX, 400, tiger2)) {
      image(tiger2, -tiger2.width/2, -tiger2.height/2);
    } else {
      tiger2Visible = false;
    }
  }
  popMatrix();

  pushMatrix();
  translate(850, 500);
  tiger3Angle += tiger3RotationSpeed;
  rotate(radians(tiger3Angle));
  if (millis() - rotationStartTime > 2000 && rotationStarted) {
    if (people1Visible && !checkCollision(cloudX, 100, people1)) {
      image(people1, -people1.width/2, -people1.height/2);
    } else {
      people1Visible = false;
    }
  } else {
    if (tiger3Visible && !checkCollision(cloudX, 100, tiger3)) {
      image(tiger3, -tiger3.width/2, -tiger3.height/2);
    } else {
      tiger3Visible = false;
    }
  }
  popMatrix();

  if (millis() - rotationStartTime > 3000 && rotationStarted) {
    cloudX += 100; // cloud 이미지 x좌표 증가
    cloud2X += 100; // cloud2 이미지 x좌표 증가
  }
  image(cloud, cloudX, -500, cloud.width * 1.5, cloud.height * 1.5); // cloud 이미지 1.5배 크기로 출력
  image(cloud2, cloud2X, 100, cloud2.width * 1.5, cloud2.height * 1.5); // cloud2 이미지 1.5배 크기로 출력
}

boolean checkCollision(float cloudX, float cloudY, PImage image) {
  float cloudLeft = cloudX;
  float cloudRight = cloudX + cloud.width;
  float cloudTop = cloudY;
  float cloudBottom = cloudY + cloud.height;

  float imageLeft = -image.width/2;
  float imageRight = image.width/2;
  float imageTop = -image.height/2;
  float imageBottom = image.height/2;

  if (cloudRight < imageLeft || cloudLeft > imageRight || cloudBottom < imageTop || cloudTop > imageBottom) {
    return false; // 충돌 없음
  } else {
    return true; // 충돌 발생
  }
}

void mousePressed() {
  if (mouseButton == LEFT) {
    tiger1RotationSpeed = 8;
    tiger2RotationSpeed = 8;
    tiger3RotationSpeed = 8;
    rotationStartTime = millis();
    rotationStarted = true;
    backgroundChangeTime = millis(); // 배경 변경 시간 초기화
  }
}
