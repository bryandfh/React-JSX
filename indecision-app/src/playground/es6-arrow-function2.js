const user = {
    name : 'Bryan',
    cities : ['Caracas','Los Angeles', 'Santander'],
    printPlacesLived() { //Other way to functions      
        return this.cities.map((city) =>  this.name + " lived in " + city);
        //return cityMessage;
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers : [2,3,4,5],
    multiplyBy : 10,
    multiply () {
        return this.numbers.map((n) => this.multiplyBy * n);
    }
}
console.log(multiplier.multiply());