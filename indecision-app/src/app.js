console.log('App.js is running')

var template = (
    <div>
        <h1>Bryan Ferreira</h1>
        <p>Age: 23</p>
        <p>Location: Santander</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot)