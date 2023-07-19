import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TucanodrenoComponent } from './tucanodreno.component';

describe('TucanodrenoComponent', () => {
  let component: TucanodrenoComponent;
  let fixture: ComponentFixture<TucanodrenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TucanodrenoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TucanodrenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
