const computer = document.querySelector('.laptop'); // img
const status = document.querySelector('.status'); // h1 text

computer.addEventListener('click', () => {
    // console.log(status.style)

    if (status.innerText.includes('online')) {
        console.log('computer is online')
        status.style.color = '#cd0505'
        status.innerText = "Status: Computer is offline"
    }else{
        status.style.color = '#0ea805'
        // status.style.display="none"
        
        // font-size

        status.innerText = "Status: Computer is online"
    }

    // console.log('hello',status.style.color)
})
