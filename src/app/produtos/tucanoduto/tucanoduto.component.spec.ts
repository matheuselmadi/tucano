import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TucanodutoComponent } from './tucanoduto.component';

describe('TucanodutoComponent', () => {
  let component: TucanodutoComponent;
  let fixture: ComponentFixture<TucanodutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TucanodutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TucanodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
