import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  pontos: number = 1;
  time1: number = 0;
  time2: number = 0;

  constructor() {}

  adicionarPontos(valor: number) {
    this.pontos = valor;
  }

  somapontos(valor: number) {
    valor += this.pontos;
  }

  zerarPontos() {
    this.pontos = 0;
    this.time1 = 0;
    this.time2 = 0;
  }
}
