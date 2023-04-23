import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  // 通过把 private route: ActivatedRoute 添加为构造函数括号内的参数，来把 ActivatedRoute 注入到 constructor() 中。
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
  addToCart(product: Product) {
    let mes = this.cartService.addToCart(product);
    window.alert(`${mes}！ Your product has been added to the cart!`);
  }
}
