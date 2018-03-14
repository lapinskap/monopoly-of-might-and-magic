class IndecisionApp extends React.Component {
    render(){
      return (
        <div>
          <Header />
          <Action />
          <Options />
          <AddOption />
        </div>
      )
    }
  }
  class Header extends React.Component {
    //with react components we must define 'render'
    render(){
      return(
        <div>
          <h1>Indecision</h1>
          <h2>Put your life in the hands of a computer</h2>
        </div>
      
      ) ;
    }
  }
  
  class Action extends React.Component {
    render() {
      return (
        <div>
          <button>What should I do?</button>
        </div>
      );
    }
  }
  
  class Options extends React.Component {
    render(){
      return (
        <div>
          <Option />
          <Option />
        </div>
      );
    }
  }
  
  class AddOption extends React.Component {
    render(){
      return(
        <div>
          <p>Add option here</p>
        </div>
      );
    }
  }
  
  class Option extends React.Component {
    render(){
      return(
        <div>
          Option is here
        </div>
      )
    }
  }
  
  //standard rendering method; variable jsx+where to put this stuff
  ReactDOM.render(<IndecisionApp />, document.getElementById('app')); 