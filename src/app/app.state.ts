import { IProduct } from "./models/products.interface";
import { CartState } from "./states/cart/cart.reducer";

export interface AppState {
  cart: CartState,
}
