import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { NavigationComponent } from './shared/layouts/navigation/navigation.component';
import { AppState } from './app.state';
import { Store } from '@ngrx/store';
import { getAllProducts } from './states/cart/cart.action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private _store = inject(Store<AppState>);
  public ngOnInit(): void {
    this._store.dispatch(getAllProducts());
  }
}
