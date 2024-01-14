import { createReducer, on } from "@ngrx/store";
import { IProduct } from "../../models/products.interface";
import { addToCart, incrementProduct, removeFromCart } from "./cart.action";

export interface CartState {
  products: IProduct[]
}

export const initialCartState: CartState = {
  products: []
};

export const cartReducer = createReducer(
  initialCartState,
  on(addToCart, (state, {product}) => {
    const updatedProducts = [...state.products, product];
    return {
      ...state,
      products: updatedProducts
    }
  }),
  on(incrementProduct, (state, { productId }) => {
    const updatedProducts = state.products.map((product) => product.id === productId ? { ...product, quantity: product.quantity++ }
    : product );
    return {
      ...state,
      products: updatedProducts
    }
  })
);
