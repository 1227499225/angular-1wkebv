import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list', //用于标识组件。按照惯例，Angular 组件选择器以前缀 app- 开头，后跟组件名称。
  templateUrl: './product-list.component.html', //模板和样式文件名引用了组件的 HTML 和 CSS
  styleUrls: ['./product-list.component.css'], //模板和样式文件名引用了组件的 HTML 和 CSS
})
export class ProductListComponent {
  products = products; //[...products];

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  _notify() {
    window.alert('_notify');
  }
  noChildClick(_p: number) {
    window.alert('测试 onchildClick' + _p);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
