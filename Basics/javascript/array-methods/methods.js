let users = []
let result;

// push() > insert new item
users.push('Hello world')
users.push(true)
users.push(1,2,3,4,5)
users.push(function(){})

// pop() > remove last item
users.pop()
users.pop()

// shift() remove first item
users.shift()

// unshift() insert item as first in arr
users.unshift('this is first item')

// fill 
// users.fill('blabla',0,users.length)
// users.fill(false)

users.push([6,[77,8,[88,99]]])
// flat()
const obj = {
    a:{
        b:{
            c:{id:1}
        }
    }
}
// console.log(Object.entries(obj).flat(2))
// isArray
// result = Array.isArray(users)

// reverse()
result = users.reverse() // 

const numbers=[9,5,2,3,1,99,11,22]
const employees=[
    {
        id:55
    },
    {
        id:33
    },
    {
        id:23
    },
    {
        id:1
    }
]
const letters=['z','x','y','a','b','B','G','J','L']

// sort()
// result = numbers.sort(function(a,b){
//     return b-a
// })

result = employees.sort(function(a,b){
    return a.id - b.id
})

// result = letters.sort()

//result = users.flat(3);

// slice method
result = employees.slice(0,2) // doesnt change original one

// splice method
// employees.splice(1,2);
// employees.splice(-1)
// employees.push({id:99})
// employees.push({id:100})
// employees.push({id:55})
// employees.push({id:69})
// employees.splice((employees.length/2).toFixed(),1)
// console.log((employees.length/2).toFixed())

// indexOf

result = letters.indexOf('a') // 3 > true 
result = letters.indexOf('X') // -1 > False

result = employees.indexOf({id:1})

// const pos = employees.findIndex(i => i.id === 33); // 
// result = pos - 1

// result = letters.indexOf('z',1)

// find Method
result = employees.find(function(obj){
    return obj.id === 100
}) // find returns an object

// result = employees.filter(function(obj){
//     return obj.id >=33
// }) // filter returns an array

console.log(result)