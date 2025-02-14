import {
  Component,
  ElementRef,
  OnInit,
  AfterViewInit,
  OnDestroy,
  Renderer2,
  ViewChild,
  inject,
  PLATFORM_ID
} from '@angular/core';
import { typing } from '../utils';
import { AsyncPipe, isPlatformBrowser } from '@angular/common';
import { RouterLink} from '@angular/router';
import { PostsService } from './posts.service';
import { RainEffect } from './rain';

@Component({
    selector: 'app-blog',
    imports: [AsyncPipe, RouterLink],
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('rainContainer', { static: true }) rainContainer!: ElementRef; // Reference to the container.
  private rainEffect!: RainEffect; // RainEffect instance.
  private readonly platformId = inject(PLATFORM_ID);
  private readonly renderer = inject(Renderer2);
  private readonly service = inject(PostsService);
  posts$ = this.service.getPosts();
  readonly terminal = { value: 'D' };

  ngOnInit() {
    typing('igital Garden', this.terminal);
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.rainEffect = new RainEffect(
        this.rainContainer.nativeElement,
        this.renderer
      );
    }
  }

  ngOnDestroy() {
    // Clean up the RainEffect instance.
    if (this.rainEffect) {
      this.rainEffect.destroy();
    }
  }
}