import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPaisComponent } from './print-pais.component';

describe('PrintPaisComponent', () => {
  let component: PrintPaisComponent;
  let fixture: ComponentFixture<PrintPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintPaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
