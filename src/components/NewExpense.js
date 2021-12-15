import React, { useState } from "react";
import './NewExpense.css';

function NewExpense() {

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
    

    return (
        <div className="new-expense">
            <form>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type='text' onChange={titleChangeHandler} />
                    </div>
                </div>

                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} />
                    </div>
                </div>

                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                    </div>
                </div>

                <div className="new-expense__actions">
                    <button type="submit">
                        Dodaj
                    </button>
                </div>
            </form>
        </div>
)};

export default NewExpense;