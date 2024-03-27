import { Component, OnInit } from '@angular/core';
import { typing } from '../utils';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  terminal = { value: 'C' };
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    message: ['', Validators.required],
  })

  constructor(private readonly fb: FormBuilder) { };

  ngOnInit() {
    typing("ontact form", this.terminal);
  }
}
