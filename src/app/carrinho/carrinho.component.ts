import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent {
  itens = this.carrinhoServico.listarCarrinho();

  formCheckout = this.formBuilder.group({
    nome: '',
    endereco: '',
  });

  constructor(
    private carrinhoServico: CarrinhoService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    this.itens = this.carrinhoServico.limparCarrinho();
    console.warn('seu pedido foi subida', this.formCheckout.value);
    this.formCheckout.reset();
  }
}
