import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  addToCart(product: Product): String {
    if (!this.items.find((x) => x.id === product.id)) {
      this.items.push(product);
      return 'successfully';
    } else {
      return 'fall through';
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor() {}
}
