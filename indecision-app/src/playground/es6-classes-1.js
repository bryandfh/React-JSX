
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

const me = new Person('Bryan Ferreira', 23);
console.log(me.getDescription());

const me2 = new Person();
console.log(me2.getDescription());




