import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-trabalhe-conosco',
  templateUrl: './trabalhe-conosco.component.html',
  styleUrls: ['./trabalhe-conosco.component.scss']
})
export class TrabalheConoscoComponent {

  trabalheConoscoForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private formBuilder: FormBuilder) {
    this.trabalheConoscoForm = this.formBuilder.group({
      nome: '',
      email: '',
      assunto: '',
      mensagem: ''
    });
  }
  
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  enviarMensagem(): void {
    if (this.selectedFile) {
      // Aqui você pode implementar a lógica para enviar o arquivo e os outros campos
      console.log('Enviando arquivo:', this.selectedFile);
    } else {
      // Implemente a lógica de envio de mensagem sem anexo aqui
    }
  }

}
