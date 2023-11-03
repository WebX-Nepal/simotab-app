import { createSlice } from "@reduxjs/toolkit";
import { successToast } from "../../services/toast.service";

const initialState = {
  simot_app_cartItems: [],
  simot_app_cartTotalQuantity: 0,
  simot_app_cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingIndex = state.simot_app_cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (existingIndex >= 0) {
        state.simot_app_cartItems[existingIndex] = {
          ...state.simot_app_cartItems[existingIndex],
          cartQuantity: state.simot_app_cartItems[existingIndex].cartQuantity + 1,
        };
      } else {
        const tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.simot_app_cartItems.push(tempProductItem);
        successToast("Added to cart");
      }
    },
    decreaseCart: (state, action) => {
      const itemIndex = state.simot_app_cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (state.simot_app_cartItems[itemIndex].cartQuantity > 1) {
        state.simot_app_cartItems[itemIndex].cartQuantity -= 1;
        successToast("product removed from cart");
      } else if (state.simot_app_cartItems[itemIndex]?.cartQuantity === 1) {
        const newsimot_app_cartItems = state.simot_app_cartItems.filter((item) => {
          return item._id !== action.payload._id;
        });
        state.simot_app_cartItems = newsimot_app_cartItems;
        successToast("Product removed from cart");
      }
    },
    removeFromCart: (state, action) => {
      state.simot_app_cartItems.map((item) => {
        if (item._id === action.payload._id) {
          const newsimot_app_cartItems = state.simot_app_cartItems?.filter((item) => {
            return item._id !== action.payload._id;
          });
          state.simot_app_cartItems = newsimot_app_cartItems;
          successToast("Product removed from cart");
        }
      });
    },
    getTotal: (state) => {
      let { total, quantity } = state.simot_app_cartItems.reduce(
        (cartTotal, simot_app_cartItems) => {
          const { price, cartQuantity } = simot_app_cartItems;
          const itemTotal = price * cartQuantity;
          cartTotal.quantity += cartQuantity;
          cartTotal.total += itemTotal;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      quantity = Number(quantity);
      (state.simot_app_cartTotalAmount = total), (state.simot_app_cartTotalQuantity = quantity);
    },
    clearCart: (state) => {
      state.simot_app_cartItems = [];
      successToast(" Your Cart is cleared ");
    },
  },
});
export const { addToCart, decreaseCart, removeFromCart, getTotal, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
