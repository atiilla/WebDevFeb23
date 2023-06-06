// querySelector (accepts css selector {.container})
// use it for single html element

let result;

// result = document.querySelector('.btn-warning');
// result = document.querySelector('body > .container > .mb-3:nth-child(2) > input')
// result = document.querySelector('.container > :nth-child(6)')

// // querySelectorAll
// result = document.querySelectorAll('button') // nodeList

// result.forEach(button=>{
//     console.log(button)
//     button.textContent="asdasd"
// })

// // innerHTML
// document.querySelector('.output').innerHTML="<h1>hello world</h1>"
// // document.querySelector('.output').innerHTML="<script>eval(alert(1))</script>"

// // innerText
// document.querySelector('.output').innerText="<h1>hello world</h1>"

// document.querySelector('.output').textContent

const g = (t,c,classnames='default') => {
    const tag = document.createElement(t)
    tag.innerHTML = c
    // tag.setAttribute('class',tag.getAttribute('class')+" "+ classnames)
    tag.setAttribute('class',classnames)
    return tag
}


result = null

// createElement
// result = document.createElement('h1').innerText = "hello world".toUpperCase()

// const h1 = g('h1','hello world');
// result = h1
// // document.querySelector('.output').append(h1)
// // document.querySelector('.output').append(g('h2','this is cool'))
// // document.querySelector('.output').append('<h1>sada</h1>')


// //  <li class="list-group-item">Item</li>

// const todoList = document.querySelector('.list-group')
// const todoItem1 = g('li','Todo1','list-group-item')
// const todoItem2 = g('li','Todo2','list-group-item')
// // todoItem1.className="list-group-item a b c"
// result = todoItem1

// // appendChild
// // todoList.appendChild(todoItem1)
// todoList.append(todoItem1,todoItem2)

// // <h1>hello</h1>
// let convertDomStringToNodeElement = document.createRange().createContextualFragment("<h1>hello</h1>")
// todoList.appendChild(convertDomStringToNodeElement)
// todoItem1.classList.add('viktor')

// container 
const mainContainer = g('div','','container')
document.body.append(mainContainer)

const jumbotron = g('div','','bg-light p-4 text-center')
const welcomeMessage = g('h2','Hello World','display-5 text-dark')
const jumboBtn = g('button','Read More','btn btn-primary')
jumboBtn.setAttribute('drink','coffee') // insert new attribute 
jumbotron.append(welcomeMessage,jumboBtn)


// make grid layout
const rowEl = document.createElement('div')
rowEl.classList.add('row') // row className inserted in to element

const col1 = document.createElement('div')
col1.classList.add('col-md-3')

const imgEl = document.createElement('img');
imgEl.src="https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg"

imgEl.classList.add('img-fluid','my-2');

col1.append(imgEl)

rowEl.append(col1);

// set click event
// addEventListener
jumboBtn.addEventListener('click',()=>{
//    setTimeout(()=>{
//     imgEl.remove()
//    },2000)
})

// remove
// setTimeout(()=>imgEl.remove(),2000)

// removeChild
// setTimeout(()=>col1.removeChild(col1.firstChild),2000)

// console.log(col1.firstChild)

// while(document.body.firstChild){
//     document.body.removeChild(document.body.firstChild)
// }

mainContainer.append(jumbotron,rowEl)

// getAttribute
result = document.querySelector('button').getAttribute('drink')

console.log(result)