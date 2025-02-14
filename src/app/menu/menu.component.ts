import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-menu',
    imports: [CommonModule, RouterModule],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss'
})
export class MenuComponent {
  currentTheme = 'modern';
  icons: { [key: string]: string } = {
    'modern': 'bi-controller',
    'light': 'bi-joystick'
  }

  changeTheme(theme: string) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    this.currentTheme = theme;
  };
}
