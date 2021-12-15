import React, { useState } from "react";
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {

    // const expenseDate = new Date(2021, 11, 1);
    // const expenseTitle = 'Kasko osiguranje';
    // const expenseAmount = 304.65;   --------------------- >  nakon formiranja propsa, ovo je nepotrebno, jer konstanta je sad promenljiva

    // const month = props.date.toLocaleString('en', {month: 'long'});
    // const year = props.date.getFullYear();
    // const day = props.date.toLocaleString('en', {day: '2-digit'})     -------- > ovo ide u ExpenseDate. Pravi se nova komponenta

    const [title, setTitle] = useState(props.title);

    // let title = props.title;
    // u <h2> ce se 'props.title' zameniti sa samo 'title'   ----- > ali umesto ovoga, koristimo 'title' u useState (i React odradi ostalo)

    // function editItem() {} ---- > moze ovako, ali i sa strelicom kao u slucaju ispod
    const editItem = () => {
        setTitle('Promeni naziv');
        console.log(title);
    };

    return (
        <div className='expense-item'>

            {/* <div>{expenseDate.toDateString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>€ {expenseAmount}</div>
            // </div>                                                           ---------- > ovo zbog props-a postaje sledece */}

            {/* <div>{props.date.toDateString()}</div>      ------- > ovo postaje sledece: */}
            {/* <div className='expense-item__date'> */}
                {/* <div className='month'>{month}</div>
                <div className='year'>{year}</div>
                <div className='day'>{day}</div>                -------------- >  ovo, takodje, ide u novu komponentu ExpenseDate */}
                <ExpenseDate date={props.date}/>
            {/* </div> */}
            <div className='expense-item__description'>
                <h2>{title}</h2>
            </div>
            <div className='expense-item__price'>€ {props.amount}</div>
            <button onClick={editItem}>Edit</button>
        </div>
    );
}


export default ExpenseItem;