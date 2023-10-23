import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  private productUrl = '/assets/data/data.json';

  getProducts(): Observable<any[]> { 
    return this.http.get<any[]>(this.productUrl);
  }
  
  getProductById(productId: number): Observable<any> {
    
    return this.getProducts().pipe(
      map((data: any) => {
        const filteredProducts = data.products.filter((item: any) => item.id == productId);
        console.log(filteredProducts, "Filtered Products");
        return filteredProducts;
      })
    );
      
  }
  
}
