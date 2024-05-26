let isE1S1 = false
let isE1S1Left = true
let isE1S2 = false

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

// E3 S0 곰과 범이 동굴에서 나온다
function E3S0() {
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
    image(bear[0], currentX, currentY, currentWidth, currentHeight)
}
// E3 S1 빛을 가져다 대면 곰과 범이 사람으로 변함
function E3S1() {
    background(bg[0])
    text('S1', 200, 200)
}
// E3 S2 환웅과 2명이 결혼함
function E3S2() {
    background(255)
    text('S2', 200, 200)
}
// E3 S3 두 아이가 태어남
function E3S3() {
    background(255)
    text('S3', 200, 200)
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
        default:
            console.log("PRESSED_FUNCTION_ERROR_3_3")
    }
}