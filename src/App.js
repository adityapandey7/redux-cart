import "./App.css";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import { useSelector,useDispatch } from "react-redux";
import {useEffect} from "react";
import { cartActions } from "./Components/Store/cart-slice";
import { ToastContainer } from "react-toastify";

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
     <ToastContainer
        position="bottom-left"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
