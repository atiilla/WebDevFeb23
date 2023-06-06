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
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

// begin of table head
const trOfHead = document.createElement('tr');
const th1 = document.createElement('th');
th1.innerText="username"

const th2 = document.createElement('th');
th2.innerText="password"

const th3 = document.createElement('th');
th3.innerText="email"

trOfHead.append(th1,th2,th3)

thead.append(trOfHead)
// end of table head

table.appendChild(thead)

table.appendChild(tbody)



console.log(table)