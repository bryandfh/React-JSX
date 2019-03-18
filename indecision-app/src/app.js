console.log('App.js is running')

var myphone = {
    tittle : 'WA',
    subtittle : 'message' 
};

var template = (
    <div>
        <p >Tittle: {myphone.tittle}</p>
        <p>Subtittle: {myphone.subtittle}</p>
    </div>
);

var user = {
    name : 'Bryan',
    age : 23,
    location: ''
};

function getLocation(location){
    if (location){
        return location
    }
    else {
        return 'Unknown'
    }
}

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {getLocation(user.location)}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot)