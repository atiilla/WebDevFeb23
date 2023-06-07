// find elements 
const output = document.querySelector('.count');
// const [increase,decrease] = document.querySelectorAll('button');
const increaseBtn = document.querySelector('.increase')
const decreaseBtn = document.querySelector('.decrease')

let count = 1;
// event listener
increaseBtn.addEventListener('click', function () {
    console.log('hello world')
    console.log(typeof Number(output.innerText))
    if (count >= 10) {
        return
    }
    count++
    output.innerText = count

})

decreaseBtn.addEventListener('click', function () {
    if (count < 1) {
        return
    }
    count--
    output.innerText = count
})

document.addEventListener('DOMContentLoaded', () => {
    console.log('page is loaded')
    output.innerText = count
})