import { createAction, props } from "@ngrx/store";
import { IProduct } from "../../models/products.interface";

export const addToCart = createAction('[Cart Component] Add to cart', props<{ product: IProduct }>());
export const incrementProduct = createAction('[Cart Component] Increment product',  props<{ productId: number }>());
export const decrementProduct = createAction('[Cart Component] Decrement product', props<{productId: number}>());
export const removeFromCart = createAction('[Cart Component] Remove from cart',  props<{ productId: number }>());
