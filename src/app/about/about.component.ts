import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { typing } from '../utils';

@Component({
    selector: 'app-about',
    imports: [RouterModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  Maria = {
    name: "Maria-Cristina",
    surname: "Iosub",
    age: 28,
    canCode: true,
  };
  terminal = { value: 'M' };
  displayState = true;

  ngOnInit() {
    typing("ore about me", this.terminal);
  }

  toggleDisplay() {
    this.displayState = !this.displayState;
  }
}
