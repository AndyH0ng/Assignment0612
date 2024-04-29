let bgColor = 0;
let isSort = true;
let totalTime;
let currentScene;
let time = [1, 1, 1, 1, 1, 1, 1, 1];
// scene 총 6개 + Ending Cut
const M = 0;
const TEAM1 = 1;
const TEAM2 = 2;
const TEAM3_1 = 3;
const TEAM3_2 = 4;
const TEAM3_3 = 5;
const TEAM3_4 = 6;
const ENDINGCREDIT = 7;

const devMode = true;

function setup() {
    createCanvas(400, 400);
    currentScene = 0;
    totalTime = 0;
}

function draw() {
    background(bgColor);
    if (isSort) bgColor++;
    else bgColor--;
    if (bgColor == 255) isSort = false;
    else if (bgColor == 0) isSort = true;
    trackTime(millis());
    switch (currentScene) {
        case M:
            break;
        case TEAM1:
            team01();
            break;
        case TEAM2:
            team02();
            break;
        case TEAM3_1:
            ending01();
            break;
        case TEAM3_2:
            ending02();
            break;
        case TEAM3_3:
            ending03();
            break;
        case TEAM3_4:
            ending04();
            break;
        case ENDINGCREDIT:
            break;
    }

}

function trackTime(args) {
    if (devMode) print(currentScene);
    if (args - totalTime >= 1000 * time[currentScene]) {
        if (currentScene != time.length - 1) {
            totalTime += 1000 * time[currentScene];
            currentScene++;
        }
    }
}