import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/products.interface';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../shared/components/product-card/product-card.component';
import { Store } from '@ngrx/store';
import { addToCart } from '../states/cart/cart.action';
import { AppState } from '../app.state';
import { isProductsLoadingSelector, selectProducts } from '../states/cart/cart.selector';

@Component({
  selector: 'products',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  public products$!: Observable<IProduct[]>;
  public isLoading$!: Observable<boolean>;

  constructor(private _store: Store<AppState>) {}

  public ngOnInit(): void {
    this.isLoading$ = this._store.select(isProductsLoadingSelector);
    this.products$ = this._store.select<IProduct[]>(selectProducts);
  }

  public addProductsToCart(product: IProduct): void {
    this._store.dispatch(addToCart({ product }));
  }
}
