import React from 'react';
import { shallow } from 'enzyme';
//import the unconnected class
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';


let AddExpense, history, wrapper;

beforeEach( () => {
  AddExpense=jest.fn();
  //our push will just be spying the push call for history
  history = { push: jest.fn() }
  wrapper = shallow(<AddExpensePage AddExpense={AddExpense} history={history} />);
});
test('Should render AddExpensePage correctly', () => {
  //setup spies

  expect(wrapper).toMatchSnapshot();

});


test('Should handle onSubmit for AddExpensePage', () => {
  //The beforeEach(callBack) will run before each test case runs
  // const onSubmit=jest.fn();
  // //our push will just be spying the push call for history
  // const history = { push: jest.fn() }
  // const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);

  expect(wrapper).toMatchSnapshot();
  wrapper.find('ExpenseForm').prop("onSubmit")(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(AddExpense).toHaveBeenLastCalledWith(expenses[1]);
});
