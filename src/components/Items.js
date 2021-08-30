import React, { useContext } from "react";
import { CartContext } from "./Cart";
const Items = ({ id, description, title, quantity, img, price }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <div>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => decrement(id)}></i>
          <input type="text" placeholder={quantity} />
          <i className="fas fa-plus add" onClick={() => increment(id)}></i>
        </div>

        <div className="price">
          <h3> {price} Rs</h3>
        </div>

        <div className="remove-item">
          <i
            onClick={() => removeItem(id)}
            class="fas fa-trash-alt remvove"
          ></i>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Items;
