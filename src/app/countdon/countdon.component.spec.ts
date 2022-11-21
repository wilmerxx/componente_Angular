import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdonComponent } from './countdon.component';

describe('CountdonComponent', () => {
  let component: CountdonComponent;
  let fixture: ComponentFixture<CountdonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountdonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
