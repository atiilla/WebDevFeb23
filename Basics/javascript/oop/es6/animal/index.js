/*

SuperClass -> Animal
SubClass -> Cow
SubClass -> Cat
SubClass -> Dog

*/

class Animal{
    constructor(name,owner){
        this.name = name
        this.owner = owner
    }

    makeNoise(){
        console.log('animal noise')
    }
}

class Cow extends Animal{
    constructor(liter,name,owner){
        super(name,owner)
        this.liter = liter
    }

    makeNoise(){
        console.log('mööööööööööööööööö',this.name,this.liter)
    }
}

class Cat extends Animal{

    makeNoise(){
        console.log('Meow!!!',this.name)
    }
}

class Dog extends Animal{

   
}

let cow1 = new Cow('Bill uncle',20)
cow1.makeNoise()

let cat = new Cat('Melahat')
cat.makeNoise()

let dog = new Dog()
dog.makeNoise()