import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  itens: Product[] = [];
  constructor() {}

  adicionarCarrinho(product: Product) {
    this.itens.push(product);
  }

  listarCarrinho() {
    return this.itens;
  }

  limparCarrinho() {
    this.itens = [];
    return this.itens;
  }
}
