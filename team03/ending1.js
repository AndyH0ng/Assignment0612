// E1S0
let tgX10 = 1380;
let tgY10 = 420;
let tgWidth10;
let tgHeight10;
let showWalking10 = true;  // 어떤 이미지를 보여줄지 추적
let lastSwitchTime10 = 0;  // 마지막으로 이미지를 교체한 시간
let switchInterval10 = 500;  // 이미지 교체 간격 (밀리초)
let stopSwitchTime10 = 4000;  // 이미지 교체를 멈출 시간 (밀리초)

// E1S1
let isHappy11 = false;
let happyY11;
let speed11 = 3;
let currentImage11 = 1;
let interval11 = 600;
let lastSwitchTime11 = 0;
let tempTime11;
let pressTime11 = 0;
let played11 = false;
let pressedTime11 = 0;

// E1S2
let cloudX12 = 400;
let cloudY12 = -30;
let cloudSpeed12 = 5;
let movingLeft12 = true;
let useLeftImage12 = true;
let beargirlClicked12 = false;
let rectClicked12 = false;
let cloudTransition12 = false;
let cloudChanged12 = false;
let cloudArrived12 = false;
let rectClickTime12 = 0;
let cloudStartTime12;
let cloudEndX12 = 400; // prayBeargirl의 왼쪽 위치로 설정
let cloudEndY12 = 270;
let cloudStartX12, cloudStartY12;
let animationDuration12 = 2.0; // 2 seconds

// E1S3
let leftHandClicked13 = false;
let transitionComplete13 = false;
let cloudWoongMoving13 = false;
let cloudFlowerWoongMoving13 = false;
let flowerVisible13 = true; // Flower 이미지 표시 여부
let cloudWoongX13 = 500;
let cloudWoongY13 = 50;
let cloudWoongSpeedX13 = 0;
let cloudWoongSpeedY13 = 0;

// E1S5
let seasonIndex15 = 0; // 현재 표시할 계절 사진의 인덱스
let babySwitchInterval15 = 1000; // baby와 baby2 이미지 전환 간격 (1초)
let miniSwitchInterval15 = 300; // mini 이미지 전환 간격 (0.3초)
let seasonSwitchInterval15 = 500; // 계절 이미지 전환 간격 (0.5초)
let lastBabySwitchTime15 = 0;
let lastMiniSwitchTime15 = 0;
let lastSeasonSwitchTime15 = 0;
let isBaby15 = true;
let isBabyRotating15 = false;
let isDangunDisplayed15 = false;
let babyY15;
let babySpeed15 = 0.3;
let miniIndex15 = 0;

// E1S6
let x16, y16;
let sizeW16, sizeH16;
let ySpeed16;
let switchTime16 = 15;  // 0.5초마다 이미지 변경 (30프레임 기준)
let frameCounter16 = 0;
let animating16 = true;  // 애니메이션 상태
let flagClicked16 = false;  // flagDan이 클릭되었는지 여부
let peopleAnimating16 = false;
let happyFrameCounter16 = 0;
let currentImg16;

// E1S7
let currentImg17;
let x17, y17;
let sizeW17, sizeH17;
let ySpeed17;
let switchTime17 = 15;  // 0.5초마다 이미지 변경 (30프레임 기준)
let frameCounter17 = 0;
let animating17 = true;  // 애니메이션 상태
let flagClicked17 = false;  // flagDan이 클릭되었는지 여부
let peopleAnimating17 = false;
let happyFrameCounter17 = 0;
// E1 S0 곰이 동굴에서 나온다 : 3sec
function E1S0() {
    background(bg[0]);
    // 현재 시간 가져오기
    let currentTime10 = millis() - totalTime;

    // 5초가 지나기 전에는 이미지 교체
    if (currentTime10 < stopSwitchTime10) {
        // 이미지 교체 간격이 지나면 이미지 교체
        if (currentTime10 - lastSwitchTime10 > switchInterval10) {
            showWalking10 = !showWalking10;  // 이미지 교체
            lastSwitchTime10 = currentTime10;  // 마지막 교체 시간 업데이트
        }
    } else {
        // 5초가 지나면 walking1 이미지 유지
        showWalking10 = true;
    }

    // 이미지 그리기
    if (showWalking10)
        image(bear_girl[5], tgX10, tgY10, tgWidth10, tgHeight10);
    else
        image(bear_girl[6], tgX10, tgY10, tgWidth10, tgHeight10);

    // 위치와 크기 업데이트
    if (tgX10 > 1000) {
        tgX10 -= 3;  // 왼쪽으로 이동
        tgWidth10 += 2;  // 너비 증가
        tgHeight10 += 2.5;  // 높이 증가
    }

    if (millis() - pressTime11 > 3000) {
        next();
    }
}
// E1 S1 빛을 가져다 대면 곰이 사람으로 변함 : 7sec (drag)
function E1S1() {
    background(bg[0]);
    // if (!audio1[0].isPlaying() && played11 === false) {
    //     played11 = true;
    //     sound(audio1[1]);
    // }

    // 일정 시간(5초 = 5000 밀리초)이 지나면 happy 이미지로 교체
    if (totalTime - millis() >= 5000) {
        isHappy11 = true;
        happyY11 = 420; // 초기 위치 설정
    }

    if (isHappy11) {
        // Happy 이미지 그리기
        image(bear_girl[9], 1000, happyY11);
        // Happy 이미지 이동
        if (happyY11 <= 320)
            speed11 = abs(speed11);
        else if (happyY11 >= 420)
            speed11 = -abs(speed11);
        happyY11 += speed11;
    } else {
        // 이미지 교체 타이밍 체크
        if (millis() - lastSwitchTime11 > interval11) {
            currentImage11 = (currentImage11 === 1) ? 2 : 1;
            lastSwitchTime11 = millis();
        }

        // 체크 이미지의 크기 조정 (0.7배로 줄이기)
        let checkWidth11 = bear_girl[7].width * 0.7;
        let checkHeight11 = bear_girl[7].height * 0.7;

        // 현재 이미지에 따라 체크 또는 체크2 그리기
        if (currentImage11 === 1) {
            image(bear_girl[7], 1000, 420, checkWidth11, checkHeight11);
        } else {
            image(bear_girl[8], 1000, 420, checkWidth11, checkHeight11);
        }
    }
}
// E1 S2 웅녀가 환웅에게 결혼해달라 기도함 : 5sec (drag)
function E1S2() {
    background(bg[1]);
    // sound(audio1[2]);
    if (beargirlClicked12) {
        if (cloudArrived12) {
            image(bear_girl[10], 750, 550, 270, 400); // 구름 도착 후 이미지 변경
        } else {
            image(bear_girl[11], 750, 550, 270, 400);
        }

        if (rectClicked12) {
            if (millis() - rectClickTime12 >= 200) {
                if (cloudArrived12) {
                    // 구름 도착 후 변경된 상태
                    stroke("#ABE387"); // 테두리 색상 다시 변경
                    strokeWeight(4);
                    fill("#FCFCF0");
                    rect(width / 2 - 400, height - 220, 800, 170, 20);
                    image(face[1], width/ 2  - 306, height - 186); // 얼굴 이미지 변경
                    fill(0);
                    textAlign(CENTER, CENTER);
                    textSize(32);
                    text("Whatt???", width / 2, height - 140); // 텍스트 변경
                } else {
                    // 0.2초 후 변경된 상태
                    stroke("#98EAE8");
                    strokeWeight(4);
                    fill("#FCFCF0");
                    rect(width / 2 - 400, height - 220, 800, 170, 20);
                    image(face[0], width / 2 - 306, height - 186);
                    fill(0);
                    textAlign(CENTER, CENTER);
                    textSize(32);
                    text("Hello~", width / 2, height - 140);

                    if (cloudTransition12) {
                        let t = (millis() - cloudStartTime12) / (animationDuration12 * 1000.0);
                        if (t >= 1) {
                            cloudTransition12 = false;
                            cloudX12 = (cloudEndX12);
                            cloudY12 = (cloudEndY12);
                            cloudArrived12 = true; // 구름이 최종 위치에 도착했음을 표시
                        } else {
                            let currentX12 = (bezierPoint(cloudStartX12, cloudStartX12 + 200, cloudEndX12 - 200, cloudEndX12, t));
                            let currentY12 = (bezierPoint(cloudStartY12, cloudStartY12 + 400, cloudEndY12 - 200, cloudEndY12, t));
                            let currentW12 = (lerp(200, 400, t));
                            let currentH12 = (lerp(300, 600, t));
                            image(man[1], currentX12, currentY12, currentW12, currentH12);
                        }
                    } else {
                        image(man[1], int(cloudEndX12), int(cloudEndY12), 480, 680);
                    }

                    cloudChanged12 = true; // 구름이 변경된 것으로 설정
                }
            }
        } else {
            // 초기 상태
            stroke("#ABE387");
            strokeWeight(4);
            fill("#FCFCF0");
            rect(width / 2 - 400, height - 220, 800, 170, 20);
            image(face[1], width / 2 - 306, height - 186);
            fill(0);
            textAlign(CENTER, CENTER);
            textSize(32);
            text("I want to marry Hwanwoong!", width / 2, height - 140);
        }
    } else {
        image(bear_girl[4], 750, 550, 270, 400);
    }

    // 구름 이미지 그리기
    if (!cloudChanged12) { // 구름이 변경되지 않았을 때만 그리기
        if (useLeftImage12) {
            image(man[2], cloudX12, cloudY12, 500, 400);
        } else {
            image(man[3], cloudX12, cloudY12, 500, 400);
        }

        if (movingLeft12) {
            cloudX12 -= cloudSpeed12;
            if (cloudX12 <= 0) {
                movingLeft12 = false;
                useLeftImage12 = false;
            }
        } else {
            cloudX12 += cloudSpeed12;
            if (cloudX12 >= 800) {
                movingLeft12 = true;
                useLeftImage12 = true;
            }
        }
    }

    // 최종 위치에 도달한 경우에도 구름 이미지를 계속 그리기
    if (cloudArrived12) {
        image(man[1], int(cloudEndX12), int(cloudEndY12), 480, 680);
    }
}
// E1 S3 구름을 클릭하면 환웅이 하늘에서 내려옴 : 5sec (click)
function E1S3() {
    if (transitionComplete13) {
        // 새로운 배경 그리기
        background(bg[2]);

        // flowerVisible이 true일 때 Flower 이미지 그리기
        if (flowerVisible13) {
            image(flower, 900, 450, 200, 200); // flower.png의 크기를 두 배로 키움
        }

        if (cloudWoongMoving13) {
            // CloudWoong가 목표 위치로 이동
            cloudWoongX13 += cloudWoongSpeedX13;
            cloudWoongY13 += cloudWoongSpeedY13;

            // 목표 위치에 도달하면 이동 멈춤
            if (dist(cloudWoongX13, cloudWoongY13, 750, 280) < 10) {
                cloudWoongMoving13 = false;
                cloudWoongX13 = 750; // 정확한 위치로 이동 후 고정
                cloudWoongY13 = 280;
                // cloudWoong 이미지를 cloudFlowerWoong 이미지로 변경
                man[1] = man[5];
                // Flower 이미지 지우기
                flowerVisible13 = false;
                // 1.5초에 걸쳐 새로운 목표 위치로 이동 설정
                cloudWoongSpeedX13 = (2400 - cloudWoongX13) / 90.0;
                cloudWoongSpeedY13 = (-500 - cloudWoongY13) / 90.0;
                cloudFlowerWoongMoving13 = true;
            }
        }

        if (cloudFlowerWoongMoving13) {
            // cloudFlowerWoong가 목표 위치로 이동
            cloudWoongX13 += cloudWoongSpeedX13;
            cloudWoongY13 += cloudWoongSpeedY13;

            // 목표 위치에 도달하면 이동 멈춤
            if (dist(cloudWoongX13, cloudWoongY13, 2400, -500) < 10) {
                cloudFlowerWoongMoving13 = false;
                cloudWoongX13 = 2400; // 정확한 위치로 이동 후 고정
                cloudWoongY13 = -500;
            }
        }

        // cloudWoong.png 또는 cloudFlowerWoong.png를 새로운 위치에 배치
        image(man[1], cloudWoongX13, cloudWoongY13, 600, 800);
    } else {
        // 기존 배경 그리기
        image(bg[2], 0, 0);

        if (leftHandClicked13) {
            // Beargirl 이미지 그리기
            image(bear_girl[4], 976, 74, 230, 400);
        } else {
            // leftthandwoong.png를 배경 중앙에 배치
            image(man[6], 752, 71, 230, 400);

            // RighthandBeargirl.png를 배경 중앙에 배치
            image(bear_girl[12], 976, 74, 230, 400);
        }

        // cloud.png를 중앙에 배치
        image(cloud, 326, -8, 1407, 993);

        if (leftHandClicked13) {
            // CloudWoong가 대각선으로 날아가는 애니메이션
            cloudWoongX13 += cloudWoongSpeedX13;
            cloudWoongY13 += cloudWoongSpeedY13;

            // Cloudwoong 이미지 크기를 2배로 확대하고 가장 앞에 그리기
            image(man[1], cloudWoongX13, cloudWoongY13, 800, 1000);

            // Cloudwoong가 목표 위치에 도달하면 전환 완료로 설정
            if (cloudWoongX13 <= -500) {
                transitionComplete13 = true;
                cloudWoongX13 = 1495;
                cloudWoongY13 = 324;
            }
        }
    }

    if (leftHandClicked13 && !transitionComplete13) {
        // 네모창 그리기
        stroke("#98EAE8");
        strokeWeight(4);
        fill("#FCFCF0");
        rect(width / 2 - 400, height - 220, 800, 170, 20);
        image(face[0], width / 2 - 280, height - 186, 90, 90);
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(32);
        text("(I want to propose to her)", width / 2, height - 140);
    }
}
// E1 S4 웅녀와 환웅이 결혼함 : 10sec
function E1S4() {
    background(bg[2]);
    image(man[7], 752, 71, 230, 400);
    image(bear_girl[14], 961, 73, 230, 400);
    image(cloud, 326, -8, 1407, 993);
    stroke("#98EAE8");
    strokeWeight(4);
    fill("#FCFCF0");
    rect(width / 2 - 400, height - 220, 800, 170, 20);
    image(face[0], width / 2 - 280, height - 186, 90, 90);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Will you marry me?", width / 2, height - 140);
}
// E1 S5 *웅녀*와 환웅 사이에 아들이 태어남 : 3sec
function E1S5() {
    background(bg[5]);

    // 베이비 이미지를 화면 가운데에 그리기
    let babyWidth15 = baby[1].width;
    let babyHeight15 = baby[1].height;
    imageMode(CENTER);

    if (isBabyRotating15) {
        // mini 이미지 순차적으로 출력
        if (miniIndex15 < season.length) {
            image(hidden[miniIndex15], width / 2, babyY15, babyWidth15, babyHeight15);
            if (millis() - lastMiniSwitchTime15 > miniSwitchInterval15) {
                miniIndex15++;
                lastMiniSwitchTime15 = millis();
            }
        } else {
            // dangun 이미지 출력
            image(dangun[1], width / 2, babyY15, babyWidth15, babyHeight15);
            isDangunDisplayed15 = true; // dangun 이미지가 출력되었음을 표시
        }
    } else {
        // 베이비 이미지 그리기
        image(isBaby15 ? baby[1] : baby[2], width / 2, babyY15, babyWidth15, babyHeight15);

        // Baby 이미지의 Y 위치 변경
        babyY15 += babySpeed15;

        // Baby 이미지가 화면 위 아래로 이동하면 방향을 변경
        if (babyY15 <= height / 2 - 5 || babyY15 >= height / 2 + 5) {
            babySpeed15 *= -1; // 이동 방향을 반대로 변경
        }

        // 이미지 전환 타이밍 체크
        if (millis() - lastBabySwitchTime15 > babySwitchInterval15) {
            isBaby15 = !isBaby15;
            lastBabySwitchTime15 = millis();
        }
    }

    // 계절 이미지 전환 타이밍 체크
    if (millis() - lastSeasonSwitchTime15 > seasonSwitchInterval15) {
        // 다음 계절 이미지로 전환
        seasonIndex15 = (seasonIndex15 + 1) % 4;
        bg[5] = season[seasonIndex15];
        lastSeasonSwitchTime15 = millis();
    }
}
// E1 S6 아들을 클릭하면 단군으로 성장함 : 3sec (click)
function E1S6() {
    background(bg[6]);

    // 왼쪽 사람 그리기
    imageMode(CENTER);
    if (flagClicked16 && peopleAnimating16) {
        let happyYShift16 = sin(happyFrameCounter16 / 30.0 * PI) * 60;
        image(crowd[2], 512, 934 - happyYShift16);
        image(crowd[3], 1502, 934 - happyYShift16);
        happyFrameCounter16++;

        if (happyFrameCounter16 >= 30) { // 1초 애니메이션 완료 후 멈춤
            peopleAnimating16 = false;
        }
    } else if (flagClicked16) {
        image(crowd[2], 512, 934);
        image(crowd[3], 1502, 934);
    } else {
        image(crowd[0], 512, 934);
        image(crowd[1], 1502, 934);
    }

    if (animating16) {
        // 0.5초마다 이미지 변경
        if (frameCounter16 % switchTime16 === 0) {
            currentImg16 = (currentImg16 === dangun[2]) ? dangun[3] : dangun[2];
        }

        // 크기와 위치 갱신
        y16 += ySpeed16;
        sizeW16 += ySpeed16 * (300.0 / (950 - 678));  // 비례 증가
        sizeH16 += ySpeed16 * (400.0 / (950 - 678));  // 비례 증가

        frameCounter16++;

        // 3초 후 애니메이션 고정
        if (frameCounter16 >= 3 * 30) {
            animating16 = false;
            y16 = 950;  // y 좌표 고정
            currentImg16 = dangun[2];
        }
    }

    // 이미지 중앙에 그리기
    imageMode(CENTER);
    image(currentImg16, x16, y16, sizeW16, sizeH16);
}

