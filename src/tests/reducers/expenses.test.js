import moment from 'moment';
import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
//check if default state get set to empty array

test('should add empty expense with all default value', () => {
  const state = expensesReducers(undefined, {type:'@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', ()=> {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-4'
  }
  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses);
});

//adding expense
test('should add expense to the end', () => {
  const newExpense = {
    id: "4",
    description: 'Car Payment',
    note: '',
    amount: 244500,
    createdAt: moment(0).add(14, 'days').valueOf()

  }

  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense

  }
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
});
//edit expense
test('should edit the expense that was found', () => {
  const newExpense = {
    id: "3",
    description: 'Car Payment',
    note: '',
    amount: 244500,
    createdAt: moment(0).add(14, 'days').valueOf()
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id:newExpense.id,
    updates:newExpense
  }
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], newExpense]);
});

//edit expense
test('should edit the expense that was found by amount only', () => {
  const amount = 5000

  const action = {
    type: 'EDIT_EXPENSE',
    id:expenses[1].id,
    updates:{
      amount: amount
    }
  }
  const state = expensesReducers(expenses, action);
  expect(state[1].amount).toBe(amount);
});

//edit expense
test('should edit the expense that was found', () => {
  const newExpense = {
    id: "-3",
    description: 'Car Payment',
    note: '',
    amount: 244500,
    createdAt: moment(0).add(14, 'days').valueOf()
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id:newExpense.id,
    updates:newExpense
  }
  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses);
});
//edit expense that doenst' exist
