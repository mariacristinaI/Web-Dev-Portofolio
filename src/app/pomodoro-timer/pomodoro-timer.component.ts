import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro-timer.component.html',
  styleUrls: ['./pomodoro-timer.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class PomodoroComponent implements OnDestroy, OnInit {
  readonly terminal = { value: 'Digital Garden' };
  workTime = 25 * 60;
  breakTime = 5 * 60;
  currentTime = this.workTime;
  isWorkMode = true;
  isRunning = false;
  workLengthMinutes = 25;
  breakLengthMinutes = 5;
  private worker: Worker | null = null;
  private notification: Notification | null = null;

  // Preset session lengths
  readonly standardSession = { work: 25, break: 5 };
  readonly longSession = { work: 120, break: 15 };

  constructor() {}

  ngOnInit(): void {
    this.initializeApp();
  }

  private async initializeApp(): Promise<void> {
    console.log('Initializing Pomodoro Timer...');
    await this.setupNotifications();
    this.setupWakeLock();
    this.setupWorker();
  }

  private async setupNotifications(): Promise<void> {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      console.log('Notification permission status:', permission);
    } else {
      console.log('Notifications are not supported in this browser');
    }
  }

  private setupWakeLock(): void {
    if ('wakeLock' in navigator) {
      navigator.wakeLock.request('screen')
        .then(() => console.log('Wake lock activated'))
        .catch(err => console.log(`Wake lock error: ${err.name}, ${err.message}`));
    } else {
      console.log('Wake lock is not supported in this browser');
    }
  }

  private setupWorker(): void {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(new URL('./timer.worker', import.meta.url));
      
      this.worker.onmessage = ({ data }) => {
        if (data.remainingTime !== undefined) {
          this.currentTime = data.remainingTime;
        } else if (data.type === 'completed') {
          this.playAlarm();
          this.showNotification();
          this.toggleMode();
          this.start();
        }
      };
    } else {
      console.log('Web Workers are not supported in this browser');
    }
  }

  private showNotification(): void {
    if (Notification.permission === 'granted') {
      const message = this.isWorkMode ? 
        'Break time! Take a rest.' : 
        'Work time! Let\'s focus.';
      
      try {
        this.notification = new Notification('Pomodoro Timer', {
          body: message,
          icon: '/assets/icons/timer-icon.png'
        });
      } catch (error) {
        console.log('Error showing notification:', error);
      }
    } else {
      console.log('Notification permission not granted. Current status:', Notification.permission);
    }
  }

  get timerDisplay(): string {
    const minutes = Math.floor(this.currentTime / 60);
    const seconds = this.currentTime % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  setSessionPreset(preset: 'standard' | 'long'): void {
    if (this.isRunning) return;
    console.log('Setting session preset:', preset);

    const settings = preset === 'standard' ? this.standardSession : this.longSession;
    
    this.workLengthMinutes = settings.work;
    this.breakLengthMinutes = settings.break;
    this.workTime = this.workLengthMinutes * 60;
    this.breakTime = this.breakLengthMinutes * 60;
    
    this.currentTime = this.isWorkMode ? this.workTime : this.breakTime;
  }

  adjustSessionLength(mode: 'work' | 'break', change: number): void {
    if (this.isRunning) return;
    console.log(`Adjusting ${mode} time by ${change} minutes`);

    if (mode === 'work') {
      this.workLengthMinutes = Math.min(Math.max(1, this.workLengthMinutes + change), 180);
      this.workTime = this.workLengthMinutes * 60;
      if (this.isWorkMode) {
        this.currentTime = this.workTime;
      }
    } else {
      this.breakLengthMinutes = Math.min(Math.max(1, this.breakLengthMinutes + change), 30);
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
    if (!this.isRunning && this.worker) {
      console.log('Starting timer...');
      this.isRunning = true;
      const duration = this.isWorkMode ? this.workTime : this.breakTime;
      
      this.worker.postMessage({
        type: 'start',
        startTime: Date.now(),
        duration
      });
    }
  }

  pause(): void {
    if (this.isRunning) {
      console.log('Pausing timer...');
      this.isRunning = false;
      if (this.worker) {
        this.worker.terminate();
        this.setupWorker();
      }
    }
  }

  reset(): void {
    console.log('Resetting timer...');
    this.pause();
    this.currentTime = this.isWorkMode ? this.workTime : this.breakTime;
  }

  toggleMode(): void {
    console.log('Toggling mode...');
    this.pause();
    this.isWorkMode = !this.isWorkMode;
    this.currentTime = this.isWorkMode ? this.workTime : this.breakTime;
    console.log('Current mode:', this.isWorkMode ? 'Work' : 'Break');
  }

  playAlarm(): void {
    const audio = new Audio('assets/audio/Beep.mp3');
    audio.play()
      .then(() => console.log('Alarm played successfully'))
      .catch(error => console.log('Error playing alarm:', error));
  }

  ngOnDestroy(): void {
    if (this.worker) {
      this.worker.terminate();
    }
    if (this.notification) {
      this.notification.close();
    }
  }
}