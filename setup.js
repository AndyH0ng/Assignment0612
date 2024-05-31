function setupVar() {
    tgWidth = tiger_alt.width * 0.5;  // Initial width scale
    tgHeight = tiger_alt.height * 0.5;  // Initial height scale
    // E2S3
    ohWidth = notice.width / 2;
    ohHeight = notice.height / 2;
    notice.resize(ohWidth, ohHeight);
    bombWidth = effect[0].width/1.3;
    bombHeight = effect[0].height/1.3;

    // E2S5
    tiger_alt[6].resize(int(tiger_alt[6].width * angrytigerScale), int(tiger_alt[6].height * angrytigerScale));
    tigergirlXE2S5 = 1400;

    // fight 이미지의 크기 조정 (1.5배 확대)
    effect[1].resize(int(effect[1].width * 1.5), int(effect[1].height * 1.5));

    // E2S6
    ohgirl1X = 1200;
    angrytigerX = 0;

    // E3S3
    currentDanImgE3S3 = baby[0];
    currentTigersonImgE3S3 = baby[1];

    // E3S4
    // 초기 위치 및 상태 설정
    currentDanImgE3S4 = man[1];
    currentTigergirlsonImgE3S4 = npc[5];
    crownXE3S4 = offsetXE3S4 + 300;
    crownYE3S4 = 300;
    startCrownXE3S4 = crownXE3S4;
    startCrownYE3S4 = crownYE3S4;
    targetCrownXE3S4 = offsetXE3S4 + 600;
    targetCrownYE3S4 = 100;
    sadTigergirlsonYE3S4 = 400; // 초기 y좌표 설정

    // E3S6
    // mad 이미지를 초기 위치에 배치
    madXE3S6 = width - npc[7].width - 100;
    madYE3S6 = height / 2 - npc[7].height / 2;

    // knife 이미지를 초기 위치에 배치 (mad 이미지 옆)
    knifeXE3S6 = madXE3S6 + npc[7].width - 400;
    knifeYE3S6 = height / 2 - knife.height / 2;

    // mad와 knife 이미지의 타겟 위치 (중앙)
    madTargetXE3S6 = width / 2 - npc[7].width / 2;
    madTargetYE3S6 = height / 2 - npc[7].height / 2;
    knifeTargetXE3S6 = width / 2 - knife.width / 2;
    knifeTargetYE3S6 = height / 2 - knife.height / 2;
}