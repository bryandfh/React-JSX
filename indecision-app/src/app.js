console.log('App.js is running!');

let app = {
  title: 'Indecision',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    console.log(app.options)
    render();

  }
};

const onRemoveAll = (e) => {
  app.options = [];
  render();
};

const appRoot = document.getElementById('app');

const number = [55, 101, 1000];

console.log(app.options)

const render = () => {
  let template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button onClick = {onRemoveAll}>Reset </button>
      {
        number.map ((number) => {
          return <p key = {number}>Number : {number * 2}</p>
        })
      }
      
      <ol>
        {
          app.options.map ((options) => {
            return <li key = {options}>Option: {options}</li>
          })
        }
      </ol>

      <form onSubmit = {onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
0
};



render();