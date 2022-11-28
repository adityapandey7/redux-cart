import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialValue = { showCart: true, cartList: [], quantity: 0 };

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialValue,
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart;
    },
    addToCart(state, action) {
      const { id } = action.payload;

      const find = state.cartList.findIndex((item) => item.id === id);

      if (find >= 0) {
        state.cartList[find].quantity += 1;
        toast.info(`Quantity of ${state.cartList[find].name}`);

      } else {
        const tempvar = { ...action.payload, quantity: 1 };

        state.cartList.push(tempvar);
        toast.success(`Successfully added`);
      }
    },
    increment(state, action) {
      const id = action.payload;

      const find = state.cartList.findIndex((item) => item.id === id);

      if (find >= 0) {
        state.cartList[find].quantity += 1;
      }
    },
    decrement(state, action) {
      const id = action.payload;

      const find = state.cartList.findIndex((item) => item.id === id);

      if (find >= 0) {
        if (state.cartList[find].quantity > 1) {
          state.cartList[find].quantity -= 1;
        }
      }
    },
    remove(state, action) {
      const id = action.payload;
      const newList = state.cartList.filter((list) => list.id !== id);
      state.cartList = newList;
    },
    clear(state) {
      state.cartList = [];
    },
    calculateTotals(state) {
      let amount = 0;
      let totalPrice = 0;

      state.cartList.forEach((list) => {
        amount += list.quantity;
        totalPrice += list.quantity * list.price;
      });

      state.amount = amount;
      state.totalPrice = totalPrice;
    },
  },
});

export const cartActions = cartSlice.actions;


// function notify() {
//   toast.success("Wow, succeesfully added to cart", {
//     // position: "top-center",
//     // autoClose: 500,
//     // hideProgressBar: false,
//     // closeOnClick: true,
//     // pauseOnHover: true,
//     // draggable: true,
//     // progress: undefined,
//     // theme: "light",
//   });
// }