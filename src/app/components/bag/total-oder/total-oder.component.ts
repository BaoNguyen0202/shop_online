import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-total-oder',
  templateUrl: './total-oder.component.html',
  styleUrls: ['./total-oder.component.css']
})
export class TotalOderComponent {
  cartItems: any[]; 

  constructor(private cartService: CartService) {
    this.cartItems = cartService.getItems();
    console.log(this.cartItems);
  }
  getNumberOfItems() {
    return this.cartItems.length;
  }
  getShippingCost() {
    const numItems = this.getNumberOfItems();
    if (numItems === 1) {
      return 30;
    } else if (numItems === 2) {
      return 20;
    } else if (numItems === 3) {
      return 10;
    } else {
      return 0;
    }
  }
  getSubtotal() {
    let subtotal = 0;
    for (const item of this.cartItems) {
      if (item.price) {
        subtotal += item.price;
      }
    }
    return subtotal;
  }

  getTax() {
    const subtotal = this.getSubtotal();
    const fix = subtotal * 0.08;
    const fixtotal = fix.toFixed(2)
    return fixtotal; 
  }
  getTotal() {
    const subtotal = this.getSubtotal();
    const shippingCost = this.getShippingCost();
    const tax = this.getTax();
    const fix = subtotal - shippingCost + parseFloat(tax);
    const fixtotal = fix.toFixed(2)
    return fixtotal;
  }
}
