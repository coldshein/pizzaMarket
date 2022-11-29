import React from 'react';
import {Link} from 'react-router-dom';

const Cart = () => {
    return (
        <div class="container container--cart">
            <div class="cart">
                <div class="cart__top">
                    <h2 class="content__title"> Корзина</h2>
                    <div class="cart__clear">
                        
                        <span>Очистить корзину</span>
                    </div>
                </div>
                <div class="content__items">
                    
                </div>
                <div class="cart__bottom">
                    <div class="cart__bottom-details">
                        <span> Всего пицц: <b>3 шт.</b> </span>
                        <span> Сумма заказа: <b>900 ₽</b> </span>
                    </div>
                    <div class="cart__bottom-buttons">
                        <Link to="/" class="button button--outline button--add go-back-btn">
                        
                            <span>Вернуться назад</span>
                        </Link>
                        <div class="button pay-btn">
                            <span>Оплатить сейчас</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;