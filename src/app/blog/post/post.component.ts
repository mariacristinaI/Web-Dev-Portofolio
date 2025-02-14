import {
  Component,
  ElementRef,
  inject,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { AsyncPipe, isPlatformBrowser } from '@angular/common';
import { RainEffect } from '../rain';

@Component({
    selector: 'app-post',
    imports: [AsyncPipe, RouterLink],
    templateUrl: './post.component.html',
    styleUrl: './post.component.scss'
})
export class PostComponent {
  @ViewChild('rainContainer', { static: true }) rainContainer!: ElementRef; // Reference to the container.
  private rainEffect!: RainEffect; // RainEffect instance.
  private readonly platformId = inject(PLATFORM_ID);
  private readonly renderer = inject(Renderer2);
  private readonly service = inject(PostsService);
  private readonly route = inject(ActivatedRoute);
  readonly terminal = { value: 'Digital Garden' };

  post$ = this.route.paramMap.pipe(
    switchMap((params) => {
      console.log('DA');
      return this.service.getPost(params.get('id') ?? '');
    }),
    tap((r) => console.log(r))
  );

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
