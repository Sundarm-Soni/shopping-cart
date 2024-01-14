import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ProductService } from '../../shared/services/product.service';
import {
  getAllProducts,
  getAllProductsSuccess,
  getProductsError,
} from './cart.action';
import { IProduct } from '../../models/products.interface';

@Injectable()
export class ProductsEffects {
  constructor(
    private readonly _productService: ProductService,
    private _actions$: Actions
  ) {}

  loadProducts$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getAllProducts),
      mergeMap(() =>
        this._productService.getProducts().pipe(
          map((products: IProduct[]) => getAllProductsSuccess(products)),
          catchError((error) => of(getProductsError(error)))
        )
      )
    )
  );
}
