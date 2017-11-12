console.log('App.js is running!');
//JSX - JavaScript XML 
var appRoot = document.getElementById('app');
//var template =
	//<div> <h1>Indecision App</h1> <p> this is my paragraph </p> </div>;
//zmienna(var) ktora posiada kilka wartosci, jak wywolamy sam 'user' to wywali blad, bo przegladarka nie wie ktora wartosc wyswiwetlic
var app = {
	title: 'Indecision App',
	subtitle:'Put your life in the hands of a computer'
	
};


var template =
	(
		<div>
			<h2>{app.title}</h2>
			<p>{app.subtitle && <p>app.subtitle</p>}</p>
			<p>{app.options.length > 0 ? 'Here are your options' : 'there is no options'}</p>
		</div>
	);


var user = {
name: 'Paulina',
age: 26,
location:'Gorzow Wielkopolski'
};

function getLocation(location) {
	//if location exists
	if(location){
		return <p>Location: {location}</p>;
	} else {
		return 'Unknown';
	}
	
}
var templateTwo = 
(
	<div>
		<h1>{user.name ? user.name : 'Anonymous'}</h1>
		{(user.age && user.age >= 18) && <p>Age:{user.age}</p>}
		{getLocation(user.location)}
	</div>
);



ReactDOM.render(template,appRoot);
//co renderujemy (templateTwo), jak powtorzymy te komende to wykona sie ostatnia
