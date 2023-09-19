import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaPassagemComponent } from './caixa-passagem.component';

describe('CaixaPassagemComponent', () => {
  let component: CaixaPassagemComponent;
  let fixture: ComponentFixture<CaixaPassagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaixaPassagemComponent]
    });
    fixture = TestBed.createComponent(CaixaPassagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
