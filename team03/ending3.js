let bearGirlWidth = 0;
let bearGirlHeight = 0;
let tigerGirlWidth = 0;
let tigerGirlHeight = 0;
let targetBearGirlWidth = 200;
let targetBearGirlHeight = 350;
let targetTigerGirlWidth = targetBearGirlWidth * 2.5;
let targetTigerGirlHeight = targetBearGirlHeight * 2.5;
let targetBearGirlX = 1300;
let targetBearGirlY = 500;
let targetTigerGirlX = targetBearGirlX - 300; // Beargirl보다 왼쪽으로 200
let targetTigerGirlY = targetBearGirlY - 250; // Beargirl보다 위로 200
let durationE3S0 = 3000; // 3 seconds
let startTimeE3S0;
let isStartE3S0 = false

// E3 S3
let rotating = false;
let angle = 0;
let targetAngle = PI * 4; // 2초 동안 4번 회전 (8 * PI = 4 * 360도)
let rotationDuration = 2000; // 2초
let startTimeE3S3;

// E3 S0 곰과 범이 동굴에서 나온다
function E3S0() {
    background(bg[0])

    // 경과 시간 계산
    let elapsedTime = millis() - startTimeE3S0;
    let t = map(elapsedTime, 0, durationE3S0, 0, 1);
    t = constrain(t, 0, 1); // t 값을 0에서 1 사이로 제한

    // Beargirl 크기와 위치 보간
    let currentBearGirlWidth = lerp(0, targetBearGirlWidth, t);
    let currentBearGirlHeight = lerp(0, targetBearGirlHeight, t);
    let currentBearGirlX = lerp(1600, targetBearGirlX, t);
    let currentBearGirlY = lerp(600, targetBearGirlY, t);

    // Tigergirl 크기와 위치 보간
    let currentTigerGirlWidth = lerp(0, targetTigerGirlWidth, t);
    let currentTigerGirlHeight = lerp(0, targetTigerGirlHeight, t);
    let currentTigerGirlX = lerp(1380, targetTigerGirlX, t); // Beargirl의 거의 옆에서 시작
    let currentTigerGirlY = lerp(600, targetTigerGirlY, t);

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
    let bearGirlXE3S1 = 600;
    let bearGirlYE3S1 = 400;
    let bearGirlWidthE3S1 = 500;
    let bearGirlHeightE3S1 = 760;
    image(woman[3], bearGirlXE3S1, bearGirlYE3S1, bearGirlWidthE3S1, bearGirlHeightE3S1);

    // prayTigergirl 이미지를 prayBeargirl 왼쪽에 동일한 크기로 그리기
    let tigerGirlXE3S1 = bearGirlXE3S1 - bearGirlWidthE3S1 + 200; // Beargirl 왼쪽에 위치시키기
    let tigerGirlYE3S1 = bearGirlYE3S1 + 35;
    image(woman_alt[5], tigerGirlXE3S1, tigerGirlYE3S1, bearGirlWidthE3S1, bearGirlHeightE3S1);

    // cloudwoong 이미지를 지정된 위치에 그리기
    image(man_in_cloud, 20, 0, 200, 300);
}
// E3 S2 환웅과 2명이 결혼함
function E3S2() {
    background(bg[4])
    image(all, 600, 200, 800, 600);  // 변수 이름 변경
    image(cloud, 290, 180, 1550, 1070);
}
// E3 S3 두 아이가 태어남
function E3S3() {
    background(255);

    if (rotating) {
        let elapsedTime = millis() - startTimeE3S3;
        let t = map(elapsedTime, 0, rotationDuration, 0, 1);
        t = constrain(t, 0, 1);
        angle = lerp(0, targetAngle, t);

        if (t === 1) {
            rotating = false;
            currentDanImg = danImg;
            currentTigersonImg = tigersonImg;
            angle = 0; // Reset angle to 0 for the final display
        }
    }

    push()
    translate(width / 2 - 300, height / 2); // 중앙에서 조금 왼쪽으로 이동
    rotate(rotating ? angle : 0); // 회전 중이면 회전, 아니면 0도
    imageMode(CENTER);
    image(currentDanImg, 0, 0);
    pop()

    push()
    translate(width / 2 + 300, height / 2); // 중앙에서 조금 오른쪽으로 이동
    rotate(rotating ? angle : 0); // 회전 중이면 회전, 아니면 0도
    imageMode(CENTER);
    image(currentTigersonImg, 0, 0);
    pop()
}
// E3 S4 아들을 클릭하면 성장함
function E3S4() {
    background(255)
    text('S4', 200, 200)
}
// E3 S5 두 아이 중 동생이 후계자로 지목받음
function E3S5() {
    background(255)
    text('S5', 200, 200)
}
// E3 S6 형이 분노하고 반란을 일으킴 (칼 클릭 시 반란이 일어남)
function E3S6() {
    background(255)
    text('S6', 200, 200)
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
            if (!rotating) {
                rotating = true;
                startTimeE3S3 = millis();
            }
        default:
            console.log("PRESSED_FUNCTION_ERROR_3_3")
    }
}