class IndecisionApp extends React.Component {
  render() {
    const tittle = 'Indecision';
    const subtittle = 'Put you life in the hands of a computer';
    const options = ['One', 'Two', 'Four'];
    return (
      <div>
        <Header tittle= {tittle} subtittle = {subtittle}/>
        <Action />
        <Options options = {options}/>
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
  render() {
    return (
      <div>
        <button>What should I do? </button>
      </div>
    );
  }
}

class Options extends React.Component {
  handleRemoveAll(){
    alert("sup")
  };
  
  render() {
    return (
      <div>
        <button onClick = {this.handleRemoveAll}>Remove</button>
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
  render() {
    return (
      <div>
        <p>Option Component Here </p>
        <p>Even more</p>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))