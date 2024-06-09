let font;
let kmovie, tmovie, ktmovie;
let soundFile;
let iskmovieVisible = false;
let istmovieVisible = false;
let isktmovieVisible = false;
let gar = true;
let ssuk = true;
let ktext = false;
let ttext = false;
let garx,
  gary,
  ssukx,
  ssuky,
  kumax,
  kumay,
  kumaeat,
  kumamove,
  torax,
  toray,
  toraeat,
  toramove;
let ed1 = 0,
  ed2 = 0,
  ed3 = 0,
  ed4 = 0;
let fontX, fontY;
let imageCount1 = 7;
let imageCount2 = 13;
let currentImage1 = 0;
let currentImage2 = 6;
let cx = 100;
let cy = 0;
let cstop = 0;
let animate1 = false;
let animate2 = false;
let displayImage1 = true;
let displayLastImage2 = false;
let images1 = [];
let images2 = [];
let keatmotion = false;
let teatmotion = false;
let tstart = 0;
let kstart = 0;
let trepeat = 3;
let krepeat = 3;
let ttime = 0;
let ktime = 0;
let kinterval = 500;
let tinterval = 500;
let imgbg;
function team02Pressed() {
  switch (currentScene % (currentTeam * 10)) {
    case 1:
      break;
    default:
      console.log("PRESSED_FUNCTION_ERROR_2");
  }
  if (mouseX >= 1870 && mouseY >= 400 && mouseY <= 800) {
    ed4 = 1;
  }
}

function team02Preload() {
  imgkuma1 = loadImage("../assets/team02/kuma1.png");
  imgkuma2 = loadImage("../assets/team02/kuma2.png");
  imgwk = loadImage("../assets/team02/wk.png");
  imgtora1 = loadImage("../assets/team02/tora1.png");
  imgtora2 = loadImage("../assets/team02/tora2.png");
  imgwt = loadImage("../assets/team02/wt.png");
  imggar = loadImage("../assets/team02/garlic.png");
  imgssuk = loadImage("../assets/team02/ssuk.png");
  imgbg = loadImage("../assets/team02/background.png");
  imgtb = loadImage("../assets/team02/tb.png");
  imged4 = loadImage("../assets/team02/gameover.png");
  kmovie = createVideo(["../assets/team02/edk.mp4"]);
  tmovie = createVideo(["../assets/team02/edt.mp4"]);
  ktmovie = createVideo(["../assets/team02/edkt.mp4"]);
  soundFile = loadSound("../assets/team02/rd.mp3");
  
  kmovie.hide();
  tmovie.hide();
  ktmovie.hide();
}

function setupt2() {
  garx = 600;
  gary = 900;
  ssukx = 1200;
  ssuky = 900;
  kumax = -350;
  kumay = 250;
  kumaeat = 0;
  kumamove = 0;
  toramove = 0;
  torax = -450;
  toray = 250;
  toraeat = 0;
  fontX = 500;
  fontY = 200;

  kmovie.hide();
  tmovie.hide();
  ktmovie.hide();

  soundFile.play(); // setup 함수에서 사운드 재생
}

function kumaIn() {
  let s = 20; // 이동 속도

  if (kumax < 450) {
    kumax += s;
  }

  if (kumax == 450) {
    image(imgkuma1, kumax, kumay);
  } else {
    if ((kumax / 50) % 2 == 0) {
      image(imgkuma1, kumax, kumay);
    } else {
      image(imgwk, kumax, kumay);
    }
  }
}

function toraIn() {
  let s = 20;
  if (torax < 1100) {
    torax += s;
  }

  if (torax == 1100) {
    image(imgtora1, torax, toray);
  } else {
    if ((torax / 50) % 2 == 0) {
      image(imgtora1, torax, toray);
    } else {
      image(imgwt, torax - 2, toray);
    }
  }
}

function kumaOut() {
  let s = 10; // 이동 속도

  if (kumax < 2000) {
    kumax += s;
  }
}

function toraOut() {
  let s = 5;
  if (torax < 2000) {
    torax += s;
  }
}
function team02Dragged() {
  if (
    mouseX >= garx - 50 &&
    mouseX <= garx + 70 &&
    mouseY >= gary - 50 &&
    mouseY <= gary + 75
  ) {
    garx = mouseX;
    gary = mouseY;
  }
  if (
    mouseX >= ssukx - 50 &&
    mouseX <= ssukx + 70 &&
    mouseY >= ssuky - 50 &&
    mouseY <= ssuky + 75
  ) {
    ssukx = mouseX;
    ssuky = mouseY;
  }
}


