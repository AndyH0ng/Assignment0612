import { SceneSystem } from "./SceneSystem.js";
import { introPreload, introInit, introScene } from "./intro.js";
import { scene1Preload, scene1Init, scene1 } from "./scene1.js";
import { scene2Preload, scene2Init, scene2 } from "./scene2.js";
import {
  scene3Preload,
  scene3Init,
  scene3,
  scene3MousePressed,
  scene3MouseDragged,
  scene3MouseReleased,
} from "./scene3.js";
import { scene4Preload, scene4Init, scene4 } from "./scene4.js";

export let sceneSystem;
export let mainPath;

export function team01Preload() {
  // 필요한 이미지나 사운드를 여기서 preload
  sceneSystem = new SceneSystem();
  mainPath = "../assets/team01/";
  sceneSystem.preload();
  introPreload();
  scene1Preload();
  scene2Preload();
  scene3Preload();
  scene4Preload();
}

export function team01Init() {
  createCanvas(1920, 1080);
  introInit();
}

export function team01() {
  if (sceneSystem.currentState === SceneSystem.START) {
    introScene();
  } else if (sceneSystem.currentState === SceneSystem.INIT) {
    initScene(sceneSystem.currentScene);
    sceneSystem.showScene();
  } else if (sceneSystem.currentState === SceneSystem.SHOWING) {
    showScene(sceneSystem.currentScene);
  } else if (sceneSystem.currentState === SceneSystem.END) {
    // 엔딩 처리
  }
}

function initScene(scene) {
  if (scene === 1) {
    scene1Init();
  } else if (scene === 2) {
    scene2Init();
  } else if (scene === 3) {
    scene3Init();
  } else if (scene === 4) {
    scene4Init();
  }
}

function showScene(scene) {
  if (scene === 1) {
    scene1();
  } else if (scene === 2) {
    scene2();
  } else if (scene === 3) {
    scene3();
  } else if (scene === 4) {
    scene4();
  }

  if (scene != 2) {
    sceneSystem.updateSubtitles();
  }
}
export function team01Pressed() {
  if (sceneSystem.currentScene === 3) {
    scene3MousePressed();
  }
}

export function team01Dragged() {
  if (sceneSystem.currentScene === 3) {
    scene3MouseDragged();
  }
}

export function team01Released() {
  if (sceneSystem.currentScene === 3) {
    scene3MouseReleased();
  }
}

window.team01Preload = team01Preload;
window.team01Init = team01Init;
window.team01 = team01;
window.team01Pressed = team01Pressed;
window.team01Dragged = team01Dragged;
window.team01Released = team01Released;
