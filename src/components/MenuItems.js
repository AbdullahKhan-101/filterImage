import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "./menuApi";

const MenuItems = ({ items }) => {
  return (
    <div>
      {items.map((elem) => {
        const { id, name, image, description } = elem;
        return (
          <div key={id} id="container">
            <div className="card" style={{ width: "18rem" }}>
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{description} </p>
                <Button id="Button" variant="contained" color="primary">
                  check out
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItems;
