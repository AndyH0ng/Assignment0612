let is30 = false;
let is31 = false;
let is32 = false;
let is33 = false;
let is34 = false;
let is35 = false;
let is36 = false;
let is40 = false;
let is41 = false;
let is42 = false;
let is43 = false;
let is44 = false;
let is45 = false;
let is46 = false;
let is47 = false;
let is50 = false;
let is51 = false;
let is52 = false;
let is53 = false;
let is54 = false;
let is55 = false;
let is56 = false;

function team03() {
    switch (currentScene) {
        case 30:
            if (is30 === false) {
                is30 = true;
                sound30.play();
            }
            push(); E1S0(); pop();
            break;
        case 31:
            if (is31 === false) {
                is31 = true;
                sound30.stop();
                sound31.play();
            }
            push(); E1S1(); pop();
            break;
        case 32:
            if (is32 === false) {
                is32 = true;
                sound31.stop();
                sound32.play();
            }
            push(); E1S2(); pop();
            break;
        case 33:
            if (is33 === false) {
                is33 = true;
                sound32.stop();
                sound33.play();
            }
            push(); E1S3(); pop();
            break;
        case 34:
            if (is34 === false) {
                is34 = true;
                sound33.stop();
                sound34.play();
            }
            push(); E1S4(); pop();
            break;
        case 35:
            if (is35 === false) {
                is35 = true;
                sound34.stop();
                sound35.play();
            }
            push(); E1S5(); pop();
            break;
        case 36:
            if (is36 === false) {
                is36 = true;
                sound35.stop();
                sound36.play();
            }
            push(); E1S6(); pop();
            break;
        case 40:
            if (is40 === false) {
                is40 = true;
                sound36.stop();
                sound40.play();
            }
            push(); E2S0(); pop();
            break;
        case 41:
            if (is41 === false) {
                is41 = true;
                sound40.stop();
                sound41.play();
            }
            push(); E2S1(); pop();
            break;
        case 42:
            if (is42 === false) {
                is42 = true;
                sound41.stop();
                sound42.play();
            }
            push(); E2S2(); pop();
            break;
        case 43:
            if (is43 === false) {
                is43 = true;
                sound42.stop();
                sound43.play();
            }
            push(); E2S3(); pop();
            break;
        case 44:
            if (is44 === false) {
                is44 = true;
                sound43.stop();
                sound44.play();
            }
            push(); E2S4(); pop();
            break;
        case 45:
            if (is45 === false) {
                is45 = true;
                sound44.stop();
                sound45.play();
            }
            push(); E2S5(); pop();
            break;
        case 46:
            if (is46 === false) {
                is46 = true;
                sound45.stop();
                sound46.play();
            }
            push(); E2S6(); pop();
            break;
        case 47:
            if (is47 === false) {
                is47 = true;
                sound46.stop();
                sound47.play();
            }
            push(); E2S7(); pop();
            break;
        case 50:
            if (is50 === false) {
                is50 = true;
                sound47.stop();
                sound50.play();
            }
            push(); E3S0(); pop();
            break;
        case 51:
            if (is51 === false) {
                is51 = true;
                sound50.stop();
                sound51.play();
            }
            push(); E3S1(); pop();
            break;
        case 52:
            if (is52 === false) {
                is52 = true;
                sound51.stop();
                sound52.play();
            }
            push(); E3S2(); pop();
            break;
        case 53:
            if (is53 === false) {
                is53 = true;
                sound52.stop();
                sound53.play();
            }
            push(); E3S3(); pop();
            break;
        case 54:
            if (is54 === false) {
                is54 = true;
                sound53.stop();
                sound54.play();
            }
            push(); E3S4(); pop();
            break;
        case 55:
            if (is55 === false) {
                is55 = true;
                sound54.stop();
                sound55.play();
            }
            push(); E3S5(); pop();
            break;
        case 56:
            if (is56 === false) {
                is56 = true;
                sound55.stop();
                sound56.play();
            }
            push(); E3S6(); pop();
            break;
    }
}

function goto(scene) {
    currentScene = scene
    currentTeam = int(scene / 10)
    totalTime = millis()
}
let sound30, sound31, sound32, sound33, sound34, sound35, sound36
let sound40, sound41, sound42, sound43, sound44, sound45, sound46, sound47;
let sound50, sound51, sound52, sound53, sound54, sound55, sound56;
function team03Preload() {
    sound30 = new Narration3('E1S0.m4a', '', 0);
    sound30.preload();
    sound31 = new Narration3('E1S1.m4a', '', 0);
    sound31.preload();
    sound32 = new Narration3('E1S2.m4a', '', 0);
    sound32.preload();
    sound33 = new Narration3('E1S3.m4a', '', 0);
    sound33.preload();
    sound34 = new Narration3('E1S4.m4a', '', 0);
    sound34.preload();
    sound35 = new Narration3('E1S5.m4a', '', 0);
    sound35.preload();
    sound36 = new Narration3('E1S6.m4a', '', 0);
    sound36.preload();
    sound40 = new Narration3('E2S0.m4a', '', 0);
    sound40.preload();
    sound41 = new Narration3('E2S1.m4a', '', 0);
    sound41.preload();
    sound42 = new Narration3('E2S2.m4a', '', 0);
    sound42.preload();
    sound43 = new Narration3('E2S3.m4a', '', 0);
    sound43.preload();
    sound44 = new Narration3('E2S4.m4a', '', 0);
    sound44.preload();
    sound45 = new Narration3('E2S5.m4a', '', 0);
    sound45.preload();
    sound46 = new Narration3('E2S6.m4a', '', 0);
    sound46.preload();
    sound47 = new Narration3('E2S7.m4a', '', 0);
    sound47.preload();
    sound50 = new Narration3('E3S0.m4a', '', 0);
    sound50.preload();
    sound51 = new Narration3('E3S1.m4a', '', 0);
    sound51.preload();
    sound52 = new Narration3('E3S2.m4a', '', 0);
    sound52.preload();
    sound53 = new Narration3('E3S3.m4a', '', 0);
    sound53.preload();
    sound54 = new Narration3('E3S4.m4a', '', 0);
    sound54.preload();
    sound55 = new Narration3('E3S5.m4a', '', 0);
    sound55.preload();
    sound56 = new Narration3('E3S6.m4a', '', 0);
    sound56.preload();
}

