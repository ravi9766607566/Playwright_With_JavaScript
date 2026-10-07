let day = 'tuesday '
console.log(day.length) //length of string : 8
console.log(day[1]) //first character of string : u

let subDay = day.slice(0,4) //slice string from index 0 to 5 : tues
console.log(subDay)

//tue  day
let splitDay =day.split("s")
console.log(splitDay[1].length) //length of string after split by character s : 5
console.log(splitDay[1].trim().length) //length of string after split by character s and trimming whitespace : 4/split string by character s : [ 'tue', 'day ' ]


let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date) //parseInt converts string to integer
console.log(diff) //4
diff.toString() //convert integer to string

let newQuote=day+ "is Funday"
console.log(newQuote) //tuesday is Funday
let val=newQuote.indexOf("day",5) //index of substring in string starting from index 5 : 7
console.log(val)

//tuesday is funday
let count = 0
let value =newQuote.indexOf("day")
while(value!== -1)
{
    count++
    value = newQuote.indexOf("day",value+1)

}
console.log(count) //2
