import React from "react";
import Button from "@material-ui/core/Button";

const Buttons = ({ filterItem, CatItems }) => {
  return (
    <div>
      <div className="menu-tabs container">
        <div className="buttons menu-tabs d-flex justify-content-between">
          {CatItems.map((elem, ind) => {
            return (
              <Button
                id={ind}
                onClick={() => filterItem(elem)}
                id="Button"
                variant="contained"
                color="primary"
              >
                {elem}
              </Button>
            );
          })}

          {/* <Button
            onClick={() => filterItem("nashta")}
            id="Button"
            variant="contained"
            color="primary"
          >
            Nashta
          </Button>
          <Button
            onClick={() => filterItem("khana")}
            id="Button"
            variant="contained"
            color="primary"
          >
            khana
          </Button>
          <Button
            onClick={() => filterItem("spicy")}
            id="Button"
            variant="contained"
            color="primary"
          >
            spicy
          </Button>
          <Button
            onClick={() => filterItem("dieting")}
            id="Button"
            variant="contained"
            color="primary"
          >
            dieting
          </Button> */}
          {/* <Button
            onClick={() => setItems(Menu)}
            id="Button"
            variant="contained"
            color="primary"
          >
            all
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Buttons;
