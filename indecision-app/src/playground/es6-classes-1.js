
class Person {
    constructor(name, age=0){
        this.name = name;
        this.age = age;
    }
    getGretting(){
        return `Hi. Im ${this.name}`
    }

    getDescription(){
        return `${this.name} is ${this.age} old`
    }
}

class Students extends Person {
    constructor(name, age, major){
        super(name,age);
        this.major=major;
    }

    hasMajor(){
        return this.major ? 'Yes':'No'
    }

    getDescription() {
        let description = super.getDescription();
        return `${description} studying ${this.major}`
    }
}

class Traveler extends Person{
    constructor(name,age,homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGretting(){
        let greeting = super.getGretting(); 
        if(this.homeLocation){
            return greeting += `Im visiting from ${this.homeLocation}`;
        }
        return greeting;
        
    }
}
const me = new Students('Bryan Ferreira', 23, 'CS');
console.log(me.getDescription());

const me2 = new Traveler();
console.log(me2.getDescription());

const c = new Traveler("Bryan" ,23, "Caracas")
console.log(c.getGretting());