//import ExpenseItem from "./components/ExpenseItem";import Expenses from "./components/Expenses";
//import './App.css'
import React, {useState} from "react";
import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";




  const DUMMY_EXPENSES = [   //expenses
    {
      id: 'e1',
      title: 'Cookies',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: 'e2', 
      title: 'New TV',
      amount: 799.49, 
      date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];



const App =() =>{
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExspenseHandler = (expense) =>{
    setExpenses((prevExpenses)=>{
      return[expense,...prevExpenses];
    });

    //console.log('in app.js');
    //console.log(expenses)
  }                                         //onAddExspense what it is function or?
  return (
    <div>
      <NewExpense onAddExspense={addExspenseHandler}/>  
      <Expenses items={expenses}/>
    </div>
  );
  
  
  //<h2>Let's get started!</h2> tjhis is invalid
  
  /*React.createElement(
    'div',
    {},
    React.createElement('h2',{}, "Let's get strted"),
    React.createElement(Expenses, {items: expenses})
  )*/ 

  
}


export default App;
