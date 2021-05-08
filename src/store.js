import { createStore } from "redux";

const initialState = {
  posts: [],
  authors: [
    {
      name: "Hermione Granger",
      photo:
        "https://i.pinimg.com/originals/b0/49/db/b049dbae23f549bb8782e20d5ea76e92.jpg",
      nickname: "@hermione",
      date: "18 apr.",
    },
    {
      name: "Harry Potter",
      photo:
        "https://i.pinimg.com/originals/17/75/bf/1775bfeae9ce04d7c8ef60ac775f3a78.jpg",
      nickname: "@harry",
      date: "18 apr.",
    },
    {
      name: "Ron Weasley",
      photo:
        "https://i.pinimg.com/474x/e9/b3/a1/e9b3a1f3938d87bf8fe09707dad63cca.jpg",
      nickname: "@ronw",
      date: "18 apr.",
    },
    {
      name: "Anakin Skywalker",
      photo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
      nickname: "@dart_vader",
      date: "26 fev.",
    },
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "load_item":
      console.log(state)
      return {
        ...state,
      };
      case "add_posts":
        console.log("add_posts", state.posts)
        return {
          ...state,
          posts: [...state.posts, action.payload],
        };
    default:
      return state;
  }
};

export const loadItems = () => ({
  type: "load_item",
});

export const addPosts = (value) => ({
  type: "add_posts",
  payload: value,
});

const store = createStore(reducer);

export default store;
