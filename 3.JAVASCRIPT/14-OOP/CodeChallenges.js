'use strict';


//------------------------------------------- OOP ------------------------------------ //
//------------------------------------------- --- ------------------------------------ //





//----------------------------------  Code Challenges  ------------------------------- //



// const Car = function (make, speed) {

// 	this.make = make;
// 	this.speed = speed;



// }



// Car.prototype.accelerate = function () {

// 	this.speed += 10;

// 	console.log(`${this.speed} km/h`);

// }



// Car.prototype.brake = function () {

// 	this.speed -= 5;

// 	console.log(`${this.speed} km/h`);
// }





// /// my Car


// const myCar = new Car('Toyota', 60);

// console.log(myCar);


// // Car {make: 'Toyota', speed: 60}


// myCar.brake();

// console.log(myCar);


// // 55


// myCar.accelerate();

// // 65

// console.log(myCar);


// // Car {make: 'Toyota', speed: 550}





// /// test data



// const car1 = new Car('BMW', 120);


// car1.brake();


// // 115 km/h



// const car2 = new Car('Mercedez', 95);


// car2.accelerate();


// // 105 km/h


// console.log(car1, car2);


// // Car {make: 'BMW', speed: 115} Car {make: 'Mercedez', speed: 105}





// ------------------------ Challenge 2 ------------------------ //

/*


class CarCl {

	constructor(make, speed) {

		this.make = make;
		this.speed = speed;



	}

	accelerate() {

		this.speed += 10;

		// console.log(`${this.speed} km/h`);

	}

	brake() {

		this.speed -= 5;

		// console.log(`${this.speed} km/h`);
	}


	get speedUS() {

		return this.speed / 1.6;


	}

	set speedUS(speed) {

		this.speed = speed * 1.6;


	}


}




const classCar = new CarCl('Toyota', 60);


///? console.log(classCar.speedUS);

// 37.5



classCar.accelerate();

// 70 kmh



classCar.brake();

// 65 kmh




classCar.speedUS = 100;


///? console.log(classCar);


// CarCl {make: 'Toyota', speed: '160 km/h'}


///? console.log(classCar.speedUS);

// 100 = (set speed 100 * 1.6 = get speed 160 / 1.6)




// ------------------------ Challenge 3 ------------------------ //




const CarClNew = function (make, speed) {


	this.make = make;
	this.speed = speed;


}



CarClNew.prototype.accelerate = function () {

	this.speed += 10;

	console.log(`${this.speed} km/h`);

}



CarClNew.prototype.brake = function () {

	this.speed -= 5;

	console.log(`${this.speed} km/h`);
}






const EV = function (make, speed, charge) {


	CarClNew.call(this, make, speed);

	this.charge = charge;

}





EV.prototype = Object.create(CarClNew.prototype);



/// any methods created on EV with the ame name as CarCLNew will over the CarClNew methods 
/// as they will come first in the chain



EV.prototype.chargeBattery = function (chargeTo) {

	this.charge = chargeTo;

}




EV.prototype.accelerate = function () {

	this.speed = this.speed += 20;
	this.charge--;

	console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);


}


EV.prototype.brake = function () {

	this.speed = this.speed -= 10;

	console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);


}






const tesla = new EV('Tesla', 120, 23);

console.log(tesla);


// EV {make: 'Tesla', speed: 120, charge: 23}



/// Accelerate


tesla.accelerate();


console.log(tesla);


// Tesla going at 140 km/h, with a charge of 22.77%


// EV {make: 'Tesla', speed: 140, charge: 22.77}



/// brake



tesla.brake();


console.log(tesla);


// Tesla going at 130 km/h, with a charge of 22.77%

//  EV {make: 'Tesla', speed: 130, charge: 22.77}




/// Charge battery



tesla.chargeBattery(90);

console.log(tesla);


// EV {make: 'Tesla', speed: 130, charge: 90}




console.dir(EV.prototype.constructor);

// ƒ CarClNew(make, speed)



*/



// -------------------------------- Challenge 4 ------------------------------- //






class Car {


	constructor(make, speed) {


		this.make = make;
		this.speed = speed;


	}

	get speedUS() {

		return this.speed / 1.6;

	}


	set speedUS(speed) {

		this.speed = speed * 1.6;
		return this;

	}



}





class EVCar extends Car {


	#charge;



	constructor(make, speed, charge) {

		super(make, speed);

		this.#charge = charge;




	}




	accelerate() {

		this.speed += 20;
		this.#charge--;

		console.log(`${this.speed} km/h`);

		return this;

	}




	brake() {

		this.speed = this.speed -= 5;

		console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);

		return this;


	}



	chargeBattery(chargeTo) {

		this.#charge = chargeTo;

		return this;

	}


}





const car1 = new EVCar('Rivian', 120, 23)


console.log(car1);




/// Accesible


car1.chargeBattery(100);

console.log(car1);

// make: 'Rivian', speed: 190, #charge: 100}




/// unaccesible


// console.log(car1.#charge);


// {make: 'Rivian', speed: 120, #charge: 23}




/// chaining


car1.accelerate().chargeBattery(60).brake().accelerate();


// Rivian going at 135 km/h, with a charge of 60%

// 155 km/h
// 175 km/h



car1.accelerate().chargeBattery(90).brake().accelerate();



// Rivian going at 170 km/h, with a charge of 90%
//  190 km/h
//  EVCar {make: 'Rivian', speed: 190, #charge: 90}


console.log(car1);



/// access the speedUS using the get Method



console.log(car1.speedUS);

// 118.75