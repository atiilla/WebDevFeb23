function Life(callback) {
    callback()
}

Life(function () {
    console.log('Welcome to the world. You are born.')
    Life(function () {
        console.log('You can\'t say `bread`')
        Life(function () {
            console.log('And you grow up...')
            Life(function () {
                console.log('Fun time is about over... You start going to school')
                Life(function () {
                    console.log('School is over... You take the university exam')
                    Life(function () {
                        let isExamPassed=true
                        if(isExamPassed){
                            Life(function(){
                                console.log('The Exam is over... You go to university')
                                return Life(()=>console.log("Go to Next"))
                            })
                        }else{
                            Life(function(){
                                return Life(()=>console.log('Take the exam again'))
                            })
                        }
                        Life(function () {
                            console.log('University is over... You start working.. Maybe you cannot find a job :D')
                            Life(function () {
                                console.log('You struggle... You work hard...')
                                Life(function () {
                                    console.log('You buy a house with your savings...')
                                    Life(function () {
                                        console.log('You get married')
                                        Life(function () {
                                            let divorced = false
                                            if (divorced) {
                                                console.log('You lose the house you bought in the divorce case..')
                                                Life(function () {
                                                    console.log('You struggle again..')
                                                    return Life(()=>{
                                                        let lifeSucks = false
                                                        while(lifeSucks){
                                                            Life(()=>{
                                                                console.log('You are here forever... :))) There is no escape until you die')
                                                            })
                                                        }
                                                    })
                                                })
                                            } else {
                                                console.log('You have children..')
                                                Life(function () {
                                                    console.log('Your children grow up..')
                                                    Life(function () {
                                                        console.log('You struggle again..')
                                                        Life(function () {
                                                            console.log('You retire..')
                                                            Life(function () {
                                                                console.log('You die..')
                                                                Life(function () {
                                                                    console.log('You are dead..')
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            }
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
