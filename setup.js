function setupVar() {
  // E1S0
  tgWidth10 = bear_girl[5].width * 0.3;  // 초기 너비 비율
  tgHeight10 = bear_girl[5].height * 0.3;  // 초기 높이 비율

  // E1S1
  bear_girl[9].resize((bear_girl[9].width * 0.7), (bear_girl[9].height * 0.7)); // Happy 이미지 크기 조정

  // E1S5
  babyY15 = height / 2; // 초기 Baby 이미지의 Y 위치 설정

  // E1S6
  currentImg16 = dangun[2];
  x16 = 1050;
  y16 = 678;  // 초기 y 위치
  sizeW16 = 300;
  sizeH16 = 400;
  ySpeed16 = (950 - 678) / (3 * 30.0);  // 3초 동안 950까지 내려가기 위한 속도

  // E1S7
  currentImg17 = dangun[2];
  x17 = 1050;
  y17 = 678;  // 초기 y 위치
  sizeW17 = 300;
  sizeH17 = 400;
  ySpeed17 = (950 - 678) / (3 * 30.0);

  // E2S0
  tgWidth40 = tiger_girl[0].width * 0.3;  // 초기 너비 비율
  tgHeight40 = tiger_girl[0].height * 0.3;  // 초기 높이 비율

  bearWidth30 = bear_girl[6].width * 0.3;
  bearHeight30 = bear_girl[6].height * 0.3;
  tigerWidth30 = tiger_girl[1].width * 0.3;
  tigerHeight30 = tiger_girl[1].height * 0.3;

  // E3S2
  man32 = man[12];

  // E3S3
  bg33 = bg[5];
  babyY33 = height / 2; // set initial Y position of Baby image

  // E3S4
  man13_34 = man[13]
  crown34 = man[13]
  man14_34 = man[14]
  man15_34 = man[15]
  dangun5_34 = dangun[5]
  boy2_34 = boy[2]
  boy3_34 = boy[3]
  dangun6_34 = dangun[6]
  boy0_34 = boy[0]
  boy1_34 = boy[1]
  face5_34 = face[5]
  man13_34.resize(man[13].width / 2, man[13].height / 2);
  man14_34.resize(man[14].width / 2, man[14].height / 2);
  dangun5_34.resize(dangun[5].width / 2, dangun[5].height / 2);
  boy0_34.resize(boy[0].width / 2, boy[0].height / 2);
  dangun6_34.resize(dangun[6].width / 2, dangun[6].height / 2);
  boy1_34.resize(boy[1].width / 2, boy[1].height / 2);
  man15_34.resize(man[15].width / 2, man[15].height / 2);
  boy2_34.resize(boy[2].width / 2, boy[2].height / 2);
  boy3_34.resize(boy[3].width / 2, boy[3].height / 2); // 추가
  face5_34.resize(face[5].width / 2, face[5].height / 2);

  // E3S5
  insertImg = loadImage("assets/motion_c/c1.png");
}