const flag = true 

if (!flag)
{
console.log("Condition setisfied")
}
else
{
    console.log(flag)
console.log("Condition not setisfied")
}

console.log ("*************************************")

let i = 0
while(i>10)
{
i++
console.log(i)
}

do
{
i++
}while(i>10);
console.log(i)

console.log ("*************************************")

let required = true
while(required)
{
    console.log(required)
    required= false
}

console.log ("*************************************")

for(let k=0; k<=10; k++)
{
    console.log(k)
}

console.log ("*************************************")


// from 1 to 10 give me common multiple values of 2 and 5
for (let k=1; k<=10; k++)
{
    //if (k%2 == 0)
    //if (k%2 == 0 || k%5 == 0) // 2 or 5
    if (k%2 == 0 && k%5 == 0)// 2 and 5
    {
        console.log(k)
    }
}

console.log ("*************************************")

let n=0
for (let k=1; k<=100; k++)
{
    if (k%2 == 0 && k%5 == 0)
    {
        n++
        console.log(k)
        if(n==3)
            break
    }
}
