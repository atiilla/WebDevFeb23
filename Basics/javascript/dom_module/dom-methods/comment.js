/*
<div class="row">
            <div class="col-md-3">
                <h1 class="lead">NAME</h1>
            </div>
            <div class="col-md-9">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore voluptatem nihil, delectus tenetur nemo qui assumenda perspiciatis quae impedit odio beatae eius cupiditate deserunt aliquam repudiandae quis officia animi!</p>
            </div>
        </div>
*/

const [name, comment] = document.querySelectorAll('.form-control')
const addCommentBtn = document.querySelector('button')

// console.log(name,comment)
function GenerateComment(author, commentContent) {
    // row
    const row = document.createElement('div');
    row.classList.add('row');

    const colLeft = document.createElement('div')
    colLeft.classList.add('col-md-3')

    const h1 = document.createElement('h1')
    h1.classList.add('lead')
    h1.innerText=author

    colLeft.append(h1)

    const colRight = document.createElement('div')
    colRight.classList.add('col-md-9')
    
    const p = document.createElement('p')
    p.innerText=commentContent

    colRight.append(p)

    row.append(colLeft,colRight)

    document.querySelector('.comments').append(row)
}

addCommentBtn.addEventListener('click', () => {
    // console.log(name.value, comment.value)
    // console.log(GenerateComment(name.value,comment.value))
    GenerateComment(name.value,comment.value)
    name.value=""
    comment.value=""
})
