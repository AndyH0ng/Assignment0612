export class Narration {
  constructor(fileName, subtitle, silenceDuration) {
    this.fileName = "../assets/team01/" + fileName; // 나레이션 파일 경로
    this.subtitle = subtitle; // 자막 텍스트
    this.silenceDuration = silenceDuration;
    this.sound = null; // 사운드 객체
    this.isPlaying = false;
    this.subtitleDuration = 0;
    this.startTime = millis();
    this.isSubtitleVisible = false;
  }

  preload() {
    this.sound = loadSound(this.fileName, () => {
      this.subtitleDuration = this.sound.duration() * 1000; // 초 단위를 밀리초 단위로 변환
    });
  }

  play(callback) {
    if (this.sound) {
      this.sound.play();
      this.isPlaying = true;
      this.showSubtitle();
      this.sound.onended(() => {
        this.isPlaying = false;
        this.subtitleVisible = false;
        if (callback) {
          setTimeout(callback, this.silenceDuration); // 적막 시간 후 콜백 호출
        }
      });
    }
  }

  stop() {
    if (this.sound && this.isPlaying) {
      this.sound.stop();
      this.isPlaying = false;
      this.subtitleVisible = false;
    }
  }

  showSubtitle() {
    this.subtitleVisible = true;
    this.subtitleStartTime = millis();
  }

  updateSubtitle() {
    if (this.subtitleVisible && this.subtitle) {
      let elapsedTime = millis() - this.subtitleStartTime;
      if (elapsedTime < this.subtitleDuration) {
        this.displaySubtitle(); // 자막을 화면에 표시
      } else {
        this.subtitleVisible = false;
      }
    }
  }

  displaySubtitle() {
    textAlign(CENTER, CENTER);
    textSize(45);
    fill(0, 0, 0, 150); // 반투명 검정색 박스
    let padding = 20;
    let boxWidth = textWidth(this.subtitle) + padding * 2;
    let boxHeight = 100;
    let x = width / 2;
    let y = height - 150;
    rect(x - boxWidth / 2, y - boxHeight / 2, boxWidth, boxHeight, 10); // 라운드 박스
    fill(255); // 흰색 텍스트
    text(this.subtitle, x, y);
  }

}
