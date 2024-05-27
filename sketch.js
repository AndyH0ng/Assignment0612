// noinspection JSCheckFunctionSignatures,JSUnresolvedReference
const devMode = true;           // 개발자 모드 (콘솔 창에 정보를 출력합니다)

let currentScene
let currentTeam

const INTRO = 0
const TEAM1 = 1
const TEAM2 = 2
const TEAM3_1 = 3
const TEAM3_2 = 4
const TEAM3_3 = 5
const TEAM3_4 = 6
const ENDINGCREDIT = 7
const CTRL = 8

// 팀 별 시간 지정 (단위: 초)
// 시간을 지정하고 싶지 않을 경우 -1로 지정합니다.
const time = [
    [-1],                           // 0 : INTRO
    [],                             // 1 : TEAM1
    [-1],                           // 2 : TEAM2
    [3, -1, 5, -1, 10, 5, 5, 4],       // 3 : TEAM3 ENDING1
    [3, 5, 3, -1, 3, 10, 5],          // 4 : TEAM3 ENDING2
    [5, 10, 5, 5, 7, 5, 5],            // 5 : TEAM3 ENDING3
    [2],                            // 6 : TEAM3 ENDING4
    [2],                            // 7 : ENDING CREDIT
    [10]                            // 8 : CTRL
]

let bg = []
let cal = []
let tiger = [], tiger_alt = [], bear = []
let man = [], woman = [], woman_alt = [], npc = [], baby = []
let man_facade, man_foot, man_side, man_torso, man_in_cloud, couple

let voice_E3 = []

let garlic, mugwort, cloud, effect = [], notice, all, crown, knife

// E3S4
let currentDanImgE3S4, currentTigergirlsonImgE3S4;
let crownXE3S4, crownYE3S4;
let targetCrownXE3S4, targetCrownYE3S4;
let startCrownXE3S4, startCrownYE3S4;
let sadTigergirlsonYE3S4; // sadTigergirlsonImg의 y좌표
let offsetXE3S4 = 300; // 모든 이미지를 오른쪽으로 이동시키는 오프셋
let movingE3S4 = false;

function preload() { preloadImage() }

function setup() {
    createCanvas(1920, 1080)
    currentScene = 30; currentTeam = 3; totalTime = 0;
    tgWidth = tiger_alt.width * 0.5;  // Initial width scale
    tgHeight = tiger_alt.height * 0.5;  // Initial height scale
    // E2S3
    ohWidth = notice.width / 2;
    ohHeight = notice.height / 2;
    notice.resize(ohWidth, ohHeight);
    bombWidth = effect[0].width/1.3;
    bombHeight = effect[0].height/1.3;

    // E2S5
    tiger_alt[6].resize(int(tiger_alt[6].width * angrytigerScale), int(tiger_alt[6].height * angrytigerScale));
    tigergirlXE2S5 = 1400;

    // fight 이미지의 크기 조정 (1.5배 확대)
    effect[1].resize(int(effect[1].width * 1.5), int(effect[1].height * 1.5));

    // E2S6
    ohgirl1X = 1200;
    angrytigerX = 0;

    // E3S3
    currentDanImgE3S3 = baby[0];
    currentTigersonImgE3S3 = baby[1];

    // E3S4
    // 초기 위치 및 상태 설정
    currentDanImgE3S4 = man[1];
    currentTigergirlsonImgE3S4 = npc[5];
    crownXE3S4 = offsetXE3S4 + 300;
    crownYE3S4 = 300;
    startCrownXE3S4 = crownXE3S4;
    startCrownYE3S4 = crownYE3S4;
    targetCrownXE3S4 = offsetXE3S4 + 600;
    targetCrownYE3S4 = 100;
    sadTigergirlsonYE3S4 = 400; // 초기 y좌표 설정

    // E3S6
    // mad 이미지를 초기 위치에 배치
    madXE3S6 = width - npc[7].width - 100;
    madYE3S6 = height / 2 - npc[7].height / 2;

    // knife 이미지를 초기 위치에 배치 (mad 이미지 옆)
    knifeXE3S6 = madXE3S6 + npc[7].width - 400;
    knifeYE3S6 = height / 2 - knife.height / 2;

    // mad와 knife 이미지의 타겟 위치 (중앙)
    madTargetXE3S6 = width / 2 - npc[7].width / 2;
    madTargetYE3S6 = height / 2 - npc[7].height / 2;
    knifeTargetXE3S6 = width / 2 - knife.width / 2;
    knifeTargetYE3S6 = height / 2 - knife.height / 2;

}

function draw() {
    trkTime()
    switch (currentTeam) {
        case INTRO: intro(); break
        case TEAM1: team01(); break
        case TEAM2: team02(); break
        case TEAM3_1: case TEAM3_2: case TEAM3_3: case TEAM3_4: team03(); break
        case ENDINGCREDIT: credit(); break
        case CTRL: break
        default: console.log("DRAW_FUNCTION_ERROR_DIVISION")
    }
}

function mousePressed() {
    switch (currentTeam) {
        case TEAM1: team01Pressed(); break
        case TEAM2: team02Pressed(); break
        case TEAM3_1: ending01Pressed(); break
        case TEAM3_2: ending02Pressed(); break
        case TEAM3_3: ending03Pressed(); break
        case TEAM3_4: ending04Pressed(); break
        default: console.log("PRESSED_FUNCTION_ERROR_DIVISION")
    }
}

function mouseDragged() {
    switch (currentTeam) {
        case TEAM3_2: ending02Dragged(); break
        case TEAM3_4: ending04Pressed(); break
    }
}

function trkTime() {
    let temp0 = currentTeam
    let temp1 = currentScene % ((currentTeam) * 10)
    if (time[temp0][temp1] !== -1 &&
        millis() - totalTime >= 1000 * time[temp0][temp1]) {
        totalTime += 1000 * time[temp0][temp1]
        switch (currentScene) {
            case 37: currentScene = 40; currentTeam++; break
            case 46: currentScene = 50; currentTeam++; break
            case 57: currentScene = 60; currentTeam++; break
            case 60: currentScene = 70; currentTeam++; break
            case 70: currentScene = 80; currentTeam++; break
            default: currentScene++
        }
        // DEBUG: 콘솔창에 정보 출력
        if (devMode) {
            print("Total (sec)", round(millis() / 1000))
            print("Current Scene", currentScene)
        }
    }
}