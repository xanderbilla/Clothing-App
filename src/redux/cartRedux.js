import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      const existingProduct = state.products.find(product => product.prodId === action.payload.prodId);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.discount_price;
    },    
    removeProduct: (state, action) => {
      const { productId } = action.payload;
      const productIndex = state.products.findIndex(product => product.prodId === productId);
      if (productIndex !== -1) {
        const removedProduct = state.products[productIndex];
        state.quantity -= removedProduct.quantity;
        state.total -= removedProduct.discount_price * removedProduct.quantity;
        state.products.splice(productIndex, 1);
      }
    },
    resetCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    }
  }
});

export const { addProduct, removeProduct, resetCart } = cartSlice.actions;
export default cartSlice.reducer;