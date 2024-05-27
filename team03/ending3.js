// E3S0
let bearGirlWidthE3S0 = 0;
let bearGirlHeightE3S0 = 0;
let tigerGirlWidthE3S0 = 0;
let tigerGirlHeightE3S0 = 0;
let targetBearGirlWidthE3S0 = 200;
let targetBearGirlHeightE3S0 = 350;
let targetTigerGirlWidthE3S0 = targetBearGirlWidthE3S0 * 2.5;
let targetTigerGirlHeightE3S0 = targetBearGirlHeightE3S0 * 2.5;
let targetBearGirlXE3S0 = 1300;
let targetBearGirlYE3S0 = 500;
let targetTigerGirlXE3S0 = targetBearGirlXE3S0 - 300; // Beargirl보다 왼쪽으로 200
let targetTigerGirlYE3S0 = targetBearGirlYE3S0 - 250; // Beargirl보다 위로 200
let durationE3S0 = 3000; // 3 seconds

// E3S3
let currentDanImgE3S3, currentTigersonImgE3S3;
let rotatingE3S3 = false;
let angleE3S3 = 0;
let targetAngleE3S3 = Math.PI * 4; // 2초 동안 4번 회전 (8 * PI = 4 * 360도)
let rotationDurationE3S3 = 2000; // 2초
let startTimeE3S3;

// E3S4
let moveDurationE3S4 = 2000; // 2 seconds
let startTimeE3S4;

// E3S5
let showMad = false; // mad 이미지를 보여줄지 여부

// E3S6
let madXE3S6, madYE3S6;
let knifeXE3S6, knifeYE3S6;
let madTargetXE3S6, madTargetYE3S6;
let knifeTargetXE3S6, knifeTargetYE3S6;
let movingE3S6 = false; // 이미지를 이동시키는 플래그
let warShownE3S6 = false; // war 이미지를 표시하는 플래그


