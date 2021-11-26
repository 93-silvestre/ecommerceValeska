import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { GerenciadorDeEstoqueComponent } from './gerenciador-de-estoque/gerenciador-de-estoque.component';
import { LoginComponent } from './login/login.component';
import { PainelComponent } from './painel/painel.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'painel', component: PainelComponent},
  {path: 'gerenciador-de-estoque', component: GerenciadorDeEstoqueComponent},
  {path: 'estoque', component: EstoqueComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
