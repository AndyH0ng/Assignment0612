// E1 S0 곰이 동굴에서 나온다 : 3sec
function E1S0() {
    background(bg[0])
    text('S0', 200, 200)
}
// E1 S1 빛을 가져다 대면 곰이 사람으로 변함 : 7sec (drag)
function E1S1() {
    background(255)
    text('S1', 200, 200)
}
// E1 S2 웅녀가 환웅에게 결혼해달라 기도함 : 5sec (drag)
function E1S2() {
    background(255)
    text('S2', 200, 200)
}
// E1 S3 구름을 클릭하면 환웅이 하늘에서 내려옴 : 5sec (click)
function E1S3() {
    background(255)
    text('S3', 200, 200)
}
// E1 S4 웅녀와 환웅이 결혼함 : 10sec
function E1S4() {
    background(255)
    text('S4', 200, 200)
}
// E1 S5 웅녀와 환웅 사이에 아들이 태어남 : 3sec
function E1S5() {
    background(255)
    text('S5', 200, 200)
    // insert 환웅 + 아들
    // insert 웅녀
}
// E1 S6 아들을 클릭하면 단군으로 성장함 : 3sec (click)
function E1S6() {
    background(255)
    text('S6', 200, 200)
}
// E1 S7 단군이 고조선을 건국함 : 4sec
function E1S7() {
    background(255)
    text('S7', 200, 200)
}

// trigger mousePressed
function ending01Pressed() {
    switch(currentScene % (currentTeam * 10)) {
        case 1:
            currentScene++
            totalTime = millis()
            // DEBUG: 콘솔창에 정보 출력
            if (devMode) print("Click Event Detected"); print("Total (sec)", round(millis() / 1000)); print("Current Scene", currentScene)
            break
        case 3:
            // E1 S3 구름을 클릭하면 환웅이 하늘에서 내려옴 : 5sec (click)
            currentScene++
            totalTime = millis()
            // DEBUG: 콘솔창에 정보 출력
            if (devMode) print("Click Event Detected"); print("Total (sec)", round(millis() / 1000)); print("Current Scene", currentScene);
            break;
        case 6:
            // E1 S6 아들을 클릭하면 단군으로 성장함 : 3sec (click)
            currentScene++
            totalTime = millis()
            // DEBUG: 콘솔창에 정보 출력
            if (devMode) print("Click Event Detected"); print("Total (sec)", round(millis() / 1000)); print("Current Scene", currentScene)
            break;
    }
}