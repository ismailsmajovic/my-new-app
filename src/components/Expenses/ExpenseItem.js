import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UL/Card';
import './ExpenseItem.css';


const ExpenseItem = (props)=>{
    /*const expenceDate = new Date()
    const expenceTitle = 'Mobile Phone'  
    const expenceAmount = 247.654; Mozemo ih koristiti lookalno ocv epodatke*/

    /*const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();*/
    //useState()
  //let title = props.title;
  let[title, setTitle] = useState(props.title);  //in original code was  a const variable
  console.log('ExpenseItem evaluated by React!');

    const clickHandler=()=>{
      setTitle =('Updated');
      //console.log(setTitle);
      console.log(title);
    }
    return (
      <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>  
    )
}  
    //toString i toDateString daju razlicite podateke o vremenu, toString daje opsirinije podatke
    //toISOString() inspect this function
    //toLocaleString() also inspect this function
    //{month: 'long'} zanimjnivo
    
///return <h2>Expence Item!</h2>
// if you want can used a arrow function

export default ExpenseItem;