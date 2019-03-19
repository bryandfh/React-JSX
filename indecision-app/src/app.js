console.log('App.js is running!');

let app = {
  title: 'Indecision App ?',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

let template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

let count = 0;
const addOne = () =>{
  count += 1;
  rendeCounterApp();
  console.log('addOne', count)
};

const minusOne = () =>{
  count -= 1;
  rendeCounterApp();
  console.log('minusOne')
};

const reset = () =>{
  count = 0;
  rendeCounterApp();
  console.log('reset')
};

const appRoot = document.getElementById('app');

const rendeCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {addOne}>+1</button>
      <button onClick = {minusOne}>-1</button>
      <button onClick = {reset}>Seteup reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
  
};

rendeCounterApp();

