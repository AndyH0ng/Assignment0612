let isE1S1 = false
let isE1S1Left = true
let isE1S2 = false

// E1 S0
// E1 S1
let bearGirlWidth = 0
let bearGirlHeight = 0
let bearGirlX = 1900
let bearGirlY = 500
let targetWidth = 200
let targetHeight = 350
let targetX = 1300
let targetY = 500
let duration = 3000
let startTime

// E1 S3
let isCloudwoongMoving = false;
let isS3Clicked = false;
let cloudwoongStartTime;
let cloudwoongX = 20;
let cloudwoongY = 0;
let cloudwoongWidth = 200;
let cloudwoongHeight = 300;
let cloudwoongTargetX = 200;
let cloudwoongTargetY = 400;
let cloudwoongTargetWidth = 500;
let cloudwoongTargetHeight = 760;
let timeclickedE1S3

// E1 S6
let isBabydan = true;
let switchTime = 2000; // 2초 (2000 밀리초)
let lastSwitch = 0;

// ✅ E1 S0 곰이 동굴에서 나온다 : 3sec
function E1S0() {
    background(bg[0])
    // 경과 시간 계산
    let elapsedTime = millis() - totalTime
    let t = map(elapsedTime, 0, duration, 0, 1)
    t = constrain(t, 0, 1) // t 값을 0에서 1 사이로 제한

    // 크기와 위치 보간
    let currentWidth = lerp(0, targetWidth, t)
    let currentHeight = lerp(0, targetHeight, t)
    let currentX = lerp(1600, targetX, t)
    let currentY = lerp(600, targetY, t)

    // Beargirl 이미지 그리기
    image(woman[0], currentX, currentY, currentWidth, currentHeight)
}
// ✅ E1 S1 빛을 가져다 대면 곰이 사람으로 변함 : 7sec (drag)
function E1S1() {
    background(bg[0])
    let elapsedTime = millis() - totalTime
    let t
    if (isE1S1Left) {
        t = map(elapsedTime, 0, 3000, 0, 1)
        let currentX = lerp(1920 / 2, 400, t)
        image(woman[2], currentX, height / 2 - woman[2].height / 2);
        if (t >= 1.0) isE1S1Left = false;
    } else {
        t = map(elapsedTime, 3000, 7000, 0, 1)
        t = constrain(t, 0, 1)
        let currentX = lerp(400, 1100, t)
        image(woman[1], currentX, height / 2 - woman[1].height / 2)
    }
    // 왼쪽 아래에 빨간색 삼각형 그리기
    fill(255, 0, 0)
    noStroke()
    triangle(50, height - 50, 100, height - 50, 75, height - 100)
}
// E1 S2 웅녀가 환웅에게 결혼해달라 기도함 : 5sec (drag)
function E1S2() {
    background(bg[2])
    image(woman[3], 600, 400, 500, 760);
    image(man_in_cloud, 20, 0, 200, 300);
}
// E1 S3 구름을 클릭하면 환웅이 하늘에서 내려옴 : 5sec (click)
function E1S3() {
    // 배경을 pray.png로 설정
    background(bg[2])

    // prayBeargirl 이미지를 지정된 위치에 그리기
    image(woman[3], 600, 400, 500, 760);

    if (!isS3Clicked) {
        timeclickedE1S3 = millis()
    }
    push()
    stroke(255, 0, 0)
    strokeWeight(4)
    image(man_in_cloud, cloudwoongX, cloudwoongY, cloudwoongWidth, cloudwoongHeight);
    pop()
    // cloudwoong 이미지 그리기
    if (isCloudwoongMoving) {
        let elapsedTime = millis() - cloudwoongStartTime;
        let t = map(elapsedTime, 0, 3000, 0, 1);
        t = constrain(t, 0, 1);

        cloudwoongX = lerp(cloudwoongX, cloudwoongTargetX, t);
        cloudwoongY = lerp(cloudwoongY, cloudwoongTargetY, t);
        cloudwoongWidth = lerp(cloudwoongWidth, cloudwoongTargetWidth, t);
        cloudwoongHeight = lerp(cloudwoongHeight, cloudwoongTargetHeight, t);
    }
    print(timeclickedE1S3)
    if (millis() - timeclickedE1S3 >= 3000) {
        currentScene++
        totalTime = millis()
        // DEBUG: 콘솔창에 정보 출력
        if (devMode) print("Click Event Detected"); print("Total (sec)", round(millis() / 1000)); print("Current Scene", currentScene)
    }
}
// E1 S4 웅녀와 환웅이 결혼함 : 10sec
function E1S4() {
    background(bg[4])
    image(couple, 600, 200, 800, 600)
    image(cloud, 550, 300, 1050, 870)
}
// E1 S5 *웅녀*와 환웅 사이에 아들이 태어남 : 3sec
function E1S5() {
    background(255)
    let babydanX = (width - 400) / 2;
    let babydanY = (height - 680) / 2;
    image(baby, babydanX, babydanY, 400, 680);
}
// E1 S6 아들을 클릭하면 단군으로 성장함 : 3sec (click)
function E1S6() {
    // 배경을 흰색으로 설정
    background(255);

    // 현재 시간
    let currentTime = millis();

    // 2초가 지났는지 확인하고 한 번만 이미지 변경
    if (isBabydan && currentTime - lastSwitch >= switchTime)
        isBabydan = false; // 이미지를 dan.png로 변경

    // 중앙에 이미지를 삽입
    let imageX = (width - 400) / 2;
    let imageY = (height - 680) / 2;

    if (isBabydan) image(baby, imageX, imageY, 400, 680);
    else image(man[1], imageX, imageY, 400, 680);
}
// E1 S7 단군이 고조선을 건국함 : 4sec
function E1S7() {
    // 배경을 establish 이미지로 설정
    image(bg[5], 0, 0);

    // dan 이미지를 중앙에 삽입
    let danX = (width - 400) / 2;
    let danY = (height - 680) / 2;
    image(man[1], danX, danY, 400, 680);
}

