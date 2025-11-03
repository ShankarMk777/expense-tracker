import React, { useState } from 'react';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');


  const addExpense = () => {
    if (name.trim() === '' || amount === '') return;
    const newExpense = {
      id: Date.now(),
      name,
      amount: parseFloat(amount),
    };
    setExpenses([...expenses, newExpense]);
    setName('');
    setAmount('');
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const totalExpense = expenses.reduce((total, exp) => total + exp.amount, 0);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Expense name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={addExpense}>Add</button>
      </div>

      <h2>Total: ₹{totalExpense.toFixed(2)}</h2>

      <ul className="expense-list">
        {expenses.map((exp) => (
          <li key={exp.id}>
            {exp.name} - ₹{exp.amount.toFixed(2)}
            <button className="delete-btn" onClick={() => deleteExpense(exp.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;