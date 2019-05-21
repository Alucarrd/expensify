import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action  = removeExpense({ id: 123 });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 123
  });
});


test('should setup edit expense action object', () => {
  const action = editExpense('123', { note: 'New note value'});
  console.log(action);
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {
      note: 'New note value'
    }

  });
});


test('should setup add expense action object with provided value', () => {
  const expenseData = { description :'rent',
    note : 'my note',
    amount : 109500,
    createdAt : 1000}
  const action = addExpense(expenseData);

    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense:{
        ...expenseData,
        id: expect.any(String)
      }

    });
});

test('should setup add expense action object with default value', () => {
  const defaultExpense = {
      description :' ',
      note : '',
      amount : 0,
      createdAt : 0
  }
  const action = addExpense();

    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense:{
        ...defaultExpense,
        id: expect.any(String)
      }

    });
});
