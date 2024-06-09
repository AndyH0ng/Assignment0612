// E2S0
let tgX40 = 1380;
let tgY40 = 420;
let tgWidth40;
let tgHeight40;
let showWalking40 = true;  // 어떤 이미지를 보여줄지 추적
let lastSwitchTime40 = 0;  // 마지막으로 이미지를 교체한 시간
let switchInterval40 = 500;  // 이미지 교체 간격 (밀리초)
let stopSwitchTime40 = 4000;  // 이미지 교체를 멈출 시간 (밀리초)

// E2S1
let isHappy41 = false;
let happyY41;
let speed41 = 3;
let currentImage41 = 1;
let interval41 = 600; // 0.6초 간격 (600 밀리초)
let lastSwitchTime41 = 0;
let pressedTime21 = 0;

// E2S2
let showThinking2_42 = false;
let thinkChanged42 = false;
let changeBackground42 = false;
let cloudMovement42 = false;
let showThinking1_42 = true;
let showThinking3_42 = true;
let showThinking4_42 = true;
let showThink42 = true;
let lastSwitchTime42 = 0;
let backgroundChangeTime42 = 0;
let cloud1X_42 = 2500, cloud2X_42 = -2500, cloud3X_42 = -2300, cloud4X_42 = 2500, cloud5X_42 = -2500;
let pressedTime42 = 0;
let isPressed42 = false;

// E2S3
let textToDisplay23 = "Let's feed mugwort and garlic to other tigerfriends!";
let isPressed43 = false;
let pressedTime43 = 0;

// E2S4
let tiger1Angle24 = 0;
let tiger2Angle24 = 0;
let tiger3Angle24 = 0;
let tiger1RotationSpeed24 = 0;
let tiger2RotationSpeed24 = 0;
let tiger3RotationSpeed24 = 0;
let rotationStartTime24 = 0;
let rotationStarted24 = false;
let cloud1X_24 = -2800;
let cloud2X_24 = -2500;
let backgroundChangeTime24 = 0;
let tiger1Visible24 = true;
let tiger2Visible24 = true;
let tiger3Visible24 = true;
let people1Visible24 = true;
let people2Visible24 = true;
let scaledMouseX24;
let scaledMouseY24;

// E2S5
let walkingImageX25 = 2400;
let walkingImageY25 = 320;
let walkingImageTime25 = 0;
let showWalking3_25 = true;
let showText1_25 = false;
let showText2_25 = false;
let showText3_25 = false;
let showText4_25 = false;
let textToggleCount25 = 0;
let pressedTime45 = 0;

// E2S6
let currentImageIndex26 = 0;
let lastImageChangeTime26 = 0;
let showAlternateImages26 = false;

// E2S7
let currentImageIndex27 = 0;
let showBImages27 = true;
let fadeAlpha27 = 0; // 화면 어두움을 나타내는 알파 값
let lastImageChangeTime27 = 0;
let imageChangeInterval27 = 100; // 이미지 변경 간격 (0.1초)

let message27 = "In the end, the tiger girl was eaten by the tiger.";
let displayedMessage27 = "";
let currentCharIndex27 = 0;
let showMessage27 = false;
let messageStartTime27 = 0;
let letterInterval27 = 100; // 텍스트가 나타나는 간격 (0.1초)

