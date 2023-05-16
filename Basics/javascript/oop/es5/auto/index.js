// Auto
// step1: Object constructor function 
function Auto(color, type, model, fuel) {
    this.color = color;
    this.type = type;
    this.model = model;
    this.fuel = fuel;

    this.autos = []

    this.display = function () {
        console.log(`Auto Info\nColor:${this.color}`)
        return `Color:${this.color} - Type:${this.type} - Model:${this.model} - Fuel:${this.fuel}`
    }

    // this.addAuto = function(){
    //     return this.autos.push({
    //         color:this.color,
    //         type:this.type,
    //         model:this.model,
    //         fuel:this.fuel
    //     })
    // }

    this.addAuto = function (obj) {
        let keys = Object.keys(obj)
        delete obj[keys[keys.length - 1]] // last one
        delete obj[keys[keys.length - 2]] // last one
        delete obj[keys[keys.length - 3]] // last one
        delete obj[keys[keys.length - 4]] // last one
        let newObj = obj

        return this.autos.push(obj)
    }

    this.showAllAutos = function () {
        console.log(this.autos)
    }
}

let auto1 = new Auto('black', 'toyota', 'corolla', 'benzine');
let auto2 = new Auto('red', 'honda', 'civic', 'diesel')
let app = new Auto();
app.addAuto(auto1)
app.addAuto(auto2)
app.showAllAutos();

// auto1.addAuto(); // auto info inserted
// auto1.showAllAutos() // all autos info printed
// auto2.addAuto();
// auto2.showAllAutos();
// auto1.display()
// auto2.display()
// let result = document.getElementById('autoinfo')
// function clickHandler(event){
//     event.preventDefault();
//     result.innerHTML+=`<li class="list-group-item">${auto1.display()}</li>`
//     result.innerHTML+=`<li class="list-group-item">${auto2.display()}</li>`
// }

