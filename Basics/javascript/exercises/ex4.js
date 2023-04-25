console.log('hello')

// function PrintUsername(username){
//     let userEl = document.getElementById('user')
//     userEl.innerText=username
// }

// function handleClick(event){
//     console.log('clicked!!!')
//     PrintUsername('linus')
// }
var totalOutput = document.getElementById('output') // target h1 element 
var Number1Input = document.getElementById('number1')
var Number2Input = document.getElementById('number2')

// let sumResult = GetSumOfNumbers(Number1Input.value, Number2Input.value)

function GetSumOfNumbers(x, y) {
    return Number(x) + Number(y)
}

function PrinterService(total) {
    return totalOutput.innerText = `Total is -> ${total}`
}


function handleClick(event) {
    console.log('click')
    // console.log(GetSumOfNumbers(12,23)) // 35 correct
    let sumResult = GetSumOfNumbers(Number1Input.value, Number2Input.value)
    //    console.log(Number1Input.value,Number2Input)
    
   // console.log(sumResult)
    PrinterService(sumResult)
}


// function Total(){
//     return 5+5
// }