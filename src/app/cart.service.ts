import { Injectable } from '@angular/core';

interface Product {
  id: number;
  image: string;
  name: string;
  series: string;
  price: number;
  description: string;
  describe: string;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor() {
    this.loadItemsFromLocalStorage();
  }

  addToCart(product: Product) {
    this.items.push(product);
    this.saveItemsToLocalStorage();
  }

  getItems() {
    return this.items;
  }

  private loadItemsFromLocalStorage() {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      this.items = JSON.parse(storedItems);
    }
  }

  private saveItemsToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }
}
