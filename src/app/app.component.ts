import { Component } from '@angular/core';



declare function listarEstoque(): void; 
  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myScriptElement: HTMLScriptElement;
  constructor(){
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "./app/gerenciador-de-estoque/funcoes.js";
    document.body.appendChild(this.myScriptElement);
  }
  title = 'ecommerceValeska';
}
