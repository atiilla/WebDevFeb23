let result;

// methods for finding elements
// result = document.querySelector('a')
// properties of the a tagname (hyperlink)

// result = document.querySelector('a').href
// result = document.querySelector('a')
// result.href = "http://google.com"
// result.href = "bel.be"
// result.setAttribute('href','python.py')

// result = document.querySelector('input')
// result.placeholder="hello world"
// result.name = "todo_title"

// result = document.querySelector('input[name="filter"]');
// result = document.querySelector('input[class="form-control"]')
// // document.querySelector('tagName[attributeName="attributeValue"]')


// // hasAttribute
// result = document.querySelector('input[name="filter"]').hasAttribute('data')

// let newTodoItem = `<li class="list-group-item d-flex justify-content-between">
// Learn Node.js o_O
// <a href="#" class="delete-item">
//     <i class="fa fa-remove"></i>
// </a>
// </li>`

// let parser = new DOMParser();

function MakeTodoItem(todoTitle){
    let li = document.createElement('li');
    li.className="list-group-item d-flex justify-content-between"
    li.innerText=todoTitle

    let a = document.createElement('a')
    a.classList.add('delete-item')
    a.setAttribute('href','#')

    let i = document.createElement('i')
    i.classList.add('fa','fa-remove');

    a.append(i)
    li.append(a)
    return li
}

// 
// replace
// get first child of list-group


// const oldtodoItem = document.querySelector('.list-group').firstElementChild
// result = oldtodoItem

// // version1 with createElement
// // let newTodoItem = MakeTodoItem('Learning node.js')

// // version2 with createRange
// // newTodoItem = document.createRange().createContextualFragment(newTodoItem)

// // version3 with domParser
// newTodoItem = parser.parseFromString(newTodoItem,'text/html').body.firstChild

// // console.log(newTodoItem.body.firstChild)
// // convert from domString to nodeElement
// oldtodoItem.replaceWith(newTodoItem)

result = document.querySelector('.list-group')

// // childNodes > nodeList > iterable
// result = document.querySelector('.list-group').childNodes

// // result.forEach(li=>{
// //     console.log(li)
// // })
// result = document.querySelector('.list-group').childNodes[5]

// // children > HTMLCollection
// result = document.querySelector('.list-group')
// // console.log(result.children[2])

// Array.from(result.children).forEach(li=>{
//     console.log(li)
// })

// nextSibling
// console.log(result.children[0].nextElementSibling.children[0].children[0].children)

// console.log(result.childNodes[1].childNodes[1])

// console.log(document.createRange().createContextualFragment(result.childNodes[1].childNodes[1].textContent))

// console.log(result.lastElementChild)
// console.log(result.firstElementChild)
// middle child :D
// console.log(result.children[Math.round(result.children.length/2)])

// parentElement
// console.log(result.parentElement.parentElement.parentElement.parentElement.parentElement)

// console.log(result.children[result.children.length-1])

// result = document.querySelector('form')

// console.log(result.elements[0])

let todos = document.querySelectorAll('.list-group-item:nth-child(odd)')
// console.log(todos)

// todos.forEach(todo=>{
//     console.log(todo)
//     todo.style.backgroundColor='black'
//     todo.style.color='whitesmoke'
// })

let p = document.createElement('p')
let p_text = document.createTextNode('Hello world')
// console.log(p,p_text)
p.append(p_text)
// console.log(p)

let newTodoItem = MakeTodoItem('LEarn React')
// console.log(newTodoItem)

// insertBefore method
let target = document.querySelector('.list-group')
// console.log(target)
// target.insertBefore(newTodoItem,target.firstElementChild)


// console.log(target.children[2])

// target.children[2].insertAdjacentHTML('afterend',`<li class="list-group-item d-flex justify-content-between">
// Learn Node.js o_O
// <a href="#" class="delete-item">
//     <i class="fa fa-remove"></i>
// </a>
// </li>`)

// target.children[0].insertAdjacentHTML('beforebegin',target.children[2].outerHTML)
// console.log(target.children[2].outerHTML)

// target.insertBefore(target.children[2],target.children[0])


// console.log(target.children[2])

// result.classList.add('a','b','c','d')
// // result.classList.remove('a','b','c','d')
// console.log(result.classList.contains('list-group'))
// console.log(result.classList.toggle('on'))
// console.log(result.classList.toggle('on'))
// console.log(result.classList.toggle('on'))
// // let x = result.classList.entries()
// // for(let val of x){
// //     console.log(val)
// // }

// // result.classList.forEach(x=>console.log(x))

// console.log(result.classList.item(0))
// // result.classList.length
// console.log(result.classList,"before")
// result.classList.replace('a',"lol")
// console.log(result.classList,"after")

// for(let x of result.classList.values()){
//     console.log(x)
// }

// removeChild()
target.removeChild(target.children[1])

console.log(target)

