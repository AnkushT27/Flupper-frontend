import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Product, UpdateMode} from "../../types";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Output() onAddToCart: EventEmitter<Product> = new EventEmitter();
  @Output() onQuantityUpdate: EventEmitter<Product> = new EventEmitter();
  UpdateMode:any;
  ngOnInit() {
    this.UpdateMode = UpdateMode;
  }

  addToCart(data:Product){
    this.onAddToCart.emit(data);
  }

  updateCart(data:Product,flag:UpdateMode){
    flag == 1 ? data.cartQuantity++:data.cartQuantity--;
    this.onQuantityUpdate.emit(data);
  }




}


