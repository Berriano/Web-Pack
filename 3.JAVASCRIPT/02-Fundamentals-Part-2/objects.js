//-------------------------- Fundamentals Part 2 ---------------------------//



// -------------------------------   Objects  ------------------------------//
// ------------------------------------ ------------------------------------//



//-- object literal syntax --//




/// object =  property : value 




year = 2022;



const markNew = {
	
	firstName: 'Mark',
	lastName: 'Beresford',
	age: year - 1976,
	job: 'Web Developer',
	friends: ['Barn', 'Brad', 'Bradley']
	
};


// console.log(markNew);


// {firstName: 'Mark', lastName: 'Beresford', age: 46, 
//  job: 'Web Developer', friends: Array(3)}



// console.log(markNew.firstName);


// Mark




// ------ a note on bracket notation ------ //


//! use 'common' word keyword and variation


const commonWord = 'Name';


// console.log(markNew[`first${commonWord}`]);

// Mark


// console.log(markNew[`last${commonWord}`]);

// Beresford




/// prompt case with bracket notation


// const infoPrompt = prompt('Choose one: firstName, lastName, age, job, friends');


// console.log(markNew[infoPrompt]);


//! any expression can go in sq brackets - if its a value it wont be undefined


//  job = web developer (markNew.job)



// if (markNew[infoPrompt]) {
	
// 	console.log(`${markNew.firstName}'s ${infoPrompt} is ${markNew[infoPrompt]}`);
	
// } else console.log(`${infoPrompt} doesnt exist...Try again!!`);








/// Add new properties to object



markNew.location = 'Bundaberg';


// console.log(markNew.location);


// Bundaberg



markNew['phoneNumber'] = '+61452210276';


// console.log(markNew.phoneNumber);


// +61452210276


// console.log(markNew);





/// midway challenge



// // console.log(`${markNew.firstName} has ${markNew.friends.length} friends, and his best friend is ${markNew.friends[0]}`);








// -------------------------------   Objects  ------------------------------//
// -------------------------------   Methods  ------------------------------//





/// Adding a function to an object



year = 2022;



const markNewer = {

	firstName: 'Mark',
	lastName: 'Beresford',
    birthYear: 1976,
    job: 'Web Developer',
    friends: ['Barn', 'Brad', 'Bradley'],
    hasDriversLicence: true,
    // hasDriversLicence: false,
		
		
		
		
    ///? use the function name as the property, and the expression as the value
		
		
    //-- Use this.keyword  --//
		
		
    ///  this. points to the object calling the method
		
    //! Create a new property and add the value from the expression to it
		
		
    calcAge: function() {
			
			return this.age = year - this.birthYear;
			
    },
		
		
		
		
		
    //---  Get summary function  ---//
		
		
    getSummary: function() {
			
			return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and has ${this.hasDriversLicence ? 'a' : 'no'} drivers licence`;
			
    }
		
	};
	
	
	

	
	
	///  The function has to be called for it to return a value
	
	
	markNewer.calcAge();
	
	// console.log(markNewer.age);
	
	// 46
	
	//! now the age property has been added with the correct age
	
	
	
	
	
	///  Call the get summary function
	
	
	// console.log(markNewer.getSummary());
	
	// Mark is a 46-year old Web Developer, and has a drivers licence
	
	
	
	
	
	
	// -------------------------------   Objects  ------------------------------//
	// -----------------------------  Assignments  -----------------------------//
	
	
	
	
	
	const myCountry = {
		
		country: 'England',
    capital: 'London',
    language: 'English',
    population: 65,
    neighbours: ['Wales', 'Scotland'],

    describe: function() {
			
			console.log(`${this.country} has ${this.population} million people, ${this.neighbours.length} neighbouring countries, and ${this.capital} is its capital.`)
			
    },
		
		
    checkIsland: function() {

			this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};



myCountry.population += 2;

myCountry.describe();



myCountry['population'] -= 2;

myCountry.describe();



myCountry.checkIsland();

// console.log(myCountry);






// --------------------------- Coding Challenge ---------------------------//
// ----------------------------- ---- 3 -----  ----------------------------//





const markbmi = {
	
	fullName: 'Mark Miller',
	mass: 78,
	height: 1.69,
	
	calcBMI: function() {

        return this.BMI = this.mass / this.height ** 2;
				
			}
			
		}

		const john = {
			
			fullName: 'John Smith',
			mass: 92,
			height: 1.95,
			
			
			calcBMI: function() {
				
				return this.BMI = this.mass / this.height ** 2;
				
			}
			
			
		}

		
		john.calcBMI();
		
		markbmi.calcBMI();
		
		
		// console.log(markbmi, john);
		
		
		markbmi.BMI > john.BMI ? console.log(`${markbmi.fullName}'s BMI (${markbmi.BMI.toFixed(2)}) is higher than ${john.fullName}'s BMI (${john.BMI.toFixed(2)})`) : console.log(`${john.fullName}'s BMI (${john.BMI.toFixed(2)}) is higher than ${markbmi.fullName}'s BMI (${markbmi.BMI.toFixed(2)})`)
		
		
	