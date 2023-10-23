import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];

    this.productService.getProductById(productId).subscribe(data => {
      this.product = data;
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    const cartItems = this.cartService.getItems();
  }
}
