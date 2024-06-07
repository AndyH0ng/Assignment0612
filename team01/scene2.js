import { Timer } from './Timer.js';
import { GameCharacter } from './GameCharacter.js';
import { GameBackground } from './GameBackground.js';
import { Obstacle } from './Obstacle.js';
import { sceneSystem, mainPath } from './sketch.js';
import { SceneSystem } from './SceneSystem.js';

let dropGameSystem;
let backgroundElements;
let ch;
let timeEnd;
let btn, btnHover;
let obstacles;
let timer;
let backgroundImage;

export function scene2Preload(){
  btn = loadImage(mainPath + "scene2/btn.png");
  btnHover = loadImage(mainPath + "scene2/btn_hover.png");
  backgroundImage = loadImage(mainPath + "scene2/game_start.png");
}
export function scene2Init() {
  dropGameSystem = new SceneSystem();
}

export function scene2() {
  background(255);
  if (dropGameSystem.currentState === SceneSystem.START) {
    dropGameStartScene();
  } else if (dropGameSystem.currentState === SceneSystem.INIT) {
    dropGameInit();
    dropGameSystem.showScene();
  } else if (dropGameSystem.currentState === SceneSystem.SHOWING) {
    dropGame();
  }
}

function dropGameInit() {
  backgroundElements = [];
  timeEnd = false;
  for (let i = 0; i < 2; i++) {
    backgroundElements.push(new GameBackground(i + 1, i * height));
  }

  ch = new GameCharacter();

  let time = 10;
  timer = new Timer(time);
  timer.start();

  obstacles = [];
  for (let i = 0; i < 3; i++) {
    obstacles.push(new Obstacle());
  }
}

function dropGame() {
  for (let i = 0; i < backgroundElements.length; i++) {
    backgroundElements[i].display();
  }

  if (timeEnd) {
    obstacles = [];
    ch.crashCheck();
    if (backgroundElements[1].finalBackground()) {
      if (ch.checkEnd()) {
        sceneSystem.stopBgm();
        sceneSystem.changeScene();
      }
      ch.end = true;
      for (let i = 0; i < backgroundElements.length; i++) {
        backgroundElements[i].ySpeed = 0;
      }
    }
  } else {
    if (timer.isFinished() && backgroundElements[0].finalBackground()) {
      backgroundElements[1].y = backgroundElements[0].y + height;
      backgroundElements[1].changeImage();
      timeEnd = true;
    }
    for (let i = 0; i < obstacles.length; i++) {
      obstacles[i].display();
      if (obstacles[i].checkOut()) {
        obstacles[i] = new Obstacle();
      }
      ch.distCheck(obstacles[i].x, obstacles[i].y, obstacles[i].obstacleType);
    }
  }

  ch.display();
}

function dropGameStartScene() {
  background(backgroundImage);
  push();
  imageMode(CENTER);
  let btnStyle = btn;
  if (checkHover(mouseX, mouseY)) {
    btnStyle = btnHover;
  }
  image(btnStyle, width / 2, height - 180);
  pop();
  if (checkHover(mouseX, mouseY) && mouseIsPressed) {
    dropGameSystem.changeScene();
  }
}

function checkHover(x, y) {
  return (width / 2 - 247 <= x && width / 2 + 247 >= x && height - 180 - 76 <= y && height - 180 + 76 >= y);
}
