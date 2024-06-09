PImage cave;
PImage walkingbear1;
PImage walkingbear2;
PImage walkingtiger1;
PImage walkingtiger2;

float bearStartX = 1500;
float bearStartY = 420;
float bearEndX = 1350;
float bearEndY = 550;
float bearX = bearStartX;
float bearY = bearStartY;

float tigerStartX = 1200;
float tigerStartY = 420;
float tigerEndX = 1050;
float tigerEndY = 550;
float tigerX = tigerStartX;
float tigerY = tigerStartY;

float bearWidth;
float bearHeight;
float tigerWidth;
float tigerHeight;

boolean showWalkingbear1 = true;
boolean showWalkingtiger1 = true;
int lastSwitchTimeBear = 0;
int lastSwitchTimeTiger = 0;
int switchInterval = 500;
int totalDuration = 3000;
int startTime;

void setup() {
  size(1920, 1080);
  cave = loadImage("cave.png");
  walkingbear1 = loadImage("walkingbear1.png");
  walkingbear2 = loadImage("walkingbear2.png");
  walkingtiger1 = loadImage("walkingtiger1.png");
  walkingtiger2 = loadImage("walkingtiger2.png");

  bearWidth = walkingbear1.width * 0.3;
  bearHeight = walkingbear1.height * 0.3;
  tigerWidth = walkingtiger1.width * 0.3;
  tigerHeight = walkingtiger1.height * 0.3;

  startTime = millis();
}

void draw() {
  background(0);
  image(cave, 0, 0, width, height);

  int currentTime = millis();
  int elapsedTime = currentTime - startTime;

  if (elapsedTime < totalDuration) {
    float progress = elapsedTime / float(totalDuration);

    bearX = lerp(bearStartX, bearEndX, progress);
    bearY = lerp(bearStartY, bearEndY, progress);
    tigerX = lerp(tigerStartX, tigerEndX, progress);
    tigerY = lerp(tigerStartY, tigerEndY, progress);

    float startBearWidth = walkingbear1.width * 0.3;
    float startBearHeight = walkingbear1.height * 0.3;
    float endBearWidth = walkingbear1.width * 0.3 * 2;
    float endBearHeight = walkingbear1.height * 0.3 * 2;

    float startTigerWidth = walkingtiger1.width * 0.3;
    float startTigerHeight = walkingtiger1.height * 0.3;
    float endTigerWidth = walkingtiger1.width * 0.3 * 2;
    float endTigerHeight = walkingtiger1.height * 0.3 * 2;

    bearWidth = lerp(startBearWidth, endBearWidth, progress);
    bearHeight = lerp(startBearHeight, endBearHeight, progress);
    tigerWidth = lerp(startTigerWidth, endTigerWidth, progress);
    tigerHeight = lerp(startTigerHeight, endTigerHeight, progress);

    if (currentTime - lastSwitchTimeBear > switchInterval) {
      showWalkingbear1 = !showWalkingbear1;
      lastSwitchTimeBear = currentTime;
    }

    if (currentTime - lastSwitchTimeTiger > switchInterval) {
      showWalkingtiger1 = !showWalkingtiger1;
      lastSwitchTimeTiger = currentTime;
    }
  } else {
    bearX = bearEndX;
    bearY = bearEndY;
    showWalkingbear1 = false;
    bearWidth = walkingbear1.width * 0.3 * 2;
    bearHeight = walkingbear1.height * 0.3 * 2;

    tigerX = tigerEndX;
    tigerY = tigerEndY;
    showWalkingtiger1 = false;
    tigerWidth = walkingtiger1.width * 0.3 * 2;
    tigerHeight = walkingtiger1.height * 0.3 * 2;
  }

  if (showWalkingbear1) {
    image(walkingbear1, bearX, bearY, bearWidth, bearHeight);
  } else {
    image(walkingbear2, bearX, bearY, bearWidth, bearHeight);
  }

  if (showWalkingtiger1) {
    image(walkingtiger1, tigerX, tigerY, tigerWidth, tigerHeight);
  } else {
    image(walkingtiger2, tigerX, tigerY, tigerWidth, tigerHeight);
  }
}
