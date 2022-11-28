import React from "react";
import style from "./Cart.module.css";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "./Store/cart-slice";

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cartList);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  let lengthOfCart = cart.length;

  return (
    <>
      <div
        className={style.backdrop}
        onClick={() => {
          dispatch(cartActions.toggle());
        }}
      ></div>
      <div className={style.cart}>
        <ImCross
          className={style.cross}
          onClick={() => {
            dispatch(cartActions.toggle());
          }}
        />
        <h3>MY CART</h3>
          <div className={style.cartInOneDiv} >
          {cart.map((cart) => (
          <div className={style.cartList} key={cart.id}>
            <div className={style.cartDetail}>
              <img src={cart.img} alt="" />
              <div className={style.cartDetail_info} >
                <h5>{cart.name}</h5>
                <p>{cart.price} Rs.</p>
                <button className={style.remove} onClick={() => {dispatch(cartActions.remove(cart.id))}} >Remove</button>
              </div>
            </div>
            <div className={style.incDec} >
            <div className={style.inc} onClick={()=> dispatch(cartActions.increment(cart.id))} >+</div>
            <div className={style.cartNumber} >{cart.quantity}</div>
            <div className={style.dec} onClick={()=> dispatch(cartActions.decrement(cart.id))} >-</div>
            </div>
            
          </div>
        ))}
          </div>

{/* footer */}

{ lengthOfCart>0 ? 
        <div className={style.cartFooter}>
          <div className={style.total}>
            <p>
              Total Amount - <span>{totalPrice}</span>
            </p>
          </div>
          <div className={style.footerButton}>
            <button className={style.clear} onClick={()=> dispatch(cartActions.clear())} >Clear all</button>
            <button className={style.checkOut}> Check Out</button>
          </div>
        </div> : <p className={style.cartEmpty}>Cart is Empty</p> }
      </div> 
    </>
  );
}

export default Cart;
