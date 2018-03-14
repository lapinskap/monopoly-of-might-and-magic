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
    handlePick(){
      alert('handlePick');
    }
    
    render() {
      return (
        <div>
          <button onClick={this.handlePick}>What should I do?</button>
        </div>
      );
    }
  }
  
  class Options extends React.Component {
    handleRemoveAll() {
      alert('hallohalo');
    }
    
    render(){
      return (
        <div>
          <button onClick={this.handleRemoveAll}>Remove all</button>
          { //no need to use {} here vv
            this.props.options.map((option) => <p key={option}>{option}</p>)
          }
          <Option />
        </div>
      );
    }
  }
  
  class AddOption extends React.Component {
    handleAddOption(e){
      e.preventDefault();
  
      const option = e.target.elements.option.value.trim();
      //option is input, we need its value, trim deletes empty spaces
  
      if(option){
        alert(option);
      }
    }
    render(){
      return(
        <div>
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option"/>
          </form>
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