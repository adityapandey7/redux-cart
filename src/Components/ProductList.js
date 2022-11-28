import React, {useEffect} from "react";
import style from "./ProductList.module.css";

import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "./Store/cart-slice"
import { productActions } from "./Store/productSlice";
import { _productList } from "../productList-json";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.list);



  useEffect(() => {
    dispatch(productActions.save(_productList));
  }, [dispatch]);

  


  return (
    <>
      <div className={style.list}>
        {products.map((list) => (
          <div className={style.listItem} key={list.id}>
            <img src={list.img} alt="" />
            <div className={style.productDetail}>
              <h5>
                {list.name} <span> {list.price} Rs.</span>{" "}
              </h5>
            </div>
            <button
              onClick={() => {
                dispatch(cartActions.addToCart(list));
              }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>

     
    </>
  );
}

export default ProductList;
