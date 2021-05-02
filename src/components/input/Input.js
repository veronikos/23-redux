// Створіть форму в яку можна ввести такі дані: текст публікації, посилання на зображення і вибір автора з випадаючого списку 
// (його так само необхідно завчасно підготувати у вигляді фейкових даних). 
// Кнопка "Додати".
// При додаванні даних в форму і натисканні на кнопку "Додати" – дані відправляються в store (dispatch).

import React from 'react'

export default function Input() {
    return (
        <form>
            <input type='text' placeholder='Type your comment'></input>
            <input type='text' placeholder='Enter link to the photo'></input>
            <input type='text' placeholder='Choose the author'></input>
            <button>Submit</button>
        </form>
    )
}

