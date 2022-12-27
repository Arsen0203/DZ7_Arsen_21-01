class Cars {
    constructor(model, color, wheels) {
        this.model = model;
        this.color = color;
        this.wheels = wheels;
    }

    start() {
        console.log('Машина заведена');
    }
}

class ElectricCar extends Cars {
    constructor(model, color, wheels, batteryCapacity) {
        super(model, color, wheels);
        this.batteryCapacity = batteryCapacity;
    }
}

class SportsCar extends Cars {
    constructor(model, color, wheels, topSpeed) {
        super(model, color, wheels);
        this.topSpeed = topSpeed;
    }
}

class PickupTruck extends Cars {
    constructor(model, color, wheels, payloadCapacity) {
        super(model, color, wheels);
        this.payloadCapacity = payloadCapacity;
    }
}

const teslaModelS = new ElectricCar('Model S', 'red', 4, 100);
const porsche911 = new SportsCar('911', 'yellow', 4, 280);
const fordF150 = new PickupTruck('F-150', 'blue', 4, 2000);

console.log(teslaModelS);
console.log(porsche911);
console.log(fordF150);
teslaModelS.start();
// Машина заведена


