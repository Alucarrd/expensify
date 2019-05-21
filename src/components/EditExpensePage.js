import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

//Refactory to class based component so we can pull out inline function
//setup mapDispatchToProps, we need two props
//

//should render edit expense page
//should render edit expense -> spies
//should handle removeExpense
export class EditExpensePage extends React.Component{
  onSubmit = (expense) => {
    console.log("updated", expense)
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }
  onRemove = () => {
    console.log("removing id:" + this.props.expense.id);
    this.props.removeExpense({id: this.props.expense.id});
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (data) => dispatch(removeExpense(data))
});
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find( (expense) => expense.id === props.match.params.id)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
