import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {
  @Input() pensamento = {
    conteudo: 'I Love Angular',
    autoria: 'Caê',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void { }

  larguraPensamento(): string {
      return this.pensamento.conteudo.length >= 256 ? 'pensamento-g' : 'pensamento-p'
  }
}
