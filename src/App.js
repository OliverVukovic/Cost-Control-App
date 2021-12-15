import React from "react";
import Expenses from "./components/Expenses";

function App() {

  const expenses = [
    {
      id: 1,
      title: 'Infostan',
      amount: 20.00,
      date: new Date(2021, 11, 12),
    },
    {
      id: 2,
      title: 'Telenor',
      amount: 15.50,
      date: new Date(2021, 10, 11),
    },
    {
      id: 3,
      title: 'SBB',
      amount: 33.50,
      date: new Date(2021, 9, 10),
    },
    {
      id: 4,
      title: 'Merkur osiguranje',
      amount: 503.44,
      date: new Date(2021, 5, 6),
    },
    {
      id: 5,
      title: 'KASKO',
      amount: 304.56,
      date: new Date(2021, 1, 1),
    },
    {
      id: 6,
      title: 'Garaza',
      amount: 100.00,
      date: new Date(2021, 11, 1),
    },
    {
      id: 7,
      title: 'Gorivo',
      amount: 30.00,
      date: new Date(2021, 11, 31),
    }
  ];


  return (
    <div>
      <h2>Let's get started!</h2>
      <div className="card">
        <Expenses items={expenses}/>
      </div>

      

      {/* <ExpenseItem 
        title={expenses[0].title} 
        amount={expenses[0].amount}
        date={expenses[0].date} 
      />
      <ExpenseItem
        title={expenses[1].title} 
        amount={expenses[1].amount}
        date={expenses[1].date} 
      />
      <ExpenseItem 
        title={expenses[2].title} 
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem 
        title={expenses[3].title} 
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
      <ExpenseItem 
        title={expenses[4].title} 
        amount={expenses[4].amount}
        date={expenses[4].date}
      />
      <ExpenseItem 
        title={expenses[5].title} 
        amount={expenses[5].amount}
        date={expenses[5].date}
      />
      <ExpenseItem 
        title={expenses[6].title} 
        amount={expenses[6].amount}
        date={expenses[6].date}
      /> */}
    </div>
  );
}

export default App;
