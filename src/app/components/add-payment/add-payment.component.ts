import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent {
  cartItems: any[]; 
  isToastActive: boolean = false;
  isProgressActive: boolean = false;
  private timer1: any;
  private timer2: any;
  constructor(private router: Router, cartService: CartService) { 
    this.cartItems = cartService.getItems();
    
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
  public getTotal() {
    const subtotal = this.getSubtotal();
    const shippingCost = this.getShippingCost();
    const tax = this.getTax();
    const fix = subtotal - shippingCost + parseFloat(tax);
    const fixtotal = fix.toFixed(2)
    return fixtotal;
  }
  showSuccessMessage() {
    this.isToastActive = true;
    this.isProgressActive = true;

    this.timer1 = setTimeout(() => {
      this.isToastActive = false;
    }, 3000);

    this.timer2 = setTimeout(() => {
      this.isProgressActive = false;
      this.router.navigate(['/']);
    }, 3300);
  }

  closeToast() {
    this.isToastActive = false;
    setTimeout(() => {
      this.isProgressActive = false;
    }, 300);
    clearTimeout(this.timer1);
    clearTimeout(this.timer2);
  }
}
