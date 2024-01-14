import { Component, OnInit, inject } from '@angular/core';
import { AppState } from '../app.state';
import { Store, select } from '@ngrx/store';
import {
  isLoadingSelector,
  selectCartProducts,
  selectTotal,
} from '../states/cart/cart.selector';
import { CommonModule, CurrencyPipe, NgFor } from '@angular/common';
import {
  decrementProduct,
  incrementProduct,
  removeFromCart,
} from '../states/cart/cart.action';
import { Observable, distinct, distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  private _store = inject(Store<AppState>);
  public cartItems$ = this._store.select(selectCartProducts);
  public totalPrice$ = this._store.select(selectTotal);
  public isLoading$!: Observable<boolean>;
  public ngOnInit(): void {
    this.isLoading$ = this._store.pipe(select(isLoadingSelector));
  }

  public removeProductFromCart(productId: number): void {
    this._store.dispatch(removeFromCart({ productId }));
  }

  public increment(productId: number) {
    this._store.dispatch(incrementProduct({ productId }));
  }

  public decrement(productId: number) {
    this._store.dispatch(decrementProduct({ productId }));
  }
}
