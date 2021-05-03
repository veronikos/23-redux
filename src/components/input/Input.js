// Створіть форму в яку можна ввести такі дані: текст публікації, посилання на зображення і вибір автора з випадаючого списку 
// (його так само необхідно завчасно підготувати у вигляді фейкових даних). 
// Кнопка "Додати".
// При додаванні даних в форму і натисканні на кнопку "Додати" – дані відправляються в store (dispatch).
 
import { form, input, button } from './Input.module.css'
import classNames from 'classnames'
import React from 'react'

export default function Input() {
    return (
        <form className={classNames(form)}>
            <input type='text' placeholder='Type your comment' className={classNames(input)}></input>
            <input type='text' placeholder='Enter link to the photo' className={classNames(input)}></input>
            <input type='text' placeholder='Choose the author' className={classNames(input)}></input>
            <button type="submit" className={classNames(button)}>Submit</button>
        </form>
    )
}

