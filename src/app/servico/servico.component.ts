import { Component } from '@angular/core';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.scss']
})
export class ServicoComponent {

  imgClick = false;
  imgUrl = '';

  photos = [
    {
      id: 1,
      imageUrl: 'assets/images/servicos/IMG_1.JPG',
      caption: 'Entregas',
      info: 'Informações sobre a Foto 1',
      showInfo: false
    },
    {
      id: 2,
      imageUrl: 'assets/images/servicos/IMG_2.JPG',
      caption: 'Drenagem',
      info: 'Informações sobre a Foto 2',
      showInfo: false
    },
    {
      id: 3,
      imageUrl: 'assets/images/servicos/IMG_3.JPG',
      caption: 'Quadra de Areia',
      info: 'Soldagem concluída.',
      showInfo: true
    },

  ];

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
