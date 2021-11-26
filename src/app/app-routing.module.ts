import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { PainelComponent } from './painel/painel.component';
import { VerEstoqueComponent } from './ver-estoque/ver-estoque.component';


const routes: Routes = [
  {path: '', redirectTo: 'cadastro', pathMatch: 'full'},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'painel', component: PainelComponent},
  {path: 'ver-estoque', component: VerEstoqueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
