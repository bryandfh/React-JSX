class VisibilityToggle extends React.Component {
  constructor(props){
    super(props);
    this.Toggle = this.Toggle.bind(this);
    this.state = {
      visibility : false,
      options: 'Hey some text'
    }
  }
  
  Toggle(){
    this.setState((pre) => {
      return {
        visibility : !pre.visibility
      };
    });
  }

  render(){
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick = {this.Toggle}>{this.state.visibility  ? "Hide" : "Show"}</button>
        {this.state.visibility && <p>{this.state.options}</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
/*const appRoot = document.getElementById('app');

let app = {
    title: 'Visibility Toggle!',
    options: 'Hey some text',
};

let flags = false;

let showButton = () => {
    flags ? flags = false : flags = true;
    render();
}

const render = () => {
    let template = (
      <div>
        <h1>{app.title}</h1>
        <button onClick = {showButton}> {flags ? "Hide" : "Show"} </button>
        {flags && <p>{app.options}</p>}        
      </div>
    );
    ReactDOM.render(template, appRoot);
};
  
render();
*/