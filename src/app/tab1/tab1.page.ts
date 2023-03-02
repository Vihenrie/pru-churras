import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  cara = 'assets/cara.png';
  coroa = 'assets/coroa.png';
  logo = 'assets/logo.png';
  image = this.logo;
  info = 'clique no botão para jogar!';


  constructor() {}

  jogarMoeda(){
    if(Math.random() <0.5){
      this.image = this.cara;
      this.info = "cara!"
    }else{
      this.image = this.coroa;
      this.info = "Coroa!"
    }
  }

}
