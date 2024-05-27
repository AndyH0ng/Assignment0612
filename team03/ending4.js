// E3 S0 곰과 범이 동굴에서 나온다
function E4S0() {

}
// E3 S1 빛을 가져다 대면 곰과 범이 사람으로 변함
function E4S1() {

}
// E3 S2 환웅과 2명이 결혼함
function E4S2() {

}
// E3 S3 두 아이가 태어남
function E4S3() {

}
// E3 S4 아들을 클릭하면 성장함
function E4S4() {

}
// E3 S5 두 아이 중 동생이 후계자로 지목받음
function E4S5() {

}
// E3 S6 형이 분노하고 반란을 일으킴 (칼 클릭 시 반란이 일어남)
function E4S6() {
    background(255)
    text('S6', 200, 200)
}

// trigger mousePressed
function ending04Pressed() {
    switch(currentScene % (currentTeam * 10)) {
        case 1:
            break;
        default:
            console.log("PRESSED_FUNCTION_ERROR_3_3")
    }
}