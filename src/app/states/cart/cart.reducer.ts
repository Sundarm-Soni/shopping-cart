import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../../models/products.interface';
import {
  addToCart,
  decrementProduct,
  getAllProducts,
  getAllProductsSuccess,
  getProductsError,
  incrementProduct,
  removeFromCart,
} from './cart.action';

export interface CartState {
  products: IProduct[];
  totalPrice: number;
  error: string | null;
  isLoading: boolean;
}

export interface ProductState {
  products: IProduct[];
  error: string | null;
  isLoading: boolean;
}

export const initialCartState: CartState = {
  products: [],
  totalPrice: 0,
  error: null,
  isLoading: false
};

export const initialProductsState: ProductState = {
  products: [],
  error: null,
  isLoading: false
}

export const calculateTotalPrice = (products: IProduct[]) => {
  return products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
};

export const productsReducer = createReducer(
  initialProductsState,
  on(getAllProducts, (state) => {
    return {
      ...state,
      isLoading: true,
      error: null
    };
  }),
  on(getAllProductsSuccess, (state, { products }) => {
    return {
      ...state,
      products: [...products],
      error: null,
      isLoading: false
    };
  }),
  on(getProductsError, (state, action) => {
    return {
      ...state,
      products: [],
      error: action.error,
      isLoading: false
    };
  }),
)

export const cartReducer = createReducer(
  initialCartState,
  on(addToCart, (state, { product }) => {
    const updatedProducts = [
      ...state.products,
      { ...product, quantity: product.quantity + 1 },
    ];
    return {
      ...state,
      products: updatedProducts,
      totalPrice: calculateTotalPrice(updatedProducts),
    };
  }),

  on(removeFromCart, (state, { productId }) => {
    const updatedProducts = state.products.filter(
      (product) => product.id !== productId
    );
    return {
      ...state,
      products: updatedProducts,
      totalPrice: calculateTotalPrice(updatedProducts),
    };
  }),

  on(incrementProduct, (state, { productId }) => {
    const updatedProducts = state.products.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    return {
      ...state,
      products: updatedProducts,
      totalPrice: calculateTotalPrice(updatedProducts),
    };
  }),
  on(decrementProduct, (state, { productId }) => {
    const updatedProducts = state.products.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    return {
      ...state,
      products: updatedProducts,
      totalPrice: calculateTotalPrice(updatedProducts),
    };
  })
);
