import { createStore } from 'redux';

//create store needs function as parameter
//first parameter is the current state
//if there's no current state, need a default

//create action generators -> function that returns action object

//this is destructing at the
const add = ({a, b}) => {
  return a + b
}

console.log(add({a:1, b:2}));

const incrementCount = ({incrementBy=1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({decrementBy=1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({count} = {} ) => ({
  type:'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

//create reducer
//1. reducer is a pure function, output is determined by input
//2. never change the state or action, instead, returns a new object 


const countReducer = (state = { count: 0 }, action) => {
  switch(action.type){
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
      return {
        count: state.count + incrementBy
      }
    case 'DECREMENT':
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return {
        count: state.count - decrementBy
      }
      case 'RESET':
        return {
          count: 0
        }
        case 'SET':
          return {
            count: action.count
          }
    default:
      return state;
  }

}
const store = createStore(countReducer);

//subscribe takes a function as parameter and gets called everytime the state changes
//subscribe returns a function to unsubscribe, so once you call it, it will stop watching
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});



//possible action for counter:
//increment, decrement, reset

//Actions
//I'd like to increment the count
//the convention for redux type is upper case with underscroll
store.dispatch(incrementCount());



store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(resetCount());
store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(decrementCount());

store.dispatch(setCount({count:-100}));



//I'd like to reset the count to zero
