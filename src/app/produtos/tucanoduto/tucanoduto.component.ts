import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tucanoduto',
  templateUrl: './tucanoduto.component.html',
  styleUrls: ['./tucanoduto.component.scss']
})
export class TucanodutoComponent implements OnInit {

  opcoes: any[] = [
    {
      title: 'ANELAR (AN-ECCO) 3/4" - 8"',
      description: 'Eletro Duto Ecologicamente Correto da Tucano, fabricado em forma de anéis (anelar) a partir de matéria prima reprocessada (reciclada).',
      // imageUrl: 'URL_DA_IMAGEM_ACESSORIO_1'
    },
    {
      title: 'ANELAR (AN-NBR) 1.¼” - 8"',
      description: 'Eletroduto Normatizado da Tucano, fabricado em formato anelar a partir de material de primeira extrusão (virgem) atendendo a normativa NBR 15.715 da ABNT (Associação Brasileira de Normas Técnicas).',
      // imageUrl: 'URL_DA_IMAGEM_ACESSORIO_2'
    },
    {
      title: 'HELICOIDAL (HL-ECCO) 1.½" - 8"',
      description: 'Eletroduto Ecologicamente Correto da Tucano, fabricado a partir de matéria prima reciclada possui formato helicoidal (espiralado), é flexível e corrugado internamente e não possui emendas, o que diminui o atrito entre os cabos e o duto pela metade em comparação com os tubos lisos convencionais.',
      // imageUrl: 'URL_DA_IMAGEM_ACESSORIO_2'
    },
    {
      title: 'HELICOIDAL (HL-NBR) 1.½ - 8"',
      description: 'Eletro Duto Normatizado da Tucano, fabricado em forma de espiral (helicoidal) com resinas em primeiro uso (virgem) de acordo com a normativa NBR 15.715 da ABNT (Associação Brasileira de Normas Técnicas). Corrugado e flexível oferece praticidade na hora da instalação, não possui emendas e possui altos índices de rigidez e resistência.',
      // imageUrl: 'URL_DA_IMAGEM_ACESSORIO_2'
    },
    // Adicione mais acessórios conforme necessário
  ];

  accessories: any[] = [
    {
      title: 'Luva de Conexão (Emenda)',
      description: 'Em seu interior possui um encosto de fixação central (Grip) que acoplada às estrias dos lances do Eletro Duto Tucano oferece um encaixe perfeito.',
      imageUrl: 'assets/images/acessorios/luva.jpg'
    },
    {
      title: 'Fita de segurança',
      description: 'É utilizada dentro das valas a cerca de 60 cm acima do eletroduto e serve para demarcar o trajeto onde foram instalados e alertar aos riscos de alta, média e baixa tensão em caso de escavação.',
      imageUrl: 'assets/images/acessorios/fita.jpg'
    },
    {
      title: 'Tampão',
      description: 'É utilizado para fechar o eletroduto isolando-os contra a entrada de água, animais ou insetos.',
      imageUrl: 'assets/images/acessorios/tampao.jpg'
    },
    // Adicione mais acessórios conforme necessário
  ];

  constructor() { }

  ngOnInit(): void {
    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }

  downloadPDF() {
    const pdfUrl = 'caminho-para-o-seu-arquivo.pdf'; // Substitua pelo caminho real do seu arquivo PDF
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Informações-Técnicas-Tucano-Duto.pdf'; // O nome que o arquivo terá ao ser baixado
    link.click();
  }

}
