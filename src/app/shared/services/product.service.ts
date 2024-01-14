import { Injectable, inject } from '@angular/core';
import { IProduct } from '../../models/products.interface';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _http = inject(HttpClient);

  constructor() {}

  public getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>('https://fakestoreapi.com/products').pipe(
      map((products) => {
        return products.map((product) => ({ ...product, quantity: 0 }));
      })
    );
  }
}
