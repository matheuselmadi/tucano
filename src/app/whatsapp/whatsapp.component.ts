import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.scss']
})
export class WhatsappComponent {

  openWhatsApp(): void {
    window.open('https://wa.me/64981121100', '_blank');
  }

}
