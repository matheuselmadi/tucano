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

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path:"home", component:HomeComponent},
  {path:"institucional", component:InstitucionalComponent},
  {path:"tucanodreno", component:TucanodrenoComponent},
  {path:"tucanoduto", component:TucanodutoComponent},
  {path:"tucanoliso", component:TucanolisoComponent},
  {path:"manilha", component:ManilhaComponent},
  {path:"acessorios", component:AcessoriosComponent},
  {path:"vendas", component:VendasComponent},
  {path:"contato", component:ContatoComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
