import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  sortOrder: string = 'asc';
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.products;
      this.filteredProducts = [...this.products];
      console.log(this.products);
    });
  }

  onSearchInput(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
  
    this.filteredProducts = this.products.filter(product => {
      const productName = product.name.toLowerCase();
      const productPrice = product.price.toString().toLowerCase();
      const searchTerm = inputValue.toLowerCase();
  
      return productName.includes(searchTerm) || productPrice.includes(searchTerm);
    });
  }
  sortBy(key: string) {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';

    this.filteredProducts = [...this.products].sort((a, b) => {
      if (this.sortOrder === 'asc') {
        return a[key] > b[key] ? 1 : -1;
      } else {
        return a[key] < b[key] ? 1 : -1;
      }
    });
  }
  
}
