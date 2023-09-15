import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acessorios',
  templateUrl: './acessorios.component.html',
  styleUrls: ['./acessorios.component.scss']
})
export class AcessoriosComponent implements OnInit {

  products: any[] = [
    {
      id: 1,
      name: 'Produto 1',
      description: 'Descrição do Produto 1',
      imageUrl: 'url_da_imagem_do_produto_1.jpg'
    },
    {
      id: 2,
      name: 'Produto 2',
      description: 'Descrição do Produto 2',
      imageUrl: 'url_da_imagem_do_produto_2.jpg'
    },
    // Adicione mais produtos aqui
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToProduct(productId: number) {
    if(productId === 2)
    this.router.navigate(['/tucanodreno']); // Redirecionar para a página do produto com o ID correspondente
  }

}
