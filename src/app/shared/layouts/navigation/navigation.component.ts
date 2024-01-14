import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppState } from '../../../app.state';
import { Store } from '@ngrx/store';
import { selectCartProducts } from '../../../states/cart/cart.selector';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { IProduct } from '../../../models/products.interface';

@Component({
  selector: 'navigation',
  standalone: true,
  imports: [RouterLink, AsyncPipe, NgIf],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit{
  public totalCartItems$!: Observable<IProduct[]>;
  constructor(private _store: Store<AppState>) {}
  public ngOnInit(): void {
    this.totalCartItems$ = this._store.select(selectCartProducts);
  }
}
