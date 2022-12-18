import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

    // const expenseDate = new Date(2020, 5, 15);
    // const expenseTitle = 'Fajar Arif Kurniawan';
    // const expenseAmount = 30000000;
    

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
            </div>
            <div className='expense-item__price'>Rp {props.amount}</div>
        </div>
    )
}

export default ExpenseItem;