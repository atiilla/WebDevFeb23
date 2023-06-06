/*
<table class="table table-primary">
            <thead>
                <tr>
                    <th scope="col">username</th>
                    <th scope="col">password</th>
                    <th scope="col">email</th>
                </tr>
            </thead>
            <tbody>
                <tr class="">
                    <td scope="row">root</td>
                    <td>pass123</td>
                    <td>root@root.com</td>
                </tr>
            </tbody>
        </table>
*/

// const table;

// const thead;

// const tbody;
// const table = document.createElement('table');
// const thead = document.createElement('thead');
// const tbody = document.createElement('tbody');

// table.className = "table table-primary"

// // begin of table head
// const trOfHead = document.createElement('tr');
// const th1 = document.createElement('th');
// th1.innerText = "username"

// const th2 = document.createElement('th');
// th2.innerText = "password"

// const th3 = document.createElement('th');
// th3.innerText = "email"

// trOfHead.append(th1, th2, th3)

// thead.append(trOfHead)
// // end of table head

// // begin of tbody 
// function addTableRecord(username, password, email) {
//     const trOfBody = document.createElement('tr')
//     const td1 = document.createElement('td');
//     td1.innerText = username
//     const td2 = document.createElement('td');
//     td2.innerText = password
//     const td3 = document.createElement('td');
//     td3.innerText = email
//     trOfBody.append(td1, td2, td3)
//     tbody.append(trOfBody)
// }

// // Array.from({
// //     length:10
// // },(v,k)=>{
// //     addTableRecord('root'+k,'root123'+k,'root@root.com')
// // })



// table.appendChild(thead)
// table.appendChild(tbody)

// const container = document.querySelector('.table-responsive-md')
// container.append(table)

function createTableCol(arr) {
    // begin of table head
    const trOfHead = document.createElement('tr');

    arr.forEach(catName => {
        const td = document.createElement('td')
        td.innerText = catName
        // td ready with text
        trOfHead.append(td)
    })

    return trOfHead
    // end of table head
}

// console.log(createTableCol(['username', 'password', 'email','age','phone']))

// Resuable functions
function AddTable(tableArr, columnNames) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    table.className = "table table-primary"

    let trOfHead = createTableCol(columnNames)

    thead.append(trOfHead)

    // end of table head

    function addTableRecord(arr) {
        const trOfBody = document.createElement('tr')

        for (let val in arr) {
            const td = document.createElement('td');
            td.innerText = arr[val]
            trOfBody.append(td)
        }
        // trOfBody.append(td1)
        return trOfBody
    }

    
    tableArr.forEach(obj=>{
      console.log(obj)
        tbody.append(addTableRecord(obj))
    })


    table.appendChild(thead)
    table.appendChild(tbody)
    return table
}

const table1 = AddTable([
    {
        username: 'root',
        password: 'root1234',
        email: 'root@root.com',
        age: 20,
        phone: 911,
        address:'Brussel'
    },
    {
        username: 'root2',
        password: 'root1234',
        email: 'root@root.com',
        age: 21,
        phone: 155,
        address:'Leuven'
    },
    {
        username: 'root1',
        password: 'root1234',
        email: 'root@root.com',
        age: 22,
        phone: 000,
        address:'Gent'
    }
], ['username', 'password', 'email', 'age', 'phone','address'])




const container = document.querySelector('.table-responsive-md')
container.append(table1)
