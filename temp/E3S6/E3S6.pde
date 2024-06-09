PImage backgroundImg;
PImage insertImg;
PImage flagImg;
PImage danfaceImg;
PImage woongfaceImg;
PImage woongface2Img;
PImage danface2Img;
PImage img15_1;
PImage img15_2;
PImage walkingdan1Img;
PImage walkingdan2Img;
PImage walkingdan3Img;  
PImage lastdanImg; // New image to be loaded
boolean displayRect = false;
boolean isSecondClick = false;
boolean isThirdClick = false;
boolean isFourthClick = false;
boolean isFifthClick = false;
boolean isSixthClick = false;
boolean isSeventhClick = false;
boolean isWalking = false;
boolean reachedEnd = false; 
boolean flagRemoved = false; // Track if flag is removed
int imgIndex = 1;
int maxImgIndex = 13;
int lastChangeTime = 0;
int walkingStartTime = 0;
int imageToggleTime = 0;
int endReachedTime = 0; // Track the time when end position is reached
float walkingdan1X = 296;
boolean useWalkingDan1 = true;

void setup() {
  size(1920, 1080);
  backgroundImg = loadImage("establish.png");
  insertImg = loadImage("1.png");
  flagImg = loadImage("flag.png");
  danfaceImg = loadImage("danface.png");
  woongfaceImg = loadImage("woongface.png");
  woongface2Img = loadImage("woongface2.png");
  danface2Img = loadImage("danface2.png");
  img15_1 = loadImage("15-1.png");
  img15_2 = loadImage("15-2.png");
  walkingdan1Img = loadImage("walkingdan1.png");
  walkingdan2Img = loadImage("walkingdan2.png");
  walkingdan3Img = loadImage("walkingdan3.png");
  lastdanImg = loadImage("lastdan.png"); // Load the new image
}

