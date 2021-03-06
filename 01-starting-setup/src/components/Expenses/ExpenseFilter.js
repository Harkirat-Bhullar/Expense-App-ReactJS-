import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const optionChangeHandler = (event) => {
    props.onSaveOptionData(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="year-select">Choose a year:</label>
        <select
          value={props.selected}
          name="year"
          id="year-select"
          onChange={optionChangeHandler}
        >
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
