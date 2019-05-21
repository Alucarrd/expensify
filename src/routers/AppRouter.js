
import React from 'react';

import {BrowserRouter, Route, Switch } from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
//create 6 new files for each component
//setup imports
//import into app router




//link to home HelpPage
//link to create
//link to edit
//link to help

const AppRouter = () => (
  <BrowserRouter>
  <div>
    <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage} exact={true}/>
        <Route path="/edit/:id" component={EditExpensePage} exact={true}/>
        <Route path="/help" component={HelpPage} exact={true}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
