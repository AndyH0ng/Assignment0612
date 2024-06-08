

// E3 S0 곰과 범이 동굴에서 나온다
function E3S0() {

}
// E3 S1 빛을 가져다 대면 곰과 범이 사람으로 변함
function E3S1() {

}
// E3 S2 환웅과 2명이 결혼함
function E3S2() {

}
// E3 S3 두 아이가 태어남
function E3S3() {

}
// E3 S4 아들을 클릭하면 성장함
function E3S4() {

}
// E3 S5 두 아이 중 동생이 후계자로 지목받음
function E3S5() {

}
// E3 S6 형이 분노하고 반란을 일으킴 (칼 클릭 시 반란이 일어남)
function E3S6() {

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