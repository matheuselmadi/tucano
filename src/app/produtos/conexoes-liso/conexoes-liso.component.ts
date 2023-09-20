import { Component } from '@angular/core';

@Component({
  selector: 'app-conexoes-liso',
  templateUrl: './conexoes-liso.component.html',
  styleUrls: ['./conexoes-liso.component.scss']
})
export class ConexoesLisoComponent {
  accessories: any[] = [
    {
      title: 'União 1/2" - 1.¼"',
      description: 'As conexões são peças destinadas a conectar as tubulações de todo o sistema de irrigação.',
      imageUrl: 'assets/images/acessorios/uniao.png'
    },
    {
      title: 'TE Triplo 1/2" - 1"',
      description: 'As conexões são peças destinadas a conectar as tubulações de todo o sistema de irrigação.',
      imageUrl: 'assets/images/acessorios/te_triplo.jpg'
    },
    {
      title: 'União Redução 3/4"x1/2" - 1.½"x1.¼"',
      description: 'As conexões são peças destinadas a conectar as tubulações de todo o sistema de irrigação.',
      imageUrl: 'assets/images/acessorios/uniao-reducao.jpg'
    },
    {
      title: 'TE Redução 3/4"x1.½" - 1"x3/4"',
      description: 'As conexões são peças destinadas a conectar as tubulações de todo o sistema de irrigação.',
      imageUrl: 'assets/images/acessorios/te-reducao.jpg'
    },
    {
      title: 'Adaptador C/ Rosca Int. ½" - 1"',
      description: 'As conexões são peças destinadas a conectar as tubulações de todo o sistema de irrigação.',
      imageUrl: 'assets/images/acessorios/adaptador.png'
    },
    {
      title: 'União ½" - 110mm',
      description: 'As conexões de compressão vêm em diferentes formas, o que facilita sua versatilidade na conexão de tubulações. São fabricadas no material PP nos diâmetros DE 20 a 110 mm.',
      imageUrl: 'assets/images/acessorios/irritec.jpg'
    },
    {
      title: 'União Redução ½" - 110mm',
      description: 'As conexões de compressão vêm em diferentes formas, o que facilita sua versatilidade na conexão de tubulações. São fabricadas no material PP nos diâmetros DE 20 a 110 mm.',
      imageUrl: 'assets/images/acessorios/uni_com_red.png'
    },
    {
      title: 'TE 90° ½" - 110mm',
      description: 'As conexões de compressão vêm em diferentes formas, o que facilita sua versatilidade na conexão de tubulações. São fabricadas no material PP nos diâmetros DE 20 a 110 mm.',
      imageUrl: 'assets/images/acessorios/te-90.jpg'
    },
    {
      title: 'Joelho 90° ½" - 110mm',
      description: 'As conexões de compressão vêm em diferentes formas, o que facilita sua versatilidade na conexão de tubulações. São fabricadas no material PP nos diâmetros DE 20 a 110 mm.',
      imageUrl: 'assets/images/acessorios/joelho-90.jpg'
    },
    {
      title: 'Tampão Final ½" - 110mm',
      description: 'As conexões de compressão vêm em diferentes formas, o que facilita sua versatilidade na conexão de tubulações. São fabricadas no material PP nos diâmetros DE 20 a 110 mm.',
      imageUrl: 'assets/images/acessorios/tampao-final.jpg'
    },
    {
      title: 'Colar de Tomada Simples',
      description: 'As conexões são peças destinadas a conectar as tubulações de todo o sistema de irrigação.',
      imageUrl: 'assets/images/acessorios/colar.jpg'
    },
    {
      title: 'Solda Termofusão',
      description: 'A solda por termofusão consiste em aquecer as extremidades dos tubos com uma placa de aquecimento e aplicar uma pressão normalizada. As soldas são mais usadas em tubos com diâmetros maiores (63-315 mm).',
      imageUrl: 'assets/images/acessorios/temofusao.JPG'
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
