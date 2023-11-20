import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  currentImageIndex: number = 0;
  private slideInterval: any;
  private readonly intervalTime = 15000; // Defina o tempo em milissegundos (5 segundos, por exemplo)
  currentIndex = 0;

  images = [
    {
      src: 'assets/images/home/slide1.png',
      alt: 'TUCANOLISO',
      title: 'TUCANOLISO®',
      description: 'Linha de tubos lisos da Tucano.',
      buttonText: 'SAIBA MAIS',
      novidade: true,
      buttonAction: () => {
        this.router.navigate(['/tucanoliso']);
      }
    },
    {
      src: 'assets/images/home/slide2.png',
      alt: 'TUCANODRENO',
      title: 'TUCANODRENO®',
      description: 'Linha de drenagem da Tucano.',
      buttonText: 'SAIBA MAIS',
      buttonAction: () => {
        this.router.navigate(['/tucanodreno']);
      }
    },
    {
      src: 'assets/images/home/slide3.png',
      alt: 'TUCANODUTO',
      title: 'TUCANODUTO®',
      description: 'Linha de Eletrodutos Flexíveis e Corrugados da Tucano.',
      buttonText: 'SAIBA MAIS',
      buttonAction: () => {
        this.router.navigate(['/tucanoduto']);
      }
    },
    {
      src: 'assets/images/home/slide4.png',
      alt: 'MANILHA PEAD',
      title: 'MANILHA PEAD',
      description: 'Linha de manilhas da Tucano.',
      buttonText: 'SAIBA MAIS',
      buttonAction: () => {
        this.router.navigate(['/manilha']);
      }
    },
    {
      src: 'assets/images/home/slide5.png',
      alt: 'SERVIÇOS',
      title: 'SERVIÇOS',
      description: 'Nossa empresa se destaca pela excelência na prestação de serviços.',
      buttonText: 'SAIBA MAIS',
      novidade: true,
      buttonAction: () => {
        this.router.navigate(['/servicos']);
      }
    }
  ];

  vendedores = [
    { nome: 'CARLA', numero: '64 99644-7131', email: 'vendas05@tucano.ind.br', url: 'https://api.whatsapp.com/send/?phone=5564996447131&text&type=phone_number&app_absent=0' },
    { nome: 'LIDIANE', numero: '64 99244-2043', email: 'vendas01@tucano.ind.br', url: 'https://api.whatsapp.com/send/?phone=5564992442043&text&type=phone_number&app_absent=0' },
    { nome: 'MARCOS AURÉLIO', numero: '64 99279-5551', email: 'marcos@tucano.ind.br', url: 'https://api.whatsapp.com/send/?phone=5564992795551&text&type=phone_number&app_absent=0' },
    { nome: 'SABRINA', numero: '64 99603-3221', email: 'vendas04@tucano.ind.br', url: 'https://api.whatsapp.com/send/?phone=5564996033221&text&type=phone_number&app_absent=0' },
    // Adicione mais vendedores conforme necessário
  ];

  photos = [
    {
      id: 1,
      imageUrl: 'assets/images/solda.jpeg',
      caption: 'Serviço de Solda',
      info: 'Informações sobre a Foto 1',
      showInfo: false
    },
    {
      id: 1,
      imageUrl: 'assets/images/home/thumb-acompanhamento.JPG',
      caption: 'Acompanhamento Técnico',
      info: 'Informações sobre a Foto 2',
      showInfo: false
    },
    // Adicione mais fotos aqui
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.startSlideInterval();
    this.scrollToTop();
    this.setupCarousel();
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

  scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }

  setupCarousel() {
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    const carousel = document.querySelector(".carousel");

    if (!prevButton || !nextButton || !carousel) {
      return; // Exit if elements are not found
    }

    // Função para avançar para o próximo slide
    const nextSlide = () => {
      this.currentIndex = (this.currentIndex + 1) % carousel.children.length;
      this.updateCarousel();
    };

    // Função para retroceder para o slide anterior
    const prevSlide = () => {
      this.currentIndex = (this.currentIndex - 1 + carousel.children.length) % carousel.children.length;
      this.updateCarousel();
    };

    // Atualiza a posição do carousel
    this.updateCarousel();

    // Adicione os ouvintes de eventos aos botões de navegação
    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
  }

  // Atualiza a posição do carousel
  updateCarousel() {
    const carousel = document.querySelector(".carousel") as HTMLElement;
    const offset = -this.currentIndex * 350; // 320 é a largura de cada slide
    if (carousel) {
      carousel.style.transform = `translateX(${offset}px)`;
    }
  }

  navigateToDetails(photo: any) {
    if (photo.id === 1) {
      this.router.navigate(['/servicos']);
    }
  }

  openWhatsApp(): void {
    window.open('https://wa.me/64981121100', '_blank');
  }

}
