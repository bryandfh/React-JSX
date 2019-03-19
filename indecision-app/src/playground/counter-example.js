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