// trigger mousePressed
function ending01Pressed() {
    switch(currentScene % (currentTeam * 10)) {
        case 1:
            // 클릭 시 Happy 이미지로 변경
            isHappy11 = !isHappy11;
            if (isHappy11) {
                happyY11 = 420;
                pressedTime11 = millis();
            } // 초기 위치 설정
            tempTime11 = millis();
            break

        case 2:
            if (mouseX >= 750 && mouseX <= 1050 && mouseY >= 550 && mouseY <= 950) {
                beargirlClicked12 = true;
            }

            if (beargirlClicked12 && mouseX >= width / 2 - 400 && mouseX <= width / 2 + 400 && mouseY >= height - 220 && mouseY <= height - 50) {
                rectClicked12 = true;
                rectClickTime12 = millis();
                cloudStartX12 = cloudX12;
                cloudStartY12 = cloudY12;
                cloudTransition12 = true;
                cloudStartTime12 = millis();
            }
            break

        case 3:
            if (!leftHandClicked13 && mouseX > 752 && mouseX < 752 + 230 && mouseY > 71 && mouseY < 71 + 400) {
                leftHandClicked13 = true;
                // 속도 설정 (x축과 y축으로 날아가도록 설정)
                cloudWoongSpeedX13 = (-500 - 752) / 40.0; // 0.67초(40프레임) 동안 -500까지 이동
                cloudWoongSpeedY13 = (800 - 71) / 40.0; // 0.67초(40프레임) 동안 800까지 이동
            }

            // cloudWoongImg를 클릭했는지 확인 (flowergarden 배경에서)
            if (transitionComplete13 && !cloudWoongMoving13 && !cloudFlowerWoongMoving13 && mouseX > cloudWoongX13 && mouseX < cloudWoongX13 + 600 && mouseY > cloudWoongY13 && mouseY < cloudWoongY13 + 800) {
                // 속도 설정 (750, 280으로 이동하도록 설정)
                cloudWoongSpeedX13 = (750 - cloudWoongX13) / 90.0; // 1.5초(90프레임) 동안 이동
                cloudWoongSpeedY13 = (280 - cloudWoongY13) / 90.0; // 1.5초(90프레임) 동안 이동
                cloudWoongMoving13 = true;
            }
            break

        case 5:
            // 마우스 클릭 시 베이비 이미지 회전 상태로 전환
            isBabyRotating15 = true;
            miniIndex15 = 0; // mini 이미지 인덱스 초기화
            lastMiniSwitchTime15 = millis(); // mini 이미지 전환 시작 시간 기록
            seasonSwitchInterval15 = 200; // 계절 이미지 전환 간격 변경
            break

        case 6:
            // 클릭된 위치가 dan1의 영역 내에 있는지 확인
            if (!animating16 && !flagClicked16 &&
                mouseX > x16 - sizeW16 / 2 && mouseX < x16 + sizeW16 / 2 &&
                mouseY > y16 - sizeH16 / 2 && mouseY < y16 + sizeH16 / 2) {
                currentImg16 = dangun[4];
                flagClicked16 = true;
                happyFrameCounter16 = 0;
                peopleAnimating16 = true;
            }
            break
    }
}