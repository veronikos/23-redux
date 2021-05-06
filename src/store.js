import { createStore } from "redux";

// const items = ["Bob", "Bond", "Smith", "Alice"];

const initialState = {
  items: ["Bob", "Bond", "Smith", "Alice"],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "load_item":
      console.log(state.items)
      return {
        ...state,
        // items,
      };
    case "add_items":
      console.log("add_items", state.items)
      return {
        // ...state,
        items: [...state.items, action.payload.toLowerCase()],
        // items.concat(action.payload.toLowerCase())
      };
    // case "filter_items":
    //   return {
    //     ...state,
    //     items: items.filter((item) =>
    //       item.toLowerCase().startsWith(action.payload.toLowerCase())
    //     ),
    //   };
    default:
      return state;
  }
};

export const loadItems = () => ({
  type: "load_item",
});

export const filterItems = (value) => ({
  type: "filter_items",
  payload: value,
});

export const addItems = (value) => ({
  type: "add_items",
  payload: value,
});

const store = createStore(reducer);

export default store;
