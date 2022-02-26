import { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [Title, NewTitle] = useState("");
  const [Amount, NewAmount] = useState("");
  const [Dates, NewDate] = useState("");

  const titleChangeHandler = (event) => {
    NewTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    NewAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    NewDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: Title,
      amount: +Amount,
      date: new Date(Dates),
    };
    props.onSaveExpenseData(expenseData);
    NewTitle("");
    NewAmount("");
    NewDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls ">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={Title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={Amount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={Dates}
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
