// E3S0
let bearStartX30 = 1500;
let bearStartY30 = 420;
let bearEndX30 = 1350;
let bearEndY30 = 550;
let bearX30 = bearStartX30;
let bearY30 = bearStartY30;

let tigerStartX30 = 1200;
let tigerStartY30 = 420;
let tigerEndX30 = 1050;
let tigerEndY30 = 550;
let tigerX30 = tigerStartX30;
let tigerY30 = tigerStartY30;

let bearWidth30;
let bearHeight30;
let tigerWidth30;
let tigerHeight30;

let showWalkingbear30 = true;
let showWalkingtiger30 = true;
let lastSwitchTimeBear30 = 0;
let lastSwitchTimeTiger30 = 0;
let switchInterval30 = 500;
let totalDuration30 = 3000;

// E3S1
let tigerX31 = 950;
let tigerY31 = 400;
let bearX31 = 1350;
let bearY31 = 400;

let showHandtiger31 = true;
let showHandbear31 = true;
let finalImages31 = false; // variable to check if the final images have been switched
let startAnimation31 = false; // variable to check if the animation has started

let switchInterval31 = 800;  // interval for switching images (milliseconds)
let switchCount31 = 0;  // count of image switches
let maxSwitchCount31 = 4;  // maximum count of image switches
let lastSwitchTime31 = 0;  // time when the image was last switched
let animationStartTime31 = 0; // start time of the animation

// E3S2
let showMessage32 = false;
let messageStartTime32;
let isMoving32 = false;
let isReturning32 = false;
let flowersVisible32 = true;
let woongX32 = 1080;  // initial x position
let woongY32 = 346;   // initial y position
let targetX32 = 440;  // target x position
let returnX32 = 1080; // return x position
let moveStartTime32;
let moveDuration32 = 2500;  // move time 2.5 seconds
let lastImageChangeTime32;
let useFirstImage32 = true;
let finalMessageShown32 = false; // final message display status3
let man32;

// E3S3
let seasonIndex33 = 0; // 현재 표시할 계절 사진의 인덱스
let babySwitchInterval33 = 1000; // baby와 baby2 이미지 전환 간격 (1초)
let miniSwitchInterval33 = 300; // mini 이미지 전환 간격 (0.3초)
let seasonSwitchInterval33 = 500; // 계절 이미지 전환 간격 (0.5초)
let lastBabySwitchTime33 = 0;
let lastMiniSwitchTime33 = 0;
let lastSeasonSwitchTime33 = 0;
let isBaby1_33 = true;
let isBaby3_33 = true; // 오른쪽 baby 이미지 전환용
let isBabyRotating33 = false;
let isDangunDisplayed33 = false;
let babyY33;
let babySpeed33 = 0.3; // Baby 이미지의 움직이는 속도
let miniIndex33 = 0; // mini 이미지 인덱스
let bg33;

// E3S4
let man13_34, man14_34, dangun5_34, boy2_34, boy3_34, dangun6_34, boy0_34, boy1_34, man15_34, crown34, face5_34;
let moveCrownwoong34 = false;
let message34 = "I'll decide on the king today.";
let crownwoongX34 = 16;
let crownwoongTargetX34 = 450;
let animationStartTime34;
let animationDuration34 = 2.0; // 2 seconds
let switchImage34 = false;
let imagesSwitched34 = false;
let changeToRed34 = false;
let changeWoongface34 = false;
let changeText34 = false;
let moveAngrybum34 = false;
let angrybumX34 = 850;
let angrybumTargetX34 = 2000;
let bumfaceX34, bumfaceY34;
let useAngrybum34 = true; // 추가
let angrybumVisible34 = true; // 추가

// E3S5
let moveAngrybum35 = false;
let angrybumX35 = -150;
let angrybumTargetX35 = 500;
let animationStartTime35;
let animationDuration35 = 3.0; // 3 seconds
let useAngrybum35 = true;
let swapToAngrybum35 = false; // angrybum3로 변경할지 여부 추적
let showWoongface35 = false; // woongface 이미지와 텍스트 표시 여부
let timerStarted35 = false; // 타이머 시작 여부
let swapTime35; // angrybum3으로 변경된 시간
let woongfaceText35 = "This isn't fair....."; // 초기 텍스트

