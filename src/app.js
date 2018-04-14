import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
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
    <div>404
    <br/> <Link to="/">go home u r drunk</Link> 
    </div>
);

const Header = () => (
<header>
    <h1>Expensify</h1>
    <Link to="/">Dashboard Page </Link>
    <Link to="/create"> Create Expense</Link>
    <Link to="/help">Help Page</Link>
</header>
);

const routes = (
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

ReactDOM.render(routes, document.getElementById('app'));