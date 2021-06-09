import React,{useState} from 'react';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';
const Initial_State = [
  {id:'e3',title:"Car Insurance", date: new Date(2021,2,28),amount:450},
  {id:'e4',title: "Bike Insurance", date: new Date(2020,1,18),amount:550},
  {id:'e5',title: "Payment", date:  new Date(2022,5,5),amount:4650},
];
function App() {
  const [expenses,setexpenses]=useState(Initial_State);
  const addExpenseHandler = (expenseData)=>{
        setexpenses((prevExpenses)=>{return [expenseData, ...prevExpenses]; })
  };
  return (
    <div className="App">
      <NewExpense onFinalData={addExpenseHandler}></NewExpense>
      <Expense items={expenses}></Expense>
    </div>
  );
}

export default App;
