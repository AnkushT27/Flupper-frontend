import { Component, OnInit } from '@angular/core';
import {Cart, Product} from "../../../types";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[];
  cart: Cart;

  constructor() {
    this.cart = {
      items: []
    } as Cart
  }

  ngOnInit() {
    this.products = [...PRODUCTS].map((product, index) => {
      product.id = index + 1;
      product.image = `/assets/images/items/${product.name.toLocaleLowerCase()}.png`;
      product.cartQuantity = 0;
      return product;
    });
  }

  addToCart(product: Product) {
      console.log('my product',product)
      this.cart.items.push({id:product.id,item:product.name,quantity:1})
      let index = this.products.findIndex((data)=>data.id === product.id)
      this.products[index].cartQuantity = 1;
  }

  updateCart(product: Product) {
    console.log(product,this.cart.items)
    if(product.cartQuantity > 0){
    let index= this.cart.items.findIndex((item)=>item.id === product.id);
    this.cart.items[index].quantity = product.cartQuantity;
    }
    else{
      this.cart.items = this.cart.items.filter((item)=>item.id != product.id)
    }
  }
}


export const PRODUCTS: Product[] = [
  {
    name: "Cap",
    price: 5
  },
  {
    name: "HandBag",
    price: 30
  },
  {
    name: "Shirt",
    price: 35
  },
  {
    name: "Shoe",
    price: 50
  },
  {
    name: "Pant",
    price: 35
  },
  {
    name: "Slipper",
    price: 25
  }
];


