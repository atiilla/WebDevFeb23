// new tuto
// calculator

class Calculator{

    // constructor(){
    //     this.data="50"
    // }
    //data="50"
    constructor(n1,n2,...more){
        this.n1 = n1;
        this.n2 = n2;
        this.more = more
    }

    // more = []

    static multiply(n1,n2){
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static

        return n1*n2
    }

    add(n1,n2){
        return n1+n2
    }

    subtract(n1,n2){
        return n1-n2
    }

    getConstructorVariables(){
        return this.data
    }

    doMath(task){
        // eval not recommended (enormous security risk.)
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
        return eval(task)
    }
}

let app = new Calculator('linux','windows','osx')

let result = app.add(1,1)
result = app.subtract(2,1)
result = app.doMath("4*2")
result = app.doMath("3**3")
// result = app.multiply(3,4)
result = Calculator.multiply(3,4);
result = new Calculator()
result = app.getConstructorVariables()
result = app.data
result = app


console.log(result)