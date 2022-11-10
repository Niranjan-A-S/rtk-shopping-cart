import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "../features/cart/cartSlice";
import { toggleModal } from "../features/modal/modalSlice";
import { CartItem } from "../components/CartItem";

export const CartContainer = () => {
  const dispatch = useDispatch();

  const { cartItems, amount, total } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return amount < 1 ? (
    <section className="cart">
      <header>
        <h2>your bag</h2>
        <h4 className="empty-cart">is currently empty</h4>
      </header>
    </section>
  ) : (
    <section className="cart">
      <header>
        <h2>your bag</h2>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </header>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => dispatch(toggleModal())}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};
