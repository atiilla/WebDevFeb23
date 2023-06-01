// Bulgur King

async function OrderFood(food, drink, ...extra) {
    let obj = {
        food,
        drink,
        extra
    }
    return obj
}

function displayOrder(data) {
    console.log(data)
    return data
}

function totalPrice(data) {
    console.log("Total price is: 12eur")
    return data
}



// function getTotalPrice(data){

// }

OrderFood('CheseBurger', 'Water', 'FriesOnion', 'ChickenNugget')
    .then(displayOrder)
    .then(totalPrice)

// async function StartPoint(name){
//     return name
// }

// StartPoint('Penguin')
// .then(getName=>getName)
// .then(data=>console.log(data))
// .then(newData=>console.log(newData))

// Promise.resolve(1).then(number=>number).then(number=>number).then(number=>console.log(number))

let users = []
function getUsers(obj) {

    console.log('Wait 3 seconds ... User will be displayed ');

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve(obj);

        }, 3000);

    });

}




function createUser(user) {
    console.log(`Waiting 5 sec ... adding new user: ${user}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('User added!!!!');
            users.push(user);
        }, 5000);
    });
}

getUsers(users)
    .then(obj => {
        console.log(obj);
        return createUser('Livina');
    })
    .then(resolve => {
        console.log(resolve);
        return getUsers(users);
    })
    .then(obj => {
        console.log(obj);
        return createUser('Khalid');
    })
    .then(resolve => {
        console.log(resolve);
        return getUsers(users);
    })
    .then(obj => console.log(obj));

