import { createStore } from 'redux';
//Actions in redux

console.log('101');

const store = createStore((state = { count: 0 }, action) => {
   if(action.type === 'INCREMENT') {
    return {
        count: state.count + 1
    }
   } else {
      return state; 
   }
   
    console.log('running');
    return state;
});

store.dispatch({
    type: 'INCREMENT'
});

console.log(store.getState());


