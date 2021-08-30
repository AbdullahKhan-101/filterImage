import React, { useContext, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import Items from "./Items";
import image from "./arrow.png";
// import { products } from "./Products.js";
import { CartContext } from "./Cart";

const ContextCart = () => {
  const { item, clearCart } = useContext(CartContext);
  //   const [items, setItems] = useState(products);

  if (item.length === 0) {
    return (
      <div>
        <header>
          <div className="continue-shopping">
            <img className="arrow-icon" src={image} alt="" />
            <h3>continue shopping </h3>
          </div>

          <div className="cart-icon">
            <img src="./images/cart.png" alt="cart" />
            <p>0</p>
          </div>
        </header>

        <section className="main-cart-section">
          <h1>Shopping Cart</h1>
          <p className="total-items">
            You have <span className="total-items-count">0</span> items in
            shopping cart
          </p>
        </section>
      </div>
    );
  }
  return (
    <div>
      <header>
        <div className="continue-shopping">
          <img className="arrow-icon" src={image} alt="" />
          <h3>continue shopping </h3>
        </div>

        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>7</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          You have <span className="total-items-count">{totalItem}</span> items
          in shopping cart
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((elem) => {
                return <Items key={elem.id} {...elem} />;
              })}
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>
            Card Total: <span>{totalAmount} Rs</span>
          </h3>
          <button>Check out</button>
          <button onClick={clearCart} className="clear-cart">
            Clear cart
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContextCart;
