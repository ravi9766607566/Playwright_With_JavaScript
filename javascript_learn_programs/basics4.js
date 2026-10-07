//block of code
//var - global level/function
//let global level/block level {} , reinitialized
//const - can not reinitialize

//var greet = "Evening"
// let greet = "Evening"
const greet = "Evening"
//greet = "night"  // reinitialized
if(1==1)
{
    //var greet = "Afternoon"
    let greet = "Afternoon"
}
function add(a,b)
{
    //var greet = "Morning"
    let greet = "Morning"
    return a+b;
}

let sum = add(2,3)
console.log(sum)
console.log(greet)

//do not have name =>Anyonymus function-- expressions

let sumOfIntegers = function(c,d)
{
    return c+d
}

let sumOfNumbers = (c,d)=> c+d
console.log(sumOfNumbers(5,6))