void draw() {
  image(backgroundImg, 0, 0, width, height);

  if (insertImg != null) {
    float newWidth = insertImg.width / 2.0;
    float newHeight = insertImg.height / 2.0;
    image(insertImg, 482, 400, newWidth, newHeight);
  }

  if (!flagRemoved) { // Only draw the flag if it has not been removed
    float flagWidth = flagImg.width / 2.0;
    float flagHeight = flagImg.height / 2.0;
    image(flagImg, -182, 641, flagWidth, flagHeight);
  }

  if (displayRect) {
    if (isSecondClick) {
      stroke(#FF0000);
    }
    if (isFifthClick) {
      stroke(#ABE387);
    } else {
      stroke(#ABE387);
    }
    strokeWeight(4);
    fill(#FCFCF0);
    rect(width / 2 - 400, height - 220, 800, 170, 20);

    fill(0);
    textAlign(CENTER, CENTER);
    textSize(32);

    if (isFifthClick) {
      text("It's too late.", width / 2, height - 140);
    } else if (isFourthClick) {
      text("Please show me your mercy...", width / 2, height - 140);
    } else if (isSecondClick) {
      text("My father didn't respect me first.", width / 2, height - 140);
    } else {
      text("It's disrespectful of your father", width / 2, height - 140);
    }

    PImage faceImg;
    if (isFifthClick) {
      faceImg = danface2Img;
    } else if (isFourthClick) {
      faceImg = woongface2Img;
    } else if (isSecondClick) {
      faceImg = woongfaceImg;
    } else {
      faceImg = danfaceImg;
    }

    float faceWidth = faceImg.width * 0.3;
    float faceHeight = faceImg.height * 0.3;

    if (isFifthClick) {
      image(faceImg, width / 2 - 200 - faceWidth / 2, height - 229 + 85 - faceHeight / 2, faceWidth, faceHeight);
    } else if (isFourthClick || isSecondClick) {
      image(faceImg, width / 2 - 562 - 20, height - 229 + 85 - faceHeight / 2 + 30 - (isFourthClick ? 15 : 0), faceWidth, faceHeight);
    } else {
      image(faceImg, width / 2 - 562, height - 229 + 85 - faceHeight / 2, faceWidth, faceHeight);
    }
  }

  if (isThirdClick) {
    if (millis() - lastChangeTime >= 300 && imgIndex <= maxImgIndex) {
      lastChangeTime = millis();
      imgIndex++;
      if (imgIndex <= maxImgIndex) {
        insertImg = loadImage(imgIndex + ".png");
      }
    }
  }

  if (isFourthClick) {
    stroke(#FF0000);
    strokeWeight(4);
    fill(#FCFCF0);
    rect(width / 2 - 400, height - 220, 800, 170, 20);

    fill(0);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Please show me your mercy...", width / 2, height - 140);

    float faceWidth = woongface2Img.width * 0.3;
    float faceHeight = woongface2Img.height * 0.3;
    image(woongface2Img, width / 2 - 562 - 20, height - 229 + 85 - faceHeight / 2 + 30 - 20, faceWidth, faceHeight);
  }

  if (isSixthClick) {
    float img15_2Width = img15_2.width * 0.5;
    float img15_2Height = img15_2.height * 0.5;
    image(img15_2, 693, 511, img15_2Width, img15_2Height);

    if (isSeventhClick) {
      float walkingdan1Width = walkingdan1Img.width * 0.5;
      float walkingdan1Height = walkingdan1Img.height * 0.5;

      if (!isWalking) {
        walkingStartTime = millis();
        isWalking = true;
      }

      if (isWalking) {
        int elapsedTime = millis() - walkingStartTime;
        float duration = 2000; // 2 seconds
        float startX = 296;
        float endX = 60;
        if (elapsedTime <= duration) {
          walkingdan1X = lerp(startX, endX, elapsedTime / duration);
        } else {
          walkingdan1X = endX; // Ensure it stops at endX
          if (!reachedEnd) {
            reachedEnd = true; // Mark the end position is reached
            endReachedTime = millis(); // Record the time when the end is reached
          }
        }

        if (!reachedEnd && millis() - imageToggleTime >= 400) {
          useWalkingDan1 = !useWalkingDan1;
          imageToggleTime = millis();
        }

        PImage currentWalkingImg;
        if (reachedEnd) {
          if (millis() - endReachedTime >= 500) { // 0.5 seconds after reaching the end
            currentWalkingImg = lastdanImg; // Change to lastdanImg
            flagRemoved = true; // Remove the flag
          } else {
            currentWalkingImg = walkingdan3Img; // Show walkingdan3Img before changing to lastdanImg
          }
        } else {
          currentWalkingImg = useWalkingDan1 ? walkingdan1Img : walkingdan2Img;
        }

        image(currentWalkingImg, walkingdan1X, 397, walkingdan1Width, walkingdan1Height);
      }
    } else {
      float img15_1Width = img15_1.width * 0.5;
      float img15_1Height = img15_1.height * 0.5;
      image(img15_1, 296, 397, img15_1Width, img15_1Height);
    }
  }
}

void mousePressed() {
  if (isSixthClick) {
    isSeventhClick = true;
    lastChangeTime = millis();
    return;
  }

  if (isFifthClick) {
    insertImg = null;
    displayRect = false;
    isFifthClick = false;
    isSixthClick = true;
    return;
  }

  if (isFourthClick) {
    insertImg = loadImage("14.png");
    displayRect = true;
    isFourthClick = false;
    isFifthClick = true;
    return;
  }

  if (isThirdClick) {
    if (imgIndex > maxImgIndex) {
      isFourthClick = true;
    }
    return;
  }

  if (displayRect) {
    if (isSecondClick) {
      displayRect = false;
      isThirdClick = true;
      lastChangeTime = millis();
    } else {
      isSecondClick = true;
    }
  } else {
    displayRect = true;
  }
}
