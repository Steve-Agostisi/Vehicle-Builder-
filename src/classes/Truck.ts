// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

class BaseVehicle {
  vin!: string;
  color!: string;
  make!: string;
  model!: string;
  year!: number;
  weight!: number;
  topSpeed!: number;
  wheels!: Wheel[];
  towingCapacity!: number;
  constructor(
    vin: string, 
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
      towingCapacity: number
    ) {
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
    this.towingCapacity = towingCapacity;
    this.towingCapacity = towingCapacity;
  }

  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void { 
    const vehicleDetails = `${vehicle.make} ${vehicle.model}`;
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`${vehicleDetails} is being towed by the ${this.make} ${this.model}.`);
    } else {
      console.log(`${vehicleDetails} is too heavy to be towed by the ${this.make} ${this.model}.`);
    }
    // TODO: Get the make an model of the vehicle if it exists
    // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    // TODO: If it is, log that the vehicle is being towed
    // TODO: If it is not, log that the vehicle is too heavy to be towed
  }

   printDetails() {
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    console.log(`Color: ${this.color}`);
    console.log(`Wheels: ${this.wheels.length}`);
  }
}
class Truck extends BaseVehicle implements AbleToTow {
  override vin: string; 
  override color: string; 
  override make: string; 
  override model: string; 
  override year: number; 
  override weight: number; 
  override topSpeed: number; 
  override wheels: Wheel[]; 
  override towingCapacity: number;

  constructor(
    vin: string, 
    color: string, 
    make: string, 
    model: string, 
    year: number, 
    weight: number, 
    topSpeed: number, 
    wheels: Wheel[], 
    towingCapacity: number
  ) {
    super(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity);
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels.length === 4 ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    this.towingCapacity = towingCapacity;
  }
  override tow(vehicle: Truck | Motorbike | Car): void {
    const vehicleDetails = `${vehicle.make} ${vehicle.model}`;
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`${vehicleDetails} is being towed by the ${this.make} ${this.model}.`);
    } else {
      console.log(`${vehicleDetails} is too heavy to be towed by the ${this.make} ${this.model}.`);
    }
  }

  override printDetails() {
    super.printDetails(); // Call the parent class method
    console.log(`Towing Capacity: ${this.towingCapacity}`);
  }
}
  
  // TODO: Declare properties of the Truck class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)

  // TODO: Create a constructor that accepts the properties of the Truck class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Truck class
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not

// Export the Truck class as the default export
export default Truck;
function tow(vehicle: Truck | Motorbike | Car, towingCapacity: number): void {
  const vehicleDetails = `${vehicle.make} ${vehicle.model}`;
  if (vehicle.weight <= towingCapacity) {
    console.log(`${vehicleDetails} is being towed.`);
  } else {
    console.log(`${vehicleDetails} is too heavy to be towed.`);
  }
}

