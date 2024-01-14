import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState, ProductState, cartReducer, productsReducer } from "./cart.reducer";

  const cartProductsFeatureKey = 'cartProducts';
  const productFeatureKey = 'products';

  export const selectCartState = createFeatureSelector<CartState>(cartProductsFeatureKey);
  export const selectProductsState = createFeatureSelector<ProductState>(productFeatureKey);

  export const selectCartProducts = createSelector(
    selectCartState,
    (state: CartState) => state.products
  );

  export const selectProducts = createSelector(
    selectProductsState,
    (state: ProductState) => state.products
  );

  export const selectTotal = createSelector(
    selectCartState,
    (state: CartState) => state.totalPrice
  );

  export const isLoadingSelector = createSelector(
    selectCartState,
    (state) => state.isLoading
  );


  export const isProductsLoadingSelector = createSelector(
    selectProductsState,
    (state) => state.isLoading
  );

  export const cartProductsFeature = createFeature({
    name: cartProductsFeatureKey,
    reducer: cartReducer
});

export const productsFeature = createFeature({
  name: productFeatureKey,
  reducer: productsReducer
});
