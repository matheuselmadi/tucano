import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManilhaComponent } from './manilha.component';

describe('ManilhaComponent', () => {
  let component: ManilhaComponent;
  let fixture: ComponentFixture<ManilhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManilhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManilhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
