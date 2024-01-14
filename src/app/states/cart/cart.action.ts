import { createAction, props } from "@ngrx/store";
import { IProduct } from "../../models/products.interface";


export const getAllProducts = createAction('[Products Component] Get all products');
export const getAllProductsSuccess = createAction('[Products Component] Get all products success', (products: IProduct[]) => ({ products }));
export const getProductsError = createAction(
  '[Products Component] Get Products Failure',
  (error: string) => ({error})
);
export const addToCart = createAction('[Cart Component] Add to cart', props<{ product: IProduct }>());
export const incrementProduct = createAction('[Cart Component] Increment product',  props<{ productId: number }>());
export const decrementProduct = createAction('[Cart Component] Decrement product', props<{productId: number}>());
export const removeFromCart = createAction('[Cart Component] Remove from cart',  props<{ productId: number }>());
