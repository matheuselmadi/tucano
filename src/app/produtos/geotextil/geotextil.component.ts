import { Component } from '@angular/core';

@Component({
  selector: 'app-geotextil',
  templateUrl: './geotextil.component.html',
  styleUrls: ['./geotextil.component.scss']
})
export class GeotextilComponent {

  opcoes: any[] = [
    {
      title: 'Manta Geotêxtil',
      description: 'Material permeável que possui a capacidade de drenar, filtrar e separar resíduos, e utilizada principalmente para evitar danos ao solo e na proteção e reforço de tubos e outros materiais.',
      // imageUrl: 'URL_DA_IMAGEM_ACESSORIO_1'
    },
    {
      title: 'Camisa Geotêxtil',
      description: 'Espécie de tecido que tem como finalidade proteger os tubos de drenagem das partículas do solo que possam obstruir (entupir, tampar) suas aberturas bloqueando a captação e a vazão de água.',
      // imageUrl: 'URL_DA_IMAGEM_ACESSORIO_2'
    },
  ];

  photos = [
    {
      imageUrl: 'assets/images/contencao.jpeg',
      caption: 'Drenagem Pluvial',
      info: 'Informações sobre a Foto 1',
      showInfo: false
    },
    {
      imageUrl: 'assets/images/represa.jpg',
      caption: 'Extravasores de Represas',
      info: 'Informações sobre a Foto 2',
      showInfo: false
    },
    {
      imageUrl: 'assets/images/drenagem-pluvial.jpg',
      caption: 'Obras de Contenção',
      info: 'Informações sobre a Foto 2',
      showInfo: false
    },
    {
      imageUrl: 'assets/images/rodovia.jpeg',
      caption: 'Rodovias, Ferrovias e Subsolos',
      info: 'Informações sobre a Foto 2',
      showInfo: false
    },
    // Adicione mais fotos aqui
  ];

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

  navigateToDetails(photo: any) {
    // Lógica para navegar para outro componente quando uma foto é clicada
  }

}
