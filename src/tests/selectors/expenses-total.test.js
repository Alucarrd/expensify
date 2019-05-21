import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses-total';

test('should return zero total ', () => {
  const result = getExpensesTotal([]);
  expect(result).toEqual(0);
})

// test('Should add up single expense', () => {
//   const result = getExpensesTotal(expenses[0]);
//   console.log(result);n
//   expect(result).toEqual(195);
// })
// test('should add up all the sums to be 114195', () => {
//   const result = getExpensesTotal(expenses);
//   console.log(result);
//   expect(result).toEqual(114195);
// })
