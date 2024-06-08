export class Timer {
    constructor(tempTotalTime) {
      this.totalTime = tempTotalTime;
      this.savedTime = 0; // When Timer started
    }
  
    setTime(t) {
      this.totalTime = t;
    }
  
    // Starting the timer
    start() {
      // When the timer starts it stores the current time in milliseconds.
      this.savedTime = millis();
    }
  
    minusTime(t) {
      this.savedTime -= t * 1000; // Convert seconds to milliseconds
    }
  
    leaveTime() {
      return Math.floor((this.totalTime * 1000 - (millis() - this.savedTime)) / 1000); // milliseconds to seconds
    }
  
    // The function isFinished() returns true if the time has passed.
    isFinished() {
      return this.leaveTime() <= 0;
    }
  }
  