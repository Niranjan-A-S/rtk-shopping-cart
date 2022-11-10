import React from "react";
import { useDispatch } from "react-redux";
import { decrease, increase, remove } from "../features/cart/cartSlice";
import { ChevronDown, ChevronUp } from "../icons";

export const CartItem = (props) => {
  const dispatch = useDispatch();

  const { id, img, title, price, amount } = props;

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => dispatch(remove(id))}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(increase(id));
          }}
        >
          <ChevronUp />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button
          className="amount-btn"
          onClick={() => {
            amount === 1 && dispatch(remove(id));
            amount >= 1 && dispatch(decrease(id));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
