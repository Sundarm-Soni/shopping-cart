import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { IProduct } from '../models/products.interface';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../shared/components/product-card/product-card.component';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'products',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  public products$!: Observable<IProduct[]>;
  private _productsService = inject(ProductService);

  public ngOnInit(): void {
    this.products$ = this._productsService.getProducts();
  }
}
