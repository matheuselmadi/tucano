import { Component } from '@angular/core';

@Component({
  selector: 'app-caixa-passagem',
  templateUrl: './caixa-passagem.component.html',
  styleUrls: ['./caixa-passagem.component.scss']
})
export class CaixaPassagemComponent {
  // opcoes: any[] = [
  //   {
  //     title: 'ANELAR (AN-ECCO) 3/4" - 8"',
  //     description: 'Eletro Duto Ecologicamente Correto da Tucano, fabricado em forma de anéis (anelar) a partir de matéria prima reprocessada (reciclada).',
  //     // imageUrl: 'URL_DA_IMAGEM_ACESSORIO_1'
  //   },
  //   {
  //     title: 'ANELAR (AN-NBR) 1.¼” - 8"',
  //     description: 'Eletroduto Normatizado da Tucano, fabricado em formato anelar a partir de material de primeira extrusão (virgem) atendendo a normativa NBR 15.715 da ABNT (Associação Brasileira de Normas Técnicas).',
  //     // imageUrl: 'URL_DA_IMAGEM_ACESSORIO_2'
  //   },
  //   {
  //     title: 'HELICOIDAL (HL-ECCO) 1.½" - 8"',
  //     description: 'Eletroduto Ecologicamente Correto da Tucano, fabricado a partir de matéria prima reciclada possui formato helicoidal (espiralado), é flexível e corrugado internamente e não possui emendas, o que diminui o atrito entre os cabos e o duto pela metade em comparação com os tubos lisos convencionais.',
  //     // imageUrl: 'URL_DA_IMAGEM_ACESSORIO_2'
  //   },
  //   {
  //     title: 'HELICOIDAL (HL-NBR) 1.½ - 8"',
  //     description: 'Eletro Duto Normatizado da Tucano, fabricado em forma de espiral (helicoidal) com resinas em primeiro uso (virgem) de acordo com a normativa NBR 15.715 da ABNT (Associação Brasileira de Normas Técnicas). Corrugado e flexível oferece praticidade na hora da instalação, não possui emendas e possui altos índices de rigidez e resistência.',
  //     // imageUrl: 'URL_DA_IMAGEM_ACESSORIO_2'
  //   },
  //   // Adicione mais acessórios conforme necessário
  // ];

  accessories: any[] = [
    {
      title: 'Caixa de Passagem 4x2',
      description: 'As Caixas de Passagens 4x2, são instaladas na fase de construção e ficam alocadas dentro da parede.',
      imageUrl: 'assets/images/acessorios/thumb-4x2.png'
    },
    {
      title: 'Caixa de Passagem 4x4',
      description: 'As Caixas de Passagens 4x4, são instaladas na fase de construção e ficam alocadas dentro da parede.',
      imageUrl: 'assets/images/acessorios/thumb-4x4.png'
    },
    {
      title: 'Caixa de Passagem Octogonal 4x4',
      description: 'A caixa de passagem octogonal 4X4 é instaladas na fase de construção e fica alocada no teto.',
      imageUrl: 'assets/images/acessorios/tumb-oc-4x4.png'
    },
    {
      title: 'Caixa Octogonal 4x4',
      description: 'A Caixa de Passagem Octogonal com suporte para laje 4X4 é utilizada na fase de construção e fica alocado na laje.',
      imageUrl: 'assets/images/acessorios/thumb-oc-laj.png'
    },
    // Adicione mais acessórios conforme necessário
  ];

  ngOnInit(): void {
    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }

  downloadPDF() {
    const pdfUrl = 'assets/files/Informações-Técnicas-Tucano-Duto.pdf'; // Substitua pelo caminho real do seu arquivo PDF
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Informações-Técnicas-Tucano-Duto.pdf'; // O nome que o arquivo terá ao ser baixado
    link.click();
  }
}
