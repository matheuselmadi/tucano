import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tucanoliso',
  templateUrl: './tucanoliso.component.html',
  styleUrls: ['./tucanoliso.component.scss']
})
export class TucanolisoComponent implements OnInit {

  opcoes: any[] = [
    {
      title: 'ANELAR (AN-ECCO)',
      description: 'Tubo para drenagem do solo Ecologicamente Correto da Tucano, possui formato anelar e alto padrão de rigidez, produzido com matéria prima reciclada ecologicamente correta (ECCO).',
      // imageUrl: 'URL_DA_IMAGEM_ACESSORIO_1'
    },
    {
      title: 'ANELAR (AN-NBR)',
      description: 'Tubo para drenagem do solo Normatizado da Tucano, produzido em forma de anéis (anelar) a partir de matéria prima virgem (NBR).',
      // imageUrl: 'URL_DA_IMAGEM_ACESSORIO_2'
    },
  ];

  accessories: any[] = [
    {
      title: 'Camisa Geotêxtil',
      description: 'Espécie de tecido que tem como finalidade proteger os tubos de drenagem das partículas do solo que possam obstruir (entupir, tampar) suas aberturas bloqueando a captação e a vazão de água.',
      imageUrl: 'assets/images/acessorios/camisa.jpg'
    },
    {
      title: 'Cruzeta de Emenda',
      description: 'Conexão utilizada para dividir as ramificações dos tubos de drenagem em formato de X.',
      imageUrl: 'assets/images/acessorios/cruzeta.jpg'
    },
    {
      title: 'Junção de Emenda em Y',
      description: 'Conexão utilizada para dividir as ramificações dos tubos de drenagem em formato de Y.',
      imageUrl: 'assets/images/acessorios/juncao.jpg'
    },
    {
      title: 'Manta Geotêxtil',
      description: 'Material permeável que possui a capacidade de drenar, filtrar e separar resíduos, e utilizada principalmente para evitar danos ao solo e na proteção e reforço de tubos e outros materiais.',
      imageUrl: 'assets/images/acessorios/manta.jpg'
    },
    {
      title: 'Redução de Emenda',
      description: 'Conexão utilizada para fazer reduções de tubos de maiores polegadas para tubos de menores polegadas.',
      imageUrl: 'assets/images/acessorios/reducao.jpg'
    },
    {
      title: 'Tampão',
      description: 'É utilizado para fechar o eletroduto isolando-os contra a entrada de água, animais ou insetos.',
      imageUrl: 'assets/images/acessorios/tampao.jpg'
    },
    {
      title: 'TE de Emenda',
      description: 'Conexão utilizada para conectar tubos de drenagem em formato de TE.',
      imageUrl: 'assets/images/acessorios/te.jpg'
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
