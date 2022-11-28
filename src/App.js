import "./App.css";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import { useSelector,useDispatch } from "react-redux";
import {useEffect} from "react";
import { cartActions } from "./Components/Store/cart-slice";

function App() {
const dispatch = useDispatch();
const Open = useSelector((state)=>state.cart.showCart);
const cartList = useSelector((state)=> state.cart.cartList);
  
useEffect(()=>{
      dispatch(cartActions.calculateTotals());
  },[cartList])

 

  return (
    <>
      <Header/>
      <ProductList/>
     { !Open && <Cart/> }
    </>
  );
}

export default App;
