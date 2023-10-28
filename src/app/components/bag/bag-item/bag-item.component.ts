import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Product } from '../../product/product.component';

@Component({
  selector: 'app-bag-item',
  templateUrl: './bag-item.component.html',
  styleUrls: ['./bag-item.component.css']
})
export class BagItemComponent {
  cartItems: Product[]; 

  constructor(private cartService: CartService) {
    this.cartItems = cartService.getItems();
  }

  removeFromCart(product: Product) {
    // Tìm vị trí của sản phẩm trong mảng cartItems
    const index = this.cartItems.findIndex(item => item.id === product.id);

    // Kiểm tra xem sản phẩm có tồn tại trong giỏ hàng không
    if (index !== -1) {
      // Xóa sản phẩm khỏi giỏ hàng
      this.cartItems.splice(index, 1);

      // Cập nhật localStorage
      this.cartService.saveItemsToLocalStorage();
    }
  }
}
