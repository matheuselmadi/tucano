import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeotextilComponent } from './geotextil.component';

describe('GeotextilComponent', () => {
  let component: GeotextilComponent;
  let fixture: ComponentFixture<GeotextilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeotextilComponent]
    });
    fixture = TestBed.createComponent(GeotextilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
