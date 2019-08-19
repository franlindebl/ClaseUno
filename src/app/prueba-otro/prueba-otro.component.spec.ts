import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaOtroComponent } from './prueba-otro.component';

describe('PruebaOtroComponent', () => {
  let component: PruebaOtroComponent;
  let fixture: ComponentFixture<PruebaOtroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaOtroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaOtroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
