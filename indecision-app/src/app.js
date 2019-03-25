class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.state = {
      visibility : false,
      options: ['Thing One', 'Thing Two', 'Thing Four']
    }
  }
  
  handleDeleteOptions (){
    this.setState (() => {
      return {
        options : []
      }
    });
  }
  render() {
    const tittle = 'Indecision';
    const subtittle = 'Put you life in the hands of a computer';
    return (
      <div>
        <Header tittle= {tittle} subtittle = {subtittle}/>
        <Action hasOption = {this.state.options.length > 0}/>
        <Options 
          options = {this.state.options}
          handleDeleteOptions = {this.handleDeleteOptions}
        />
        <AddOptions />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {    
    return (
      <div>
        <h1>{this.props.tittle}</h1>
        <h2>{this.props.subtittle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  constructor(props){
    super(props);
    this.handlePick = this.handlePick.bind(this);
  }
  handlePick(){
    alert("sup")
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handlePick}
          disabled = {!this.props.hasOption}
        >What should I do? </button>
      </div>
    );
  }
}

class Options extends React.Component {  
  render() {
    return (
      <div>
        <button onClick = {this.props.handleDeleteOptions}>Remove</button>
        {
          this.props.options.map ((options) => <Option key={options} optionsText={options}/>)
        }
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionsText}
      </div>
    );
  }
}

class AddOptions extends React.Component {
  onFormSubmit(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    if (option){
      alert(option);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.onFormSubmit}>
          <input type="text" name="option"/>
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))