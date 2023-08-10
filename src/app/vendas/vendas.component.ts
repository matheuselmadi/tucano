import { Component, OnInit } from '@angular/core';

interface Vendedores {
  nome: string;
  numero: string;
  email: string;
}

interface Estados {
  departamento: string;
  numeroTelefone: string;
  vendedores: Vendedores[];
}

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent implements OnInit {

  estadoSelecionado: string = 'GO'; // Estado inicial (Goiás)

  estadosDados: { [key: string]: Estados } = {
    GO: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: 'AMANDA', numero: '64 99230-8541', email: 'vendas03@tucano.ind.br' },
        { nome: 'LIDIANE', numero: '64 99244-2043', email: 'vendas01@tucano.ind.br' },
        { nome: 'MARCOS AURÉLIO', numero: '6499279-5551', email: 'vendas04@tucano.ind.br' },
        { nome: 'SABRINA', numero: '64 99603-3221', email: 'marcos@tucano.ind.br' }
      ]

    },
    BA: {
      departamento: 'Departamento da sua mae',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: 'delicia', numero: '(64) 1111-1111', email: 'vendedor.goias@example.com' }
      ]

    },
    // Adicione mais estados e vendedores conforme necessário
  };

  constructor() { }

  ngOnInit(): void {
  }

  alterarEstado(estado: string) {
    this.estadoSelecionado = estado;
  }

}
