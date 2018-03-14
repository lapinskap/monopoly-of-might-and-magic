console.log('Simple JS code is running correctly!');

let count = 0;

const addOne = () => {
    count++;
    console.log('addOne');
    renderCounterApp();
};

const minusOne = () => {
    count--;
    console.log('minusOne');
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const template = ( 
    <div>
    <form>
        <h1>Count: {count}</h1>
        <button onClick={minusOne}>-1</button>
        <button onClick={addOne}>+1</button>
        <button onClick={reset}>reset</button>  
    </form>
    </div>
    );
ReactDOM.render(template, appRoot);
};


renderCounterApp();