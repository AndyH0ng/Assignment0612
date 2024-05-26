// E2S0
let tgX0 = 1400;
let tgY0 = 350;
let tgWidth;
let tgHeight;

// E2S2
let tgX2 = 1920; // Initial x position of tigergirl
let tgY2 = 200;  // y position of tigergirl


// E2 S0 곰이 동굴에서 나온다 : 3sec
function E2S0() {
    background(bg[0]);
    image(woman_alt[0], tgX0, tgY0, tgWidth, tgHeight);
    if (tgX0 > 1000) {
        tgX0 -= 2;  // Move left
        tgWidth += 1;  // Increase width
        tgHeight += 1;  // Increase height
    }
}
// E2 S1 빛을 가져다 대면 곰이 사람으로 변함 :
function E2S1() {
    background(bg[0]);
    image(woman_alt[2], 1000, 100);
}
// E2 S2 환웅이 범녀를 보고 사랑에 빠짐 (꽃다발을 범녀에게 drag) : 10sec (drag)
function E2S2() {
    background(bg[6])
    image(woman_alt[1], tgX2, tgY2);
    if (tgX2 > 1200) tgX2 -= 30;
    image(tiger_alt[0], 100, 250);
    image(tiger_alt[1], 400, 200);
    image(tiger_alt[2], 750, 180);
}
// E2 S3 *범녀*와 환웅 사이 아들이 태어남 : 3sec
function E2S3() {
    background(255)
    image(couple, width / 2, height / 2)
    // E1 S5 웅녀와 환웅 사이에 아들이 태어남
    text('S3', 200, 200)
}
// E2 S4 아들을 클릭하면 단군으로 성장함 : 3sec (click)
function E2S4() { E1S6() }
// E2 S5 단군이 고조선을 건국함 : 4sec
function E2S5() { E1S7() }

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