import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institucional',
  templateUrl: './institucional.component.html',
  styleUrls: ['./institucional.component.scss']
})
export class InstitucionalComponent implements OnInit {

  imgClick = false;
  imgUrl = '';

  photos = [
    {
      id: 1,
      imageUrl: 'assets/images/institucional/galeria/foto1.JPG',
      caption: 'Entregas',
      info: 'Informações sobre a Foto 1',
      showInfo: false
    },
    {
      id: 2,
      imageUrl: 'assets/images/institucional/galeria/foto2.jpeg',
      caption: 'Drenagem',
      info: 'Informações sobre a Foto 2',
      showInfo: false
    },
    {
      id: 3,
      imageUrl: 'assets/images/institucional/galeria/foto3.JPG',
      caption: 'Quadra de Areia',
      info: 'Sistema de drenagem feito em quadra de areia.',
      showInfo: true
    },
    {
      id: 4,
      imageUrl: 'assets/images/institucional/galeria/foto4.jpeg',
      caption: 'Nosso Escritório',
      info: 'Informações sobre a Foto 2',
      showInfo: false
    },
    {
      id: 5,
      imageUrl: 'assets/images/institucional/galeria/foto5.jpeg',
      caption: 'Nosso Escritório',
      info: 'Informações sobre a Foto 2',
      showInfo: false
    },
    {
      id: 6,
      imageUrl: 'assets/images/institucional/galeria/foto6.jpeg',
      caption: 'Nosso Escritório',
      info: 'Informações sobre a Foto 2',
      showInfo: false
    },
    {
      id: 7,
      imageUrl: 'assets/images/institucional/galeria/foto7.jpeg',
      caption: 'Nosso Escritório',
      info: 'Informações sobre a Foto 2',
      showInfo: false
    },
    {
      id: 8,
      imageUrl: 'assets/images/institucional/galeria/foto8.jpeg',
      caption: 'Nosso Escritório',
      info: 'Informações sobre a Foto 2',
      showInfo: false
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }

  navigateToDetails(photo: any) {
    if (photo.id) {
      this.imgUrl = photo.imageUrl;
      this.imgClick = true;
    }
  }

}