// E3 S0 곰과 범이 동굴에서 나온다
function E3S0() {
    // 배경 이미지 그리기
    background(bg[0]);
    voice_E3[0].playMode('restart')
    voice_E3[0].play()
    voice_E3[0].setVolume(1)
    // 경과 시간 계산
    let elapsedTime = millis() - totalTime;
    let t = map(elapsedTime, 0, durationE3S0, 0, 1);
    t = constrain(t, 0, 1); // t 값을 0에서 1 사이로 제한

    // Beargirl 크기와 위치 보간
    let currentBearGirlWidth = lerp(0, targetBearGirlWidthE3S0, t);
    let currentBearGirlHeight = lerp(0, targetBearGirlHeightE3S0, t);
    let currentBearGirlX = lerp(1600, targetBearGirlXE3S0, t);
    let currentBearGirlY = lerp(600, targetBearGirlYE3S0, t);

    // Tigergirl 크기와 위치 보간
    let currentTigerGirlWidth = lerp(0, targetTigerGirlWidthE3S0, t);
    let currentTigerGirlHeight = lerp(0, targetTigerGirlHeightE3S0, t);
    let currentTigerGirlX = lerp(1380, targetTigerGirlXE3S0, t); // Beargirl의 거의 옆에서 시작
    let currentTigerGirlY = lerp(600, targetTigerGirlYE3S0, t);

    // Beargirl 이미지 그리기
    image(woman[0], currentBearGirlX, currentBearGirlY, currentBearGirlWidth, currentBearGirlHeight);

    // Tigergirl 이미지 그리기
    image(woman_alt[0], currentTigerGirlX, currentTigerGirlY, currentTigerGirlWidth, currentTigerGirlHeight);

}
// E3 S1 빛을 가져다 대면 곰과 범이 사람으로 변함
function E3S1() {
// 배경을 pray.png로 설정
    background(bg[2])

    // prayBeargirl 이미지를 지정된 위치에 그리기
    let bearGirlX = 600;
    let bearGirlY = 400;
    let bearGirlWidth = 500;
    let bearGirlHeight = 760;
    image(woman[3], bearGirlX, bearGirlY, bearGirlWidth, bearGirlHeight);

    // prayTigergirl 이미지를 prayBeargirl 왼쪽에 동일한 크기로 그리기
    let tigerGirlX = bearGirlX - bearGirlWidth + 200; // Beargirl 왼쪽에 위치시키기
    let tigerGirlY = bearGirlY+35;
    image(woman_alt[5], tigerGirlX, tigerGirlY, bearGirlWidth, bearGirlHeight);

    // cloudwoong 이미지를 지정된 위치에 그리기
    image(man_in_cloud, 20, 0, 200, 300);
}
// E3 S2 환웅과 2명이 결혼함
function E3S2() {
    background(bg[4])
    // 3.png 이미지를 지정된 위치와 크기로 삽입
    image(all, 600, 200, 800, 600);  // 변수 이름 변경
    // cloud 이미지를 지정된 위치와 크기로 삽입
    image(cloud, 290, 180, 1550, 1070);
}
// E3 S3 두 아이가 태어남
function E3S3() {
    background(255);

    if (rotatingE3S3) {
        let elapsedTime = millis() - startTimeE3S3;
        let t = map(elapsedTime, 0, rotationDurationE3S3, 0, 1);
        t = constrain(t, 0, 1);
        angleE3S3 = lerp(0, targetAngleE3S3, t);

        if (t === 1) {
            rotatingE3S3 = false;
            currentDanImgE3S3 = man[1];
            currentTigersonImgE3S3 = npc[5];
            angleE3S3 = 0; // Reset angle to 0 for the final display
        }
    }

    push();
    translate(width / 2 - 300, height / 2); // 중앙에서 조금 왼쪽으로 이동
    rotate(rotatingE3S3 ? angleE3S3 : 0); // 회전 중이면 회전, 아니면 0도
    imageMode(CENTER);
    image(currentDanImgE3S3, 0, 0);
    pop();

    push();
    translate(width / 2 + 300, height / 2); // 중앙에서 조금 오른쪽으로 이동
    rotate(rotatingE3S3 ? angleE3S3 : 0); // 회전 중이면 회전, 아니면 0도
    imageMode(CENTER);
    image(currentTigersonImgE3S3, 0, 0);
    pop();
}
// E3 S4 아들을 클릭하면 성장함
function E3S4() {
// 배경을 castle 이미지로 설정
    background(bg[8])

    // woong 이미지를 지정된 위치에 그리기 (y좌표 -100, width 50 증가)
    image(man_facade, offsetXE3S4 + 50, 300, 180, man_facade.height / 2 + 100);

    // crown 이미지를 지정된 위치에 그리기 (width와 height 30씩 줄임)
    image(crown, crownXE3S4, crownYE3S4, crown.width / 2.3 - 30, crown.height / 2.3 - 30);

    // dan 이미지를 지정된 위치에 그리기 (크기 줄임)
    image(currentDanImgE3S4, offsetXE3S4 + 600, 400, currentDanImgE3S4.width / 2, currentDanImgE3S4.height / 2);

    // tigergirlson 이미지를 지정된 위치에 그리기 (크기 줄임)
    if (currentTigergirlsonImgE3S4 === npc[6]) {
        image(currentTigergirlsonImgE3S4, offsetXE3S4 + 850, sadTigergirlsonYE3S4, currentTigergirlsonImgE3S4.width / 2, currentTigergirlsonImgE3S4.height / 2);
    } else {
        image(currentTigergirlsonImgE3S4, offsetXE3S4 + 850, 400, currentTigergirlsonImgE3S4.width / 2, currentTigergirlsonImgE3S4.height / 2);
    }

    if (movingE3S4) {
        let elapsedTime = millis() - startTimeE3S4;
        let t = map(elapsedTime, 0, moveDurationE3S4, 0, 1);
        t = constrain(t, 0, 1);

        crownXE3S4 = lerp(startCrownXE3S4+50, targetCrownXE3S4+45, t);
        crownYE3S4 = lerp(startCrownYE3S4-80, targetCrownYE3S4+130, t);

        if (t === 1) {
            moving = false;
            currentDanImgE3S4 = man[2];
            currentTigergirlsonImgE3S4 = npc[6];
            sadTigergirlsonYE3S4 += 50; // y좌표 50 증가
        }
    }
}
// E3 S5 두 아이 중 동생이 후계자로 지목받음
function E3S5() {
    // 캔버스에 dark 이미지를 배경으로 그리기
    background(bg[10]);

    // 3초가 지나면 sad 이미지를 숨기고 mad 이미지를 표시
    if (millis() - totalTime >= 3000) {
        showMad = true;
    }

    // showMad가 true인 경우 mad 이미지를 중앙에 그리기
    if (showMad) {
        image(npc[7], width / 2 - npc[7].width / 2, height / 2 - npc[7].height / 2 + 100);
    } else {
        // showMad가 false인 경우 sad 이미지를 중앙에 그리기
        image(npc[6], width / 2 - npc[6].width / 2, height / 2 - npc[6].height / 2 + 200);
    }
}
// E3 S6 형이 분노하고 반란을 일으킴 (칼 클릭 시 반란이 일어남)
function E3S6() {
// 캔버스에 warpage 이미지를 배경으로 그리기
    background(bg[11]);

    // 두 이미지가 사라진 후 war 이미지를 그리기
    if (warShownE3S6) {
        image(npc[8], width / 2 - npc[8].width / 2, height / 2 - npc[8].height / 2);
        return ;
    }

    // mad와 knife 이미지를 그리기
    if (!movingE3S6) {
        image(npc[7], madXE3S6, madYE3S6);
        image(knife, knifeXE3S6, knifeYE3S6);

    } else {
        // mad와 knife 이미지를 중앙으로 이동시키기
        madXE3S6 = lerp(madXE3S6, madTargetXE3S6, 0.05);
        madYE3S6 = lerp(madYE3S6, madTargetYE3S6, 0.05);
        knifeXE3S6 = lerp(knifeXE3S6, knifeTargetXE3S6, 0.05);
        knifeYE3S6 = lerp(knifeYE3S6, knifeTargetYE3S6, 0.05);
        image(npc[7], madXE3S6, madYE3S6);
        image(knife, knifeXE3S6, knifeYE3S6);

        // 두 이미지가 중앙에 도착했는지 확인
        if (dist(madXE3S6, madYE3S6, madTargetXE3S6, madTargetYE3S6) < 1 && dist(knifeXE3S6, knifeYE3S6, knifeTargetXE3S6, knifeTargetYE3S6) < 1) {
            movingE3S6 = false;
            warShownE3S6 = true;
        }
    }
}

function E3S7() {
    background(bg[9]);
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
        case 3:
            if (!rotatingE3S3) {
                rotatingE3S3 = true;
                startTimeE3S3 = millis();
            }
            break
        case 4:
            if (mouseX > crownXE3S4 && mouseX < crownXE3S4 + crown.width / 2 - 30 && mouseY > crownYE3S4 && mouseY < crownYE3S4 + crown.height / 2 - 30) {
                movingE3S4 = true;
                startTimeE3S4 = millis();
            }
            break
        case 6:
            // knife 이미지가 클릭되면 이동 시작
            if (mouseX >= knifeXE3S6 && mouseX <= knifeXE3S6 + knife.width &&
                mouseY >= knifeYE3S6 && mouseY <= knifeYE3S6 + knife.height) {
                movingE3S6 = true;
                print("matched!")
            }
            break
        default:
            console.log("PRESSED_FUNCTION_ERROR_3_3")
    }
}