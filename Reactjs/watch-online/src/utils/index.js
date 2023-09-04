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
    },
    paginator:function (items, current_page, per_page_items) {
        // source: https://arjunphp.com/can-paginate-array-objects-javascript/
        let page = current_page || 1,
            per_page = per_page_items || 10,
            offset = (page - 1) * per_page,
    
            paginatedItems = items.slice(offset).slice(0, per_page_items),
            total_pages = Math.ceil(items.length / per_page);
    
        return {
            page: page,
            per_page: per_page,
            pre_page: page - 1 ? page - 1 : null,
            next_page: (total_pages > page) ? page + 1 : null,
            total: items.length,
            total_pages: total_pages,
            data: paginatedItems
        };
    }
}