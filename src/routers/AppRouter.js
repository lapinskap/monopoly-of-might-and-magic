import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import React from 'react';

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
    <div>404
    <br/> <Link to="/">go home u r drunk</Link> 
    </div>
);

const Header = () => (
<header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard Page </NavLink>
    <NavLink to="/create" activeClassName="is-active"> Create Expense</NavLink>
    <NavLink to="/help"  activeClassName="is-active">Help Page</NavLink>
</header>
);

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