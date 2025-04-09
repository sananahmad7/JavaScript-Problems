class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  showInfo() {
    console.log(`My car is from ${this.brand} and it's speed is ${this.speed}`);
  }
}

class Car extends Vehicle {
  constructor(brand, speed, fuelType) {
    super(brand, speed);
    this.fuelType = fuelType;
  }
  showInfo() {
    console.log(
      `My car is from ${this.brand} and it's speed is ${this.speed} and it's fuelType is ${this.fuelType}`
    );
  }
}

const oneCar = new Car("Honda", "500mph", "Diesel");
oneCar.showInfo();
