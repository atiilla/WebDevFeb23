// click
const listofTodos = document.querySelectorAll('.list-group');

// Del.forEach(icon=>{
//     // click event
//     icon.addEventListener('click',(e)=>{
//         alert('hello world')
//     })
// })

listofTodos[0].addEventListener('click', (event) => {
    event.preventDefault()
    //  console.log(event.target.classList.contains('fa-remove'))
    if (event.target.classList.contains('fa-remove')) {
        console.log(event.target)
        //console.log(event.target.closest('.list-group-item'))
        console.log(event.target.parentElement.parentElement);
        event.target.parentElement.parentElement.remove()
    }
})

// mouse over
// document.querySelector('.btn-danger').addEventListener('mouseover',(e)=>{
//     e.target.style.backgroundColor='black'
// })

// document.querySelector('.btn-danger').addEventListener('mouseout',(e)=>{
//     e.target.style.backgroundColor=""
// })

// document.querySelector('input[name="todo"]').addEventListener('change',(e)=>{
//     console.log('hellooooo')
// })

// document.addEventListener('contextmenu',(e)=>{
//   //  e.preventDefault()
// })

// document.body.addEventListener('selectstart',(e)=>{
//     console.log('hello selected',e)
//     console.log(window.getSelection())
//    // e.preventDefault()
//     return false;
// })

// document.body.addEventListener('copy',(e)=>{
//     console.log('copied',e)
// })

/*
mousedown	The mouse button is pressed over an element	MouseEvent
mouseenter	The pointer is moved onto an element	MouseEvent
mouseleave	The pointer is moved out of an element	MouseEvent
mousemove	The pointer is moved over an element	MouseEvent
mouseover	The pointer is moved onto an element	MouseEvent
mouseout	The pointer is moved out of an element	MouseEvent
mouseup	A user releases a mouse button over an element	MouseEvent
*/
// mouse event

// document.querySelector('.btn-danger').addEventListener('mousedown',(e)=>{
//     e.preventDefault()
//     console.log('mouse down')
// })


// document.querySelector('.btn-danger').addEventListener('mouseenter',(e)=>{
//     e.preventDefault()
//     e.target.style.backgroundColor='black'
//     console.log('mouseenter')
// })


// document.querySelector('.btn-danger').addEventListener('mouseup', (e) => {
//     console.log('mouse up')
// })

// document.querySelector('.btn-danger').addEventListener('mouseout', (e) => {
//     console.log('mouse out')
// })

// document.querySelector('.btn-danger').addEventListener('mousemove', (e) => {
//     console.log('mouse movee')
// })

// scroll event
document.addEventListener('scroll',(e)=>{
    console.log('lolllllllscrollll')
    // do something here
})

window.addEventListener('resize',()=>{
    console.log('browser size changed')
})

// keyboard
// document.addEventListener('keydown',(e)=>{
//     console.log(e.code)
// })

// document.addEventListener('keyup',(e)=>{
//     console.log(e.key)
// })

document.addEventListener('keypress',(e)=>{
    console.log(e.key)
})


// document.querySelector('.btn-danger').addEventListener('dblclick', (e) => {
//     console.log('double click')
// })

let clickCount=0;
document.querySelector('.btn-danger').addEventListener('click',(e)=>{
    e.preventDefault()
    clickCount++
    if(clickCount>=2){
        console.log('clicked')
        clickCount=0
    }
})

Array.from(document.body.firstElementChild.children).forEach(el=>{
    el.addEventListener('error',(e)=>{
        console.log(e.target)
        e.target.src="https://picsum.photos/200"
    })
})