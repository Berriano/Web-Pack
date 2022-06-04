'use strict';




// ------------------------------ Array ForEach() with DOM ---------------------------- //



const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};



const accounts = [account1, account2];


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


///  Display movements using forEach() 



const forEAchMovement = function(accMov){

	accMov.forEach(function(mov,i){
	
		console.log(mov);
		console.log(i);
	});
	
	}
	
	forEAchMovement(account1.movements);





	

//! add sort parameter to displayMovements function and set to false, so they 
//! are ordered as they appear in the array



const displayMovements = function(movement, sort = false){

	containerMovements.innerHTML = '';




	/// sort movements with sort and forEach


//! create a variable for movements, and how to sort them
//! make a copy of the original movements, using the slice() method, then set..
//! if true =  use the condition movements.slice().sort((a, b) =>  a -b )
//! else use the original movements.


	const movs = sort ? movements.slice().sort((a, b) =>  a -b ) : movements;


//! now use the movs variable of movements for the forEach loop and not the original...
	

		movs.forEach(function(mov,i){

		const type = mov > 0 ? 'deposit' : 'withdrawal';


			const html = ` 

			<div class="movements__row">

				<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>

				<div class="movements__value">$ ${mov}</div>

			</div>`


			containerMovements.insertAdjacentHTML("afterbegin", html);
				
	}
 );
}

/// Sort button 

// const btnSort = document.querySelector('.btn--sort');



btnLoan.sort.addEventListener('click', function(e){

	e.preventDefault();
	
	//! when its clicked the function call will change the sort parameter to true
	
	displayMovements(currentAccount.movements, true)
	
	
	})
	
	
