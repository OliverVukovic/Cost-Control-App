import React from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

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
      <NewExpense />
      <div className="card">
        <Expenses items={expenses}/>
      </div>
    </div>
  );
}

export default App;
