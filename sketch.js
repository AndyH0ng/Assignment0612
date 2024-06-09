// noinspection JSCheckFunctionSignatures,JSUnresolvedReference
const devMode = true           // 개발자 모드 (콘솔 창에 정보를 출력합니다)

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
    [3, 3, 15, 4, 10, 7, 5],    // 3 : TEAM3 ENDING1
    [3, 5, -1, 4, 10, -1, 5, 9],        // 4 : TEAM3 ENDING2
    [5, 10, -1, 7, -1, -1, 10],         // 5 : TEAM3 ENDING3
    [2],                            // 7 : ENDING CREDIT
    [10]                            // 8 : CTRL
]

let totalTime
let bg = [], season = [];
let motion_a = [], motion_b = [], motion_c = [];
let motion_c15_1, motion_c15_2;
let baby = [], boy = [], bear_girl = [], tiger_girl = [], crowd = [], dangun = [],
    face = [], hidden = [], man = [], tiger = [],
    bubble = [], cloud_alt = [], eat = [];
let cloud, couple, couple_alt, couple_alt_happy, flower, flowers, sword, flag;
let audio1 = [], audio2 = [], audio3;

function preload() {
    preloadImage();
    preloadSound();
    team01Preload();
    creditPreload();
}

function setup() {
    createCanvas(1920, 1080);
    currentScene = 30; currentTeam = 1; totalTime = 0;
    setupVar();
    team01Init();
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
        default: console.log("PRESSED_FUNCTION_ERROR_DIVISION")
    }
}

function mouseDragged() {
    switch (currentTeam) {
        case TEAM1: team01Dragged(); break
        case TEAM3_2: ending02Dragged(); break
    }
}
function mouseReleased() {
    switch (currentTeam) {
        case TEAM1: team01Released(); break
    }
}
function trkTime() {
    let temp0 = currentTeam
    let temp1 = currentScene % ((currentTeam) * 10)
    if (time[temp0][temp1] !== -1 &&
        millis() - totalTime >= 1000 * time[temp0][temp1]) {
        next();
    }
    // DEBUG: 콘솔창에 정보 출력
    if (devMode) {
        print("Total (sec)", round(millis() / 1000))
        print("Current Scene", currentScene)
    }
}

function next() {
    let temp0 = currentTeam
    let temp1 = currentScene % ((currentTeam) * 10)
    totalTime += 1000 * time[temp0][temp1]
    if (currentScene % 10 < time.length) {
        if (currentScene < currentTeam * 10 + time[currentTeam].length - 1) currentScene++
        else {
            currentTeam++
            currentScene = (currentTeam) * 10
        }
    }
}

function sound(file) {
    let hasPlayed = false
    if (!file.isPlaying() && !hasPlayed) {
        file.play()
        hasPlayed = true
    }
}