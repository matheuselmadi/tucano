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
      name: 'Tucano Dreno®',
      description: 'Tubos para Drenagem de Solo produzidos em Polietileno de Alta Densidade (PEAD).',
      imageUrl: 'assets/images/thumb-dreno.png'
    },
    {
      id: 2,
      name: 'Tucano Duto®',
      description: 'Eletrodutos Flexíveis e Corrugados produzidos em Polietileno de Alta Densidade (PEAD).',
      imageUrl: 'assets/images/thumb-duto.png'
    },
    {
      id: 3,
      name: 'Tucano Liso®',
      description: 'Tubo Liso Flexível produzido em Polietileno de Alta Densidade PE 100.',
      imageUrl: 'assets/images/thumb-liso.png'
    },
    {
      id: 4,
      name: 'Manilha®',
      description: 'O tubo de infraestrutura dupla parede da Tucano é fabricado em PEAD, sua finalidade é a drenagem de água pluvial.',
      imageUrl: 'assets/images/thumb-manilha.png'
    },
    {
      id: 5,
      name: 'Caixa de Passagem®',
      description: 'Estrutura usada para conectar e direcionar cabos elétricos e telecomunicações, facilitando a manutenção e o acesso a essas redes em instalações urbanas e industriais.',
      imageUrl: 'assets/images/thumb-cp.png'
    },
    {
      name: 'Espaçador/Nivelador e Cunha®',
      description: 'Os niveladores e as cunhas são indicadas para o assentamento de pisos e porcelanatos, tendo a função tanto de espaçar com precisão quanto de nivelar.',
      imageUrl: 'assets/images/thumb-espa.png'
    },
    {
      name: 'Fita de segurança',
      description: 'É utilizada dentro das valas a cerca de 60 cm acima do eletroduto e serve para demarcar o trajeto onde foram instalados e alertar aos riscos de alta, média e baixa tensão em caso de escavação.',
      imageUrl: 'assets/images/acessorios/fita.png'
    },
    {
      id: 8,
      name: 'Manta Geotêxtil',
      description: 'Material permeável que possui a capacidade de drenar, filtrar e separar resíduos, e utilizada principalmente para evitar danos ao solo e na proteção e reforço de tubos e outros materiais.',
      imageUrl: 'assets/images/acessorios/manta.webp'
    },
    {
      id: 8,
      name: 'Camisa Geotêxtil',
      description: 'Espécie de tecido que tem como finalidade proteger os tubos de drenagem das partículas do solo que possam obstruir (entupir, tampar) suas aberturas bloqueando a captação e a vazão de água.',
      imageUrl: 'assets/images/acessorios/camisa.jpg'
    },
    {
      name: 'Luva de Conexão (Emenda)',
      description: 'Em seu interior possui um encosto de fixação central (Grip) que acoplada às estrias dos lances do Eletro Duto Tucano oferece um encaixe perfeito.',
      imageUrl: 'assets/images/acessorios/luva.jpg'
    },
    {
      name: 'Redução de Emenda',
      description: 'Conexão utilizada para fazer reduções de tubos de maiores polegadas para tubos de menores polegadas.',
      imageUrl: 'assets/images/acessorios/reducao.jpg'
    },
    {
      name: 'Cruzeta de Emenda',
      description: 'Conexão utilizada para dividir as ramificações dos tubos de drenagem em formato de X.',
      imageUrl: 'assets/images/acessorios/cruzeta.jpg'
    },
    {
      name: 'Junção de Emenda em Y Duplo',
      description: 'Conexão utilizada para dividir as ramificações dos tubos de drenagem em formato de Y duplo.',
      imageUrl: 'assets/images/thumb-yuplo.png'
    },
    {
      name: 'Junção de Emenda em Y',
      description: 'Conexão utilizada para dividir as ramificações dos tubos de drenagem em formato de Y.',
      imageUrl: 'assets/images/acessorios/juncao.jpg'
    },
    {
      name: 'TE de Emenda',
      description: 'Conexão utilizada para conectar tubos de drenagem em formato de TE.',
      imageUrl: 'assets/images/acessorios/te.jpg'
    },
    {
      name: 'Tampão',
      description: 'É utilizado para fechar o eletroduto isolando-os contra a entrada de água, animais ou insetos.',
      imageUrl: 'assets/images/acessorios/tampao.jpg'
    },
    {
      id: 6,
      name: 'Conexões Internas',
      description: 'As conexões são peças destinadas a conectar as tubulações de todo o sistema de irrigação.',
      imageUrl: 'assets/images/acessorios/uniao.png'
    },
    {
      id: 6,
      name: 'Conexão de Compreção',
      description: 'As conexões de compressão vêm em diferentes formas, o que facilita sua versatilidade na conexão de tubulações. São fabricadas no material PP nos diâmetros DE 20 a 110 mm.',
      imageUrl: 'assets/images/acessorios/irritec.jpg'
    },
    {
      id: 7,
      name: 'Solda Termofusão',
      description: 'A solda por termofusão consiste em aquecer as extremidades dos tubos com uma placa de aquecimento e aplicar uma pressão normalizada. As soldas são mais usadas em tubos com diâmetros maiores (63-315 mm).',
      imageUrl: 'assets/images/acessorios/termofusao.png'
    },
    // Adicione mais produtos aqui
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }

  redirectToProduct(productId: number) {
    if (productId === 1) {
      this.router.navigate(['/tucanodreno']); // Redirecionar para a página do produto com o ID correspondente
    }
    if (productId === 2) {
      this.router.navigate(['/tucanoduto']); // Redirecionar para a página do produto com o ID correspondente
    }
    if (productId === 3) {
      this.router.navigate(['/tucanoliso']); // Redirecionar para a página do produto com o ID correspondente
    }
    if (productId === 4) {
      this.router.navigate(['/manilha']); // Redirecionar para a página do produto com o ID correspondente
    }
    if (productId === 5) {
      this.router.navigate(['/caixa-passagem']); // Redirecionar para a página do produto com o ID correspondente
    }
    if (productId === 6) {
      this.router.navigate(['/conexoes-liso']); // Redirecionar para a página do produto com o ID correspondente
    }
    if (productId === 7) {
      this.router.navigate(['/servicos']); // Redirecionar para a página do produto com o ID correspondente
    }
    if (productId === 8) {
      this.router.navigate(['/geotextil']); // Redirecionar para a página do produto com o ID correspondente
    }
  }

  downloadPDF() {
    const pdfUrl = 'assets/files/Catálogo-Tucano.pdf'; // Substitua pelo caminho real do seu arquivo PDF
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Catálogo-Tucano.pdf'; // O nome que o arquivo terá ao ser baixado
    link.click();
  }

}
