// function createElement(tagName, attributes, children) {
//     const element = document.createElement(tagName);
//     for (let key in attributes) {
//         element.setAttribute(key, attributes[key])
//     }
//     for (let child of children) {
//         element.append(child)
//     }
//     return element;
// }


// let table = createElement('table', {
//     class: 'table table-primary'
// }, [
//     createElement('thead', {}, [
//         createElement('tr', {}, [
//             createElement('th', {
//                 scope: 'col'
//             }, ['username']),
//             createElement('th', {
//                 scope: 'col'
//             }, ['password']),
//             createElement('th', {
//                 scope: 'col'
//             }, ['email'])
//         ])
//     ]),
//     createElement('tbody', {}, [
//         createElement('tr', {}, [
//             createElement('td', {
//                 scope: 'row'
//             }, ['root']),
//             createElement('td', {}, ['pass123']),
//             createElement('td', {}, ['root@root.com'])
//         ])
//     ])
// ])

// document.body.append(table)


function createElement(tag,attrs,content,target){
    const element = document.createElement(tag);
    for(let key in attrs){
        element.setAttribute(key,attrs[key])
    }
    
    // check if content is defined and text node
    if(content && typeof content === 'string'){
        element.innerText = content;
    }

    // check if target is defined and append to target
    if(target){
        target.append(element)
    }

    return element;

}

let rowGrid = createElement('div',{
    class:'row'
},null,document.body)

let colGrid = createElement('div',{
    class:'col-12'
},null,rowGrid)

let h1 = createElement('h1',null,'Hello World',colGrid)
