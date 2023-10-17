import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tucanoliso',
  templateUrl: './tucanoliso.component.html',
  styleUrls: ['./tucanoliso.component.scss']
})
export class TucanolisoComponent implements OnInit {

  opcoes: any[] = [
    {
      title: 'PEMD 1/2" - 2"',
      description: 'Tubo liso da Tucano possui um alto padrão produzido com material de média densidade.',
      // imageUrl: 'URL_DA_IMAGEM_ACESSORIO_1'
    },
    {
      title: 'PEAD 1/2" - 315mm',
      description: 'O tubo liso fabricado pela Tucano apresenta um elevado nível de qualidade, sendo produzido com material de alta densidade.',
      // imageUrl: 'URL_DA_IMAGEM_ACESSORIO_2'
    },
  ];

  accessories: any[] = [
    {
      id: 1,
      title: 'Conexões Internas',
      description: 'As conexões são peças destinadas a conectar as tubulações de todo o sistema de irrigação.',
      imageUrl: 'assets/images/acessorios/uniao.png'
    },
    {
      id: 1,
      title: 'Conexão de Compreção',
      description: 'As conexões de compressão vêm em diferentes formas, o que facilita sua versatilidade na conexão de tubulações. São fabricadas no material PP nos diâmetros DE 20 a 110 mm.',
      imageUrl: 'assets/images/acessorios/irritec.jpg'
    },
    {
      id: 2,
      title: 'Solda Termofusão',
      description: 'A solda por termofusão consiste em aquecer as extremidades dos tubos com uma placa de aquecimento e aplicar uma pressão normalizada. As soldas são mais usadas em tubos com diâmetros maiores (63-315 mm).',
      imageUrl: 'assets/images/acessorios/termofusao.png'
    },
  ];

  photos = [
    {
      imageUrl: 'assets/images/irrigacao.jpg',
      caption: 'Irrigação Agrícola',
      info: 'Informações sobre a Foto 1',
      showInfo: false
    },
    {
      imageUrl: 'assets/images/abastecimento.jpg',
      caption: 'Rede de Abastecimento',
      info: 'Informações sobre a Foto 2',
      showInfo: false
    },
    {
      imageUrl: 'assets/images/mineracao.jpg',
      caption: 'Mineração',
      info: 'Informações sobre a Foto 2',
      showInfo: false
    },
    {
      imageUrl: 'assets/images/chorume.jpeg',
      caption: 'Gerenciamento de Chorume 75mm - 315mm',
      info: 'Informações sobre a Foto 2',
      showInfo: false
    },
    // Adicione mais fotos aqui
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }

  downloadPDF() {
    const pdfUrl = 'assets/files/Informações-Técnicas-Tucano-Liso.pdf'; // Substitua pelo caminho real do seu arquivo PDF
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Informações-Técnicas-Tucano-Liso.pdf'; // O nome que o arquivo terá ao ser baixado
    link.click();
  }

  redirectToProduct(productId: number) {
    if (productId === 1) {
      this.router.navigate(['/conexoes-liso']); // Redirecionar para a página do produto com o ID correspondente
    }
    if (productId === 2) {
      this.router.navigate(['/servicos']); // Redirecionar para a página do produto com o ID correspondente
    }
  }

  navigateToDetails(photo:any) {
    // Lógica para navegar para outro componente quando uma foto é clicada
  }

}
