var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Jena Mead';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  //firstName = (x) => x.split(' ')[0];
  console.log(firstName);
}

let getFirstName = (x) => {
  return x.split(' ')[0];
};



//console.log(fullName.split(' ')[0]);
