import React, { useState } from "react";
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);

    const editItem = () => {
        setTitle('Promeni naziv');
        console.log(title);
    };

    return (
        <div className='expense-item'>

            <ExpenseDate date={props.date}/>

            <div className='expense-item__description'>
                <h2>{title}</h2>
            </div>

            <div className='expense-item__price'>€ {props.amount}</div>

            <button onClick={editItem}>Edit</button>

        </div>
    );
}

export default ExpenseItem;