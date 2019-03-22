const appRoot = document.getElementById('app');

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