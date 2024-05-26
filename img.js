function preloadImage() {
    // 배경
    for (var i = 0; i <= 6; i++)
        bg[i] = loadImage('assets/bg_' + i + '.png')
    // 캘린더
    for (var i = 0; i <= 12; i++)
        cal[i] = loadImage('assets/cal_' + i + '.png')
    // 단군
    man[0] = loadImage("assets/man_0.png")
    man[1] = loadImage("assets/man_1.png")
    baby = loadImage("assets/baby.png")
    man_facade = loadImage("assets/man_facade.png")
    man_foot = loadImage("assets/man_foot.png")
    man_side = loadImage("assets/man_side.png")
    man_torso = loadImage("assets/man_torso.png")
    man_in_cloud = loadImage("assets/man_in_cloud.png")
    // 웅녀
    for (var i = 0; i <= 3; i++)
        woman[i] = loadImage("assets/woman_" + i + ".png")

    for (var i = 0; i <= 2; i++)
        woman_alt[i] = loadImage("assets/wombn_" + i + ".png")

    couple = loadImage("assets/couple.png")
    // 신하
    npc[0] = loadImage("assets/npc_0.png")
    npc[1] = loadImage("assets/npc_1.png")
    npc[2] = loadImage("assets/npc_2.png")
    // NPC
    npc[3] = loadImage("assets/npc_3.png")
    npc[4] = loadImage("assets/npc_4.png")
    // 마늘
    garlic = loadImage("assets/garlic.png")
    mugwort = loadImage("assets/mugwort.png")
    cloud = loadImage("assets/cloud.png")
    // 호랑이
    tiger[0] = loadImage("assets/kia_0.png")        // default
    tiger[1] = loadImage("assets/kia_1.png")        // mouth open

    for (var i = 0; i <= 2; i++)
        tiger_alt[i] = loadImage("assets/tiger_" + i + ".png")
    // 곰
    bear[0] = loadImage("assets/doosan_0.png")      // default
    bear[1] = loadImage("assets/doosan_1.png")      // mouth open
    bear[2] = loadImage("assets/doosan_2.png")      // mumble
}