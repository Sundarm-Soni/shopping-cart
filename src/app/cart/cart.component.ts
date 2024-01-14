import { Component, OnInit, inject } from '@angular/core';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProduct } from '../models/products.interface';
import { selectCartProducts } from '../states/cart/cart.selector';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ProductCardComponent } from '../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [AsyncPipe, ProductCardComponent, NgIf, NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  private _store = inject(Store<AppState>);
  public cartItems$: Observable<IProduct[]> = this._store.select(selectCartProducts);
}
