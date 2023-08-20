import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-frete',
  templateUrl: './frete.component.html',
  styleUrls: ['./frete.component.css'],
})
export class FreteComponent {
  custosFrete!: Observable<{ type: string; price: number }[]>;

  constructor(private carrinhoServico: CarrinhoService) {}

  ngOnInit(): void {
    this.custosFrete = this.carrinhoServico.pegarFretes();
  }
}
