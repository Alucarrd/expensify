import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No Expenses</p>
      ) : (
        props.expenses.map((expense) => {
        return  <ExpenseListItem key={expense.id} {...expense} />;
        })
      )
    }


  </div>
);

//this map state to props will map the state you received from the connect (redux store)
//and map to props so it can be passed in to the component
const mapStateToProps = (state) => {
  return {
    expenses : selectExpenses(state.expenses, state.filters)
  };
}
//This will pass the state into the ExpenseList component
export default connect(mapStateToProps)(ExpenseList);
