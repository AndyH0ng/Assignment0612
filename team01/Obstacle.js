import { mainPath } from "./sketch.js";

export class Obstacle {
  constructor() {
    this.DARKCLOUD = 0;
    this.BIRD = 1;
    this.obstacleType = int(random(2));
    this.bird_lt = loadImage(mainPath + "scene2/bird_left.png");
    this.bird_rt = loadImage(mainPath + "scene2/bird_right.png");
    this.dark_cloud = loadImage(mainPath + "scene2/dark_cloud.png");
    if (this.obstacleType === this.DARKCLOUD) {
      this.birdInit();
    } else if (this.obstacleType === this.BIRD) {
      this.dCloudInit();
    }
  }

  display() {
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y);
    this.x += this.dirX;
    this.y += this.dirY;
    pop();
  }

  birdInit() {
    let startX = int(random(2));
    if (startX === 0) {
      this.x = -100;
      this.dirX = 5;
      this.image = this.bird_rt;
    } else {
      this.x = 2000;
      this.dirX = -5;
      this.image = this.bird_lt;
    }

    this.y = int(random(500, height));
    this.dirY = -4;
  }

  dCloudInit() {
    this.image = this.dark_cloud;
    this.x = int(random(250, width - 250));
    this.y = 1300;
    this.dirY = -4;
    this.dirX = 0;
  }

  checkOut() {
    return this.x <= -100 || this.x >= width + 100 || this.y <= -200;
  }
}
