//Inheritance is the Main pillar in Objecvt Oriented Prohramming.
//one class can inherit/acquire the properties, methods of another class
//the class which inherits the properties of other is known as subclass (derived class, child class)
// the class whose properties are inherited os knpown as superclass

const Person = require("./basics7")
class Pet extends Person
{

    get location()
    {
        return "BlueCross"
    }

    constructor(firstName,lastName)
    {
        //call perent class constructor
        super(firstName,lastName)
    }
}
let pet =new Pet ("sam","san")
pet.fullName()
console.log(pet.location)
