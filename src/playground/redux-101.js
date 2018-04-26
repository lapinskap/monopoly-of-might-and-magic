import { createStore } from 'redux';
//Actions in redux

console.log('101');

const store = createStore((state = { count: 0 }, action) => {
   switch (action.type) {
       case 'INCREMENT':
       return {
        count: state.count + 1
    };
        case 'DECREMENT':
        return {
            count: state.count - 1
        };

        case 'RESET': 
        return {
            count: 0
        };
    default:
        return state;
   }
});

console.log(store.getState());

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT'
});


console.log(store.getState());


