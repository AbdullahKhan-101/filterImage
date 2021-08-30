export const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      item: state.item.filter((elem) => {
        return elem.id !== action.payload;
      }),
    };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, item: [] };
  }

  if (action.type === "INCREMENT") {
    let updatedCart = state.item.map((elem) => {
      if (elem.id === action.payload) {
        return { ...elem, quantity: elem.quantity + 1 };
      }
      return elem;
    });
    return { ...state, item: updatedCart };
  }

  if (action.type === "DECREMENT") {
    let newCart = state.item
      .map((elem) => {
        if (elem.id === action.payload) {
          return { ...elem, quantity: elem.quantity - 1 };
        }
        return elem;
      })
      .filter((elem) => elem.quantity !== 0);
    return { ...state, item: newCart };
  }

  if (action.type === "GET_TOTAL") {
    let { totalItem } = state.item.reduce(
      (accum, curVal) => {
        let { quantity } = curVal;
        accum.totalItem += quantity;
        return accum;
      },
      {
        totalItem: 0,
      }
    );
    return { ...state, totalItem };
  }

  return state;
};
