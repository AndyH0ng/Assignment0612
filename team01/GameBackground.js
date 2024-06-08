import { mainPath } from "./sketch.js";

export class GameBackground {
    constructor(num, y) {
      if (num === 0) {
        this.background = loadImage(mainPath + "scene2/background3.png");
      } else if (num === 1) {
        this.background = loadImage(mainPath + "scene2/background1.png");
      } else {
        this.background = loadImage(mainPath + "scene2/background2.png");
      }
      this.y = y;
      this.ySpeed = 4;
    }
  
    display() {
      push();
      noStroke();
      image(this.background, 0, this.y);
      this.y -= this.ySpeed;
      if (this.endBackground()) {
        this.y = height; // 1080을 height로 대체
      }
      pop();
    }
  
    changeImage() {
      this.background = loadImage(mainPath + "scene2/background3.png");
    }
  
    endBackground() {
      return this.y <= -height; // 1080을 height로 대체
    }
  
    finalBackground() {
      return this.y === 0;
    }
  }