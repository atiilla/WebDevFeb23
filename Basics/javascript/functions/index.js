// Functions

function getUsername(){
    console.log('hello world')
    return 'Hello' 
}

//getUsername()

// let result = getUsername();

// function getUsername(){
//     return "joe"
// }

// getUsername()

// function with parameter/s
// function getName(fullname){
//     return fullname
// }

// result = getName('Jack'); // function(paramValue)

var fullname = "Joe";

function GetName(fullname){
    fullname="Michael" // updated at 28 code line
    return fullname
}

result = GetName("Jack");

result = function(){ // Anonymous function
    console.log('hello world')
}

result = function(param1){
    return 'hello ' + param1
}

// console.log(result('Joe'))

// function getFullname(firstname,lastname){
//     return firstname + " " + lastname
// }

// function getFullname(firstname,lastname){
//     return `${firstname} ${lastname}`
// }



// console.log(getFullname('Joe',"Dalton"))

// console.log(result)


function Number1(){
    return 6
}

function Number2(){
    return 5
}

result = Number1() + Number2()

result = ()=>'hello world'
result = fullname=>fullname // arrow function with fullname<parameter>
result = (fullname)=>fullname // arrow function with fullname<parameter>
result = (firstname,lastname)=>`${firstname} ${lastname}`
result = (firstname,lastname)=>{
    return `${firstname} ${lastname}`
}


// netto salary calculator
// param1 <parameter> (brutosalary)
// param2 <parameter> (tax_percent)

// function nettoSalary(bruto,tax){
//     let getNetto = (bruto*tax)/100;
//     return `Netto salary is ${bruto - getNetto}`
// }

const nettoSalary = (bruto,tax)=> `Net salary is ${bruto-((bruto*tax)/100)}`

// result = nettoSalary(4000,25)

const student = {
    age:18
}

function IsAllowedDrinkAlcohol(obj){
    return obj.age >=18 ? 'Allowed to drink jupiler':'Not allowed!' // check if age is greater than or equal to 18
}

// result = IsAllowedDrinkAlcohol(student)

// result = getAnyData =>{
//     getAnyData()
//     return getAnyData
// }

// console.log(result('Linus','Torvalds'))
// console.log(result('this is string')) // 3000
// console.log(result(10))
// console.log(result({u:1}))
// console.log(result([1,2,3]))

function GetAnyTypeOfData(fullname,callback){
   
    return callback('Linux') + " " + fullname // has to be a function
}


// result = GetAnyTypeOfData('Michael',function(name){
//     return name
// })

// result = GetAnyTypeOfData('Michael',(name)=>{
//     return name
// })




console.log(result)
