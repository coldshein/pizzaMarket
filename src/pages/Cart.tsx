import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { clearProducts } from '../redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from '../EmptyCart/EmptyCart';
const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector((state:any) => state.cart);
  const totalCount:number = items.reduce((sum: any, item:any) => sum + item.count, 0)

  const cartItems = items.map((item:any) => (
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
    <div className="container container--cart">

      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">Cart</h2>
          <div className="cart__clear" onClick={onClickClear}>
            <span>Clear cart</span>
          </div>
        </div>
        <div className="content__items">
          {
            cartItems
          }
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span> Total order: <b>{totalCount} pscs.</b> </span>
            <span> Total price: <b>{totalPrice} ₴</b> </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link to="/" className="button button--outline button--add go-back-btn">

              <span>Go back</span>
            </Link>
            <div className="button pay-btn">
              <span>Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;