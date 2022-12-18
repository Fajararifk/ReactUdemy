//import logo from './logo.svg';
import './App.css';
//import './components/Expenses.css';
import Expenses from './components/Expenses/Expenses';
function App() {
  const expenses = [
    { id: 'e1', title: 'Fajar', amount: 30000000, date: new Date(2020, 5, 15)},
    { id: 'e2', title: 'Arif', amount: 300000001, date: new Date(2020, 5, 16)},
    { id: 'e3', title: 'Kurniawan', amount: 30000002, date: new Date(2020, 5, 17)},
    { id: 'e4', title: 'Fajar Arif Kurniawan', amount: 30000003, date: new Date(2020, 5, 18)},
  ];

  return (
    <div>
      <p>FFAAJJAARR AARRIIFF KKUURRNNIIAAWWAANN</p>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
