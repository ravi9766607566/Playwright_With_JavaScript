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