// E3S6
let lastdanImg36; // New image to be loaded
let displayRect36 = false;
let isSecondClick36 = false;
let isThirdClick36 = false;
let isFourthClick36 = false;
let isFifthClick36 = false;
let isSixthClick36 = false;
let isSeventhClick36 = false;
let isWalking36 = false;
let reachedEnd36 = false;
let flagRemoved36 = false; // Track if flag is removed
let imgIndex36 = 1;
let maxImgIndex36 = 13;
let lastChangeTime36 = 0;
let walkingStartTime36 = 0;
let imageToggleTime36 = 0;
let endReachedTime36 = 0; // Track the time when end position is reached
let walkingdan1X36 = 296;
let useWalkingDan36 = true;
let insertImg;

// ✅✅
function E3S0() {
    background(bg[0]);
    // audio1[0].setVolume(0.5);
    // if (!audio1[0].isPlaying()) {
    //     audio1[0].play();
    // }
    let currentTime = millis();
    let elapsedTime = currentTime - totalTime;

    if (elapsedTime < totalDuration30) {
        let progress = elapsedTime / float(totalDuration30);

        bearX30 = lerp(bearStartX30, bearEndX30, progress);
        bearY30 = lerp(bearStartY30, bearEndY30, progress);
        tigerX30 = lerp(tigerStartX30, tigerEndX30, progress);
        tigerY30 = lerp(tigerStartY30, tigerEndY30, progress);

        let startbearWidth30 = bear_girl[6].width * 0.3;
        let startbearHeight30 = bear_girl[6].height * 0.3;
        let endbearWidth30 = bear_girl[6].width * 0.3 * 2;
        let endbearHeight30 = bear_girl[6].height * 0.3 * 2;

        let starttigerWidth30 = tiger_girl[1].width * 0.3;
        let starttigerHeight30 = tiger_girl[1].height * 0.3;
        let endtigerWidth30 = tiger_girl[1].width * 0.3 * 2;
        let endtigerHeight30 = tiger_girl[1].height * 0.3 * 2;

        bearWidth30 = lerp(startbearWidth30, endbearWidth30, progress);
        bearHeight30 = lerp(startbearHeight30, endbearHeight30, progress);
        tigerWidth30 = lerp(starttigerWidth30, endtigerWidth30, progress);
        tigerHeight30 = lerp(starttigerHeight30, endtigerHeight30, progress);

        if (currentTime - lastSwitchTimeBear30 > switchInterval30) {
            showWalkingbear30 = !showWalkingbear30;
            lastSwitchTimeBear30 = currentTime;
        }

        if (currentTime - lastSwitchTimeTiger30 > switchInterval30) {
            showWalkingtiger30 = !showWalkingtiger30;
            lastSwitchTimeTiger30 = currentTime;
        }
    } else {
        bearX30 = bearEndX30;
        bearY30 = bearEndY30;
        showWalkingbear30 = false;
        bearWidth30 = bear_girl[6].width * 0.3 * 2;
        bearHeight30 = bear_girl[6].height * 0.3 * 2;

        tigerX30 = tigerEndX30;
        tigerY30 = tigerEndY30;
        showWalkingtiger30 = false;
        tigerWidth30 = tiger_girl[1].width * 0.3 * 2;
        tigerHeight30 = tiger_girl[1].height * 0.3 * 2;
    }

    if (showWalkingbear30) {
        image(bear_girl[6], bearX30, bearY30, bearWidth30, bearHeight30);
    } else {
        image(bear_girl[5], bearX30, bearY30, bearWidth30, bearHeight30);
    }

    if (showWalkingtiger30) {
        image(tiger_girl[1], tigerX30, tigerY30, tigerWidth30, tigerHeight30);
    } else {
        image(tiger_girl[0], tigerX30, tigerY30, tigerWidth30, tigerHeight30);
    }
}
// ✅
function E3S1() {
    background(bg[0]);
    let currentTime = millis();

    if (switchCount31 < maxSwitchCount31) {
        // if the interval for switching images has passed and the switch count is less than the maximum, switch the image
        if (currentTime - lastSwitchTime31 > switchInterval31) {
            showHandtiger31 = !showHandtiger31;
            showHandbear31 = !showHandbear31;
            lastSwitchTime31 = currentTime;
            switchCount31++;
        }
    } else {
        // if the switch count has reached the maximum, switch to the final images and start the animation after 0.3 seconds
        if (!finalImages31 && currentTime - lastSwitchTime31 > 300) {
            finalImages31 = true;
            showHandtiger31 = false;
            showHandbear31 = false;
            startAnimation31 = true;
            animationStartTime31 = currentTime;
        }
    }

    // adjust image size (75%)
    let imgScale = 0.75;

    if (finalImages31) {
        // set the position for the final images
        let targetY = 300;
        let finalY = 400;

        // proceed with the animation
        if (startAnimation31) {
            let t1 = (currentTime - animationStartTime31) / 1000.0;

            // move to the target position in 1 second, then immediately move to the final position
            if (t1 <= 1.0) {
                tigerX31 = lerp(tigerX31, 1020, t1);
                bearX31 = lerp(bearX31, 1280, t1);

                tigerY31 = lerp(tigerY31, targetY, t1);
                bearY31 = lerp(bearY31, targetY, t1);
            } else {
                let t2 = (t1 - 1.0) * 2;  // move quickly in 0.5 seconds
                tigerY31 = lerp(targetY, finalY, t2);
                bearY31 = lerp(targetY, finalY, t2);

                if (t2 >= 1.0) {
                    tigerY31 = finalY;
                    bearY31 = finalY;
                    startAnimation31 = false; // end the animation
                }
            }
        }

        // draw the final images
        image(tiger_girl[8], tigerX31, tigerY31, tiger_girl[8].width * imgScale, tiger_girl[8].height * imgScale);
        image(bear_girl[15], bearX31, bearY31, bear_girl[15].width * imgScale, bear_girl[15].height * imgScale);
    } else {
        // draw the images
        if (showHandtiger31) {
            image(tiger_girl[7], tigerX31, tigerY31, tiger_girl[7].width * imgScale, tiger_girl[7].height * imgScale);
        } else {
            image(tiger_girl[9], tigerX31, tigerY31, tiger_girl[9].width * imgScale, tiger_girl[9].height * imgScale);
        }

        if (showHandbear31) {
            image(bear_girl[13], bearX31, bearY31, bear_girl[13].width * imgScale, bear_girl[13].height * imgScale);
        } else {
            image(bear_girl[16], bearX31, bearY31, bear_girl[16].width * imgScale, bear_girl[16].height * imgScale);
        }
    }
}
// ✅
function E3S2() {
// draw background image
    background(bg[4]);

    // set scale
    let scale = 0.6;

    // draw flowers image at (400, 300) position (only when flowersVisible is true)
    if (flowersVisible32) {
        image(flowers, 331, 478, flowers.width * scale - 100, flowers.height * scale - 100);
    }

    // draw tigerandbear image, further reduced by 10%, at (1118, 227) position
    let tigerandbearScale = scale * 0.9;  // further reduce by 10%
    image(couple_alt, 1118, 227, couple_alt.width * tigerandbearScale, couple_alt.height * tigerandbearScale);

    // draw woong image while moving
    image(man32, woongX32, woongY32, man[12].width * scale, man[12].height * scale);

    // display message
    if (showMessage32 && millis() - messageStartTime32 < 1500) {  // display message for 1.5 seconds
        stroke('#98EAE8');
        strokeWeight(4);
        fill('#FCFCF0');
        rect(width / 2 - 400, height - 220, 800, 170, 20);

        // draw woongface image, reduced by 30%
        let woongfaceScale = 0.7;
        image(face[0], width / 2 - 286, height - 200, face[0].width * woongfaceScale, face[0].height * woongfaceScale);

        fill(0);
        textAlign(CENTER, CENTER);
        textSize(32);
        text("Please wait a little bit.", width / 2, height - 140);
    } else if (showMessage32 && millis() - messageStartTime32 >= 1500) {
        showMessage32 = false;
        // set start of movement
        isMoving32 = true;
        moveStartTime32 = millis();
        lastImageChangeTime32 = millis();  // reset image change timer
        man32 = man[8];  // change to first image
    }

    // move woong image to target position
    if (isMoving32) {
        let elapsedTime = millis() - moveStartTime32;
        if (elapsedTime < moveDuration32) {
            let t = elapsedTime / moveDuration32;
            woongX32 = lerp(1080, targetX32, t);

            // change image every 0.3 seconds
            if (millis() - lastImageChangeTime32 >= 300) {
                lastImageChangeTime32 = millis();
                // change image
                if (useFirstImage32) {
                    man32 = man[9];  // change to second image
                } else {
                    man32 = man[8];  // change to first image
                }
                useFirstImage32 = !useFirstImage32;  // toggle image change flag
            }
        } else {
            woongX32 = targetX32;
            man32 = man[8];  // finally set to first image
            isMoving32 = false;
            isReturning32 = true;  // set to returning state
            moveStartTime32 = millis();  // set start time of returning
            lastImageChangeTime32 = millis();  // reset image change timer
            flowersVisible32 = false;  // set flowers image to invisible
        }
    }

    // move woong image to return
    if (isReturning32) {
        let elapsedTime = millis() - moveStartTime32;
        if (elapsedTime < moveDuration32) {
            let t = elapsedTime / moveDuration32;
            woongX32 = lerp(targetX32, returnX32, t);

            // change image every 0.3 seconds
            if (millis() - lastImageChangeTime32 >= 300) {
                lastImageChangeTime32 = millis();
                // change image
                if (useFirstImage32) {
                    man32 = man[11];  // change to second image
                } else {
                    man32 = man[10];  // change to first image
                }
                useFirstImage32 = !useFirstImage32;  // toggle image change flag
            }
        } else {
            woongX32 = returnX32;
            man32 = loadImage("assets/man_12.png");  // change to rightwoong.png
            couple_alt = couple_alt_happy; // change to happytigerandbear.png
            isReturning32 = false;
            finalMessageShown32 = true;  // set final message display
            messageStartTime32 = millis();  // set message display time
        }
    }

    // display final message
    if (finalMessageShown32) {
        stroke('#98EAE8');
        strokeWeight(4);
        fill('#FCFCF0');
        rect(width / 2 - 400, height - 220, 800, 170, 20);

        // draw woongface image, reduced by 30%
        let woongfaceScale = 0.7;
        image(face[0], width / 2 - 286, height - 200, face[0].width * woongfaceScale, face[0].height * woongfaceScale);

        fill(0);
        textAlign(CENTER, CENTER);
        textSize(32);
        text("Would you both marry me?", width / 2, height - 140);
    }
}
// ✅
function E3S3() {
// set background
    background(bg33);

    // draw baby image at the center of the screen
    let babyWidth = baby[1].width;
    let babyHeight = baby[1].height;
    imageMode(CENTER);

    if (isBabyRotating33) {
        // sequentially output mini images
        if (miniIndex33 < hidden.length) {
            image(hidden[miniIndex33], width / 2 - 150 - 100, babyY33, babyWidth, babyHeight);
            image(hidden[miniIndex33], width / 2 - 150 + 500, babyY33, babyWidth, babyHeight);
            if (millis() - lastMiniSwitchTime33 > miniSwitchInterval33) {
                miniIndex33++;
                lastMiniSwitchTime33 = millis();
            }
        } else {
            // output dangun and bumgun images
            image(dangun[1], width / 2 - 150 - 100, babyY33, babyWidth, babyHeight);
            image(boy[6], width / 2 - 150 + 500, babyY33, boy[6].width * 0.72, boy[6].height * 0.72); // reduce bumgun image by 20%
            isDangunDisplayed33 = true; // mark that dangun image has been output
        }
    } else {
        // draw baby images
        image(isBaby1_33 ? baby[1] : baby[2], width / 2 - 150 - 100, babyY33, babyWidth, babyHeight);
        image(isBaby3_33 ? baby[3] : baby[2], width / 2 - 150 + 500, babyY33, babyWidth, babyHeight);

        // change Y position of Baby image
        babyY33 += babySpeed33;

        // if Baby image moves up and down the screen, change direction
        if (babyY33 <= height / 2 - 5 || babyY33 >= height / 2 + 5) {
            babySpeed33 *= -1; // change moving direction to opposite
        }

        // check image switching timing
        if (millis() - lastBabySwitchTime33 > babySwitchInterval33) {
            isBaby1_33 = !isBaby1_33;
            isBaby3_33 = !isBaby3_33;
            lastBabySwitchTime33 = millis();
        }
    }

    // check season image switching timing
    if (millis() - lastSeasonSwitchTime33 > seasonSwitchInterval33) {
        // switch to next season image
        seasonIndex33 = (seasonIndex33 + 1) % 4;
        bg33 = season[seasonIndex33];
        lastSeasonSwitchTime33 = millis();
    }
}
// ✅
function E3S4() {
    background(bg[11]);

    if (!imagesSwitched34) {
        image(crown34, crownwoongX34, 380);
        image(dangun5_34, 600, 410);
        image(boy0_34, 850, 410);
    } else {
        image(man15_34, 380, 380);
        image(dangun6_34, 600, 375);
        if (moveAngrybum34) {
            let elapsedTime = (millis() - animationStartTime34) / 1000.0;
            let progress = min(elapsedTime / animationDuration34, 1);
            angrybumX34 = lerp(850, angrybumTargetX34, progress);

            // 0.4초마다 이미지 교체
            useAngrybum34 = (int)(elapsedTime * 2.5) % 2 !== 1;

            if (useAngrybum34) {
                image(boy2_34, angrybumX34, 420);
            } else {
                image(boy3_34, angrybumX34, 420);
            }

            if (progress >= 1) {
                moveAngrybum34 = false; // 애니메이션 종료
                angrybumVisible34 = false; // 최종 도착 후 이미지 숨김
            }
        } else if (angrybumVisible34) {
            image(boy1_34, 850, 420);
        }
    }

    // 하단 텍스트와 사각형
    stroke(changeToRed34 ? color(255, 0, 0) : color(152, 234, 232));
    strokeWeight(4);
    fill(color(252, 252, 240));
    rect(width / 2 - 400, height - 220, 800, 170, 20);

    // woongface 이미지를 변경
    let woongfaceToDraw = changeWoongface34 ? face[5] : face[0];
    let woongfaceScale = 0.7;
    if (changeWoongface34) {
        image(woongfaceToDraw, bumfaceX34, bumfaceY34, woongfaceToDraw.width * woongfaceScale, woongfaceToDraw.height * woongfaceScale);
    } else {
        image(woongfaceToDraw, width / 2 - 300, height - 200, woongfaceToDraw.width * woongfaceScale, woongfaceToDraw.height * woongfaceScale);
    }

    fill(0);
    textAlign(CENTER, CENTER);
    textSize(32);
    text(changeText34 ? "No way...." : message34, width / 2, height - 140);

    // crownwoong 이미지 이동 애니메이션
    if (moveCrownwoong34) {
        let elapsedTime = (millis() - animationStartTime34) / 1000.0;
        let progress = min(elapsedTime / animationDuration34, 1);
        crownwoongX34 = lerp(16, crownwoongTargetX34, progress);

        // 0.4초마다 이미지 교체
        if ((int)(elapsedTime * 2.5) % 2 === 1) {
            crown34 = man14_34;
        } else {
            crown34 = man13_34;
        }

        if (progress >= 1) {
            moveCrownwoong34 = false; // 애니메이션 종료
            crown34 = man13_34; // 최종 도착 이미지 설정
            imagesSwitched34 = true; // 이미지 교체
            message34 = "Dangun!"; // 텍스트 변경
        }
    }
}
// ✅
function E3S5() {
// 배경 이미지 그리기
    background(bg[12]);

    // 애니메이션 처리
    if (moveAngrybum35) {
        let elapsedTime = (millis() - animationStartTime35) / 1000.0;
        let progress = min(elapsedTime / animationDuration35, 1);
        angrybumX35 = lerp(-150, angrybumTargetX35, progress);

        // 0.3초마다 이미지 교체
        useAngrybum35 = (int)(elapsedTime * 10) % 3 < 1.5;

        if (progress >= 1) {
            moveAngrybum35 = false; // 애니메이션 종료
            useAngrybum35 = true; // 최종 도착 이미지 설정
        }
    }

    // 지정된 위치에 이미지 그리기
    if (useAngrybum35 && !swapToAngrybum35) {
        image(boy[7], angrybumX35, 420, boy[7].width / 2, boy[7].height / 2);
    } else if (!swapToAngrybum35) {
        image(boy[8], angrybumX35, 420, boy[8].width / 2, boy[8].height / 2);
    } else {
        image(boy[9], angrybumX35 - 10, 440, boy[9].width / 2, boy[9].height / 2);

        if (!timerStarted35) {
            swapTime35 = millis(); // boy[4]로 변경된 시간 기록
            timerStarted35 = true;
        }

        // angrybum3로 변경된 지 2.5초가 지나면
        if (millis() - swapTime35 >= 2000) {
            woongfaceText35 = "It's the beginning of the war"; // 텍스트 변경
            sword = null; // sword.png 삭제
            boy[9] = boy[10]; // boy[4]를 boy[5]로 변경
        }
    }

    if (sword != null) {
        image(sword, 700, 600, sword.width / 2, sword.height / 2);
    }

    // woongface 이미지와 텍스트 표시
    if (showWoongface35) {
        stroke(changeToRed34 ? color(255, 0, 0) : color(152, 234, 232));
        strokeWeight(4);
        fill(color(252, 252, 240));
        rect(width / 2 - 400, height - 180, 800, 140, 20);
        let woongfaceScale = 0.25;
        image(face[2], width / 2 - 490, height-213 , face[2].width * woongfaceScale, face[2].height * woongfaceScale);
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(32);
        text(woongfaceText35, width / 2, height - 110); // 변경된 텍스트 출력
    }
}
// E3 S6 형이 분노하고 반란을 일으킴 (칼 클릭 시 반란이 일어남)
function E3S6() {
    background(bg[6]);

    if (insertImg != null) {
        let newWidth = insertImg.width / 2.0;
        let newHeight = insertImg.height / 2.0;
        image(insertImg, 482, 400, newWidth, newHeight);
    }

    if (!flagRemoved36) { // Only draw the flag if it has not been removed
        let flagWidth = flag.width / 2.0;
        let flagHeight = flag.height / 2.0;
        image(flag, -182, 641, flagWidth, flagHeight);
    }

    if (displayRect36) {
        if (isSecondClick36) {
            stroke('#FF0000');
        }
        if (isFifthClick36) {
            stroke('#ABE387');
        } else {
            stroke('#ABE387');
        }
        strokeWeight(4);
        fill('#FCFCF0');
        rect(width / 2 - 400, height - 220, 800, 170, 20);

        fill(0);
        textAlign(CENTER, CENTER);
        textSize(32);

        if (isFifthClick36) {
            text("It's too late.", width / 2, height - 140);
        } else if (isFourthClick36) {
            text("Please show me your mercy...", width / 2, height - 140);
        } else if (isSecondClick36) {
            text("My father didn't respect me first.", width / 2, height - 140);
        } else {
            text("It's disrespectful of your father", width / 2, height - 140);
        }

        let faceImg;
        if (isFifthClick36) {
            faceImg = face[4];
        } else if (isFourthClick36) {
            faceImg = face[7];
        } else if (isSecondClick36) {
            faceImg = face[2];
        } else {
            faceImg = face[3];
        }

        let faceWidth = faceImg.width * 0.3;
        let faceHeight = faceImg.height * 0.3;

        if (isFifthClick36) {
            image(faceImg, width / 2 - 200 - faceWidth / 2, height - 229 + 85 - faceHeight / 2, faceWidth, faceHeight);
        } else if (isFourthClick36 || isSecondClick36) {
            image(faceImg, width / 2 - 562 - 20, height - 229 + 85 - faceHeight / 2 + 30 - (isFourthClick36 ? 15 : 0), faceWidth, faceHeight);
        } else {
            image(faceImg, width / 2 - 562, height - 229 + 85 - faceHeight / 2, faceWidth, faceHeight);
        }
    }

    if (isThirdClick36) {
        if (millis() - lastChangeTime36 >= 300 && imgIndex36 <= maxImgIndex36) {
            lastChangeTime36 = millis();
            imgIndex36++;
            if (imgIndex36 <= maxImgIndex36) {
                insertImg = loadImage("assets/motion_c/c" + imgIndex36 + ".png");
            }
        }
    }

    if (isFourthClick36) {
        stroke('#FF0000');
        strokeWeight(4);
        fill('#FCFCF0');
        rect(width / 2 - 400, height - 220, 800, 170, 20);

        fill(0);
        textAlign(CENTER, CENTER);
        textSize(32);
        text("Please show me your mercy...", width / 2, height - 140);

        let faceWidth = face[7].width * 0.3;
        let faceHeight = face[7].height * 0.3;
        image(face[7], width / 2 - 562 - 20, height - 229 + 85 - faceHeight / 2 + 30 - 20, faceWidth, faceHeight);
    }

    if (isSixthClick36) {
        let motion_c15_2Width = motion_c15_2.width * 0.5;
        let motion_c15_2Height = motion_c15_2.height * 0.5;
        image(motion_c15_2, 693, 511, motion_c15_2Width, motion_c15_2Height);

        if (isSeventhClick36) {
            let walkingdan1Width = dangun[8].width * 0.5;
            let walkingdan1Height = dangun[8].height * 0.5;

            if (!isWalking36) {
                walkingStartTime36 = millis();
                isWalking36 = true;
            }

            if (isWalking36) {
                let elapsedTime = millis() - walkingStartTime36;
                let duration = 2000; // 2 seconds
                let startX = 296;
                let endX = 60;
                if (elapsedTime <= duration) {
                    walkingdan1X36 = lerp(startX, endX, elapsedTime / duration);
                } else {
                    walkingdan1X36 = endX; // Ensure it stops at endX
                    if (!reachedEnd36) {
                        reachedEnd36 = true; // Mark the end position is reached
                        endReachedTime36 = millis(); // Record the time when the end is reached
                    }
                }

                if (!reachedEnd36 && millis() - imageToggleTime36 >= 400) {
                    useWalkingDan36 = !useWalkingDan36;
                    imageToggleTime36 = millis();
                }

                let currentWalkingImg;
                if (reachedEnd36) {
                    if (millis() - endReachedTime36 >= 500) { // 0.5 seconds after reaching the end
                        currentWalkingImg = dangun[7]; // Change to dangun[7]
                        flagRemoved36 = true; // Remove the flag
                    } else {
                        currentWalkingImg = dangun[10]; // Show dangun[10] before changing to dangun[7]
                    }
                } else {
                    currentWalkingImg = useWalkingDan36 ? dangun[8] : dangun[9];
                }

                image(currentWalkingImg, walkingdan1X36, 397, walkingdan1Width, walkingdan1Height);
            }
        } else {
            let motion_c15_1Width = motion_c15_1.width * 0.5;
            let motion_c15_1Height = motion_c15_1.height * 0.5;
            image(motion_c15_1, 296, 397, motion_c15_1Width, motion_c15_1Height);
        }
    }
}

