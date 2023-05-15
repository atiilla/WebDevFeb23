/*
Homepage Product Listing
Detail page about a product
 - product_title
 - image
 - description
 - price
 - stock
 - category
 - condition : true/false


Customer page ()
 - Customer_fullname
 - email
 - location
 - phone_number
*/

// function generateUUID() { // Public Domain/MIT
//     var d = new Date().getTime();//Timestamp
//     var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//         var r = Math.random() * 16;//random number between 0 and 16
//         if(d > 0){//Use timestamp until depleted
//             r = (d + r)%16 | 0;
//             d = Math.floor(d/16);
//         } else {//Use microseconds since page-load if supported
//             r = (d2 + r)%16 | 0;
//             d2 = Math.floor(d2/16);
//         }
//         return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
//     });
// }

function eCommerce(){
    this.products = [] // many products
    this.customers = []
   

    this.getAllProducts = function(){
        return this.products
    }

    this.findProductById = function(id){
        return this.products.find(product=>product.id===id)
    }
   
    this.addNewProduct = function(title,image="default.jpg",description="",price=0,stock=0,category,condition=false){
        let uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(2);
        // let newID = this.products
        // newID[this.products.length-1].id+1
        // uniqueId
        let obj = {
            id:this.products.length+1,
            title,
            image,
            description,
            price,
            stock,
            category,
            condition
        }

        if(title!==undefined && price>0 && category !==undefined){ // true
            return this.products.push(obj)
        }else{
            return console.log('You can not leave fields empty')
        }
    }

    this.delProductById = function(id){
        let productId = this.products.findIndex(product=>product.id===id) // 


        // 2 > param id = -1 > not found .. no match
        // 2 product.id === 2 true - > position array index number 1 
        // 2 product.id === 2 false -> -1
        // console.log(productId)
    //    for(let i =0;i<this.products.length;i++){
    //     if(this.products[i].id === id){
    //         console.log(i)
    //     }
    //    }

        return this.products.splice(productId,1)
    }

    // Customer
    this._register = function(fullname,email,username,location,password,phone_number){
        if(email && username && password){
            let userObj = {
                fullname,
                email,
                username,
                location,
                password,
                phone_number,
                cart:[]
            }
            return this.customers.push(userObj)
        }else{
            console.log('fill the input fields!!!')
        }
    }

    this.login = function(username,password){
        // let user = "root"
        // let pass = "qwe123"
        let userObj = this.customers.find(user=>user.username ===username);
        if(userObj){
            // verify
            if(userObj.username ===username && userObj.password === password){
                return true
            }else{
                console.log('Username or Password is incorrect')
                return false
            }
        }else{
            console.log('try again!')
        }
        // if(username === user && pass === password){
        //     console.log('You are logged in! ')
        // }else{
        //     console.log('Try again!')
        // }
    }

    this.makeOrder = function(productId,username){
        
        let product = this.products.find(item=>item.id===productId) // product found by its id
        let userObj = this.customers.find(user=>user.username===username)
        userObj.cart.push(product)
        
        // console.log(product,user)
        // console.log(userObj)
    }


    this.cartSummary = function(username){
        let userObj = this.customers.find(user=>user.username===username)
        userObj.cart.forEach((order)=>{
            console.log(`Order#${order.id} - ProductName: ${order.title}`)
        })
    }
}

eCommerce.prototype.test = function(){
    console.log('hello world')
}

let app = new eCommerce();
app.addNewProduct('Lenovo r5','lenovor5.jpg','',600,5,'Laptop',true);
app.addNewProduct('Macbook Air','mac.jpg','',900,5,'Laptop',true);
app.addNewProduct('iPhone 14','iphone.jpg','',1200,5,'Mobile',true);

// app.getAllProducts()

// app.delProductById(3)
// app.delProductById(1)
// app.delProductById(2)
// console.log(app.getAllProducts().find(product=>product.id===1))


// app.getAllProducts().forEach(product=>{
//     console.log(`Title: ${product.title}\nDescription: ${product.description}\nPrice: ${product.price}\nCategory: ${product.category}\nCondition: ${product.condition?'new':'used'}\n`,'#'.repeat(10))
    
// })

app._register('Joe Daniel','joe@daniel.com','joe','NY','lol123','+155554474')
app._register('Root Toor','root@daniel.com','root','NY','toor123','+155554474')

app.login('root','toor123')

// clickhandler
if(app.login('root','toor123')){
    app.makeOrder(1,'root')
}

if(app.login('root','toor123')){
    app.makeOrder(2,'root')
    app.cartSummary('root')
}
// console.log(app.getAllProducts().length?'Products found':'No Products found')
// console.log(app.customers[1])


