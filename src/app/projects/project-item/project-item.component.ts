import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Image {
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
  linkUrl: string;
}

@Component({
    selector: 'app-project-item',
    imports: [CommonModule],
    templateUrl: './project-item.component.html'
})
export class ProjectItemComponent {
  @Input()
  project!: Image;
}