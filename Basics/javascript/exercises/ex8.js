// Write a function that returns the factorial of a number
/*
    5! = 5*4*3*2*1 > 120
    methods required:
        - Array.from()
        - Array.forEach()
*/
function factorial(num){
    let factResult = 1;
    Array.from({
        length: num
    }).forEach(_=>{
        factResult *= num;
        num--;
    })
    return factResult;
}

console.log(factorial(5))