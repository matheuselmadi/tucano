import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InstitucionalComponent } from './institucional/institucional.component';
import { TucanodutoComponent } from './produtos/tucanoduto/tucanoduto.component';
import { TucanodrenoComponent } from './produtos/tucanodreno/tucanodreno.component';
import { TucanolisoComponent } from './produtos/tucanoliso/tucanoliso.component';
import { ManilhaComponent } from './produtos/manilha/manilha.component';
import { AcessoriosComponent } from './produtos/acessorios/acessorios.component';
import { VendasComponent } from './vendas/vendas.component';
import { ContatoComponent } from './contato/contato.component';
import { SustentabilidadeComponent } from './sustentabilidade/sustentabilidade.component';
import { TrabalheConoscoComponent } from './trabalhe-conosco/trabalhe-conosco.component';
import { CaixaPassagemComponent } from './produtos/caixa-passagem/caixa-passagem.component';
import { ConexoesLisoComponent } from './produtos/conexoes-liso/conexoes-liso.component';
import { ServicoComponent } from './servico/servico.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: "home", component: HomeComponent },
  { path: "institucional", component: InstitucionalComponent },
  { path: "tucanodreno", component: TucanodrenoComponent },
  { path: "tucanoduto", component: TucanodutoComponent },
  { path: "tucanoliso", component: TucanolisoComponent },
  { path: "manilha", component: ManilhaComponent },
  { path: "todos", component: AcessoriosComponent },
  { path: "vendas", component: VendasComponent },
  { path: "contato", component: ContatoComponent },
  { path: "sustentabilidade", component: SustentabilidadeComponent },
  { path: "trabalhe-conosco", component: TrabalheConoscoComponent },
  { path: "caixa-passagem", component: CaixaPassagemComponent },
  { path: "conexoes-liso", component: ConexoesLisoComponent },
  { path: "servicos", component: ServicoComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
