import { sceneSystem, mainPath } from './sketch.js';

let drops = [];
let xSpeed;
let x;
let mainbg1, bg, bg1, rain, cloud, wind, gameStart, nar, hwanwoong;
let roleImage, role1Image, role2Image, darkcloud;

let dragPos, drag1Pos, drag2Pos;
let targetPos, target1Pos, target2Pos;
let offset;

let dragging = false,
  dragging1 = false,
  dragging2 = false;
let sceneChange = false;
let showDraggingScene = false;
let roleCorrect, role1Correct, role2Correct;
let speedX1 = 4;
let speedY1 = 4;
let speedX2 = 1;
let speedY2 = 1;
let speedX3 = -2;
let speedY3 = -2;

//nextScene
let x1, x2, x3, x4, x5, x6, x7;
let stopX, stopX1, stopX2, stopX3, stopX4, stopX5;
let totalTime = [7500, 2500, 2500, 2000, 4200, 3000];
let scene = 1;
let scenesCompleted = false;
let startTime;

export function scene3Preload(){
  gameStart = loadImage(mainPath + "scene3/gamestart.png");
  roleImage = loadImage(mainPath + "scene3/cloudIcon.png");
  role1Image = loadImage(mainPath + "scene3/rainicon.png");
  role2Image = loadImage(mainPath + "scene3/windicon.png");
  cloud = loadImage(mainPath + "scene3/cloud.png");
  rain = loadImage(mainPath + "scene3/rain.png");
  wind = loadImage(mainPath + "scene3/wind.png");
  darkcloud = loadImage(mainPath + "scene3/dark_cloud.png");
  hwanwoong = loadImage(mainPath + "scene3/hw.png");
  mainbg1 = loadImage(mainPath + "scene3/background2.png");
  bg = loadImage(mainPath + "scene3/bg1.png");
  bg1 = loadImage(mainPath + "scene3/bg2.png");
  nar = loadImage(mainPath + "scene3/nar.png");
}

export function scene3Init() {
  drag1Pos = createVector(1100, 710);
  dragPos = createVector(550, 710);
  drag2Pos = createVector(80, 790);

  target1Pos = createVector(810, 80);
  targetPos = createVector(170, 10);
  target2Pos = createVector(1450, 40);

  //nextscene
  x = -cloud.width;
  x1 = -cloud.width;
  x2 = -rain.width + 100;
  x3 = -wind.width + 150;
  x4 = -roleImage.width;
  x5 = width;
  x6 = width;
  x7 = -hwanwoong.width + 240;
  //stoplocation
  stopX = 100;
  stopX1 = 250;
  stopX2 = 400;
  stopX3 = 200;
  stopX4 = 1000;
  stopX5 = 550;
  sceneChange = false;
  offset = createVector();
  startTime = millis();
  for (let i = 0; i < 1000; i++) {
    drops.push(new Drop());
  }
}

export function scene3() {
  if (sceneChange) {
    nextScene();
  } else if (showDraggingScene) {
    background(mainbg1);
    push();
    fill(0);
    textSize(42);
    text("Dragging roles!", 820, 80);
    image(cloud, targetPos.x, targetPos.y, 300, 600);
    image(rain, target1Pos.x, target1Pos.y, 300, 600);
    image(wind, target2Pos.x, target2Pos.y, 300, 600);
    image(role2Image, drag2Pos.x, drag2Pos.y, 250, 150);
    image(roleImage, dragPos.x, dragPos.y, 300, 180);
    image(role1Image, drag1Pos.x, drag1Pos.y, 300, 250);
    pop();

    targetPos.x += speedX1;
    targetPos.y += speedY1;
    target1Pos.x += speedX2;
    target1Pos.y += speedY2;
    target2Pos.x += speedX3;
    target2Pos.y -= speedY3;
    if (targetPos.x > 250 && targetPos.y < 800) {
      speedX1 = 0;
      speedY1 = 0;
    }
    if (target1Pos.x > 250 && target1Pos.y > 100) {
      speedX2 = 0;
      speedY2 = 0;
    }
    if (target2Pos.x < 1390 && target2Pos.y < 1200) {
      speedX3 = 0;
      speedY3 = 0;
    }
    if (roleCorrect && role1Correct && role2Correct) {
      sceneChange = true;
    }
  } else {
    background(nar);
    image(gameStart, 890, 600, 250, 100);
  }
}

export function scene3MousePressed() {
  if (sceneSystem.currentScene === 3) {
    if (showDraggingScene) {
      if (overImage(roleImage, dragPos)) {
        dragging = true;
        offset.set(mouseX - dragPos.x, mouseY - dragPos.y);
      } else if (overImage(role1Image, drag1Pos)) {
        dragging1 = true;
        offset.set(mouseX - drag1Pos.x, mouseY - drag1Pos.y);
      } else if (overImage(role2Image, drag2Pos)) {
        dragging2 = true;
        offset.set(mouseX - drag2Pos.x, mouseY - drag2Pos.y);
      }
    } else {
      if (mouseX > 890 && mouseX < 1140 && mouseY > 600 && mouseY < 710) {
        showDraggingScene = true;
      }
    }
  }
}

export function scene3MouseDragged() {
  if (sceneSystem.currentScene === 3) {
    if (dragging) {
      dragPos.set(mouseX - offset.x, mouseY - offset.y);
    } else if (dragging1) {
      drag1Pos.set(mouseX - offset.x, mouseY - offset.y);
    } else if (dragging2) {
      drag2Pos.set(mouseX - offset.x, mouseY - offset.y);
    }
  }
}

