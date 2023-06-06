const form = document.querySelector('form');
const [username, password, image] = form.elements;

// const evt = new Event("submit", {"bubbles":true, "cancelable":false});
// // event can be dispatched from any element, not only the document
// form.dispatchEvent(evt);
// // preventDEfault form


form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh
    console.log('hello')


    // Get the form data (username password and his avatar)
    var formData = new FormData(this);
    console.log(form.elements)
    // formData.append('username',username.value)
    // formData.append('password',password.value)
    // formData.append('image',image.files[0]) // avatar profile picture
    
    fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData // 
    })
    .then(response => {
        // Handle the response from the server
        console.log(response);
    })
    .catch(error => {
        // Handle any errors
        console.error(error);
    })
    .finally(()=>{
        return false;
    })
    return false;
});