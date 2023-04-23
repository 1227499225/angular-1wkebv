import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-myalerts',
  templateUrl: './product-myalerts.component.html',
  styleUrls: ['./product-myalerts.component.css'],
})
export class ProductMyalertsComponent {
  @Input() product!: Product;

  @Output() _childClick = new EventEmitter();
}
