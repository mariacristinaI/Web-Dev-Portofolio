import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          'padding-left': '1.5rem',
          'padding-right': '1.5rem'
        })
      ], { optional: true }),
      query(':enter', [
        style({ opacity:0 })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('400ms ease-out', style({ opacity: 1 }))
        ], { optional: true }),
        query('@*', animateChild(), { optional: true })
      ]),
    ])
  ]);