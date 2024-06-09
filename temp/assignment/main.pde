import processing.video.*;

Capture cam;
PImage prevFrame;
float threshold = 25;
float squareX, squareY;
ArrayList<Obstacle> obstacles = new ArrayList<Obstacle>();

void setup() {
  size(640, 480);
  cam = new Capture(this, width, height);
  cam.start();
  prevFrame = createImage(width, height, RGB);
  squareX = width / 2;
  squareY = height / 2;
}

void draw() {
  if (cam.available()) {
    prevFrame.copy(cam, 0, 0, cam.width, cam.height, 0, 0, cam.width, cam.height); // Save the previous frame
    prevFrame.updatePixels();
    cam.read();
  }
  image(cam, 0, 0);

  cam.loadPixels();
  prevFrame.loadPixels();

  float motionX = 0;
  float motionY = 0;
  float motionArea = 0;

  // Calculate the difference between the current frame and the previous frame
  for (int x = 0; x < cam.width; x++ ) {
    for (int y = 0; y < cam.height; y++ ) {
      int loc = x + y*cam.width;
      color current = cam.pixels[loc];
      color previous = prevFrame.pixels[loc];
      float r1 = red(current); float g1 = green(current); float b1 = blue(current);
      float r2 = red(previous); float g2 = green(previous); float b2 = blue(previous);
      float diff = dist(r1,g1,b1,r2,g2,b2);

      // If the color difference is larger than the threshold, count it as motion
      if (diff > threshold) {
        motionX += x;
        motionY += y;
        motionArea++;
      }
    }
  }

  // If there is enough motion, move the square to the average position of the motion
  if (motionArea > 500) {
    squareX = motionX / motionArea;
    squareY = motionY / motionArea;
  }

  // Draw the square
  fill(255, 0, 0);
  rect(squareX, squareY, 50, 50);

  // Add a new obstacle every 60 frames
  if (frameCount % 60 == 0) {
    obstacles.add(new Obstacle(random(width), 0, random(2, 5)));
  }

  // Update and draw the obstacles
  for (int i = obstacles.size() - 1; i >= 0; i--) {
    Obstacle o = obstacles.get(i);
    o.update();
    o.display();
    // Remove the obstacle if it's off the screen
    if (o.y > height) {
      obstacles.remove(i);
    }
    // End the game if the obstacle hits the square
    else if (dist(o.x, o.y, squareX + 25, squareY + 25) < o.size / 2 + 25) {
      println("Game Over");
      noLoop();
    }
  }
}

class Obstacle {
  float x, y;
  float size;
  float speed;

  Obstacle(float x, float y, float size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = random(1, 3);
  }

  void update() {
    y += speed;
  }

  void display() {
    fill(0, 0, 255);
    ellipse(x, y, size, size);
  }
}