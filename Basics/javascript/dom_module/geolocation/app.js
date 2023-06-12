// find button element
const button = document.querySelector('.btn');

// addEventListener
button.addEventListener('click',function(e){
    navigator.geolocation.getCurrentPosition(function(pos){
        console.log(pos)
        document.querySelector('.location').innerText = `${pos.coords.latitude}, ${pos.coords.longitude}`
    })
})