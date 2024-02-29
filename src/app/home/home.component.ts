import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { typing } from '../utils';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  terminal = { value: '' };

  ngOnInit() {
    typing("Welcome to my webpage!", this.terminal);
  }
}