// E2 S0 동굴에서 사람으로 변한 호랑이가 나옴 : 3sec
function E2S0() {
    background(bg[0]);

    // 현재 시간 가져오기
    let currentTime40 = millis();

    // 5초가 지나기 전에는 이미지 교체
    if (currentTime40 < stopSwitchTime40) {
        // 이미지 교체 간격이 지나면 이미지 교체
        if (currentTime40 - lastSwitchTime40 > switchInterval40) {
            showWalking40 = !showWalking40;  // 이미지 교체
            lastSwitchTime40 = currentTime40;  // 마지막 교체 시간 업데이트
        }
    } else {
        // 5초가 지나면 walking3 이미지 유지
        showWalking40 = true;
    }

    // 이미지 그리기
    if (showWalking40) {
        image(tiger_girl[0], tgX40, tgY40, tgWidth40, tgHeight40);
    } else {
        image(tiger_girl[1], tgX40, tgY40, tgWidth40, tgHeight40);
    }

    // 위치와 크기 업데이트
    if (tgX40 > 1000) {
        tgX40 -= 3;  // 왼쪽으로 이동
        tgWidth40 += 2;  // 너비 증가
        tgHeight40 += 2.5;  // 높이 증가
    }
}
// ✅✅
function E2S1() {
    background(bg[0]);

    // 경과 시간 계산
    let elapsedTime41 = millis() - totalTime;

    // 일정 시간(5초 = 5000 밀리초)이 지나면 happy2 이미지로 교체
    if (elapsedTime41 >= 5000) {
        isHappy41 = true;
        happyY41 = 420; // 초기 위치 설정
    }

    if (isHappy41) {
        // Happy2 이미지 그리기
        image(tiger_girl[4], 1000, happyY41);

        // Happy2 이미지 이동
        if (happyY41 <= 320) {
            speed41 = abs(speed41);
        } else if (happyY41 >= 420) {
            speed41 = -abs(speed41);
        }
        happyY41 += speed41;
    } else {
        // 이미지 교체 타이밍 체크
        if (millis() - lastSwitchTime41 > interval41) {
            currentImage41 = (currentImage41 === 1) ? 2 : 1;
            lastSwitchTime41 = millis();
        }

        // 체크3 이미지의 크기 조정 (0.7배로 줄이기)
        let checkWidth41 = tiger_girl[2].width * 0.8;
        let checkHeight41 = tiger_girl[2].height * 0.8;

        // 현재 이미지에 따라 check3 또는 check4 그리기
        if (currentImage41 === 1) {
            image(tiger_girl[2], 1000, 400, checkWidth41, checkHeight41);
        } else {
            image(tiger_girl[3], 1000, 400, checkWidth41, checkHeight41);
        }
    }
    if (pressedTime21 - totalTime >= 5000) {
        next();
    }
}
// ✅✅
function E2S2() {
    if (changeBackground42 && millis() - backgroundChangeTime42 > 3000) {
        background(bg[7]);
    } else {
        background(bg[0]);
    }

    // think 이미지 삽입 (0.7배로 줄임)
    if (showThink42) {
        let currentThink42 = thinkChanged42 ? tiger_girl[6] : tiger_girl[5];
        let thinkWidth42 = currentThink42.width * 0.7;
        let thinkHeight42 = currentThink42.height * 0.7;
        image(currentThink42, 1000, 400, thinkWidth42, thinkHeight42);
        checkCollision2(currentThink42, 1000, 400, thinkWidth42, thinkHeight42);
    }

    // 1초 간격으로 thinking과 thinking2를 번갈아가며 표시
    if (millis() - lastSwitchTime42 > 500) {
        showThinking2_42 = !showThinking2_42;
        lastSwitchTime42 = millis();
    }

    if (showThinking1_42 && showThinking2_42) {
        image(bubble[1], 200, 100);
        checkCollision2(bubble[1], 200, 100, bubble[1].width, bubble[1].height);
    } else if (showThinking1_42) {
        image(bubble[0], 200, 100);
        checkCollision2(bubble[0], 200, 100, bubble[0].width, bubble[0].height);
    }

    if (showThinking3_42) {
        image(bubble[2], 650, 200);
        checkCollision2(bubble[2], 650, 200, bubble[2].width, bubble[2].height);
    }

    if (showThinking4_42) {
        image(bubble[3], 800, 300);
        checkCollision2(bubble[3], 800, 300, bubble[3].width, bubble[3].height);
    }

    if (cloudMovement42) {
        cloud1X_42 -= 15;
        cloud2X_42 += 15;
        cloud3X_42 += 15;
        cloud4X_42 -= 15;
        cloud5X_42 += 15;
    }

    image(cloud_alt[0], cloud1X_42, -400);
    image(cloud_alt[1], cloud2X_42, 100);
    image(cloud_alt[2], cloud3X_42, -200);
    image(cloud_alt[3], cloud4X_42, 0);
    image(cloud_alt[4], cloud5X_42, -400);
    if (isPressed42) {
        if (millis() - pressedTime42 > 5000) {
            next();
        }

    }
}
function checkCollision2(img, imgX, imgY, imgWidth, imgHeight) {
    if (cloudMovement42) {
        if (cloud1X_42 < imgX + imgWidth && cloud1X_42 + cloud_alt[0].width > imgX && 400 < imgY + imgHeight && 400 + cloud_alt[0].height > imgY) {
            showThink42 = false;
        }
        if (cloud2X_42 < imgX + imgWidth && cloud2X_42 + cloud_alt[1].width > imgX && 50 < imgY + imgHeight && 50 + cloud_alt[1].height > imgY) {
            showThinking1_42 = false;
        }
        if (cloud3X_42 < imgX + imgWidth && cloud3X_42 + cloud_alt[2].width > imgX && 150 < imgY + imgHeight && 150 + cloud_alt[2].height > imgY) {
            showThinking3_42 = false;
        }
        if (cloud4X_42 < imgX + imgWidth && cloud4X_42 + cloud_alt[3].width > imgX && 50 < imgY + imgHeight && 50 + cloud_alt[3].height > imgY) {
            showThinking4_42 = false;
        }
        if (cloud5X_42 < imgX + imgWidth && cloud5X_42 + cloud_alt[4].width > imgX && 380 < imgY + imgHeight && 380 + cloud_alt[4].height > imgY) {
            showThinking2_42 = false;
        }
    }
}
// ✅✅
function E2S3() {
    background(bg[8]);

    // 나머지 이미지를 지정된 위치에 삽입합니다.
    image(tiger[0], 240, 330);
    image(tiger[1], 525, 300);
    image(tiger[2], 850, 300);

    // eat 이미지를 (900, 100)에 크기를 0.5배로 줄여서 삽입합니다.
    image(eat[0], 900, 100, eat[0].width / 2, eat[0].height / 2);
    // eat2 이미지를 (1100, 100)에 크기를 0.5배로 줄여서 삽입합니다.
    image(eat[1], 1100, 100, eat[1].width / 2, eat[1].height / 2);
    // eat 이미지를 같은 크기로 (1300, 100)에 삽입합니다.
    image(eat[0], 1300, 100, eat[0].width / 2, eat[0].height / 2);

    // 텍스트 설정
    fill(0); // 글자색을 검은색으로 설정합니다.
    textSize(40); // 글자 크기를 40으로 설정합니다.
    textAlign(CENTER); // 텍스트 정렬을 가운데로 설정합니다.
    text(textToDisplay23, 800, 950); // 텍스트를 (300, 950)에 삽입합니다.
    if (isPressed43) {
        if (millis() - pressedTime43 > 3000) {
            next();
        }
    }
}
// E2 S4 범녀가 호랑이가 있는 곳으로 감 3
function E2S4() {
    if (millis() - backgroundChangeTime24 > 4000) {
        background(bg[7]);
    } else {
        background(bg[9]);

        print(scaledMouseX24, scaledMouseY24)
        scaledMouseX24 = mouseX + 100;
        scaledMouseY24 = mouseY + 100;
        image(eat[0], scaledMouseX24 - 500, scaledMouseY24 - 300, eat[0].width * 0.5, eat[0].height * 0.5);
        image(eat[1], scaledMouseX24 - 300, scaledMouseY24 - 300, eat[1].width * 0.5, eat[1].height * 0.5);

        fill(0);
        textSize(40);
        push();
        text("Okay then, let's go into the forest!", 600, 950);
        pop()
    }

    push();
    translate(240, 530);
    tiger1Angle24 += tiger1RotationSpeed24;
    rotate(radians(tiger1Angle24));
    if (millis() - rotationStartTime24 > 2000 && rotationStarted24) {
        if (people1Visible24 && !checkCollision4(cloud1X_24, 100, crowd[4])) {
            image(crowd[4], -crowd[4].width/2, -crowd[4].height/2);
        } else {
            people1Visible24 = false;
        }
    } else {
        if (tiger1Visible24 && !checkCollision4(cloud1X_24, 100, tiger[0])) {
            image(tiger[0], -tiger[0].width / 2, -tiger[0].height / 2);
        } else {
            tiger1Visible24 = false;
        }
    }
    pop();

    push();
    translate(525, 500);
    tiger2Angle24 += tiger2RotationSpeed24;
    rotate(radians(tiger2Angle24));
    if (millis() - rotationStartTime24 > 2000 && rotationStarted24) {
        if (people2Visible24 && !checkCollision4(cloud1X_24, 400, crowd[5])) {
            image(crowd[5], -crowd[5].width / 2, -crowd[5].height / 2);
        } else {
            people2Visible24 = false;
        }
    } else {
        if (tiger2Visible24 && !checkCollision4(cloud1X_24, 400, tiger[1])) {
            image(tiger[1], -tiger[1].width / 2, -tiger[1].height / 2);
        } else {
            tiger2Visible24 = false;
        }
    }
    pop();

    push();
    translate(850, 500);
    tiger3Angle24 += tiger3RotationSpeed24;
    rotate(radians(tiger3Angle24));
    if (millis() - rotationStartTime24 > 2000 && rotationStarted24) {
        if (people1Visible24 && !checkCollision4(cloud1X_24, 100, crowd[4])) {
            image(crowd[4], -crowd[4].width / 2, -crowd[4].height / 2);
        } else {
            people1Visible24 = false;
        }
    } else {
        if (tiger3Visible24 && !checkCollision4(cloud1X_24, 100, tiger[2])) {
            image(tiger[2], -tiger[2].width / 2, -tiger[2].height / 2);
        } else {
            tiger3Visible24 = false;
        }
    }
    pop();

    if (millis() - rotationStartTime24 > 3000 && rotationStarted24) {
        cloud1X_24 += 100; // cloud 이미지 x좌표 증가
        cloud2X_24 += 100; // cloud2 이미지 x좌표 증가
    }
    image(cloud_alt[0], cloud1X_24, -500, cloud_alt[0].width * 1.5, cloud_alt[0].height * 1.5); // cloud 이미지 1.5배 크기로 출력
    image(cloud_alt[1], cloud2X_24, 100, cloud_alt[1].width * 1.5, cloud_alt[1].height * 1.5); // cloud2 이미지 1.5배 크기로 출력
}
function checkCollision4(cloudX, cloudY, image) {
    let cloudLeft = cloudX;
    let cloudRight = cloudX + cloud.width * 1.5;
    let cloudTop = cloudY;
    let cloudBottom = cloudY + cloud.height * 1.5;

    let imageLeft = -image.width / 2;
    let imageRight = image.width / 2;
    let imageTop = -image.height / 2;
    let imageBottom = image.height / 2;

    return !(cloudRight < imageLeft || cloudLeft > imageRight || cloudBottom < imageTop || cloudTop > imageBottom);
}
// ✅✅
function E2S5() {
    background(bg[10]);
    // 5초가 지나면 text1을 캔버스 크기에 맞게 삽입
    if (millis() - totalTime >= 5000 && textToggleCount25 === 0) {
        showText1_25 = true;
    }

    if (showText1_25) {
        background(bg[13]);
        fill(0); // 검은색
        textSize(50); // 텍스트 크기
        textAlign(LEFT);
        text("Who are you?", 900, 940); // 텍스트 삽입
    } else if (showText2_25) {
        background(bg[14]);
        fill(0); // 검은색
        textSize(50); // 텍스트 크기
        textAlign(LEFT);
        text("Hey guys! I have become human!", 400, 940); // 텍스트 삽입
    } else if (showText3_25) {
        background(bg[15]);
        fill(0); // 검은색
        textSize(50); // 텍스트 크기
        textAlign(LEFT);
        text("I don't know who you are...", 900, 940); // 텍스트 삽입
    } else if (showText4_25) {
        background(bg[16]);
        fill(0); // 검은색
        textSize(50); // 텍스트 크기
        textAlign(LEFT);
        text("I just know you're my prey...!", 900, 940); // 텍스트 삽입
        if (millis() - pressedTime45 >= 3000) {
            next();
        }
    } else {
        if (walkingImageX25 > 1100) {
            walkingImageX25 -= 5; // walking3, walking4 이미지 x 좌표 감소
        }

        if (millis() - walkingImageTime25 >= 500) { // 0.5초마다 이미지 전환
            showWalking3_25 = !showWalking3_25;
            walkingImageTime25 = millis();
        }

        if (showWalking3_25) {
            image(tiger_girl[0], walkingImageX25, walkingImageY25);
        } else {
            image(tiger_girl[1], walkingImageX25, walkingImageY25);
        }

        // 호랑이 이미지 삽입
        image(tiger[0], 140, 530);
        image(tiger[1], 425, 500);
        image(tiger[2], 750, 500);
    }
}
// ✅
function E2S6() {
    background(255); // 흰색 배경

    let currentTime = millis();

    // 처음 12개의 이미지를 0.5초 간격으로 나타나게 함
    if (currentImageIndex26 < 12) {
        if (currentTime - lastImageChangeTime26 >= 200) {
            lastImageChangeTime26 = currentTime;
            currentImageIndex26++;
        }
        image(motion_a[currentImageIndex26], 0, 0, width, height);
    }
    // a13과 a14 이미지를 0.5초 간격으로 번갈아가며 나타나게 함
    else {
        if (currentTime - lastImageChangeTime26 >= 500) {
            lastImageChangeTime26 = currentTime;
            showAlternateImages26 = !showAlternateImages26;
        }
        if (showAlternateImages26) {
            image(motion_a[12], 0, 0, width, height); // a13 이미지
        } else {
            image(motion_a[13], 0, 0, width, height); // a14 이미지
        }
    }
}
// ✅
function E2S7() {
    background(255); // 흰색 배경
    if (showBImages27) {
        if (currentImageIndex27 < 8) {
            // 이미지 변경 간격마다 이미지를 변경
            if (millis() - lastImageChangeTime27 > imageChangeInterval27) {
                currentImageIndex27++;
                lastImageChangeTime27 = millis();
            }
            // 현재 이미지를 표시
            if (currentImageIndex27 < 8) {
                image(motion_b[currentImageIndex27], 0, 0, width, height);
            }
        } else {
            // b8 이미지가 나왔을 때 화면 어두워지기
            fadeAlpha27 += 5;
            if (fadeAlpha27 >= 255) {
                fadeAlpha27 = 255;
                fill(0, fadeAlpha27);
                rect(0, 0, width, height);
            } else {
                fill(0, fadeAlpha27);
                rect(0, 0, width, height);
            }

            // 1초 후에 텍스트 표시 시작
            if (millis() - lastImageChangeTime27 > 1000 && !showMessage27) {
                showMessage27 = true;
                messageStartTime27 = millis();
            }
        }
    }

    if (showMessage27) {
        if (currentCharIndex27 < message27.length) {
            // 현재 글자를 나타내기 위해 인덱스 계산
            let elapsedTime = millis() - messageStartTime27;
            currentCharIndex27 = min(elapsedTime / letterInterval27, message27.length - 1);
            displayedMessage27 = message27.substring(0, currentCharIndex27 + 1);
        }
        push();
        fill(255); // 흰색
        textSize(90); // 텍스트 크기
        textAlign(LEFT);
        text(displayedMessage27, 100, height / 2 + 45); // x좌표를 100으로 설정하여 화면 왼쪽에 텍스트 표시
        pop();
    }
}

