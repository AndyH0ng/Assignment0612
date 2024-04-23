let bgColor = 0;
let isSort = true;
function setup() {
    createCanvas(400, 400);
    let time = [0, 0, 0, 0];
    // scene 총 6개 + Ending Cut
    const MAIN = 0;
    const TEAM1 = 1;
    const TEAM2 = 2;
    const TEAM3_1 = 3;
    const TEAM3_2 = 4;
    const TEAM3_3 = 5;
    const TEAM3_4 = 6;
    const ENDINGCREDIT = 7;
    let currentScene = 0;
}
function draw() {
    background(bgColor);
    if (isSort) bgColor++;
    else bgColor--;
    if (bgColor == 255) isSort = false;
    else if (bgColor == 0) isSort = true;
}