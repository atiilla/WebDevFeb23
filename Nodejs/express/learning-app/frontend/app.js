const navbarBrand = document.querySelector('.navbar-brand')
const appName = document.querySelector('.main > .contain > .content > h4')
const contactEmail = document.querySelector('.main > .contain > .content > p')


document.addEventListener('DOMContentLoaded',()=>{
    fetch('http://localhost:4000')
    .then(res=>res.json())
    .then(data=>{
        console.log(data.siteInfo)
        navbarBrand.innerHTML=data.siteInfo.appName
        appName.innerHTML=`${data.siteInfo.appName} v${data.siteInfo.version}`
        contactEmail.innerHTML=data.siteInfo.email
    })
})