// trigger mouseDragged
function ending02Dragged() {
    switch(currentScene % (currentTeam * 10)) {

    }
}

// trigger mousePressed
function ending02Pressed() {
    switch(currentScene % (currentTeam * 10)) {
        case 1:
            isHappy41 = !isHappy41;
            if (isHappy41) {
                happyY41 = 420;
                pressedTime21 = millis();
            }
            break;
        case 2:
            if (mouseX >= 200 && mouseX <= 200 + tiger_girl[5].width &&
                mouseY >= 100 && mouseY <= 100 + tiger_girl[5].height) {
                thinkChanged42 = true;
                cloudMovement42 = true;
                changeBackground42 = true;
                backgroundChangeTime42 = millis();
            }
            if (isPressed42 === false) {
                isPressed42 = true;
                pressedTime42 = millis();
            }
            break;
        case 3:
            textToDisplay23 = "If you do this, your tiger friends will turn into humans, right?";
            if (isPressed43 === false) {
                isPressed43 = true;
                pressedTime43 = millis();
            }
            break;
        case 4:
            if (mouseButton === LEFT) {
                tiger1RotationSpeed24 = 8;
                tiger2RotationSpeed24 = 8;
                tiger3RotationSpeed24 = 8;
                rotationStartTime24 = millis();
                rotationStarted24 = true;
                backgroundChangeTime24 = millis(); // 배경 변경 시간 초기화
            }
            break
        case 5:
            if (millis() - totalTime >= 5000) { // 5초가 지난 후에만 마우스 클릭 기능 활성화
                textToggleCount25++;
                if (textToggleCount25 === 1) {
                    showText1_25 = false;
                    showText2_25 = true;
                } else if (textToggleCount25 === 2) {
                    showText2_25 = false;
                    showText3_25 = true;
                } else if (textToggleCount25 === 3) {
                    showText3_25 = false;
                    showText4_25 = true;
                    pressedTime45 = millis();
                }
            }
            break
        default:
            console.log("PRESSED_FUNCTION_ERROR_3_2")
    }
}

