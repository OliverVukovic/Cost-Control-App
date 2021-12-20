import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import Nothn from "../assets/i-dont-know.png"


function Expenses(props) {

    const [filterYear, setFilterYear] = useState('2021');

    const filterChangeHandler = selectedYear => {
        setFilterYear(selectedYear);
    };

    const filterExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    let expensesContentPhoto = <img className="nothn" src={Nothn} alt="No-Expenses" />

    if (filterExpenses.length > 0) {
        expensesContentPhoto = filterExpenses.map((expense) => (
            <ExpenseItem 
                key={expense.id}
                title={expense.title} 
                amount={expense.amount}
                date={expense.date} 
            />
        ));
    }
      
      return (
        <div className="card">
            <div className="expenses">
                <ExpensesFilter 
                    selected={filterYear} 
                    onChangeFilter={filterChangeHandler} 
                />

                {expensesContentPhoto}
                
                
                
                
                
                {/* 
                
                {filterExpenses.length === 0 ? (
                    <img className="nothn" src={Nothn} alt="No-Expenses" />
                ) : (
                    filterExpenses.map((expense) => (
                        <ExpenseItem 
                            key={expense.id}
                            title={expense.title} 
                            amount={expense.amount}
                            date={expense.date} 
                        />
                    ))
                )}            -------- >   defaultni nacin funkcije  
                
                
                 {filterExpenses.length === 0 && <img className="nothn" src={Nothn} alt="No-Expenses" />}
                {filterExpenses.length > 0 &&
                    filterExpenses.map((expense) => (
                        <ExpenseItem 
                            key={expense.id}
                            title={expense.title} 
                            amount={expense.amount}
                            date={expense.date} 
                        />
                    ))}               -------- >   uprosceni nacin sa koriscenjem "i-ili" iz kojega se prebacujemo na funkciju iznad, koristeci let expensesContentPhoto (ili bilo koji proizvoljni naziv)
                                
                */}
                

                {/* 
                <ExpenseItem 
                    title={props.items[0].title} 
                    amount={props.items[0].amount}
                    date={props.items[0].date} 
                />
                <ExpenseItem
                    title={props.items[1].title} 
                    amount={props.items[1].amount}
                    date={props.items[1].date} 
                />
                <ExpenseItem 
                    title={props.items[2].title} 
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                />
                <ExpenseItem 
                    title={props.items[3].title} 
                    amount={props.items[3].amount}
                    date={props.items[3].date}
                />
                <ExpenseItem 
                    title={props.items[4].title} 
                    amount={props.items[4].amount}
                    date={props.items[4].date}
                />
                <ExpenseItem 
                    title={props.items[5].title} 
                    amount={props.items[5].amount}
                    date={props.items[5].date}
                />
                <ExpenseItem 
                    title={props.items[6].title} 
                    amount={props.items[6].amount}
                    date={props.items[6].date}
                /> */}
                
            </div>
          </div>
      )
}

export default Expenses;