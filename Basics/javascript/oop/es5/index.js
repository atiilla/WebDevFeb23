// function App(fullname){
//     this.username = fullname
// }

// function App(fullname){
//     this.user=fullname;
//     this.display = function(){
//         console.log(this.user)
//     }
// }

// // let application = new App('Linus')
// let application = new App('linus')
// // application.display()
// console.log(application)

// function CoffeeShop(productType,stock) {
//     this.product = productType
//     this.stock = stock
// }

// let app = new CoffeeShop('Unknown:D',30)

// console.log(app)

function CoffeeMachine(type,sugarVolume,price){
    this.type = type;
    this.sugarVolume = sugarVolume
    this.price = price
    // this.display=function(){
    //     console.log(`
    //     Coffee Type: ${this.type}
    //     Sugar Volume: ${this.sugarVolume}
    //     Price: ${this.price}`)
    // }
}

let machine = new CoffeeMachine('Coffee Lungo',5,'1eur')
// machine.display()

CoffeeMachine.prototype.test = "blabla"

CoffeeMachine.prototype.display = function(){
        console.log(`
        Coffee Type: ${this.type}
        Sugar Volume: ${this.sugarVolume}
        Price: ${this.price}`)
        console.log(this.test)
}

machine.display()

