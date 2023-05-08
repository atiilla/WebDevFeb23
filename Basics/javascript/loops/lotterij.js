// 1-45
// 6 numbers -> should be unique between 1-45
// 10 column
// use regular for loop
// Math.random()

function Get6Numbers(){
    let LuckyNumbers = []
    
    for(let i=1;i<=6;i++){ // repeat this 6 times and save the numbers in luckynumbers array list
        let randomNumber = Math.floor(Math.random()*45)+1
        LuckyNumbers.push(randomNumber)
    }
    return LuckyNumbers
}

function Get6NumberForEachColumn(howMany){
    for(let i=0; i<howMany;i++){
        console.log('Get 6 unique numbers',Get6Numbers())
    }
}

Get6NumberForEachColumn(5)
