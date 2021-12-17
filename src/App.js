import React, { useState } from "react";

import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const RANDOM_DATA = [
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
  // {
  //   id: 4,
  //   title: 'Merkur osiguranje',
  //   amount: 503.44,
  //   date: new Date(2021, 5, 6),
  // },
  // {
  //   id: 5,
  //   title: 'KASKO',
  //   amount: 304.56,
  //   date: new Date(2021, 1, 1),
  // },
  // {
  //   id: 6,
  //   title: 'Garaza',
  //   amount: 100.00,
  //   date: new Date(2021, 11, 1),
  // },
  // {
  //   id: 7,
  //   title: 'Gorivo',
  //   amount: 30.00,
  //   date: new Date(2021, 11, 31),
  // }, 
];



// function App() {
//   const [expenses, setExpenses] = useState(RANDOM_DATA);

//   const addExpenseHandler = expense => {
//     setExpenses([...expenses, expense])
//   };


function App() {
  const [expenses, setExpenses] = useState(RANDOM_DATA);

  const addExpenseHandler = expense => {
    // console.log(expense);
    setExpenses((prevExpenses) => {
      return [ ...prevExpenses, expense ];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
