import React from "react";
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

export default NewExpense;