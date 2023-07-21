import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  currentImageIndex: number = 0;
  private slideInterval: any;
  private readonly intervalTime = 10000; // Defina o tempo em milissegundos (5 segundos, por exemplo)

  images = [
    {
      src: 'assets/images/slide1.JPG',
      alt: 'TUCANODRENO',
      title: 'TUCANOLISO®',
      description: 'Linha de tubos lisos da Tucano.',
      buttonText: 'SAIBA MAIS',
      buttonAction: () => {
        // Lógica do botão 1
        console.log('Botão 1 clicado');
      }
    },
    {
      src: 'assets/images/slide2.jpg',
      alt: 'TUCANODRENO',
      title: 'TUCANODRENO®',
      description: 'Linha de drenagem da Tucano.',
      buttonText: 'SAIBA MAIS',
      buttonAction: () => {
        // Lógica do botão 2
        console.log('Botão 2 clicado');
      }
    },
    {
      src: 'assets/images/slide3.jpg',
      alt: 'TUCANODUTO',
      title: 'TUCANODUTO®',
      description: 'Linha de Eletrodutos Flexíveis e Corrugados da Tucano.',
      buttonText: 'SAIBA MAIS',
      buttonAction: () => {
        // Lógica do botão 3
        console.log('Botão 3 clicado');
      }
    },
    {
      src: 'assets/images/slide4.JPG',
      alt: 'MANILHA PEAD',
      title: 'MANILHA PEAD',
      description: 'Linha de manilhas da Tucano.',
      buttonText: 'SAIBA MAIS',
      buttonAction: () => {
        // Lógica do botão 3
        console.log('Botão 3 clicado');
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.startSlideInterval();
  }

  ngOnDestroy(): void {
    this.stopSlideInterval();
  }

  private startSlideInterval() {
    this.slideInterval = setInterval(() => {
      this.nextImage();
    }, this.intervalTime);
  }

  private stopSlideInterval() {
    clearInterval(this.slideInterval);
  }

  onButtonClick(action: () => void) {
    action();
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

}
