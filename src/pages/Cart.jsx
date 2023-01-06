import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { clearProducts } from '../redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from '../EmptyCart/EmptyCart';
const Cart = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0)

  const cartItems = items.map((item) => (
    <CartItem {...item} key={item.id} />
  ))

  const onClickClear = () => {
    if (window.confirm('Are you sure want to remove all of your cart?')) {
      dispatch(clearProducts());

    }
  }

  if(!totalPrice){
    return <EmptyCart/>;
  }


  return (
    <div class="container container--cart">

      <div class="cart">
        <div class="cart__top">
          <h2 class="content__title">Cart</h2>
          <div class="cart__clear" onClick={onClickClear}>
            <span>Clear cart</span>
          </div>
        </div>
        <div class="content__items">
          {
            cartItems
          }
        </div>
        <div class="cart__bottom">
          <div class="cart__bottom-details">
            <span> Total order: <b>{totalCount} pscs.</b> </span>
            <span> Total price: <b>{totalPrice} ₴</b> </span>
          </div>
          <div class="cart__bottom-buttons">
            <Link to="/" class="button button--outline button--add go-back-btn">

              <span>Go back</span>
            </Link>
            <div class="button pay-btn">
              <span>Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;