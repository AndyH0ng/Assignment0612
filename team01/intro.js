import { sceneSystem, mainPath } from './sketch.js';
let milesha, milestone, mountain, start, sun, textImage, ground, human, mainbg, cloud, bear, tiger;
let mountainY, humanY, tigerY, bearY;
let cloudAlpha = 0;
let mountainAlpha = 0;
let tigerAlpha = 0;
let bearAlpha = 0;
let humanAlpha = 0;
let startAlpha = 0;
let startTime;

export function introPreload(){
  milesha = loadImage(mainPath + "intro/milesha.png");
  milestone = loadImage(mainPath + "intro/milestone.png");
  mountain = loadImage(mainPath + "intro/mountain.png");
  start = loadImage(mainPath + "intro/start.png");
  sun = loadImage(mainPath + "intro/sun.png");
  textImage = loadImage(mainPath + "intro/text.png");
  cloud = loadImage(mainPath + "intro/cloud.png");
  ground = loadImage(mainPath + "intro/ground.png");
  bear = loadImage(mainPath + "intro/bear.png");
  human = loadImage(mainPath + "intro/human.png");
  tiger = loadImage(mainPath + "intro/tiger.png");
  mainbg = loadImage(mainPath + "intro/mainbg.png");

}

export function introInit(){
    mountainY = 800;
    humanY = 240;
    tigerY = 404;
    bearY = 415;
    startTime = millis();
}

export function introScene(){
    let elapsedTime = millis() - startTime;

  image(mainbg, 0, 0);
  image(sun, 190, -1);


  if (elapsedTime > 2000) {
    if (tigerAlpha < 255) {
      tigerAlpha += 5;
    }
    tint(255, tigerAlpha);
    if (tigerY > 204) {
      tigerY -= 15;
    }
    image(tiger, 210, tigerY);
    noTint();

    if (bearAlpha < 255) {
      bearAlpha += 25;
    }
    tint(255, bearAlpha);
    if (bearY > 214) {
      bearY -= 15;
    }
    image(bear, 1503, bearY);
    noTint();

    if (humanAlpha < 255) {
      humanAlpha += 25;
    }
    tint(255, humanAlpha);
    if (humanY > 40) {
      humanY -= 15;
    }
    image(human, 561, humanY);
    noTint();
  }

  if (elapsedTime > 1000) {


    if (mountainAlpha < 255) {
      mountainAlpha += 25;
    }
    tint(255, mountainAlpha);
    if (mountainY > 370) {
      mountainY -= 35;
    }
    image(mountain, 0, mountainY);
    noTint();

    if (cloudAlpha < 255) {
      cloudAlpha += 5;
    }
    tint(255, cloudAlpha);
    image(cloud, 0, 0);
    noTint();
  }


  image(ground, 0, 942);
  image(textImage, 300, 425);
  image(milestone, 1457, 781);
  image(milesha, 1534, 990);


  if (elapsedTime > 3500) {
    startAlpha = 128 + 127 * sin(TWO_PI * (millis() - (startTime + 2000)) / 1000.0); // 주기적으로 알파 값을 변경
    tint(255, startAlpha);
    image(start, 605, 960);
    noTint();
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && mouseIsPressed) {
      sceneSystem.changeScene();
    }
  }
}

