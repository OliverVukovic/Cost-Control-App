import React, { useState } from "react";
import './NewExpense.css';

function FormExpense(props) {

    const [enterTitle, setEnterTitle] = useState('');
    const [enterAmount, setEnterAmount] = useState('');
    const [enterDate, setEnterDate] = useState('');    
    // -------- > umesto ovoga samo jedan useState sa nizom podataka
    // const [userInput, setUserInput] = useState({
    //     enterTitle: '',
    //     enterAmount: '',
    //     enterDate: '',
    // });

    const titleChangeHandler = (event) => {
        // console.log(event.target.value);
        setEnterTitle(event.target.value);   
        // ----- > nakon promene na jedan useState
        // setUserInput({
        //     ...userInput,
        //     enterTitle: event.target.value,
        // })  
        // --------------------------------------- > i ovo mozemo zameniti koristeci 'prevState'
    //     setUserInput((prevState) => {
    //         return { ...prevState, enterTitle: event.target.value };
    //     });
    };

    const amountChangeHandler = (event) => {
        setEnterAmount(event.target.value);
        // setUserInput((prevState) => {
        //     return { ...prevState, enterAmount: event.target.value, };
        // });
    };

    const dateChangeHandler = (event) => {
        setEnterDate(event.target.value);
        // setUserInput((prevState) => {
        //     return { ...prevState, enterDate: event.target.value, };
        // });
    };


    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate)
        };

        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');
    };

    return (
        <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input 
                            type='text' 
                            value={enterTitle} 
                            onChange={titleChangeHandler} 
                        />
                    </div>

                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input 
                            type='number' 
                            value={enterAmount}
                            min="0.01" 
                            step="0.01" 
                            onChange={amountChangeHandler} 
                        />
                    </div>

                    <div className="new-expense__control">
                        <label>Date</label>
                        <input 
                            type='date' 
                            value={enterDate}
                            min="2019-01-01" 
                            max="2022-12-31" 
                            onChange={dateChangeHandler} 
                        />
                    </div>
                </div>

                <div className="new-expense__actions">
                    <button type="submit">
                        Add New
                    </button>
                </div>
            </form>
)};

export default FormExpense;