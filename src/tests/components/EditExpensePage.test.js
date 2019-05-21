import React from 'react';
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';


//should render edit expense -> spies
//should handle removeExpense

let wrapper, removeExpense, editExpense, history;

beforeEach(() => {
  history = { push: jest.fn() }
  editExpense=jest.fn();
  removeExpense=jest.fn()
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[2]}
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}/>)


});

test('Should render edit expense page', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should edit expense', () => {
  expect(wrapper).toMatchSnapshot();
  wrapper.find('ExpenseForm').prop("onSubmit")(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('Should handle remove expense', () =>{
  const idToRemove = {id:expenses[2].id}
  expect(wrapper).toMatchSnapshot();
  //wrapper.find('button').prop('onClick')(idToRemove)
  wrapper.find('button').simulate('click');
  expect(removeExpense).toHaveBeenLastCalledWith(idToRemove);
})
