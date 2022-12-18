//import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
function App() {
  const expenses = [
    { id: 'e1', title: 'Fajar', amount: 30000000, date: new Date(2020, 5, 15)},
    { id: 'e2', title: 'Arif', amount: 300000001, date: new Date(2020, 5, 16)},
    { id: 'e3', title: 'Kurniawan', amount: 30000002, date: new Date(2020, 5, 17)},
    { id: 'e4', title: 'Fajar Arif Kurniawan', amount: 30000003, date: new Date(2020, 5, 18)},
  ];

  return (
    <div>
      <ExpenseItem 
      title={expenses[0].title}
      amount={expenses[0].amount}
      date={expenses[0].date}>

      </ExpenseItem>
      <ExpenseItem
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}>

      </ExpenseItem>
      <ExpenseItem
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}>
      </ExpenseItem>
      <ExpenseItem
      title={expenses[3].title}
      amount={expenses[3].amount}
      date={expenses[3].date}>
      </ExpenseItem>
    </div>
  );
}

export default App;
