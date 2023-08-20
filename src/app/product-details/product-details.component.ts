import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products, Product } from '../products';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const idFromRoute = Number(routeParams.get('productId'));

    this.product = products.find((product) => product.id === idFromRoute);
  }

  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private carrinhoServico: CarrinhoService
  ) {}

  adicionarCarrinho(produto: Product) {
    this.carrinhoServico.adicionarCarrinho(produto);
    window.alert('adicionado ao carrinho!');
  }
}
