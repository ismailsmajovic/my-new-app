
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';


function ExpenseItem (props){
    /*const expenceDate = new Date()
    const expenceTitle = 'Mobile Phone'  
    const expenceAmount = 247.654; Mozemo ih koristiti lookalno ocv epodatke*/

    /*const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();*/

    return (
      <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
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