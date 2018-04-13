import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const ExpenseDashboardPage = () => (
    <div>This is from my Dashboard component</div>
);


const AddExpensePage = () => (
    <div>This is from my AddExpense component</div>
);

const HelpPage = () => (
    <div>This is my Help Page component</div>
);

const EditExpensePage = () => (
    <div>This is my Edit Expense Page component</div>
);

const NotFoundPage = () => (
    <div>404 fuckoff</div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route path="/edit" component={EditExpensePage}/>
            <Route component={NotFoundPage}/>

        </Switch>
        
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));