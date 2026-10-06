var marks = Array(6)
var marks = new Array(20,40,35,12,37,100)

var marks = [20,40,35,12,37,100]
subMarks =marks.slice(2,5) // [ 35, 12, 37 ] // slice(startIndex, endIndex) // endIndex is not included
console.log(subMarks)

console.log(marks[2]) //35
marks[3] = 14

console.log(marks) // [ 20, 40, 35, 14, 37, 100 ]
console.log(marks.length) //6

marks.push(65) // Add 65 at the end of array
console.log(marks) // [ 20, 40, 35, 14, 37, 100, 65 ]

marks.pop() // Remove the last element from the array // [ 20, 40, 35, 14, 37, 100, 65 ]
console.log(marks)

marks.unshift(12) // Add 12 at the beginning of the array // [ 12, 20, 40, 35, 14, 37, 100 ] 
console.log(marks)

console.log(marks.indexOf(100)) //6

//120 is present in the array or not
console.log(marks.includes(120)) // false

for(let i=0; i<marks.length; i++)
{
    console.log(marks[i])
}

console.log("*************************************")

var sum =0
for(let i=0; i<marks.length; i++)
{
    //console.log(marks[i])
    sum = sum + marks[i]
}
console.log("Sum:", sum)

//reduce filter map
let total =marks.reduce((sum,mark)=>sum+mark,0)
console.log(total)

var scores = [12,13,14,16]
//create new array with even numbers of scores and multiply each value with 3 array [12,14,16]
// with 3 and sum them array [12.14,16]
//Method1
var evenScrores =[]
for(let i=0; i<scores.length; i++)
{

    if(scores[i]%2 == 0)
    {
        evenScrores.push(scores[i])
    }
}
console.log(evenScrores)

//Method2
let newFilterEvenScscores=scores.filter(score=>score%2==0)
console.log(newFilterEvenScscores) //[12,14,16]=>[36,52,48]

//map
let mappedArray=newFilterEvenScscores.map(score=>score*3)
console.log(mappedArray)
let totalval=mappedArray.reduce((sum,val)=>sum+val,0)
console.log(totalval)

var scores1 = [12,13,14,16]
let sumValue=scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log(sumValue)

let fruits=["banana", "mango", "apple", "orange"]
//fruits.sort() //sorts the array in ascending order
console.log(fruits.sort()) // [ 'apple', 'banana', 'orange', 'mango' ]
console.log(fruits.reverse()) //reverses the array


var scores1 = [12,3,19,16,14]
// console.log(scores1.sort())
// scores1.sort(function(a,b){
//     return a-b
// })
console.log(scores1.sort((a,b)=>a-b)) //ascending order

