import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent {
  cartItems: any[]; 

  constructor(private cartService: CartService) {
    this.cartItems = cartService.getItems();
    console.log(this.cartItems);
    
  }
}
