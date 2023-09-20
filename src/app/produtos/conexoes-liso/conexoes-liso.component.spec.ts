import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexoesLisoComponent } from './conexoes-liso.component';

describe('ConexoesLisoComponent', () => {
  let component: ConexoesLisoComponent;
  let fixture: ComponentFixture<ConexoesLisoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConexoesLisoComponent]
    });
    fixture = TestBed.createComponent(ConexoesLisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
