'use strict';

// --------------------------------------- Modal ---------------------------------- //


/// 'hidden' class in CSS file

// .hidden {
//   display: none;
// }

/// select elements

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnOpen = document.querySelectorAll('.show-modal');



// ------------------ Remove 'hidden' class from html to show modal ---------------- //

// const btnOpen = document.querySelectorAll('.show-modal');  ///? 3 x buttons


///select multiple elements with the same class using for loop


for (let i=0;i<btnOpen.length;i++){

						/// add eventListener to 3 buttons

								btnOpen[i].addEventListener('click', function(){

						/// removing a class using classlists on the modal and overlay query selector

						// <div class="modal hidden">
						// <div class="overlay hidden">
				
						// const modal = document.querySelector('.modal');
						// const overlay = document.querySelector('.overlay');

						/// and removing the hidden class when clicked (not . needed)
					

						modal.classList.remove('hidden');

						/// to smudge out the background

						overlay.classList.remove('hidden');

						/// can be made DRY by making a function removeModal()

			})
}



// ----------------------- Hide modal window by clicking x ------------------------ //



/// select btn to add eventlistener


 ///? btnClose.addEventListener('click', function(){

						// /// use classlist.add to add back the hidden class

						///? modal.classList.add('hidden');
						///? overlay.classList.add('hidden');
///? })


/// click overlay to close window



/// can add same code as before but.......

///? overlay.addEventListener('click', function(){

/// use classlist.add to add back the hidden class

						///? modal.classList.add('hidden');
						///? overlay.classList.add('hidden');
///? })


///     DRY!!!!   ////


/// so...

/// cleaner version

const closeModal = function (){ 
									modal.classList.add('hidden');
 									overlay.classList.add('hidden');
}


/// no parentheses on function as its a click event

btnClose.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)



// ----------------------------- KeyPress events ----------------------------------- //


/// use the (e) parameter


document.addEventListener('keydown', function(e){

///	console.log is key:"Escape"
	
console.log(e);

				/// if e.key (escape) is pressed and...

						if(e.key === "Escape" &&

				/// if modal does !NOT contain hidden class
					
						!modal.classList.contains('hidden')) {

				/// run closeModal function

											closeModal();

						}
})