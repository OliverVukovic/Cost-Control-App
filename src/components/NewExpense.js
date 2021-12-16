import React from "react";
import FormExpense from "./FormExpense";
import './NewExpense.css';

function NewExpense(props) {

    const saveExpenseDataHendler = (enterExpenseData) => {

        const expenseData = {
            ...enterExpenseData,
            id: Math.floor(Math.random() * 1000)
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <FormExpense onSaveExpenseData={saveExpenseDataHendler} />  
        </div>
    );
};

export default NewExpense;