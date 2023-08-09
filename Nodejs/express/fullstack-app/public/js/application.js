const originalUrl = document.querySelector('input');
const shortenButton = document.querySelector('button');
const shortenedUrl = document.querySelector('.shortenedUrl');
const clipBoardbtn = shortenedUrl.closest('.alert')
shortenButton.addEventListener('click', () => {
    const url = originalUrl.value;
    fetch('http://localhost:8000/shorten', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            'originalUrl': url
         })
    })
    .then(res=>res.json())
    .then(data=>{
        shortenedUrl.innerHTML=data.shortUrl
        Swal.fire({
            title: 'Succcess',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    })
})

clipBoardbtn.addEventListener('click',(e)=>{
    console.log(shortenedUrl.textContent)
    navigator.clipboard.writeText(shortenedUrl.textContent)
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your shorturl copied',
        showConfirmButton: false,
        timer: 800
      })
})