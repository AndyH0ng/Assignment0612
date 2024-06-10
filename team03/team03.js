function team03() {
    switch (currentScene) {
        case 30:
            push(); E1S0(); pop();
            break;
        case 31:
            push(); E1S1(); pop();
            break;
        case 32:
            push(); E1S2(); pop();
            break;
        case 33:
            push(); E1S3(); pop();
            break;
        case 34:
            push(); E1S4(); pop();
            break;
        case 35:
            push(); E1S5(); pop();
            break;
        case 36:
            push(); E1S6(); pop();
            break;
        case 40:
            push(); E2S0(); pop();
            break;
        case 41:
            push(); E2S1(); pop();
            break;
        case 42:
            push(); E2S2(); pop();
            break;
        case 43:
            push(); E2S3(); pop();
            break;
        case 44:
            push(); E2S4(); pop();
            break;
        case 45:
            push(); E2S5(); pop();
            break;
        case 46:
            push(); E2S6(); pop();
            break;
        case 47:
            push(); E2S7(); pop();
            break;
        case 50:
            push(); E3S0(); pop();
            break;
        case 51:
            push(); E3S1(); pop();
            break;
        case 52:
            push(); E3S2(); pop();
            break;
        case 53:
            push(); E3S3(); pop();
            break;
        case 54:
            push(); E3S4(); pop();
            break;
        case 55:
            push(); E3S5(); pop();
            break;
        case 56:
            push(); E3S6(); pop();
            break;
    }
}

function goto(scene) {
    currentScene = scene
    currentTeam = int(scene / 10)
    totalTime = millis()
}