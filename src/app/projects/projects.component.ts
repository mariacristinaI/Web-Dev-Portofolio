import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectItemComponent } from './project-item/project-item.component';
import { typing } from '../utils';
import { CommonModule } from '@angular/common';
import { CitySkylineComponent } from './city-skyline/city-skyline.component';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
  linkUrl: string;
}

@Component({
    selector: 'app-projects',
    imports: [CommonModule, RouterModule, ProjectItemComponent, CitySkylineComponent],
    templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  terminal = { value: 'P' };
  projects: Project[] = [
    {
      title: 'The Cat Photo App',
      description: 'App displays a few cat photos along with a CSS animation of a beating heart and moving text.',
      imageUrl: '/assets/projects/cat-photo-app.webp',
      alt: 'Screenshot of the Cat Photo App. The web page displays a few cat photos and basic animations.',
      linkUrl: 'https://github.com/mariacristinaI/CatPhotoApp',
    },
    {
      title: 'Café & Pie Shop',
      description: 'A simple e-commerce web app highlighting the use of SASS workflow and browser APIs.',
      imageUrl: '/assets/projects/pie-shop.jpg',
      alt: "Screenshot of Luna's Pie Shop. It is a simple pie shop with a cute layout.",
      linkUrl: 'https://github.com/mariacristinaI/luna-s-pie-shop',
    },
    {
      title: 'Random Number Generator',
      description: 'A random number generator with the outcome sequence, by definition, containing some patterns detectable in hindsight but unpredictable to foresight.',
      imageUrl: '/assets/projects/RNG.jpg',
      alt: "Screenshot of RNG. A random number generator with a casino-themed design.",
      linkUrl: 'https://github.com/mariacristinaI/RNG',
    },
    {
      title: 'Digital Amusement Parks',
      description: 'An amusement park webpage featuring a penguin and rollercoaster drawn in CSS. It leads to a magazine page and landing page, both tribute to the Roller Coaster Tycoon game.',
      imageUrl: '/assets/projects/amusement-park.jpg',
      alt: "Screenshot of an Amusement Park themed web page featuring a penguin and an animated rollercoaster.",
      linkUrl: 'https://github.com/mariacristinaI/amusement-park',
    },
    {
      title: 'Digital Forms Showcase',
      description: 'A compilation of forms - a registration form, a survey form and a quiz form. You can complete and submit any of them. I will receive your answers.',
      imageUrl: '/assets/projects/online-forms.jpg',
      alt: "Screenshot of a HTML/CSS Quiz page. A quiz form page with a navigation bar that leads to a survey and registration form too.",
      linkUrl: 'https://github.com/mariacristinaI/types-of-online-forms',
    },
    {
      title: '"Stages of Human Life" Tribute',
      description: "A tribute to Thomas Cole's 'The Voyage of Life' painting series, with a drawing made in CSS inspired by Mark Rothko.",
      imageUrl: '/assets/projects/art-voyage.jpg',
      alt: "A screenshot of the art voyage page, featuring six paintings.",
      linkUrl: 'https://github.com/mariacristinaI/voyage-of-life',
    },
    {
      title: 'Modern Art Styles in Code',
      description: "What better way to simulate a modern art museum than by featuring a modern style painting and drawings made in code?",
      imageUrl: '/assets/projects/modern-art.jpg',
      alt: "Screenshot of a web page that simulates a modern art museum.",
      linkUrl: 'https://github.com/mariacristinaI/Modern-Art-In-Motion',
    },
    {
      title: 'The Sketch of a Delayed Laptop',
      description: "A minimalistic 'blueprint' of a laptop made with HTML5 and CSS3.",
      imageUrl: '/assets/projects/laptop-sketch.jpg',
      alt: "Screenshot of a simple laptop made in CSS.",
      linkUrl: 'https://github.com/mariacristinaI/laptop-sketch',
    },
  ];

  ngOnInit() {
    typing("ersonal Projects", this.terminal);
  }
}
