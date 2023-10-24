import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-bag-checkout',
  templateUrl: './bag-checkout.component.html',
  styleUrls: ['./bag-checkout.component.css']
})
export class BagCheckoutComponent {
  cartItems: any[]; 

  constructor(private cartService: CartService) {
    this.cartItems = cartService.getItems();
    console.log(this.cartItems);
    
  }
  
  getTotal() {
    let total = 0;

    for (const item of this.cartItems) {
      if (item.price) {
        total += item.price;
      }
    }
    const roundedTotal = total.toFixed(2);

  return roundedTotal;
  }
}
