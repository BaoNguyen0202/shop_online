import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];

      console.log('Product ID:', productId);
        this.productService.getProductById(productId).subscribe(data => {
        this.product = data;
        console.log(this.product,"product");
      });
  }
}
