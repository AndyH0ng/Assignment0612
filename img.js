function preloadImage() {
    // 배경
    for (let i = 0; i <= 16; i++) {
        bg[i] = loadImage("assets/bg_" + i + ".png");
    }

    for (let i = 0; i <= 3; i++) {
        season[i] = loadImage("assets/season_" + i + ".png");
    }

    // 인물
    for (let i = 0; i <= 2; i++) {
        baby[i] = loadImage("assets/baby_" + i + ".png");
    }

    for (let i = 0; i <= 16; i++) {
        bear_girl[i] = loadImage("assets/bear_girl_" + i + ".png");
    }

    for (let i = 0; i <= 9; i++) {
        tiger_girl[i] = loadImage("assets/tiger_girl_" + i + ".png");
    }

    for (let i = 0; i <= 5; i++) {
        boy[i] = loadImage("assets/boy_" + i + ".png");
    }

    for (let i = 0; i <= 5; i++) {
        crowd[i] = loadImage("assets/crowd_" + i + ".png");
    }

    for (let i = 0; i <= 6; i++) {
        dangun[i] = loadImage("assets/dangun_" + i + ".png");
    }

    for (let i = 0; i <= 4; i++) {
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

    for (let i = 0; i <= 13; i++) {
        motion_a[i] = loadImage("assets/motion_a/a" + i + ".png");
    }

    for (let i = 0; i <= 7; i++) {
        motion_b[i] = loadImage("assets/motion_b/b" + i + ".png");
    }

    cloud = loadImage("assets/cloud.png");
    couple = loadImage("assets/couple.png");
    flower = loadImage("assets/flower.png");
    flowers = loadImage("assets/flowers.png");
}