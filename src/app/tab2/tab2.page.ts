import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  pontos: number = 1;

  pontosatual: number = 0;
  pontosatual2: number = 0;

  time1: number = 0;
  time2: number = 0;


  constructor(private alertController: AlertController) {}

  adicionarPontos(valor: number) {
    this.pontos = valor;
  }

  async somapontos() {
    this.time1 = this.pontos + this.time1;
    if(this.time1 >= 12) {
      this.pontosatual++
      this.recomecar();
      const alert = await this.alertController.create({
        message: 'TIME 1 ACABA DE PONTUAR!',
        buttons: ['SOMAR 1 PONTO!'],
      });
      await alert.present();
    }
  }

  async somapontos2() {
    this.time2 = this.pontos + this.time2;
    if(this.time2 >= 12) {
      this.pontosatual2++
      this.recomecar();
      const alert = await this.alertController.create({
        message: 'TIME 2 ACABA DE PONTUAR!',
        buttons: ['SOMAR 1 PONTO!'],
      });
      await alert.present();
    }
  }

  subpontos() {
    this.time1 = this.time1 - this.pontos;
    if(this.time1 <= 0){
      this.time1 = 0;
    }
  }

  subpontos2() {
    this.time2 = this.time2 - this.pontos;
    if(this.time2 <= 0){
      this.time2 = 0;
    }
  }

  recomecar(){
    this.pontos = 1;
    this.time1 = 0;
    this.time2 = 0;
  }

  zerarPontos() {
    this.pontos = 1;
    this.time1 = 0;
    this.time2 = 0;
    this.pontosatual = 0;
    this.pontosatual2 = 0;

  }
}
