const [username,password] = document.querySelectorAll('input');
const [loginBtn,logoutBtn,verifyBtn] = document.querySelectorAll('button')
const message = document.querySelector('.output')
loginBtn.addEventListener('click',(e)=>{
    // send post req to backend
    fetch('http://localhost:8181/users/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            username:username.value,
            password:password.value
        })
    })
    .then(res=>res.json())
    .then(user=>{
        console.log(user)
        localStorage.setItem('token',user.token)
    })
})

verifyBtn.addEventListener('click',(e)=>{
    let token = localStorage.getItem('token');
    fetch('http://localhost:8181/users/profile',{
        method:'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.username){
            message.innerHTML=`user logged in ${data.username}`
        }else{
            message.innerHTML=`no session found`
        }
    })
    
})

logoutBtn.addEventListener('click',(e)=>{
    let token = localStorage.getItem('token');
    fetch('http://localhost:8181/users/logout',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            Authorization: `Bearer ${token}`
        },
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.message){
            message.innerHTML=`${data.message}`
        }else{
            message.innerHTML=`${data}`
        }
    }
    )
})