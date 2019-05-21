import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
//add expense
//use uuid npm package
const string_data = 'MyName';
console.log(string_data.toLowerCase());
const addExpense = (
  {
    description =' ',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
//remove expense
const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});
//edit expense
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
//set text filter
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

//sort by date
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})
//sort by amount
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})
//set start date
const setStartDate = (startDate) => ({

  type: 'SET_START_DATE',
  startDate: (typeof startDate === 'number') ? startDate : undefined
})
//set end date
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate: (typeof endDate === 'number') ? endDate : undefined
})
//expense reducer
const expenseReducerDefaultState = []
const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_EXPENSE':
    //concat returns a new array instead of modifying current one
      return [...state, action.expense];

    case 'REMOVE_EXPENSE':
      //destructure id out
      return state.filter(({id}) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map( (expense) => {
        if(expense.id === action.id){
          //this means, give me all the properties of the expense
          //and give me all the properties of the update object
          //last writes win
          return {
            ...expense,
            ...action.updates
          }
        }
        else{
          return expense;
        }

      })
    default:
      return state;
  }
}

//filter reducer
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
      case 'SORT_BY_DATE':
        return {
          ...state,
          sortBy: 'date'
        }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state;
  }
}

//timestamp


//get visible expense
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  //destructure the filter
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt < endDate;;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) ;

    //figure out if expense.description as the text variable string inside it
    //look into includes
    //convert both strings to lower case

    return startDateMatch && endDateMatch && textMatch
  }).sort( (a, b) => {
    if(sortBy === 'date'){
      return a.createdAt  < b.createdAt ? 1 : -1;
    }
    else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;

    }
  })

}

//store creation

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});
const expenseOne = store.dispatch(addExpense({description:'Rent', amount: 100, createdAt: 125}));
const expenseTwo = store.dispatch(addExpense({description:'Coffee', amount: 300}));
const expenseThree = store.dispatch(addExpense({description:'Lunch', amount: 500}));
// console.log(expenseOne);
// console.log(expenseOne.expense.id);
//
// store.dispatch(removeExpense({id:expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount:500}))
// //
//
//store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));
 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

 //store.dispatch(setStartDate(125))
// store.dispatch(setStartDate()) //set to undefined
// store.dispatch(setEndDate(1250))


const demoState ={
  expenses:[{
    id: '123123',
    description: 'January Rent',
    note: 'This is the final amount of the rent',
    amount: 54500,
    createdAt: 125
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined

  }
}


const user = {
  name: 'Jen',
  age: 24
}
//
// console.log({
//   ...user,
//   location: 'Irvine'
// });
//
// console.log({
//   ...user,
//   age: 41,
//   location: 'Irvine'
// });
