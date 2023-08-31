/*

  Resources
  http://localhost:5000/users
  http://localhost:5000/posts


*/

module.exports = {
    login: async (obj) => {
        let res = await fetch("https://teamnetflixapp-backend.onrender.com/users/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        return res.json()

    },
    register: async(obj) => {

        let res = await fetch("https://teamnetflixapp-backend.onrender.com/users/register", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        return res.json()
    },
    isLoggedIn: (token) => {
      return  fetch('https://teamnetflixapp-backend.onrender.com/movies', {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
    }
}