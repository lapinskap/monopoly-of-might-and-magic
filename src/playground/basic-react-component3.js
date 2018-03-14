class IndecisionApp extends React.Component {
    render(){
      const title = "Indecision";
      const subtitle = "Put your life in the hands of a computer";
      const options = ['Thing one','Thing two','Thing four'];
      return (
        <div>
          <Header title={title} subtitle={subtitle} />
          <Action />
          <Options options={options} />
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
          <h1>{this.props.title}</h1>
          <h2>{this.props.subtitle}</h2>
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
          { //no need to use {} here vv, 'key' is special value, we cant use it above in Option class, so we need optionText
            this.props.options.map((option) => <Option key={option} optionText={option}/>)
          }
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
          Option: {this.props.optionText}
        
        </div>
      )
    }
  }
  
  //standard rendering method; variable jsx+where to put this stuff
  ReactDOM.render(<IndecisionApp />, document.getElementById('app')); 