import React from "react";

function ExpenseDate(props) {

    const month = props.date.toLocaleString('en', {month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en', {day: '2-digit'});

    return (
        <div className='expense-item__date'>
            <div className='month'>{month}</div>
            <div className='year'>{year}</div>
            <div className='day'>{day}</div>
        </div>
    )
}

export default ExpenseDate;