// Створіть форму в яку можна ввести такі дані: текст публікації, посилання на зображення і вибір автора з випадаючого списку
// (його так само необхідно завчасно підготувати у вигляді фейкових даних).
// Кнопка "Додати".
// При додаванні даних в форму і натисканні на кнопку "Додати" – дані відправляються в store (dispatch).

import { form, input, button, p } from "./Input.module.css";
import classNames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "../../store";

export default function Input() {
  const postAuthors = useSelector((state) => state.authors);
  const dispatch = useDispatch();
  let addComment = null;
  let addLink = null;
  let addAuthor = [];

  const getAuthor = (name) => {
    addAuthor = postAuthors.filter((author) => author.name === name)[0];
    console.log(addAuthor);
  };

  return (
    <form className={classNames(form)}>
      <p className={classNames(p)}>Type your comment and enter URL</p>
      <input
        type="text"
        placeholder="Type your comment"
        className={classNames(input)}
        onChange={(event) => (addComment = event.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Enter link to the photo"
        className={classNames(input)}
        onChange={(event) => (addLink = event.target.value)}
      ></input>
      <p className={classNames(p)}>Choose the author</p>
      <select
        className={classNames(input)}
        onChange={(event) => getAuthor(event.target.value)}
      ><option>Choose one from above</option>
        {postAuthors.map((author) => (
          <option>{author.name}</option>
        ))}
      </select>
      <button
        type="button"
        className={classNames(button)}
        onClick={() =>
          dispatch(
            addPosts({
              author: addAuthor,
              comment: addComment,
              image: addLink,
            })
          )
        }
      >
        Submit
      </button>
    </form>
  );
}
