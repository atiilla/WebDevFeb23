// Auto tutorial in es6
// class

// es5
// function Auto(){

//     this.display(){
//         console.log('hello world')
//     }
// }

// es6
class Auto{
    constructor(color,size,...params){ // argumant list 
        this.color=color;
        this.size=size;
        this.params = params.join("\n")
    }
    // methods
    display(){
        console.log(`Color ${this.color} Size:${this.size}`)
        console.log(this.params)
    }
}


/*

class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}
*/
let app = new Auto('red',34,66,77,88,99,00)
app.display()