export function scene3MouseReleased() {
  if (sceneSystem.currentScene === 3) {
    if (dragging) {
      dragging = false;
      if (overTarget(dragPos, targetPos)) {
        dragPos.set(targetPos.x, 645);
        roleCorrect = true;
      } else {
        dragPos.set(550, 710);
        roleCorrect = false;
      }
    }
    if (dragging1) {
      dragging1 = false;
      if (overTarget(drag1Pos, target1Pos)) {
        drag1Pos.set(target1Pos.x + 5, 640);
        role1Correct = true;
      } else {
        role1Correct = false;
        drag1Pos.set(1100, 710);
      }
    }
    if (dragging2) {
      dragging2 = false;
      if (overTarget(drag2Pos, target2Pos)) {
        drag2Pos.set(target2Pos.x + 30, 700);
        role2Correct = true;
      } else {
        drag2Pos.set(80, 790);
        role2Correct = false;
      }
    }
    if (roleCorrect && role1Correct && role2Correct) {
      sceneChange = true;
      startTime = millis();
    }
  }
}

function overImage(role, pos) {
  return (
    mouseX > pos.x &&
    mouseX < pos.x + role.width &&
    mouseY > pos.y &&
    mouseY < pos.y + role.height
  );
}

function overTarget(pos, target) {
  return (
    dist(pos.x, pos.y, target.x, target.y) < 650 &&
    dist(pos.x, pos.y, target.x, target.y) > 300
  );
}

function nextScene() {
  if (scenesCompleted) {
    sceneSystem.changeScene();
    return;
  }

  let elapsedTime = millis() - startTime;
  if (elapsedTime > totalTime[scene - 1] && elapsedTime > totalTime[scene - 1]) {
    scene++;
    startTime = millis();
    if (scene > 6) {
      scenesCompleted = true;
      return;
    }
  }
  background(bg);
  switch (scene) {
    case 1:
      scene3_1();
      break;
    case 2:
      scene3_2();
      break;
    case 3:
      scene3_3();
      break;
    case 4:
      scene3_4();
      break;
    case 5:
      scene3_5();
      break;
    case 6:
      scene3_6();
      break;
  }
}

function scene3_1() {
  image(cloud, x, 500 - cloud.height / 2, 150, 300);
  if (x < stopX) {
    x += 10;
  }
  image(roleImage, x, 500 - roleImage.height / 2 - 40, 150, 90);
  if (x < stopX) {
    x += 12;
  }
  image(rain, x1, 500 - rain.height / 2, 150, 300);
  if (x1 < stopX1) {
    x1 += 10;
  }
  image(role1Image, x1 + 5, 500 - role1Image.height / 2 - 60, 150, 110);
  if (x1 < stopX1) {
    x1 += 12;
  }
  image(wind, x2, 500 - wind.height / 2, 150, 300);
  if (x2 < stopX2) {
    x2 += 10;
  }
  image(role2Image, x2 + 15, 500 - role2Image.height / 2 - 45, 110, 90);
  if (x2 < stopX2) {
    x2 += 12;
  }
  image(hwanwoong, x7, 500 - hwanwoong.height / 2 - 180, 150, 300);
  if (x7 < stopX5) {
    x7 += 10;
  }
  image(roleImage, x7 - 30, 500 - hwanwoong.height / 2 + 90, 200, 100);
  if (x7 < stopX5) {
    x7 += 12;
  }
}

function scene3_2() {
  image(cloud, x, 500 - cloud.height / 2, 150, 300);
  if (x < stopX) {
    x += 9;
  }
  image(roleImage, x, 500 - roleImage.height / 2 - 40, 150, 90);
  if (x < stopX) {
    x3 += 10;
  }
  image(darkcloud, x5, 100, 450, 150);
  image(darkcloud, x5 + 200, 100, 450, 150);
  if (x5 > stopX4) {
    x5 -= 10;
  }
}

function scene3_3() {
  image(wind, x2 - 200, 470 - wind.height / 2, 150, 300);
  if (x2 < stopX2) {
    x2 += 10;
  }
  image(role2Image, x2 - 180, 470 - role2Image.height / 2 - 40, 110, 90);
  if (x2 < stopX2) {
    x2 += 12;
  }
  image(role2Image, x6, 200, 200, 100);
  image(role2Image, x6 + 300, 250, 250, 100);
  if (x6 > stopX4) {
    x6 -= 10;
  }
}

function scene3_4() {
  image(rain, x1, 500 - rain.height / 2, 150, 300);
  if (x1 < stopX1) {
    x1 += 10;
  }
  image(role1Image, x1, 500 - role1Image.height / 2 - 60, 150, 110);
  if (x1 < stopX1) {
    x1 += 12;
  }
}

function scene3_5() {
  for (let i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].fall();
  }
}

function scene3_6() {
  background(bg1);
}

class Drop {
  constructor() {
    this.x = random(width);
    this.y = random(-400, -100);
    this.yspeed = random(4, 10);
    this.len = random(20, 30);
  }

  fall() {
    this.y += this.yspeed;
    this.yspeed += 0.01;
    if (this.y > height) {
      this.y = random(-400, -100);
      this.yspeed = random(4, 10);
    }
  }

  show() {
    push();
    stroke("#2B5FEA");
    line(this.x, this.y, this.x, this.y + this.len);
    pop();
  }
}
