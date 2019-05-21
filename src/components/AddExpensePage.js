import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';


export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.AddExpense(expense);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <h1>This is from my add expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}
//const AddExpensePage = (props) =>
//const mapDispatchToProps = (dispatch) => {
//   return {
//     onSubmit = (expense) => dispatch(addExpense(expense));
//   }
// }

const mapDispatchToProps = (dispatch) => ({
  AddExpense : (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
