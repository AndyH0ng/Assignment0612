function preloadImage() {
    // 배경
    for (let i = 0; i <= 16; i++) {
        bg[i] = loadImage("assets/bg_" + i + ".png");
    }

    for (let i = 0; i <= 3; i++) {
        season[i] = loadImage("assets/season_" + i + ".png");
    }

    // 인물
    for (let i = 0; i <= 3; i++) {
        baby[i] = loadImage("assets/baby_" + i + ".png");
    }

    for (let i = 0; i <= 16; i++) {
        bear_girl[i] = loadImage("assets/bear_girl_" + i + ".png");
    }

    for (let i = 0; i <= 9; i++) {
        tiger_girl[i] = loadImage("assets/tiger_girl_" + i + ".png");
    }

    for (let i = 0; i <= 10; i++) {
        boy[i] = loadImage("assets/boy_" + i + ".png");
    }

    for (let i = 0; i <= 5; i++) {
        crowd[i] = loadImage("assets/crowd_" + i + ".png");
    }

    for (let i = 0; i <= 6; i++) {
        dangun[i] = loadImage("assets/dangun_" + i + ".png");
    }

    for (let i = 0; i <= 7; i++) {
        face[i] = loadImage("assets/face_" + i + ".png");
    }

    for (let i = 0; i <= 3; i++) {
        hidden[i] = loadImage("assets/hidden_" + i + ".png");
    }

    for (let i = 0; i <= 15; i++) {
        man[i] = loadImage("assets/man_" + i + ".png");
    }

    for (let i = 0; i <= 5; i++) {
        tiger[i] = loadImage("assets/tiger_" + i + ".png");
    }

    for (let i = 0; i <= 3; i++) {
        bubble[i] = loadImage("assets/bubble_" + i + ".png");
    }

    for (let i = 0; i <= 4; i++) {
        cloud_alt[i] = loadImage("assets/cloud_alt_" + i + ".png");
    }

    for (let i = 0; i <= 1; i++) {
        eat[i] = loadImage("assets/eat_" + i + ".png");
    }

    for (let i = 0; i < 14; i++) {
        motion_a[i] = loadImage("assets/motion_a/a" + (i + 1) + ".png");
    }

    for (let i = 0; i < 8; i++) {
        motion_b[i] = loadImage("assets/motion_b/b" + (i + 1) + ".png");
    }

    for (let i = 1; i <= 14; i++) {
        motion_c[i] = loadImage("assets/motion_c/c" + i + ".png");
    }

    motion_c15_1 = loadImage("assets/motion_c/c15_1.png");
    motion_c15_2 = loadImage("assets/motion_c/c15_2.png");


    cloud = loadImage("assets/cloud.png");
    couple = loadImage("assets/couple.png");
    couple_alt = loadImage("assets/couple_alt.png");
    couple_alt_happy = loadImage("assets/couple_alt_happy.png");
    flower = loadImage("assets/flower.png");
    flowers = loadImage("assets/flowers.png");
    sword = loadImage("assets/sword.png");
    flag = loadImage("assets/flag.png");
}

function preloadSound() {
    for (let i = 0; i <= 6; i++) {
        audio1[i] = loadSound("assets/audio/E1S" + i + ".m4a",onSoundLoadSuccess,onSoundLoadError,onSoundLoadProgress);
    }

    for (let i = 0; i <= 7; i++) {
        audio2[i] = loadSound("assets/audio/E2S" + i + ".m4a");
    }
    audio3 = loadSound("assets/audio/E1S0.m4a");
}

function onSoundLoadSuccess(e){
   console.log("load sound success",e);
}
function onSoundLoadError(e){
   console.log("load sound error",e);
}
function onSoundLoadProgress(e){
   console.log("load sound progress",e);
}
