import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
   name: 'cart',
   initialState: {
      totalPrice: 0,
      items: [],
   },
   reducers: {
      addProduct: (state, action) => { 
         const findItem = state.items.find((obj) => obj.id == action.payload.id)
         if (findItem) {
            findItem.count++;
         } else {
            state.items.push({
               ...action.payload,
               count: 1,
            })
         }
         state.totalPrice = state.items.reduce((sum, obj) => {
            return (obj.price * obj.count) + sum;
         }, 0)
      },
      removeProduct: (state, action) => {
         state.items = state.items.filter((obj) => obj.id !== action.payload)
      },
      clearProducts: (state) => {
         state.items = [];
         state.totalPrice = 0;
      },
      minusProduct: (state,action) => {
         const findItem = state.items.find((obj) => obj.id == action.payload)
         if(findItem){
            if(findItem.count > 1){
               findItem.count--;
            } else {
              state.items = state.items.filter((obj) => obj.id !== action.payload)
            }
         }
      },
      
   }
})

export const { addProduct, removeProduct, clearProducts, minusProduct } = cartSlice.actions;
export default cartSlice.reducer;