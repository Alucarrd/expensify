import moment from 'moment';
import filterReducers from '../../reducers/filters';
//default value setup correctly

test('should set up default filter values', () => {
  const state = filterReducers(undefined, {type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filterReducers(undefined, {type: 'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount');
});

test('should be sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  }
  const action = { type: 'SORT_BY_DATE'}
  const state = filterReducers(currentState, action);
  expect(state.sortBy).toBe('date');

});

//should set text filter
test('should set text filter', () => {
  const textSubect = 'my test case'
  const action = { type: 'SET_TEXT_FILTER', text: textSubect}
  const state  = filterReducers(undefined, action)
  expect(state.text).toBe(textSubect);
});
//should set startDate filter
test('should set startDate filter', () => {
  const startDate = moment();
  const action = { type: 'SET_START_DATE', startDate: startDate}
  const state = filterReducers(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

//should set endDate filter
test('should set endDate filter', () => {
  const endDate = moment();
  const action = { type: 'SET_END_DATE', endDate: endDate}
  const state = filterReducers(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