// trigger mousePressed
function ending01Pressed() {
    switch(currentScene % (currentTeam * 10)) {
        case 0:
            let elapsedTime = millis() - startTime;
            let t = map(elapsedTime, 0, duration, 0, 1);
            t = constrain(t, 0, 1);

            let currentWidth = lerp(0, targetWidth, t);
            let currentHeight = lerp(0, targetHeight, t);
            let currentX = lerp(1600, targetX, t);
            let currentY = lerp(600, targetY, t);

            // Beargirl 이미지가 클릭된 경우
            if (mouseX >= currentX && mouseX <= currentX + currentWidth && mouseY >= currentY && mouseY <= currentY + currentHeight) {
                isE1S1 = true;
                e1s1StartTime = millis();
            }
            break
        case 1:
            let xPoints = [50, 100, 75]
            let yPoints = [height - 50, height - 50, height - 100]
            if (mouseX >= min(xPoints) && mouseX <= max(xPoints) &&
                mouseY >= min(yPoints) && mouseY <= max(yPoints)) {
                isE1S2 = true;
                isE1S1 = false;
            }
            currentScene++
            totalTime = millis()
            // DEBUG: 콘솔창에 정보 출력
            if (devMode) print("Click Event Detected"); print("Total (sec)", round(millis() / 1000)); print("Current Scene", currentScene)
            break
        case 2:

            break
        case 3:
            // E1 S3 구름을 클릭하면 환웅이 하늘에서 내려옴 : 5sec (click)

            if (mouseX >= cloudwoongX && mouseX <= cloudwoongX + cloudwoongWidth && mouseY >= cloudwoongY && mouseY <= cloudwoongY + cloudwoongHeight) {
                isCloudwoongMoving = true;
                isS3Clicked = true;
                cloudwoongStartTime = millis();
            }


            break
        // case 6:
        //     // E1 S6 아들을 클릭하면 단군으로 성장함 : 3sec (click)
        //     currentScene++
        //     totalTime = millis()
        //     // DEBUG: 콘솔창에 정보 출력
        //     if (devMode) print("Click Event Detected"); print("Total (sec)", round(millis() / 1000)); print("Current Scene", currentScene)
        //     break
    }
}