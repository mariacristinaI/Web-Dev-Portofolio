import { Component, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pomodoro-timer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pomodoro-timer.component.html',
  styleUrl: './pomodoro-timer.component.scss'
})
export class PomodoroTimerComponent implements OnDestroy{
  readonly terminal = { value: 'Digital Garden' };
  workTime = 25 * 60;
  breakTime = 5 * 60;
  currentTime = this.workTime;
  isWorkMode = true;
  isRunning = false;
  private timer: any;
  
  workLengthMinutes = 25;
  breakLengthMinutes = 5;

  // Preset session lengths
  readonly standardSession = { work: 25, break: 5 };
  readonly longSession = { work: 120, break: 15 };

  get timerDisplay(): string {
    const minutes = Math.floor(this.currentTime / 60);
    const seconds = this.currentTime % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  setSessionPreset(preset: 'standard' | 'long'): void {
    if (this.isRunning) return;

    const settings = preset === 'standard' ? this.standardSession : this.longSession;
    
    this.workLengthMinutes = settings.work;
    this.breakLengthMinutes = settings.break;
    this.workTime = this.workLengthMinutes * 60;
    this.breakTime = this.breakLengthMinutes * 60;
    
    // Update current time based on current mode
    this.currentTime = this.isWorkMode ? this.workTime : this.breakTime;
  }

  adjustSessionLength(mode: 'work' | 'break', change: number): void {
    if (this.isRunning) return;

    if (mode === 'work') {
      this.workLengthMinutes = Math.min(Math.max(1, this.workLengthMinutes + change), 180); // Extended max to 3 hours
      this.workTime = this.workLengthMinutes * 60;
      if (this.isWorkMode) {
        this.currentTime = this.workTime;
      }
    } else {
      this.breakLengthMinutes = Math.min(Math.max(1, this.breakLengthMinutes + change), 30); // Extended max to 30 minutes
      this.breakTime = this.breakLengthMinutes * 60;
      if (!this.isWorkMode) {
        this.currentTime = this.breakTime;
      }
    }
  }

  toggleTimer(): void {
    if (this.isRunning) {
      this.pause();
    } else {
      this.start();
    }
  }

  start(): void {
    if (!this.isRunning) {
      this.isRunning = true;
      this.timer = setInterval(() => {
        this.currentTime--;
        if (this.currentTime <= 0) {
          this.playAlarm();
          this.toggleMode();
        }
      }, 1000);
    }
  }

  pause(): void {
    if (this.isRunning) {
      this.isRunning = false;
      clearInterval(this.timer);
    }
  }

  reset(): void {
    this.pause();
    this.currentTime = this.isWorkMode ? this.workTime : this.breakTime;
  }

  toggleMode(): void {
    this.pause();
    this.isWorkMode = !this.isWorkMode;
    this.currentTime = this.isWorkMode ? this.workTime : this.breakTime;
  }

  private playAlarm(): void {
    const audio = new Audio('assets/audio/Beep.mp3');
    audio.play()
      .catch(error => console.warn('Error playing sound:', error));
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}