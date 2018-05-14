import { createStore, combineReducers } from 'redux';

const demoState = {
    expenses: [{
        id: 'some id',
        description: 'May Rent',
        note: 'This was the final payment for that adress',
        amount: 350,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};