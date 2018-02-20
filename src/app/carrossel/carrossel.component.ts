import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss']
})
export class CarrosselComponent implements OnInit {

  i=1;

  imagens = [
    'assets/lanchenatural.png',
    'assets/saladaverde.png',
    'assets/saladadefrutas.png'
  ]

    imagemAtual = this.imagens[0];
  constructor() { 

    setInterval ( () => {
      this.imagemAtual = this.imagens[this.i];
      this.i++
      console.log(this.imagemAtual);
  
      if (this.i == this.imagens.length) {
        this.i = 0; 
      }
    }, 2000);
  }

  ngOnInit() {
  }

}

