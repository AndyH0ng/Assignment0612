import { sceneSystem, mainPath } from './sketch.js';
import { Timer } from './Timer.js';

let hwanin, c1, c2, c3, c4, c5, c6, c7, scene1p, backgroundImage;
let c1x, c1y, c2x, c2y, c3x, c3y, c4x, c4y, hwx, hwy;
let startMove;
let isEnd;
let timer;
let startTime;
let hwanwoong;

export function scene1Preload(){
  hwanwoong = loadImage(mainPath + "scene1/hwanwoong.png");
  hwanin = loadImage(mainPath + "scene1/hwanin.png");
  c1 = loadImage(mainPath + "scene1/c1.png");
  c2 = loadImage(mainPath + "scene1/c2.png");
  c3 = loadImage(mainPath + "scene1/c3.png");
  c4 = loadImage(mainPath + "scene1/c4.png");
  c5 = loadImage(mainPath + "scene1/c5.png");
  c6 = loadImage(mainPath + "scene1/c6.png");
  c7 = loadImage(mainPath + "scene1/c7.png");
  backgroundImage = loadImage(mainPath + "scene1/bg.png");
  scene1p = loadImage(mainPath + "scene1/scene1p.png");
}

export function scene1Init() {
  c1x = 383;
  c1y = 963;
  c2x = 1047;
  c2y = 915;
  c3x = 585;
  c3y = 735;
  c4x = 486;
  c4y = 577;
  hwx = 2393;
  hwy = 612;
  startMove = false;
  startTime = millis();
  timer = new Timer(6);
  isEnd = false;
  sceneSystem.playNextNarration();
}

export function scene1() {
  background(0);
  push();
  imageMode(CENTER);
  image(backgroundImage, 842, 723);
  image(c6, 376, 181);
  image(c5, 254, 386);
  image(c4, c4x, c4y);
  image(c7, 1658, 735);
  image(c3, c3x, c3y);
  image(c2, c2x, c2y);
  image(c1, c1x, c1y);
  image(hwanwoong, 1090, 540);
  image(hwanin, hwx, hwy);
  pop();

  let currentTime = millis();
  if (currentTime - startTime > 7000) {
    startMove = true;
  }

  if (currentTime - startTime > 13000) {
    image(scene1p, 0, 0);
    if (!isEnd) {
      isEnd = true;
      timer.start();
    }
  }
  if (startMove) {
    if (c1x > -600) {
      c1x -= 10;
      if (c1x < -600) {
        c1x = -600;
      }
    }

    if (c2x > -600) {
      c2x -= 10;
      if (c2x < -600) {
        c2x = -600;
      }
    }

    if (c3x > -600) {
      c3x -= 10;
      if (c3x < -600) {
        c3x = -600;
      }
    }

    if (c4x > -600) {
      c4x -= 10;
      if (c4x < -600) {
        c4x = -600;
      }
    }

    if (hwx > 1600) {
      hwx -= 10;
      if (hwx < 1600) {
        hwx = 1600;
      }
    }
  }
  if (isEnd && timer.isFinished()) {
    sceneSystem.changeScene();
  }
}
