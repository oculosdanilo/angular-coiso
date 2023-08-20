import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  itens: Product[] = [];
  constructor(private http: HttpClient) {}

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

  pegarFretes() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
