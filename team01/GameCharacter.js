import { Timer } from './Timer.js';
import { mainPath } from './sketch.js';

export class GameCharacter {
    constructor() {
      this.x = width / 2;
      this.y = height / 2;
      this.end = false;
      this.man = loadImage(mainPath + "scene2/man.png");
      this.manCrash = loadImage(mainPath + "scene2/man_crash.png");
      this.manHurt = loadImage(mainPath + "scene2/man_hurt.png");
      this.image = this.man;
      this.isCrash = false;
      this.godTimer = new Timer(2);
      this.isInvincibility = false;
      this.crash = 0;
    }
  
    display() {
      push();
      imageMode(CENTER);
      if (this.isInvincibility) tint(255, 0, 0);
      image(this.image, this.x, this.y);
      pop();
  
      if (keyIsPressed && !this.end) {
        if (keyCode === LEFT_ARROW && this.x >= 100) {
          this.x -= 8;
        } else if (keyCode === RIGHT_ARROW && this.x <= width - 100) {
          this.x += 8;
        }
  
        if (keyCode === UP_ARROW && this.y >= 400) {
          this.y -= 8;
        } else if (keyCode === DOWN_ARROW && this.y <= 600) {
          this.y += 8;
        }
      }
    }
  
    checkEnd() {
      this.y += 3;
      return this.y >= 800;
    }
  
    distCheck(x, y, type) {
      let value = 240 + type * 40;
      this.isCrash = dist(this.x, this.y, x, y) < value;
  
      if (!this.isInvincibility && this.isCrash) {
        this.godTimer.start();
        this.isInvincibility = true;
        this.crash++;
        this.image = this.manCrash;
      } else if (this.godTimer.isFinished() && this.isInvincibility) {
        this.godTimer = new Timer(2);
        this.isInvincibility = false;
        this.image = this.man;
      }
    }
  
    crashCheck() {
      this.isInvincibility = false;
      if (this.crash >= 5) {
        this.image = this.manHurt;
      } else {
        this.image = this.man;
      }
    }
  }