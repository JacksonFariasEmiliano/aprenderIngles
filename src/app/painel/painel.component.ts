import { Frase } from './../shared/frase.model';
import { FRASES } from './frases-mock';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})

export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a Frase';
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;

  public tentativas: number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor()
    {
      this.atualizaRodada()
    }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
    //console.log(this.resposta);
  }

  public verificarResposta(): void{

    if(this.rodadaFrase.frasePtBr == this.resposta){

      //trocara apergunta
      this.rodada ++;

      //progresso
      this.progresso = this.progresso + (100/this.frases.length);

      //
      if(this.rodada ===4){
        this.encerrarJogo.emit('Vitoria');
      }

      //atualiza o objeto rodadaFrase
      this.atualizaRodada();

    }else{
      //decrementar a variavel tentativa
      this.tentativas--

      if(this.tentativas === -1){
        this.encerrarJogo.emit('Você perdeu');
      }
    }

  }

  public atualizaRodada(){
    //define a frase com base em uma logica
    this.rodadaFrase = this.frases[this.rodada];
    //Limpa a resposta
    this.resposta='';
  }

}
