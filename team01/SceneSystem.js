import { Narration } from "./Narration.js";

export class SceneSystem {
  static START = 0;
  static INIT = 1;
  static SHOWING = 2;
  static END = 3;

  constructor() {
    this.currentState = SceneSystem.START;
    this.currentScene = 0;
    this.currentNarrationIndex = 0;
    this.scenes = [
      [
        // 씬 1
        new Narration(
          "scene1/s1nr1.mp3",
          "Long ago, Hwanwoong, the son of Hwanin, wanted to rule the human world, \nso he often looked down on the human world.",
          200
        ),
        new Narration(
          "scene1/s1nr2.mp3",
          "Seeing that, Hwanin went down and told Hwanwoong to rule the human world.",
          0
        ),
        new Narration(
          "scene1/s1nr3.mp3",
          "When Hwanwoong heard that, he decided to go down into the human world.",
          0
        ),
      ],
      [
        // 씬 2
        new Narration("scene2/bgm.mp3"),
      ],
      [
        // 씬 3
        // 나레이션 없음
      ],
      [
        // 씬 4
        new Narration("scene4/intro.mp3", "Some years later.", 800),
        new Narration(
          "scene4/n1.mp3",
          "One day, Hwanwoong came across a bear and a tiger in front of a cave.",
          200
        ),
        new Narration("scene4/n2.mp3", "We want to be human, too!", 400),
        new Narration("scene4/n3.mp3", "Hwanwoong agonized for a moment.", 400),
        new Narration(
          "scene4/n4.mp3",
          "And Hwanwoong handed over mugwort and garlic, saying that \nif you endure 100 days in a cave while eating this, you will become a human.",
          300
        ),
        new Narration(
          "scene4/n5.mp3",
          "So the bear and tiger entered the cave with mugwort and garlic.",
          0
        ),
      ],
    ];
  }

  preload() {
    for (let scene of this.scenes) {
      for (let narration of scene) {
        narration.preload();
      }
    }
  }
  changeScene() {
    this.currentState = SceneSystem.INIT;
    this.currentScene++;
    this.currentNarrationIndex = 0;
    console.log("change:", this.currentScene);
  }

  showScene() {
    this.currentState = SceneSystem.SHOWING;
    console.log("show");
    if (this.scenes[this.currentScene - 1].length > 0) {
      this.playNextNarration();
    }
  }
  endScene() {
    this.currentState = SceneSystem.END;
  }

  playNextNarration() {
    if (
      this.currentNarrationIndex < this.scenes[this.currentScene - 1].length
    ) {
      let currentNarration =
        this.scenes[this.currentScene - 1][this.currentNarrationIndex];
      currentNarration.play(() => {
        this.currentNarrationIndex++;
        this.playNextNarration();
      });
    }
  }

  updateSubtitles() {
    if (this.currentState === SceneSystem.SHOWING) {
      if (
        this.currentNarrationIndex < this.scenes[this.currentScene - 1].length
      ) {
        let currentNarration =
          this.scenes[this.currentScene - 1][this.currentNarrationIndex];
        currentNarration.updateSubtitle();
      }
    }
  }

  stopNarration() {
    let currentNarration =
      this.scenes[this.currentScene - 1][this.currentNarrationIndex - 1];
    currentNarration.stop();
  }
}
