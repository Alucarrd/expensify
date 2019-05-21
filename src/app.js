//install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';

import validator from 'validator';
import { Provider } from 'react-redux';

import configureStore from './stores/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import showExpense from './selectors/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import "react-dates/lib/css/_datepicker.css";
const store = configureStore();
console.log(store.getState());

//add expense -> water bill
const expenseOne = store.dispatch(addExpense({description:'Water Bill', amount: 4500}));
//add expense -> gas bill
const expenseTwo = store.dispatch(addExpense({description:'Gas Bill', createdAt: 1000}));
//set text filter -> bill
const expenseThree = store.dispatch(addExpense({description:'Rent', amount: 109500}));

//get visible expense function to print
const state = store.getState();
const visibleExpenses = showExpense(state.expenses, state.filters);
console.log(visibleExpenses);
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));
