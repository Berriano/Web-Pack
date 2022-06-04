'use strict';


// ------------------------------ FUNCTIONS(){} -------------------------------- //


/////////////////////////////// Poll Application //////////////////////////////////





/// isplay prompt windows for user input

const registerNewAnswer = function(){

			const response = Number(prompt(

`What is your favourite programming language? \n 0: JavaScript\n 1: Python\n 2: Rust\n 3: C++ \n(Write option number)`)
)

///check responses and update array with responses

	if(response >=  0 && response <= 3){ 

		  this.answers[response]++; pollResults()}

		else {
				alert('Wrong number..Try again'); pollAnswer()
		}			

};


/// generic display results function

const displayResults = function(type='string'){

if (type === 'array'){

	console.log(this.answers);

}

else if (type === 'string'){

	console.log(`Poll results are ${this.answers}`);
}


	


}

/// poll object


const poll = {

	answers:new Array(4).fill(0),

	
}

/// specific functions binded to poll object

const pollAnswer = registerNewAnswer.bind(poll);

const pollResults = displayResults.bind(poll);


/// event listener to start poll

const pollBtn = document.querySelector('.poll').addEventListener(
	
	'click', pollAnswer);



/// Test Data 

const test1 = [5, 2, 3];

const test2 = [1, 5, 3, 9, 6, 1];

//! need to craete a new this.keyword as answers in an object

const testing1 = displayResults.call({answers:test1},'array');

///? [5, 2, 3]

const testing2 = displayResults.call({answers:test2});

///? Poll results are 1,5,3,9,6,1



//! ** 6.5 out of 10

