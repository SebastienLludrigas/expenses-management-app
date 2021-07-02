import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // Deuxième possibilité en utilisant un seul state pour tous les inputs, dans ce cas là il faudra  
  // utiliser la syntaxe callback avec prevState pour être sûr de récupérer le dernier état du state

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enterdAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = (evt) => {
    setEnteredTitle(evt.target.value);

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: evt.target.value
    //   };
    // });
  };

  const amountChangeHandler = (evt) => {
    setEnteredAmount(evt.target.value);
  };

  const dateChangeHandler = (evt) => {
    setEnteredDate(evt.target.value);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }

    onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
            type="text" 
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input 
            type="number" 
            min="0.01" 
            step="0.01" 
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input 
            type="date" 
            min="2019-01-01" 
            max="2022-12-31" 
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;