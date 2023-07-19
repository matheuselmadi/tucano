import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { InstitucionalComponent } from './institucional/institucional.component';
import { TucanodutoComponent } from './produtos/tucanoduto/tucanoduto.component';
import { TucanodrenoComponent } from './produtos/tucanodreno/tucanodreno.component';
import { TucanolisoComponent } from './produtos/tucanoliso/tucanoliso.component';
import { ManilhaComponent } from './produtos/manilha/manilha.component';
import { AcessoriosComponent } from './produtos/acessorios/acessorios.component';
import { VendasComponent } from './vendas/vendas.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    InstitucionalComponent,
    TucanodutoComponent,
    TucanodrenoComponent,
    TucanolisoComponent,
    ManilhaComponent,
    AcessoriosComponent,
    VendasComponent,
    ContatoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule,
    MatSidenavModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
