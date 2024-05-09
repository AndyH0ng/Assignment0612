let totalTime;

let currentScene;

let currentTeam;
const TEAM1 = 1;
const TEAM2 = 2;
const TEAM3_0 = 3;
const TEAM3_1 = 4;
const TEAM3_2 = 5;
const TEAM3_3 = 6;
const ENDINGCREDIT = 7;

let time = [
    [],
    [],
    [3, 5, 5, 10, 5, 7],        // TEAM3 ENDING1
    [3, 5, 3, 10, 5, 4],        // TEAM3 ENDING2
    [5, 10, 5, 5, 7, 5]         // TEAM3 ENDING3
]

const devMode = true;

function setup() {
    createCanvas(400, 400);
    // 현재 나타나는 씬 번호 초기값
    currentScene = 30;
    // 현재 나타나는 팀 초기값
    currentTeam = 3;
    totalTime = 0;
}

function draw() {
    trackTime(millis());
    switch (currentTeam) {
        case TEAM1:
            team01();
            break;
        case TEAM2:
            team02();
            break;
        case TEAM3_0: case TEAM3_1: case TEAM3_2: case TEAM3_3:
            team03();
            break;
        case ENDINGCREDIT:
            break;
    }
}

function trackTime(args) {
    if (devMode) print(currentScene);
    if (args - totalTime >= 1000 * time[currentTeam - 1][currentScene % ((currentTeam) * 10)]) {
        if (currentScene % (currentTeam * 10) < 6) {
            print("Duration", round((args - totalTime) / 1000))
            totalTime += 1000 * time[currentTeam - 1][currentScene % (currentTeam * 10)];
            if (currentScene == 35) {
                currentScene = 40
                currentTeam++
            }
            else if (currentScene == 45) {
                currentScene = 50
                currentTeam++
            }
            else currentScene++
            if (devMode) {
                print("Running Time", round(args / 1000))
                print("Current", currentScene)
            }
        }
    }
}