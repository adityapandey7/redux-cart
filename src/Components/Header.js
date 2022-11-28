import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import style from "./Header.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "./Store/cart-slice";
import {useSelector} from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const amount = useSelector((state)=> state.cart.amount);

  return (
    <>
      <div className={style.header}>
        <h2>Redux Cart</h2>
        <div className={style.cartHeader} >
          <AiOutlineShoppingCart
            className={style.cart}
            onClick={() => dispatch(cartActions.toggle())}
          />
          <p className={style.totalQuantity}>{amount}</p>
        </div>
      </div>
    </>
  );
}

export default Header;
