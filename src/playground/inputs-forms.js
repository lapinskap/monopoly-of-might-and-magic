console.log('Simple JS app is running!');
//using Arrays in JSX

//zmienna app ma kilka wartosci, w przypadku 'var' byloby to niemozliwe
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer,',
    subsubtitle:'and get your own list of anything!',
    options: []
  };

const onFormSubmit = (e) => {
  e.preventDefault();
//If this method is called, the default action of the event will not be triggered
console.log('form submitted!');
const option = e.target.elements.option.value;
//download value(name) from element 'option' in FormSubmit-it's target of an event

//if option exist; push: add new item to array; 
if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const appRoot = document.getElementById('app');

const onRemoveAll = () => {
  app.options = [];
  render();
  //equal to new empty array = options removed + rerender
};



//render template with arrow function
const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.subsubtitle && <p>{app.subsubtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
    
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();

//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.push("Kiwi");