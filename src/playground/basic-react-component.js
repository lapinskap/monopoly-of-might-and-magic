//'window' = global ReactDOM
//Uppercase letter is needed to create react component
class Header extends React.Component {
    //react components must define 'render'!!!
    render(){
      return <p>This is from header</p>;
    }
  }
  
  const jsx = (
    <div>
      <h1>Title</h1>
      <Header /> 
      <Header /> 
      <Header /> 
    </div>
  );
  
  //standard rendering method; variable jsx+where to put this stuff
  ReactDOM.render(jsx, document.getElementById('app')); 