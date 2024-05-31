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
    [3, -1, 5, -1, 10, 5, 5, 4],    // 3 : TEAM3 ENDING1
    [3, 5, 3, -1, 3, 10, 5],        // 4 : TEAM3 ENDING2
    [5, 10, 5, 5, 7, 5, 5],         // 5 : TEAM3 ENDING3
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
    createCanvas(1920, 1080);
    currentScene = 30; currentTeam = 3; totalTime = 0;
    setupVar();
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
        if (currentScene % 10 < time.length) {
            if (currentScene < currentTeam * 10 + time[currentTeam].length - 1) currentScene++
            else {
                currentTeam++
                currentScene = (currentScene + 1) * 10
            }
        }
        // DEBUG: 콘솔창에 정보 출력
        if (devMode) {
            print("Total (sec)", round(millis() / 1000))
            print("Current Scene", currentScene)
        }
    }
}