// E2 S0 곰이 동굴에서 나온다 : 3sec
function E2S0() {
    background(255)
    text('S0', 200, 200)
}
// E2 S1 빛을 가져다 대면 곰이 사람으로 변함 :
function E2S1() {
    background(255)
    text('S1', 200, 200)
}
// E2 S2 환웅이 범녀를 보고 사랑에 빠짐 (꽃다발을 범녀에게 drag) : 10sec (drag)
function E2S2() {
    background(255)
    text('S2', 200, 200)
}
// E2 S3 범녀와 환웅 사이 아들이 태어남 : 3sec
function E2S3() {
    background(255)
    // E1 S5 웅녀와 환웅 사이에 아들이 태어남
    text('S3', 200, 200)
}
// E2 S4 아들을 클릭하면 단군으로 성장함 : 3sec (click)
function E2S4() {
    background(255)
    text('S4', 200, 200)
}
// E2 S5 단군이 고조선을 건국함 : 4sec
function E2S5() {
    background(255)
    text('S5', 200, 200)
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
        case 4:
            // E2 S4 아들을 클릭하면 단군으로 성장함 : 3sec (click)
            currentScene++
            totalTime = millis()
            // DEBUG: 콘솔창에 정보 출력
            if (devMode) print("Total (sec)", round(millis() / 1000)); print("Current Scene", currentScene);
            break
        default:
            console.log("PRESSED_FUNCTION_ERROR_3_2")
    }
}