class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleVisibility() {
        this.setState((prevState)=> {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Something Visible</h1>
                <button onClick = {this.handleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                { //if visibility=true show JSX 
                    this.state.visibility && (
                        <div>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. 
                            </p>
                        </div>
                    )}
            </div>
        );
    };
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app')); 








// console.log('Simple JS app is running!');

// let visibility = false;

// const isVisibility = () => {
//     visibility = !visibility;
//     //current visibility value, "!" zmienia wartosc na przeciwna
//     render();
// };

// const render = () => {

//     const JSXtemplate = (
//     <div>
//         <h1>Something Visible</h1>
//         <button onClick = {isVisibility}>
//             {visibility ? 'Hide details' : 'Show details'}
//         </button>
//         { //if visibility=true, then show me JSX expression
//             visibility && (
//                 <div>
//                     <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. 
//                     </p>
//                 </div>
//             )
//         }

//     </div>

// );

//     ReactDOM.render(JSXtemplate, document.getElementById('app'));
// };

// render();