function preloadImage() {
    // 배경
    for (var i = 0; i <= 11; i++)
        bg[i] = loadImage('assets/bg_' + i + '.png')

    // 캘린더
    for (var i = 0; i <= 12; i++)
        cal[i] = loadImage('assets/cal_' + i + '.png')

    notice = loadImage('assets/notice.png')

    // 단군
    for (var i = 0; i <= 2; i++)
        man[i] = loadImage('assets/man_' + i + '.png')
    baby[0] = loadImage("assets/baby_0.png")
    baby[1] = loadImage("assets/baby_1.png")
    man_facade = loadImage("assets/man_facade.png")
    man_foot = loadImage("assets/man_foot.png")
    man_side = loadImage("assets/man_side.png")
    man_torso = loadImage("assets/man_torso.png")
    man_in_cloud = loadImage("assets/man_in_cloud.png")

    for (var i = 0; i <= 3; i++)
        woman[i] = loadImage("assets/woman_" + i + ".png")

    for (var i = 0; i <= 5; i++)
        woman_alt[i] = loadImage("assets/wombn_" + i + ".png")

    couple = loadImage("assets/couple.png")
    all = loadImage("assets/all.png")

    for (var i = 0; i <= 8; i++)
        npc[i] = loadImage("assets/npc_" + i + ".png")

    garlic = loadImage("assets/garlic.png")
    mugwort = loadImage("assets/mugwort.png")
    cloud = loadImage("assets/cloud.png")
    crown = loadImage("assets/crown.png")
    knife = loadImage("assets/knife.png")

    for (var i = 0; i <= 1; i++)
        effect[i] = loadImage("assets/effect_" + i + ".png")

    for (var i = 0; i <= 2; i++)
        bear[i] = loadImage("assets/doosan_" + i + ".png")

    for (var i = 0; i <= 1; i++)
        tiger[i] = loadImage("assets/kia_" + i + ".png")

    for (var i = 0; i <= 6; i++)
        tiger_alt[i] = loadImage("assets/tiger_" + i + ".png")

    for (var i = 0; i <= 7; i++)
        voice_E3[i] = loadSound("assets/E3S" + i + ".mp3")
}