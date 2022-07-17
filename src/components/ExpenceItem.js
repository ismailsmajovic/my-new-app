
import ExpenceDate from './ExpenceDate';
import './ExpenceItem.css';

function ExpenceItem (props){
    /*const expenceDate = new Date()
    const expenceTitle = 'Mobile Phone'
    const expenceAmount = 247.654; Mozemo ih koristiti lookalno ocv epodatke*/

    /*const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();*/

    return (
      <div className='expence-item'>
        <ExpenceDate date={props.date}/>
        <div className='expence-item__description'>
          <h2>{props.title}</h2>
          <div className='expence-item__price'>${props.amount}</div>
        </div>
      </div>  
    )
}  
    //toString i toDateString daju razlicite podateke o vremenu, toString daje opsirinije podatke
    //toISOString() inspect this function
    //toLocaleString() also inspect this function
    //{month: 'long'} zanimjnivo
    
///return <h2>Expence Item!</h2>
// if you want can used a arrow function

export default ExpenceItem;