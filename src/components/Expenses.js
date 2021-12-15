import React from "react";
import ExpenseItem from "./ExpenseItem";


function Expenses(props) {
      
      return (
        <div className="expenses">
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
            />
          </div>
      )
}

export default Expenses;