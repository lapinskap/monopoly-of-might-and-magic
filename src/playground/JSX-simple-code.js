console.log('Simple JS app is running!');
//sample of code with very simple conditional rendering, without arrow functions and events/attributes
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Something you may do</li>
      <li>Something you wouldn't do either</li>
    </ol>
  </div>
);

const user = {
  name: 'Someone',
  age: 25,
  location: 'San Escobar'
};
function getLocation(location) {
  //if location even exists
  if (location) {
    return <p>Location: {location}</p>;
  }
}
const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
