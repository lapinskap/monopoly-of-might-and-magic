const User = (props) =>  {
    return (
        <div>
            <p>Name: {props.name} </p>
            <p>Age: {props.age} </p>
        </div>
    );
};

ReactDOM.render(<User name="Żyraf" age={75} />, document.getElementById('app'));

//stateless functional component do not have access to 'this'