// trigger mousePressed
function ending03Pressed() {
    switch(currentScene % (currentTeam * 10)) {
        case 1:
            // E3 S1 빛을 가져다 대면 곰과 범이 사람으로 변함
            currentScene++
            totalTime = millis()
            // DEBUG: 콘솔창에 정보 출력
            if (devMode) {
                print("Total (sec)", round(millis() / 1000))
                print("Current Scene", currentScene)
            }
            break;
        case 2:
            let scale = 0.6;
            if (mouseX > 1080 && mouseX < 1080 + man[12].width * scale && mouseY > 346 && mouseY < 346 + man[12].height * scale) {
                // change image
                man[12] = man[8];

                // set message display
                showMessage32 = true;
                messageStartTime32 = millis();
            }
            break;
        case 3:
            // when mouse is clicked, switch baby image to rotating state
            isBabyRotating33 = true;
            miniIndex33 = 0; // reset mini image index
            lastMiniSwitchTime33 = millis(); // record start time of mini image switching
            seasonSwitchInterval33 = 200; // change interval of season image switching
            break
        case 4:
            // rect 클릭 여부 확인
            if (mouseX > width / 2 - 400 && mouseX < width / 2 + 400 && mouseY > height - 220 && mouseY < height - 50) {
                message34 = "The next king is...";
                moveCrownwoong34 = true;
                animationStartTime34 = millis();
            }

            // bumgun2 이미지 클릭 여부 확인
            if (imagesSwitched34 && mouseX > 850 && mouseX < 850 + boy1_34.width && mouseY > 420 && mouseY < 420 + boy1_34.height) {
                changeToRed34 = true;
                changeWoongface34 = true;
                changeText34 = true;
                moveAngrybum34 = true;
                boy1_34 = boy2_34;
                bumfaceX34 = 372;
                bumfaceY34 = 810;
                animationStartTime34 = millis();
                angrybumVisible34 = true; // 이미지 표시
            }
            break
        case 5:
            // angrybum1 이미지 클릭 여부 확인
            if (moveAngrybum35 === false && useAngrybum35 && mouseX > angrybumTargetX35 && mouseX < angrybumTargetX35 + boy[7].width / 2 && mouseY > 420 && mouseY < 420 + boy[7].height / 2) {
                swapToAngrybum35 = true; // angrybum3로 변경
                showWoongface35 = true; // woongface 이미지와 텍스트 표시
                timerStarted35 = false; // 타이머 초기화
            } else if (mouseX > angrybumX35 && mouseX < angrybumX35 + boy[7].width / 2 && mouseY > 420 && mouseY < 420 + boy[7].height / 2) {
                moveAngrybum35 = true;
                animationStartTime35 = millis();
                swapToAngrybum35 = false; // angrybum3로 변경할 준비 초기화
                showWoongface35 = false; // woongface 이미지와 텍스트 숨기기
            }
        case 6:
            if (isSixthClick36) {
                isSeventhClick36 = true;
                lastChangeTime36 = millis();
                return;
            }

            if (isFifthClick36) {
                insertImg = null;
                displayRect36 = false;
                isFifthClick36 = false;
                isSixthClick36 = true;
                return;
            }

            if (isFourthClick36) {
                insertImg = loadImage("assets/motion_c/c14.png");
                displayRect36 = true;
                isFourthClick36 = false;
                isFifthClick36 = true;
                return;
            }

            if (isThirdClick36) {
                if (imgIndex36 > maxImgIndex36) {
                    isFourthClick36 = true;
                }
                return;
            }

            if (displayRect36) {
                if (isSecondClick36) {
                    displayRect36 = false;
                    isThirdClick36 = true;
                    lastChangeTime36 = millis();
                } else {
                    isSecondClick36 = true;
                }
            } else {
                displayRect36 = true;
            }
            break
        default:
            console.log("PRESSED_FUNCTION_ERROR_3_3")
    }
}