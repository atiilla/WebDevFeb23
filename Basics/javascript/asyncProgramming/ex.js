let users = ['joe', 'john', 'james', 'jane']


let count = 0
function successTask() {
   
    
    return new Promise((resolve, reject) => {
        // %50 chance of success
        const success = Math.random() < 0.9
       
        // Simulate an asynchronous task
        setTimeout(() => {
            count++
            if (success) {
                resolve('Success! Improving... and function is called again');
                console.log("> .".padEnd(count, "."))
               

                // Recursively call successTask when success occurs
                successTask().then(resolve).catch(reject)
            } else {
                console.log('Failure! Trying to call successTask again...');
                
                // Recursively call successTask when failure occurs
                successTask()
                    .then(result => {
                        console.log(result)
                        // Repeat the same logic as above
                        successTask().then(resolve).catch(reject);
                    })
                    .catch(reject);

                count = 0
            }
        }, 2000);
    });
}

successTask()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    })