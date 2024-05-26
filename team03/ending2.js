// E2S0
let tgX0 = 1400;
let tgY0 = 350;
let tgWidth;
let tgHeight;

// E2S2
let tgX2 = 1920;
let tgY2 = 200;

// E2S3
let bombActivated = false;
let bombActivatedTime;
let ohWidth, ohHeight;
let bombWidth, bombHeight;

// E2S4
let tgX4 = 1920;
let tgY4 = 200;

// E2S5
let tigergirlXE2S5;
let rotationAngle = 20;
let rotationDirection = 1; // 1: 왼쪽으로 회전, -1: 오른쪽으로 회전
let interval = 1000; // 1초

// E2S6
let ohgirl1X;
let angrytigerX;
let angrytigerScale = 0.7; // 1.3배 축소 (원래 크기의 70%)
let ohgirl1Speed = 3; // 매우 적은 속도로 이동
let direction = 1; // 1: 오른쪽으로, -1: 왼쪽으로
let moving = false; // angrytiger가 움직이는지 여부
let fightShown = false; // fight 이미지가 표시되는지 여부
let ohgirl1Visible = true; // ohgirl1 이미지가 표시되는지 여부
let moveStartTime; // angrytiger가 움직이기 시작한 시간


// E2 S0 동굴에서 사람으로 변한 호랑이가 나옴 : 3sec
function E2S0() {
    background(bg[0]);
    image(woman_alt[0], tgX0, tgY0, tgWidth, tgHeight);
    if (tgX0 > 1000) {
        tgX0 -= 2;  // Move left
        tgWidth += 1;  // Increase width
        tgHeight += 1;  // Increase height
    }
}
// E2 S1 사람으로 변한 범녀가 다른 호랑이들도 인간으로 변하면 좋겠다고 생각함 : 5sec
function E2S1() {
    background(bg[0]);
    image(woman_alt[2], 1000, 100);
}
// E2 S3 옛 친구들인 호랑이를 설득하러 감 3
function E2S2() {
    background(bg[6])
    image(woman_alt[1], tgX2, tgY2);
    if (tgX2 > 1200) tgX2 -= 30;
    image(tiger_alt[0], 100, 250);
    image(tiger_alt[1], 400, 200);
    image(tiger_alt[2], 750, 180);
}
// E2 S3 범녀의 느낌표를 누르면 호랑이가 사람으로 변함
function E2S3() {
    background(bg[6])

    // Draw the tigergirl image
    image(woman_alt[1], 1200, 200);

    // Draw the tiger images or bomb images depending on bomb activation
    if (!bombActivated) {
        // Draw the tiger images
        image(tiger_alt[0], 100, 250);
        image(tiger_alt[1], 400, 200);
        image(tiger_alt[2], 750, 180);
    } else {
        // Draw the bomb images at the positions of tiger1, tiger2, and tiger3
        if (millis() - bombActivatedTime < 3000) {
            image(effect[0], 100, 200);
            image(effect[0], 400, 200);
            image(effect[0], 750, 200);
        } else {
            // Draw people images instead of tiger images
            image(npc[0], 100, 200);
            image(npc[1], 400, 200);
            image(npc[2], 750, 200);
        }
        if (millis() - bombActivatedTime >= 6000) {
            currentScene++
            totalTime = millis()
        }
    }
    // Draw the oh image at the specified position
    image(notice, 1200, 200);
}
// E2 S4 범녀가 호랑이가 있는 곳으로 감 3
function E2S4() {
    background(bg[7])
    image(woman_alt[1], tgX4, tgY4);
    if (tgX4 > 1200) tgX4 -= 10;
    image(tiger_alt[0], 100, 250);
    image(tiger_alt[1], 400, 200);
    image(tiger_alt[2], 750, 180);
}
// E2 S5 범녀가 호랑이 친구들을 설득하러 감 3
function E2S5() {
    // 배경을 다시 그려서 잔상 제거
    background(bg[7]);

    // 호랑이 이미지를 지정된 위치에 그리기
    image(tiger_alt[0], 250, 750);
    image(tiger_alt[1], 550, 700);
    image(tiger_alt[2], 900, 700);

    // 회전과 함께 티거걸 이미지를 그리기
    push()
    translate(tigergirlXE2S5, 700); // Y 위치 수정
    rotate(radians(rotationAngle * rotationDirection));
    imageMode(CENTER);
    image(woman_alt[1], 0, 0);
    pop()

    // 티거걸이 캔버스의 양 끝에 닿으면 회전 방향 바꾸기
    if (tigergirlXE2S5 <= 1400) {
        rotationDirection = 1; // 시계 방향 회전
    } else if (tigergirlXE2S5 >= 1300) {
        rotationDirection = -1; // 반시계 방향 회전
    }

    // 티거걸이 왼쪽과 오른쪽으로 움직이기
    tigergirlXE2S5 += (rotationDirection === 1 ? 5 : -5);
}
// E2 S6 호랑이들은 범녀를 알아보지 못하고 잡아먹으려 함 10
function E2S6() {
    background(bg[7]);
    // 두 이미지가 사라진 후 fight 이미지를 그리기
    if (fightShown) {
        image(effect[1], 1000, 0);
        return;
    }

    // angrytiger 이미지를 지정된 위치에 그리기
    if (moving) {
        // angrytiger가 ohgirl1쪽으로 이동
        angrytigerX += 5;
        if (millis() - moveStartTime >= 3000) {
            moving = false;
            fightShown = true;
            ohgirl1Visible = false; // 3초 후에 ohgirl1 이미지를 숨김
        }
        image(tiger_alt[6], angrytigerX, 200);
    } else {
        image(tiger_alt[6], angrytigerX, 200);
    }

    // ohgirl1 이미지를 지정된 위치에 그리기 (보이는 경우에만)
    if (ohgirl1Visible) {
        image(woman_alt[4], ohgirl1X, 200);

        // 이미지를 이동시킴
        ohgirl1X += ohgirl1Speed * direction; // 매우 적은 속도로 이동

        // 이미지가 이동을 시작한 위치에서 10만큼 이동했을 때 방향을 바꿈
        if (ohgirl1X >= 1210 || ohgirl1X <= 1190) {
            direction *= -1;
        }
    }
}
// trigger mouseDragged
function ending02Dragged() {
    switch(currentScene % (currentTeam * 10)) {
        case 1:
            // E2 S1 빛을 가져다 대면 곰이 사람으로 변함
            currentScene++
            totalTime = millis()
            // DEBUG: 콘솔창에 정보 출력
            if (devMode) print("Drag Event Detected"); print("Total (sec)", round(millis() / 1000)); print("Current Scene", currentScene);
            break
        case 2:
            // E2 S2 환웅이 범녀를 보고 사랑에 빠짐 (꽃다발을 범녀에게 drag) : 10sec (drag)
            currentScene++
            totalTime = millis()
            // DEBUG: 콘솔창에 정보 출력
            if (devMode) print("Drag Event Detected"); print("Total (sec)", round(millis() / 1000)); print("Current Scene", currentScene);
            break
    }
}

// trigger mousePressed
function ending02Pressed() {
    switch(currentScene % (currentTeam * 10)) {
        case 3:
            // Check if the mouse is over the oh image
            if (mouseX >= 1200 && mouseX <= 1200 + ohWidth &&
                mouseY >= 0 && mouseY <= 0 + ohHeight) {
                // Change bomb activation status
                bombActivated = true;
                bombActivatedTime = millis(); // Record the time the bomb was activated
            }
            break
        case 4:
            // E2 S4 아들을 클릭하면 단군으로 성장함 : 3sec (click)
            currentScene++
            totalTime = millis()
            // DEBUG: 콘솔창에 정보 출력
            if (devMode) print("Total (sec)", round(millis() / 1000)); print("Current Scene", currentScene);
            break
        case 7:
            // angrytiger 이미지가 클릭되면 이동 시작
            if (mouseX >= angrytigerX && mouseX <= angrytigerX + tiger_alt[6].width &&
                mouseY >= 200 && mouseY <= 200 + tiger_alt[6].height) {
                moving = true;
                moveStartTime = millis(); // 이동 시작 시간 기록
            }
            break
        default:
            console.log("PRESSED_FUNCTION_ERROR_3_2")
    }
}