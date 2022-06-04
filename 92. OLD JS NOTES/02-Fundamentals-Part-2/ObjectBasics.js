'use strict';

// -------------------------------- Objects Basics ----------------------------------//


const mark	= {

	firstName: 'Mark',
	lastName:'Berry',
	birthYear: 1976,
	job: 'WebDev',
	friends:['Barn','Brad','Dave'],
	hasDriversLicense: true,

	

}

/// get value from object


/// dot notation

///? console.log(mark.friends);

// ['Barn', 'Brad', 'Dave']

/// bracket notation

///? console.log(mark['job']);

// WebDev

/// accessing object info thru prompt variable

///?  const infoMark = prompt(`Type a property you wish to know-
///?  \n firstName \n lastName \n birthYear \n age \n job \n friends`);

/// using dot notation will not work

///?  console.log(mark.infoMark);

// returns undefined

/// use bracket notation without string quotations

///?  console.log(mark[infoMark]);

// works

/// use if/else to replace undefined

///? if(mark[infoMark])
///? 	console.log(mark[infoMark]);
///? else console.log('Property doesnt exist');


/// add new property to object

mark.location = 'Bundaberg';

///? console.log(mark);

/// use dot nptation to write string using mark. properties

///? console.log(`${mark.firstName} has ${mark.friends.length}, and his best friend is ${mark.friends[0]}`);


// ------------------------------------ Object Methods ----------------------------------------- //


const markAge	= {

	firstName: 'Mark',
	lastName:'Berry',
	birthYear: 1976,
	job: 'WebDev',
	friends:['Barn','Brad','Dave'],
	hasDriversLicense: true,

	calcAge: function () {return this.age =  2021 - this.birthYear },

	getSummary: function(){return console.log
(`${this.firstName} is a ${this.age} year old ${this.job}, who's best friend is ${this.friends[0]}. 
He was born in ${this.birthYear} and currently ${this.hasDriversLicense ? 'has' : 'doesnt have'} a drivers License`);}

};


/// adding a function to an object, inside an object

///?  calcAge: (birthYear) => 2021 - birthYear,


/// adding the age to the object using this.keyword

///? calcAge: function () {return this.age =  2021 - this.birthYear }

/// then you need to call the function

markAge.calcAge();

console.log(markAge);


/// challenge ( see getSummary function in markAge Obect)

markAge.getSummary();

