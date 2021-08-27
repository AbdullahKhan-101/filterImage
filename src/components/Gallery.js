import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "./menuApi";
import MenuItems from "./MenuItems";
import Buttons from "./Buttons";

const allCatValues = [
  ...new Set(
    Menu.map((elem) => {
      return elem.category;
    })
  ),
  "all",
];
console.log(allCatValues);

const Gallery = () => {
  const [items, setItems] = useState(Menu);
  const [CatItems, setCatItems] = useState(allCatValues);

  const filterItem = (index) => {
    if (index === "all") {
      setItems(Menu);
      return;
    }
    const updatedItems = Menu.filter((elem) => {
      return elem.category === index;
    });
    setItems(updatedItems);
  };

  return (
    <div style={{ maxWidth: "98vw" }}>
      <h1 className="text-center">Order your favourite dish</h1>
      <hr style={{ maxWidth: "80vw" }} />
      <Buttons filterItem={filterItem} CatItems={CatItems} />
      {/* card here */}
      <MenuItems items={items} />
    </div>
  );
};

export default Gallery;
