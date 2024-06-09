import { Timer } from "../team01/Timer.js";

let creditImage1, creditImage2, creditImage3, creditImage4, creditImage5;
let creditTimer;
let currentImage = 0;
let timerInitialized = false;

export function creditPreload() {
  creditImage1 = loadImage("../assets/credit/credit1.png");
  creditImage2 = loadImage("../assets/credit/credit2.png");
  creditImage3 = loadImage("../assets/credit/credit3.png");
  creditImage4 = loadImage("../assets/credit/credit4.png");
  creditImage5 = loadImage("../assets/credit/credit5.png");
}

export function credit() {
  if (!timerInitialized) {
    creditTimer = new Timer(5); // 3초 타이머
    creditTimer.start();
    timerInitialized = true;
  }
  background(0); // 배경을 검은색으로 설정

  if (creditTimer.isFinished()) {
    currentImage++;
    creditTimer.start(); // 타이머를 다시 시작합니다
  }

  if (currentImage === 0) {
    image(creditImage1, 0, 0);
  } else if (currentImage === 1) {
    image(creditImage2, 0, 0);
  } else if (currentImage === 2) {
    image(creditImage3, 0, 0);
  } else if (currentImage === 3) {
    image(creditImage4, 0, 0);
  } else {
    image(creditImage5, 0, 0);
    noLoop();
  }
}

window.creditPreload = creditPreload;
window.credit = credit;
