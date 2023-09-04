import { Component, OnInit } from '@angular/core';

interface Vendedores {
  nome: string;
  empresa: string;
  numero: string;
  email: string;
  url: string;
  cidade: string
}

interface Estados {
  departamento: string;
  numeroTelefone: string;
  vendedores: Vendedores[];
}

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent implements OnInit {

  estadoSelecionado: string = 'GO'; // Estado inicial (Goiás)

  estadosDados: { [key: string]: Estados } = {
    GO: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: 'AMANDA', empresa: 'TUCANO', numero: '64 99230-8541', email: 'vendas03@tucano.ind.br', url: 'https://api.whatsapp.com/send/?phone=556492308541&text&type=phone_number&app_absent=0', cidade: 'Ipameri-GO' },
        { nome: 'LIDIANE', empresa: 'TUCANO', numero: '64 99244-2043', email: 'vendas01@tucano.ind.br', url: 'https://api.whatsapp.com/send/?phone=5564992442043&text&type=phone_number&app_absent=0', cidade: 'Ipameri-GO' },
        { nome: 'MARCOS AURÉLIO', empresa: 'TUCANO', numero: '64 99279-5551', email: 'marcos@tucano.ind.br', url: 'https://api.whatsapp.com/send/?phone=5564992795551&text&type=phone_number&app_absent=0', cidade: 'Ipameri-GO' },
        { nome: 'SABRINA', empresa: 'TUCANO', numero: '64 99603-3221', email: 'vendas04@tucano.ind.br', url: 'https://api.whatsapp.com/send/?phone=5564996033221&text&type=phone_number&app_absent=0', cidade: 'Ipameri-GO' },
        { nome: 'PAULO / GEAN', empresa: 'GAB-DRENO', numero: '62 8114-9952 / 62 9154-5225', email: 'gabdreno@gmail.com', url: 'https://api.whatsapp.com/send/?phone=556281149952&text&type=phone_number&app_absent=0', cidade: 'Goiania-GO' },
        { nome: '', empresa: 'PRIME', numero: '62 3286-4347', email: 'primerepresentacoes@gmail.com', url: 'https://api.whatsapp.com/send/?phone=556232864347&text&type=phone_number&app_absent=0', cidade: 'Goiania-GO' },
        { nome: 'FABIO', empresa: '', numero: '64 99236-0651', email: 'fabioduartebin@icloud.com', url: 'https://api.whatsapp.com/send/?phone=5564992360651&text&type=phone_number&app_absent=0', cidade: 'Goiania-GO' },
        { nome: '', empresa: 'RICO', numero: '62 99975-7413', email: 'monza.go@hotmail.com', url: 'https://api.whatsapp.com/send/?phone=5562999757413&text&type=phone_number&app_absent=0', cidade: 'GO' }
      ]

    },
    BA: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: 'ZILDO', empresa: '', numero: '71 99121-8823', email: 'zildocastro@terra.com.br', url: 'https://api.whatsapp.com/send/?phone=5571991218823&text&type=phone_number&app_absent=0', cidade: 'Salvador-BA' }
      ]

    },
    SP: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: 'JULIA', empresa: 'REPRESENTAÇOES BERTONI', numero: '17 98127-6499', email: 'rbertoni@hotmail.com', url: 'https://api.whatsapp.com/send/?phone=5517981276499&text&type=phone_number&app_absent=0', cidade: 'Uchoa-SP' },
        { nome: '', empresa: 'ENDRE HERBERT VITORINO', numero: '17 99154-9110', email: 'escritorio@evitorino.com.br', url: 'https://api.whatsapp.com/send/?phone=5517991549110&text&type=phone_number&app_absent=0', cidade: 'Catanduva-SP' },
        { nome: 'GILMARIO OLIVEIRA GOES', empresa: '', numero: '11 5200-1035', email: 'vendas1@gimathec.com.br', url: 'https://api.whatsapp.com/send/?phone=551152001035&text&type=phone_number&app_absent=0', cidade: 'São Paulo-SP' }
      ]

    },
    ES: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: 'LUCAS / ANGELA', empresa: 'BRAFER', numero: '27 99999-5131', email: 'brafer.rep@uol.com.br', url: 'https://api.whatsapp.com/send/?phone=5527999995131&text&type=phone_number&app_absent=0', cidade: 'Espirito Santo-ES' },
        { nome: '', empresa: 'J.E CONSULTORIA', numero: '27 99294-6059', email: 'jeconsultoria2007@gmail.com', url: 'https://api.whatsapp.com/send/?phone=5527992946059&text&type=phone_number&app_absent=0', cidade: 'Espirito Santo-ES' }
      ]

    },
    RJ: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: '', empresa: 'VALE JÚNIOR', numero: '24 99816-1856', email: 'valejr.rep@gmail.com', url: 'https://api.whatsapp.com/send/?phone=5524998161856&text&type=phone_number&app_absent=0', cidade: 'Rio de Janeiro-RJ' },
        { nome: '', empresa: 'M. E. REPRESENTACOES', numero: '21 96453-4687', email: 'merepresentacoes@gmail.com', url: 'https://api.whatsapp.com/send/?phone=5521964534687&text&type=phone_number&app_absent=0', cidade: 'RJ' }
      ]

    },
    RS: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: '', empresa: 'MENDES ROSA', numero: '53 98117-9590', email: 'moacir.mendesrosa@gmail.com', url: 'https://api.whatsapp.com/send/?phone=5553981179590&text&type=phone_number&app_absent=0', cidade: 'Pelotas-RS' },
        { nome: '', empresa: 'ROVAN', numero: '54 98448-6821', email: 'rovanrepresentacao@gmail.com', url: 'https://api.whatsapp.com/send/?phone=5554984486821&text&type=phone_number&app_absent=0', cidade: 'RS' },
        { nome: '', empresa: 'SELLES', numero: '51 99702-1727', email: 'suporteselles@terra.com.br', url: 'https://api.whatsapp.com/send/?phone=5551997021727&text&type=phone_number&app_absent=0', cidade: 'RS' }
      ]

    },
    MG: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: '', empresa: 'RECOMA', numero: '34 9132-9215', email: 'recoma@recomarep.com.br', url: 'https://api.whatsapp.com/send/?phone=553491329215&text&type=phone_number&app_absent=0', cidade: 'Uberlandia-MG' },
        { nome: 'MAURICIO', empresa: 'SOLOS', numero: '31 98492-2693', email: 'mauricio@solosrepresentacoes.com.br', url: 'https://api.whatsapp.com/send/?phone=5531984922693&text&type=phone_number&app_absent=0', cidade: 'Belo Horizonte-MG' }
      ]

    },
    PA: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: 'FABIO', empresa: '', numero: '64 99236-0651', email: 'fabioduartebin@icloud.com', url: 'https://api.whatsapp.com/send/?phone=5564992360651&text&type=phone_number&app_absent=0', cidade: 'PA' }
      ]

    },
    MA: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: 'FABIO', empresa: '', numero: '64 99236-0651', email: 'fabioduartebin@icloud.com', url: 'https://api.whatsapp.com/send/?phone=5564992360651&text&type=phone_number&app_absent=0', cidade: 'MA' },
        { nome: '', empresa: 'GP CARVALHO', numero: '99 98179-6215', email: 'gprep@gprep.com.br', url: 'https://api.whatsapp.com/send/?phone=5599981796215&text&type=phone_number&app_absent=0', cidade: 'MA' }
      ]

    },
    PR: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: '', empresa: 'COMANCHE', numero: '44 99972-8108', email: 'alexandrecomanche@wnet.com.br', url: 'https://api.whatsapp.com/send/?phone=5544999728108&text&type=phone_number&app_absent=0', cidade: 'PR' },
        { nome: 'LUIS GALVÃO', empresa: '', numero: '42 99827-8677', email: 'galvaoluiz3@gmail.com', url: 'https://api.whatsapp.com/send/?phone=5542998278677&text&type=phone_number&app_absent=0', cidade: 'PR' }
      ]

    },
    SE: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: 'Não temos vendedores neste estado.', empresa: '', numero: '64 98112-1100', email: '', url: 'https://api.whatsapp.com/send/?phone=55464981121100&text&type=phone_number&app_absent=0', cidade: '' }
      ]

    },
    PE: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: 'Não temos vendedores neste estado.', empresa: '', numero: '64 98112-1100', email: '', url: 'https://api.whatsapp.com/send/?phone=55464981121100&text&type=phone_number&app_absent=0', cidade: '' }
      ]

    },
    AL: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: 'Não temos vendedores neste estado.', empresa: '', numero: '64 98112-1100', email: '', url: 'https://api.whatsapp.com/send/?phone=55464981121100&text&type=phone_number&app_absent=0', cidade: '' }
      ]

    },
    AM: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: 'Não temos vendedores neste estado.', empresa: '', numero: '64 98112-1100', email: '', url: 'https://api.whatsapp.com/send/?phone=55464981121100&text&type=phone_number&app_absent=0', cidade: '' }
      ]

    },
    MT: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: 'Não temos vendedores neste estado.', empresa: '', numero: '64 98112-1100', email: '', url: 'https://api.whatsapp.com/send/?phone=55464981121100&text&type=phone_number&app_absent=0', cidade: '' }
      ]

    },
    RO: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: 'Não temos vendedores neste estado.', empresa: '', numero: '64 98112-1100', email: '', url: 'https://api.whatsapp.com/send/?phone=55464981121100&text&type=phone_number&app_absent=0', cidade: '' }
      ]

    },
    AC: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: 'Não temos vendedores neste estado.', empresa: '', numero: '64 98112-1100', email: '', url: 'https://api.whatsapp.com/send/?phone=55464981121100&text&type=phone_number&app_absent=0', cidade: '' }
      ]

    },
    AP: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: 'Não temos vendedores neste estado.', empresa: '', numero: '64 98112-1100', email: '', url: 'https://api.whatsapp.com/send/?phone=55464981121100&text&type=phone_number&app_absent=0', cidade: '' }
      ]

    },
    SC: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: 'Não temos vendedores neste estado.', empresa: '', numero: '64 98112-1100', email: '', url: 'https://api.whatsapp.com/send/?phone=55464981121100&text&type=phone_number&app_absent=0', cidade: '' }
      ]

    },
    MS: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: 'Não temos vendedores neste estado.', empresa: '', numero: '64 98112-1100', email: '', url: 'https://api.whatsapp.com/send/?phone=55464981121100&text&type=phone_number&app_absent=0', cidade: '' }
      ]

    },
    PI: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: 'Não temos vendedores neste estado.', empresa: '', numero: '64 98112-1100', email: '', url: 'https://api.whatsapp.com/send/?phone=55464981121100&text&type=phone_number&app_absent=0', cidade: '' }
      ]

    },
    CE: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: 'Não temos vendedores neste estado.', empresa: '', numero: '64 98112-1100', email: '', url: 'https://api.whatsapp.com/send/?phone=55464981121100&text&type=phone_number&app_absent=0', cidade: '' }
      ]

    },
    RR: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: 'Não temos vendedores neste estado.', empresa: '', numero: '64 98112-1100', email: '', url: 'https://api.whatsapp.com/send/?phone=55464981121100&text&type=phone_number&app_absent=0', cidade: '' }
      ]

    },
    RN: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: 'Não temos vendedores neste estado.', empresa: '', numero: '64 98112-1100', email: '', url: 'https://api.whatsapp.com/send/?phone=55464981121100&text&type=phone_number&app_absent=0', cidade: '' }
      ]

    },
    PB: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: 'Não temos vendedores neste estado.', empresa: '', numero: '64 98112-1100', email: '', url: 'https://api.whatsapp.com/send/?phone=55464981121100&text&type=phone_number&app_absent=0', cidade: '' }
      ]

    },
    DF: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: 'Não temos vendedores neste estado.', empresa: '', numero: '64 98112-1100', email: '', url: 'https://api.whatsapp.com/send/?phone=55464981121100&text&type=phone_number&app_absent=0', cidade: '' }
      ]

    },
    TO: {
      departamento: 'Departamento Comercial',
      numeroTelefone: '(64) 3491-5388',
      vendedores: [
        { nome: 'Não temos vendedores neste estado.', empresa: '', numero: '64 98112-1100', email: '', url: 'https://api.whatsapp.com/send/?phone=55464981121100&text&type=phone_number&app_absent=0', cidade: '' }
      ]

    },
    // Adicione mais estados e vendedores conforme necessário
  };

  constructor() { }

  ngOnInit(): void {
    this.scrollToTop();
  }

  alterarEstado(estado: string) {
    this.estadoSelecionado = estado;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }
  
}
