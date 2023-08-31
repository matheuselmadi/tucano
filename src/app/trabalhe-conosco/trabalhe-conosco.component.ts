import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as emailjs from 'emailjs-com';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as cloudinary from 'cloudinary-core';

@Component({
  selector: 'app-trabalhe-conosco',
  templateUrl: './trabalhe-conosco.component.html',
  styleUrls: ['./trabalhe-conosco.component.scss']
})
export class TrabalheConoscoComponent {

  nome = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  assunto = new FormControl('', [Validators.required]);
  mensagem = new FormControl('', [Validators.required]);
  arquivo = new FormControl(null, Validators.required);

  selectedFile: File | null = null;
  cloudinaryInstance: any;
  auxArquivo: string = '';

  constructor(private snackBar: MatSnackBar) {
    this.cloudinaryInstance = cloudinary.Cloudinary.new({ cloud_name: 'deijay64k' });
  }

  async onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      try {
        // Fazer upload do arquivo para o Cloudinary
        const response = await fetch(`https://api.cloudinary.com/v1_1/deijay64k/upload?upload_preset=ml_default`, {
          method: 'POST',
          body: formData
        });

        const responseData = await response.json();
        const downloadURL = responseData.secure_url;
        this.auxArquivo = downloadURL;

      } catch (error) {
        console.error('Erro ao fazer upload para o Cloudinary:', error);
      }

    }

  }

  enviarMensagem() {
    const templateParams = {
      nome: this.nome.value,
      email: this.email.value,
      assunto: this.assunto.value,
      mensagem: this.mensagem.value,
      arquivo: this.auxArquivo
    };

    if (this.isFormValid() && this.auxArquivo != '') {
      emailjs.send('service_ihktr4l', 'template_87kn41s', templateParams, 'cge2lNZwEDgtOa_cH')
        .then(response => {
          console.log('Mensagem enviada com sucesso!', response);
          this.snackBar.open('E-mail enviado com sucesso!', '😊', {
            duration: 3000, // Duração em milissegundos
            panelClass: ['success-snackbar']
          });
          this.auxArquivo = '';
        })
        .catch(error => {
          console.error('Erro ao enviar mensagem:', error);
          this.snackBar.open('Erro ao enviar E-mail.', '😕', {
            duration: 3000, // Duração em milissegundos
            panelClass: ['error-snackbar']
          });
        });
    } else {
      // Se o formulário estiver inválido, marque os campos inválidos como tocados para que os erros sejam exibidos
      this.nome.markAsTouched();
      this.email.markAsTouched();
      this.assunto.markAsTouched();
      this.mensagem.markAsTouched();
      this.arquivo.markAsTouched();
    }
  }

  getErrorMessage(formControl: FormControl) {
    if (formControl.hasError('required')) {
      return 'Você deve inserir um valor';
    } else if (formControl.hasError('email')) {
      return 'Não é um e-mail válido';
    }
    return '';
  }

  isFormValid() {
    return this.nome.valid && this.email.valid && this.assunto.valid && this.mensagem.valid && this.arquivo.valid;
  }

}