function team02Released() {
  // ending1 - kuma_to_human
  if (
    garx >= kumax &&
    garx <= kumax + 300 &&
    gary <= kumay + 600 &&
    gary >= kumay &&
    ssukx >= kumax &&
    ssukx <= kumax + 300 &&
    ssuky <= kumay + 600 &&
    ssuky >= kumay
  ) {
    kumaeat = 1;
    ed1 = 1;
  }

  // ending2 - tora_to_human
  if (
    garx >= torax &&
    garx <= torax + 300 &&
    gary <= toray + 600 &&
    gary >= toray &&
    ssukx >= torax &&
    ssukx <= torax + 300 &&
    ssuky <= toray + 600 &&
    ssuky >= toray
  ) {
    toraeat = 1;
    ed2 = 1;
  }

  // ending3 - kumna&tora_to_human
  if (
    (garx >= kumax &&
      garx <= kumax + 300 &&
      gary <= kumay + 600 &&
      gary >= kumay &&
      ssukx >= torax &&
      ssukx <= torax + 300 &&
      ssuky <= toray + 600 &&
      ssuky >= toray) ||
    (garx >= torax &&
      garx <= torax + 300 &&
      gary <= toray + 600 &&
      gary >= toray &&
      ssukx >= kumax &&
      ssukx <= kumax + 300 &&
      ssuky <= kumay + 600 &&
      ssuky >= kumay)
  ) {
    ed3 = 1;
  }
}

function keyPressed() {
  // 숫자 r을 누르면 변수들을 초기화하고 다시 설정합니다.
  if (key == "r") {
    initializeVariables();
    setup(); // setup 함수를 다시 호출하여 환경을 초기화합니다. 필요한 경우 이 부분을 조정해주세요.
  }

  if (key == "y") {
    currentTeam = TEAM3_1;
  }
}

function initializeVariables() {
  iskmovieVisible = false;
  istmovieVisible = false;
  isktmovieVisible = false;
  garx = 600;
  gary = 900;
  ssukx = 1200;
  ssuky = 900;
  kumax = -350;
  kumay = 250;
  kumaeat = 0;
  kumamove = 0;
  toramove = 0;
  torax = -450;
  toray = 250;
  toraeat = 0;
  kstart = 0;
  tstart = 0;
  ktwait = 0;
  krepeat = 3;
  trepeat = 3;
  ktime = 0;
  ttime = 0;
  kinterval = 500;
  tinterval = 500;
  keatmotion = false;
  teatmotion = false;
  gar = true;
  ssuk = true;
  ktext = false;
  ttext = false;
  ed1 = 0;
  ed2 = 0;
  ed3 = 0;
  ed4 = 0;
  fontX = 500;
  fontY = 200;
  imageCount1 = 7;
  imageCount2 = 13;
  currentImage1 = 0;
  currentImage2 = 6;
  cx = 100;
  cy = 0;
  cstop = 0;
  animate1 = false;
  animate2 = false;
  displayImage1 = true;
  displayLastImage2 = false;
  let images1 = [];
  let images2 = [];
}

function c1() {
  if (ed1 == 0 && ed2 == 0 && ed3 == 0 && ed4 == 0) {
    image(imgtb, 350, 50);
    text(
      "Who would you give garlic & mugwort to a bear or a tiger?",
      fontX,
      fontY
    );
  }
}

function calendar2() {
  if (displayImage1 && images1[0] != null) {
    image(images1[0], cx, cy, 300, 300);
  }

  if (animate1 && images1[currentImage1] != null) {
    image(images1[currentImage1], cx, cy, 300, 300);
  }

  if (animate1) {
    currentImage1++;
    if (currentImage1 >= imageCount1) {
      animate1 = false;
      displayImage1 = false;
    }
  }
}

function calendar3() {
  if (!animate2 && images2[6] != null && !displayLastImage2) {
    image(images2[6], cx, cy, 300, 300);
  }

  if (animate2 && images2[currentImage2] != null) {
    image(images2[currentImage2], cx, cy, 300, 300);
  }

  if (displayLastImage2 && images2[imageCount2 - 1] != null) {
    image(images2[imageCount2 - 1], cx, cy, 300, 300);
  }

  if (animate2) {
    currentImage2++;
    if (currentImage2 >= imageCount2) {
      animate2 = false;
      displayLastImage2 = true;
    }
  }
}

