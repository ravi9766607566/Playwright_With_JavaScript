//object is collection of properties
let person = {
    firstName: 'Tim',
    LastName: 'Joe',
        age : 24,
    fullName : function()
    {
        //return this.firstName+ this.LastName;
        console.log(this.firstName+ this.LastName)
    }

}
console.log(person.fullName())
console.log(person.LastName)
console.log(person['LastName'])
person.firstName= 'Tim Dane'
console.log(person.firstName)
person.gender = 'male'
console.log(person)
delete person.gender
console.log(person)
console.log('gender' in person) // false because gender properties deleted on above//check if gender is present in person object

//print all the values of the javascript object using for in loop
for (let key in person)
{
    console.log(person[key])
}
