// Drone app

class Drone {
    constructor(type, model, flight_duration, battery_level, geoLocation = 'OpCenter') {
        this.type = type;
        this.model = model;
        this.flight_duration = flight_duration;
        this.battery_level = battery_level;
        this.isRunning = false;
        this.geoLocation = geoLocation
    }

    startEngine() {
        this.isRunning = true;
    }

    status() {

        this.isRunning ? console.log(`Type:${this.type}\nModel:${this.model}\nFlightDuration:${this.flight_duration}\nBattery:${this.battery_level}`) : console.log('Drone is not running yet.')
    }

    flyMove(action) {

        let interVal = setInterval(() => {
            console.log(`Drone is flying to ${action}`)
            this.battery_level-=0.5
            if(this.battery_level<=30){
                clearInterval(interVal)
            }
            this.checkBattery();
        }, 1000)
    }

    chargeBattery(){
        let max= 100;
        let charging= setInterval(()=>{
            if(this.battery_level<max){
                console.log('Drone is charging now...', this.battery_level)
                this.battery_level+=10
            }else{
                clearInterval(charging)
                console.log('Battery is fully charged!',this.battery_level)
            }
           
        },3000)
    }

    back2HomeAndTurnEngineOff() {
        // print message that drone is going back to the base
        console.log(`Drone is flying to the base ${this.geoLocation}`)

        // after 3 seconds turn engine off
        setTimeout(() => {
            this.isRunning = false;
            // get drone status
            this.status();
            this.chargeBattery()
        }, 3000)

       
    }

    checkBattery() {
        console.log('Battery level:'+ this.battery_level)
        if (this.battery_level <= 30) {
            console.log('Battery is low!!!!')
            setTimeout(() => {
                this.back2HomeAndTurnEngineOff();
            }, 3000)
        }
    }
}

let app = new Drone('Civil Drone', 'DJI', '2hours', 70);
app.startEngine() // engine is running now.
app.status()
// app.flyMove('up')
// app.flyMove('forward')
// app.flyMove('left')
// app.flyMove('right');
app.back2HomeAndTurnEngineOff('53352323,232323')
