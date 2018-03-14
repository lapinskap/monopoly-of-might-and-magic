const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer,',
    subsubtitle:'and get your own list of anything!',
    options: []
  };


const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const render = () => {
    const template = (
      <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.subsubtitle && <p>{app.subsubtitle}</p>}
        [<p key="1">a</p>,<p key="2">b</p>,<p key="3">c</p>]
        {/*tak zadziala, bo wiadomo jak sie odwolac do elementow tablicy, bez 'key' wywaliłoby błąd*/}
        <ol>
          { app.options.map((option) => <li key={option}>{option}</li>) }
          
          
        {
            numbers.map((number) => {
                return <p key={number}>Number: {number}</p>;
            })

        }

        </ol>
      </div>
    );
  
    ReactDOM.render(template, appRoot);
  };
  
  render();

  var liczby = [1, 4, 9];
var pierwiastki = liczby.map(Math.sqrt);
// pierwiastki to teraz [1, 2, 3]
// liczby to dalej [1, 4, 9]
  
var liczby = [1, 5, 10, 15];
var podwojenia = liczby.map(function(x) {
        return x * 2;
    });
            // podwojenia to teraz [2, 10, 20, 30]
            /*liczby to dalej [1, 5, 10, 15]*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

//numbers.map((number) => {
   // return <p key={number}>Number: {number}</p>;})
//map tworzy nową tablicę składającą się z paragrafów <p> a tworzy ich tyle ile jest liczb w tablicy numbers


//Math.floor - Zwraca największą liczbę całkowitą mniejszą od lub równą danej.
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random()*app.options.length);
  //pozwala na wylosowanie liczby zaleznej od ilosci opcji ktora stworzy uzytkownik
  const option = app.options[randomNum];
  //losuje opcje wedlug randomNum
  console.log(randomNum);
  alert(option);
};
