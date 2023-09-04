import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  comercial = [
    { nome: 'AMANDA', numero: '64 99230-8541', email: 'vendas03@tucano.ind.br', url: 'https://api.whatsapp.com/send/?phone=556492308541&text&type=phone_number&app_absent=0' },
  ];

  vendedores = [
    { nome: 'LIDIANE', numero: '64 99244-2043', email: 'vendas01@tucano.ind.br', url: 'https://api.whatsapp.com/send/?phone=5564992442043&text&type=phone_number&app_absent=0' },
    { nome: 'MARCOS AURÉLIO', numero: '64 99279-5551', email: 'marcos@tucano.ind.br', url: 'https://api.whatsapp.com/send/?phone=5564992795551&text&type=phone_number&app_absent=0' },
    { nome: 'SABRINA', numero: '64 99603-3221', email: 'vendas04@tucano.ind.br', url: 'https://api.whatsapp.com/send/?phone=5564996033221&text&type=phone_number&app_absent=0' },
    // Adicione mais vendedores conforme necessário
  ];

  nome = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  assunto = new FormControl('', [Validators.required]);
  mensagem = new FormControl('', [Validators.required]);

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }

  enviarMensagem() {
    const templateParams = {
      nome: this.nome.value,
      email: this.email.value,
      assunto: this.assunto.value,
      mensagem: this.mensagem.value
    };

    if (this.isFormValid()) {
      // emailjs.send('service_ihktr4l', 'template_87kn41s', templateParams, 'cge2lNZwEDgtOa_cH')
      //   .then(response => {
      //     console.log('Mensagem enviada com sucesso!', response);
      //     this.snackBar.open('E-mail enviado com sucesso!', '😊', {
      //       duration: 3000, // Duração em milissegundos
      //       panelClass: ['success-snackbar']
      //     });
      //   })
      //   .catch(error => {
      //     console.error('Erro ao enviar mensagem:', error);
      //     this.snackBar.open('Erro ao enviar E-mail.', '😕', {
      //       duration: 3000, // Duração em milissegundos
      //       panelClass: ['error-snackbar']
      //     });
      //   });
      console.log(templateParams)
    } else {
      // Se o formulário estiver inválido, marque os campos inválidos como tocados para que os erros sejam exibidos
      this.nome.markAsTouched();
      this.email.markAsTouched();
      this.assunto.markAsTouched();
      this.mensagem.markAsTouched();
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
    return this.nome.valid && this.email.valid && this.assunto.valid && this.mensagem.valid;
  }

}
