import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { PainelComponent } from './painel/painel.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { GerenciadorDeEstoqueComponent } from './gerenciador-de-estoque/gerenciador-de-estoque.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent,
    PainelComponent,
    EstoqueComponent,
    GerenciadorDeEstoqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
