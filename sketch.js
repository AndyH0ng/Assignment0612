// noinspection JSCheckFunctionSignatures,JSUnresolvedReference

let totalTime

let currentScene

let currentTeam
const TEAM1 = 1
const TEAM2 = 2
const TEAM3_1 = 3
const TEAM3_2 = 4
const TEAM3_3 = 5
const ENDINGCREDIT = 6
const CTRL = 7

let time = [
    [],
    [],
    [3, 5, 5, 10, 5, 7],        // TEAM3 ENDING1
    [3, 5, 3, 10, 5, 4],        // TEAM3 ENDING2
    [5, 10, 5, 5, 7, 5],        // TEAM3 ENDING3
    [2],                        // ENDING CREDIT
    [10]
]

const devMode = true;

function setup() {
    createCanvas(400, 400)
    // 현재 나타나는 씬 번호 초기값
    currentScene = 30
    // 현재 나타나는 팀 초기값
    currentTeam = 3
    totalTime = 0
}

function draw() {
    trackTime(millis())
    switch (currentTeam) {
        case TEAM1:
            team01()
            break
        case TEAM2:
            team02()
            break
        case TEAM3_1: case TEAM3_2: case TEAM3_3:
            team03()
            break
        case ENDINGCREDIT:
            credit()
            break
        case CTRL:
            break
        default: console.log("TEAM_VALUE_ERROR")
    }
}

function trackTime(args) {
    if (args - totalTime >= 1000 * time[currentTeam - 1][currentScene % ((currentTeam) * 10)]) {
        if (currentScene % (currentTeam * 10) < 6) {
            if (devMode) print("Duration", round((args - totalTime) / 1000))
            totalTime += 1000 * time[currentTeam - 1][currentScene % (currentTeam * 10)]
            switch (currentScene) {
                case 35: currentScene = 40; currentTeam++; break
                case 45: currentScene = 50; currentTeam++; break
                case 55: currentScene = 60; currentTeam++; break
                case 60: currentScene = 70; currentTeam++; break
                default: currentScene++
            }
            if (devMode) {
                print("Running Time", round(args / 1000))
                print("Current", currentScene)
            }
        }
    }
}