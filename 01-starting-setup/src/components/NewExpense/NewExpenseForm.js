import { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = () => {
  const [Title, NewTitle] = useState("");
  const [Amount, NewAmount] = useState("");
  const [Date, NewDate] = useState("");

  const titleChangeHandler = (event) => {
    NewTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    NewAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    NewDate(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls ">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
