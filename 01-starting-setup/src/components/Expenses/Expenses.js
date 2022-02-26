import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {
  const [filteredOption, newOption] = useState("2022");
  const onSaveOptionDataHandler = (enteredOptionData) => {
    newOption(enteredOptionData);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredOption;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredOption}
          onSaveOptionData={onSaveOptionDataHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expense;
