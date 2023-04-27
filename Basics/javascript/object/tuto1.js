// Example 1 
const Auto = {
    brand: "BMW",
    model: 2011,
    color: 'black',
    fuel: 'benzine'
}

const { brand: a, model: b } = Auto;

// console.log(Auto)

// Get property of an object
// console.log(Auto.brand)
// console.log(Auto['brand'])
// // console.log(brand,model)
// console.log(a,b)
// console.log(Object.entries(Auto)[0][0])


// Update properties
Auto.brand = 'Toyota' // brand updated
Auto['brand'] = 'Honda' // brand updated

// Create new property in the object
Auto['print'] = 'Hello world'
Auto.helloWorld = 'Heyyyy!!!!'

/*
{
    fullname:''
    email:''
}

create first skill after click
{
    fullname:'',
    email:'',
    skills:[]
}
*/

Object.freeze(Auto); // protect object - > read-only
// console.log(Object.isFrozen(Auto))

const _Auto = Object.create(Auto)

_Auto.display = function () {
    console.log('hello world')
}
// console.log(_Auto)
// _Auto.display()
// console.log(Auto)


// example 2

const Student = {
    fullname: 'Joe Dalton',
    email: 'joe@joe.com',
    address: 'Stalingrad',
    country: 'Belgium',
    age: 100,
    isStudent: true,
    display: function () {
        // console.log('hello world')
        console.log(this.fullname)
    },
    GetCoffee() {
        console.log('coffeee....')
    },
    TestArrow: (x) => {
        console.log(x)
    }
}


// console.log(Student)
// Student.display()
// Student.GetCoffee()

// Student.TestArrow(Student)


const obj = {}
function AddProp(key, value) {
    //    obj[key] = value // update
    let result = key!=='' && value!=='' ?
    obj[key] = value
    :
    'Key or value can not leave empty'
    return result
}

AddProp('username', 'root');
let result = AddProp('password', 'admin123');
console.log(result)
// console.log(obj)