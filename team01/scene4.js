import { Timer } from './Timer.js';
import { sceneSystem, mainPath } from './sketch.js';
let front, front2, side, side2, side3, bear, bear2, tiger, tiger2, tiger3, bear3, tiger4, bear4, intro;
let hx, xspeed, switchTime;
let show2;
let firstNarration;
let Scale = 1.0;

let Size = 600;
let isShrinking = false;
let timer;
let backgroundImage;
let startTime;
let x, y;

export function scene4Preload(){
  front = loadImage(mainPath + "scene4/f.png");
  front2 = loadImage(mainPath + "scene4/f2.png");
  side = loadImage(mainPath + "scene4/s.png");
  side2 = loadImage(mainPath + "scene4/s2.png");
  side3 = loadImage(mainPath + "scene4/s3.png");
  bear = loadImage(mainPath + "scene4/IMG_0844.png");
  tiger = loadImage(mainPath + "scene4/IMG_0848.png");
  bear2 = loadImage(mainPath + "scene4/IMG_0864.png");
  tiger2 = loadImage(mainPath + "scene4/IMG_0863.png");
  tiger3 = loadImage(mainPath + "scene4/2.png");
  bear3 = loadImage(mainPath + "scene4/1.png");
  tiger4 = loadImage(mainPath + "scene4/t_back.png");
  bear4 = loadImage(mainPath + "scene4/b_back.png");
  backgroundImage = loadImage(mainPath + "scene4/b.png");
  intro = loadImage(mainPath + "scene4/intro.png");

}

export function scene4Init() {
  timer = new Timer(4);
  timer.start();

  x = 1800;
  y = 600;
  hx = 500;
  xspeed = 8;
  startTime = millis();
  firstNarration = false;
  switchTime = millis();
  sceneSystem.playNextNarration();
}

export function scene4() {
  if (timer.isFinished()) {
    hw();
  } else {
    background(intro);
  }
}

function hw() {
  push();
  background(backgroundImage);

  imageMode(CENTER);
  // hwanwoong
  image(front, hx, y, 200, 400);
  if (millis() - startTime >= 7000) {
    front = side;
  }
  if (millis() - startTime >= 14000) {
    front = side3;
  }
  if (millis() - startTime >= 18000) {
    front = side2;
  }
  if (millis() - startTime >= 19000) {
    front = side;
  }
  if (millis() - startTime >= 27000) {
    front = front2;
  }

  if (millis() - switchTime >= 500) {
    show2 = !show2;
    switchTime = millis();
  }

  if (!isShrinking) {
    // bear
    if (x > 1000) {
      if (show2) {
        image(bear2, x, y, 600, 600);
      } else {
        image(bear, x, y, 600, 600);
      }
    } else {
      image(bear, x, y, 600, 600);
    }

    // tiger
    if (x > 1000) {
      if (show2) {
        image(tiger2, x + 200, y, 600, 600);
      } else {
        image(tiger, x + 200, y, 600, 600);
      }
    } else {
      image(tiger, x + 200, y, 600, 600);
    }

    x -= xspeed;
    if (x <= 1000) {
      xspeed = 0;

      // hand
      if (millis() - startTime >= 19000) {
        bear = bear3;
        tiger = tiger3;
      }
      // turn
      if (millis() - startTime >= 27000 && millis() - startTime <= 29000) {
        bear = bear4;
        tiger = tiger4;
        isShrinking = true; // Start shrinking and moving
      }
    }
  } else {
    // shrinking and moving
    if (Size > 160) {
      Size *= 0.99;
      x += 3;
    }else{
      sceneSystem.endScene();
    }
    image(bear, x, y, Size, Size);
    image(tiger, x + 200, y, Size, Size);
  }
  pop();
}
