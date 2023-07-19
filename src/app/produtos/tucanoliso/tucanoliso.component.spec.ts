import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TucanolisoComponent } from './tucanoliso.component';

describe('TucanolisoComponent', () => {
  let component: TucanolisoComponent;
  let fixture: ComponentFixture<TucanolisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TucanolisoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TucanolisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
