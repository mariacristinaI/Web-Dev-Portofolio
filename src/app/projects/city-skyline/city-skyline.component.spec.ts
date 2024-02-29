import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySkylineComponent } from './city-skyline.component';

describe('CitySkylineComponent', () => {
  let component: CitySkylineComponent;
  let fixture: ComponentFixture<CitySkylineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitySkylineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitySkylineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
