import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import React from 'react';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route path="/edit" component={EditExpensePage}/>
            <Route component={NotFoundPage}/>

        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;