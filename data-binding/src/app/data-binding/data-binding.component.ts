import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/nature/'

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  /* nome: string = ' ';

  pessoa: any ={
    nome: null,
    idade: null
  }*/

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  salvarValor(valor : string){
    this.valorSalvo = valor;
  }
  botaoClicado(){
    alert("Botão clicado")
  }
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }
  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
