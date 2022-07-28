import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;









































/*import React from "react";
//import ExpenseDate from "../Expenses/ExpenseDate";
import ExpenceForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense =(props)=>{
    const saveExpenseDataHandler =(enteredExpenseData)=>{
        const expenseDate ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseDate);
        props.onAddExspense(expenseDate)
    }

    return(
        <div className="new-expense">
           <ExpenceForm onSaveExpenseData={saveExpenseDataHandler}/>
           
        </div>
    );
};

export default NewExpense;*/