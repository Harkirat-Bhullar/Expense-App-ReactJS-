import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const onSaveExpenseDataHandler = (enteredExpensedata) => {
    const expenseData = {
      ...enteredExpensedata,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(true);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <NewExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
