// ------------------------    DOM and Event    ----------------------------//
// --------------------------   Fundamentals   -----------------------------//



'use strict';



/// select elements needed for script, then store in variables to be re-used



const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');



const openModal = function() {

    modal.classList.remove('hidden');

    overlay.classList.remove('hidden');

}




/// querySelectorAll and loop



const btnsOpenModal = document.querySelectorAll('.show-modal');



/// A loop selects all the elements of the querySelectorAll()



for (let i = 0; i < btnsOpenModal.length; i++) {



    /// Add an eventListener for each element to do the same function on all 



    btnsOpenModal[i].addEventListener('click', function() {



        /// remove the hidden class from the html modal element class to reveal modal box



        modal.classList.remove('hidden');


        ///  and the overlay


        overlay.classList.remove('hidden');


    })

}




/// Add an eventListener function to add back the classes 

//! As code is repeated, use DRY and create one function to use in all eventlisteners


const closeModal = function() {


    /// add the hidden class back to close modal box

    modal.classList.add('hidden');

    overlay.classList.add('hidden');

}


//! function doesnt get called until click, so no with parentheses needed


btnCloseModal.addEventListener('click', closeModal);



/// clicking on overlay to remove modal window



overlay.addEventListener('click', closeModal);




///  keyboard events



/// Add keyboard events to the overall document


/// add parameter to access event object information (usually an (e) but used (event) )




document.addEventListener('keydown', function(event) {


    console.log(event);

    //! information includes which key was pressed

    ///? KeyboardEvent {isTrusted: true, key: 'Escape', code: 'Escape', location: 0, ctrlKey: false, …}


    /// key: 'Escape'


    /// use object information to set if/else stament


    if (event.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
})