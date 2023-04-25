// Speed Calculator


function FindSpeed(distance,time){
   // console.log(typeof distance, typeof(time))
    let speedResult = distance/time;
    console.log(NaN == NaN)
    return isNaN(speedResult)?
    'You need to give a real number!':
    `Speed Result is ${speedResult}`
}

let result = FindSpeed(300,5);
console.log(result)

/*
Area of a wall Height * Width

Get Area of a Block/brick 

find amount of bricks we need to build it


*/