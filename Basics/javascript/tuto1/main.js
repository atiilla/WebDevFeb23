import {var1,var2} from './variables.js'

console.log(var1,var2)

// How do i import a function from another file in javascript?

/*

// Javascript had no import/export before ES6
// So we include the file in the html file
// <script src="variables.js"></script>

// then how do we import a function from the file in ecmascript5 without including the file in the html file?

async function IncludeJavascript(filename){
    var script = await document.createElement('script');
    // <script src=""
    script.src = await filename;
    return new Promise((resolve,reject)=>{
        script.onload = ()=>{
            resolve()
        }
        document.body.appendChild(script);
    })
}

IncludeJavascript('variables.js') // import 
IncludeJavascript('functions.js') // import 
IncludeJavascript('colors.js') // import

window.onload = ()=>{ // html event
    
    
    
    console.log(message)
    console.log(GetName('John Doe'))
    console.log(colors)

}


Explanation of the IncludeJavascript function and code snippet
TL;DR
The IncludeJavascript function is an asynchronous function that takes a filename as an argument and loads a JavaScript 
file with that filename. The code snippet loads three JavaScript files using the IncludeJavascript function and 
logs some messages to the console when the window loads.
Explanation
The IncludeJavascript function is an asynchronous function that takes a filename as an argument and loads a JavaScript 
file with that filename. The function creates a new script element using the document.createElement method and sets 
the src attribute of the script element to the filename. The function then returns a promise that resolves when the 
script element has finished loading. The onload event of the script element is used to resolve the promise.
The code snippet uses the IncludeJavascript function to load three JavaScript files: variables.js, functions.js, 
and colors.js. Each file is loaded using a separate call to the IncludeJavascript function.
The code snippet also sets an onload event handler for the window object. When the window loads, the event handler 
logs some messages to the console. The first message logs the value of the message variable, which is presumably 
defined in the variables.js file. The second message logs the result of calling the GetName function with the 
argument 'John Doe', which is presumably defined in the functions.js file. The third message logs the value of the 
colors variable, which is presumably defined in the colors.js file.
Possible bugs

If the filenames passed to the IncludeJavascript function are incorrect or the files do not exist, the function 
will throw an error.
If the variables.js, functions.js, and colors.js files are not loaded in the correct order, the code may not 
work as expected.

Possible improvements

Use a module bundler like Webpack to bundle all the JavaScript files into a single file to reduce the number of HTTP 
requests.
Use a module loader like RequireJS to manage dependencies between JavaScript files.
Use a module system like CommonJS or ES6 modules to define and import modules instead of using global variables and 
functions.

References

Asynchronous JavaScript

*/