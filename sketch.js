// noinspection JSCheckFunctionSignatures,JSUnresolvedReference

const STARTSCENE = 30           // 현재 나타나는 씬 번호 초기값
const STARTTEAM = 3             // 현재 나타나는 팀 초기값
const devMode = true;           // 개발자 모드 (콘솔 창에 정보를 출력합니다)

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

// 팀 별 시간 지정 (단위: 초)
// 시간을 지정하고 싶지 않을 경우 -1로 지정합니다.
// 현재 팀 별 6개의 씬으로 고정되어 있다 가정하여 만들었습니다.
let time = [
    [],
    [-1],
    [3, 5, 5, 10, 5, 7],        // TEAM3 ENDING1
    [3, 5, 3, 10, 5, 4],        // TEAM3 ENDING2
    [5, 10, 5, 5, 7, 5],        // TEAM3 ENDING3
    [2],                        // ENDING CREDIT
    [10]
]

function setup() {
    createCanvas(400, 400)
    currentScene = STARTSCENE; currentTeam = STARTTEAM; totalTime = 0;
    // img.js에서 loadImage()를 불러옵니다.
    loadImg()
}

function draw() {
    trackTime(millis())
    switch (currentTeam) {
        case TEAM1: team01(); break
        case TEAM2: team02(); break
        case TEAM3_1: case TEAM3_2: case TEAM3_3: team03(); break
        case ENDINGCREDIT: credit(); break
        case CTRL: break
        default: console.log("TEAM_VALUE_ERROR")
    }
}

function trackTime(args) {
    // 지난 시간(millis - totalTime, 초 단위)이 요소값보다 크거나 같을 경우 다음을 시행
    if (args - totalTime >= 1000 * time[currentTeam - 1][currentScene % ((currentTeam) * 10)]) {
        // DEBUG: 콘솔창에 정보 출력
        if (devMode) {
            console.log("---------------")
            console.log("Duration (sec)", round((args - totalTime) / 1000))
        }
        // totalTime에 밀리sec 단위로 시간을 더함
        totalTime += 1000 * time[currentTeam - 1][currentScene % (currentTeam * 10)]
        // currentScene의 두 번째 자리를 늘려야 할 경우 || 첫 번째 자리를 늘려야 할 경우를 구분
        // TODO: 팀 당 부여된 씬의 개수를 변경해야 할 경우 다음을 수정합니다.
        // FIXME: js에서 2차원 배열의 행 길이를 받아오는 법을 몰라 하드코딩으로 구현했습니다.
        switch (currentScene) {
            case 35: currentScene = 40; currentTeam++; break
            case 45: currentScene = 50; currentTeam++; break
            case 55: currentScene = 60; currentTeam++; break
            case 60: currentScene = 70; currentTeam++; break
            default: currentScene++
        }
        // DEBUG: 콘솔창에 정보 출력
        if (devMode) {
            print("Total (sec)", round(args / 1000))
            print("Current Scene", currentScene)
        }
    }
}