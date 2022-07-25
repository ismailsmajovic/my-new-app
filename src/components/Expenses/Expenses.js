import React, { useState } from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import Card from '../UL/Card';
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';

const Expenses =(props)=>{

    const[filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear)=>{
        setFilteredYear(selectedYear);
    }
//what it is selected, and onChangeHandler

       console.log("ITEMS",props.items)
    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter                         //undefined
                seleted={filteredYear} 
                onChangeFilter={filterChangeHandler}
                />
                {props.items.map((expense) => ( 
                <ExpenseItem 
                    title ={expense.title}            // kao nije definisano
                    amount={expense.amount} 
                    date={expense.date}
                />
              ))}

            </Card>
        </div>
    );
};

export default Expenses;


/*  ovo smo obrisali jer samo smanjili kod uz pomoc amp metode
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
        */







        /*
          <ExpensesFilter seleted={filteredYear} onChangeFilter={filterChangeHandler}/>
        {props.items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>)}
        */