function team02() {
  background(imgbg);
  fill(0);
  toraIn();
  kumaIn();
  c1();
  calendar3();
  calendar2();

  if (iskmovieVisible) {
    image(kmovie, 0, 0, width, height);
  }
  if (istmovieVisible) {
    image(tmovie, 0, 0, width, height);
  }
  if (isktmovieVisible) {
    image(ktmovie, 0, 0, width, height);
  }
  if (gar == true) {
    image(imggar, garx, gary);
  }
  if (ssuk == true) {
    image(imgssuk, ssukx, ssuky);
  }
  if (ktext == true) {
    image(imgtb, 350, 50);
    text("The tiger ran away!!", fontX + 300, fontY);
  }
  if (ttext == true) {
    image(imgtb, 350, 50);
    text("The bear ran away!!", fontX + 300, fontY);
  }
  if (kumaeat == 1) {
    if (kstart < krepeat) {
      if (millis() - ktime > kinterval) {
        keatmotion = !keatmotion;
        ktime = millis();
        if (!keatmotion) {
          kstart++;
        }
      }
    }
    gar = false;
    ssuk = false;
  }

  if (toraeat == 1) {
    if (tstart < trepeat) {
      if (millis() - ttime > tinterval) {
        teatmotion = !teatmotion;
        ttime = millis();
        if (!teatmotion) {
          tstart++;
        }
      }
    }
    gar = false;
    ssuk = false;
  }

  if (keatmotion) {
    image(imgkuma2, kumax - 1, kumay + 1);
  }
  if (teatmotion) {
    image(imgtora2, torax - 1, toray + 3);
  }
  if (ed1 == 1) {
    toraOut();
    if (!animate1 && cstop == 0) {
      animate1 = true;
      displayImage1 = true;
      currentImage1 = 0;
      cstop = cstop + 1;
    }
    if (torax == 1150) {
      soundFile.play();
    }
    if (torax == 1750) {
      if (!animate2 && cstop == 1) {
        animate2 = true;
        displayLastImage2 = false;
        currentImage2 = 6;
        cstop = cstop + 1;
      }
    }
    if (torax < 1920) {
      ktext = true;
    }
    if (torax == 1920) {
      ktext = false;
      iskmovieVisible = !iskmovieVisible;
      if (iskmovieVisible) {
        // 동영상을 재생합니다.
        kmovie.play();
      }
      setTimeout(ed31, 17000);
    }
  }

if (ed2 == 1) {
  kumaOut();

  if (!animate1 && cstop == 0) {
    animate1 = true;
    displayImage1 = true;
    currentImage1 = 0;
    cstop = cstop + 1;
  }
  if (kumax == 500) {
    soundFile.play();
  }
  if (kumax == 1200) {
    soundFile.play();
  }
  if (kumax == 1750) {
    if (!animate2 && cstop == 1) {
      animate2 = true;
      displayLastImage2 = false;
      currentImage2 = 6;
      cstop = cstop + 1;
    }
  }
  if (kumax < 1920) {
    ttext = true;
  }
  if (kumax == 1920) {
    ttext = false;
    istmovieVisible = !istmovieVisible;
    if (istmovieVisible) {
      // 동영상을 재생합니다.
      tmovie.play();
    }
    setTimeout(ed32, 18000);
  }
}

  if (ed3 == 1) {
    gar = false;
    ssuk = false;
    isktmovieVisible = !isktmovieVisible;
    if (isktmovieVisible) {
      ktmovie.play();
    }
    ed3 = ed3 + 1;
    setTimeout(ed33, 11000);
  }
  if (ed4 == 1) {
    kumaOut();
    toraOut();
    if (torax == 1200) {
      soundFile.play();
    }
    image(imgtb, 350, 50);
    text("Both the bear and the tiger ran away!!", fontX, fontY);
    if (kumax == 2000) {
      background(imged4);
    }
  }
}

function ed31() {
    currentTeam = TEAM3_1;
}

function ed32() {
    currentTeam = TEAM3_2;
}

function ed33() {
    currentTeam = TEAM3_3;
}