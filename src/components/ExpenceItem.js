import './ExpenceItem.css';

function ExpenceItem (){
    return (
      <div className='expence-item'>
        <div>16 jul 2022</div>
        <div className='expence-item__description'>
          <h2>Phone mobile!</h2>
          <div className='expence-item__price'>$247.654</div>
        </div>
      </div>  
    )
}  
    
///return <h2>Expence Item!</h2>
// if you want can used a arrow function

export default ExpenceItem;