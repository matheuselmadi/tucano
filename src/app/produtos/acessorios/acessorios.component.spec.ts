import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoriosComponent } from './acessorios.component';

describe('AcessoriosComponent', () => {
  let component: AcessoriosComponent;
  let fixture: ComponentFixture<AcessoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcessoriosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
