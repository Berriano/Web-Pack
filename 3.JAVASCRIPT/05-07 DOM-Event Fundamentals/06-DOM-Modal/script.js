// ------------------------        Modal        ----------------------------//
// -------------------------- ----------------------------------------------//


'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');


const btnsOpenModal = document.querySelectorAll('.show-modal');




/// function for opening and closing modal box to keep code DRY



const openModal = function() {

    modal.classList.remove('hidden');

    overlay.classList.remove('hidden');

}


const closeModal = function() {

    modal.classList.add('hidden');

    overlay.classList.add('hidden');

}



/// loop to open modal on each button



for (let i = 0; i < btnsOpenModal.length; i++) {

    btnsOpenModal[i].addEventListener('click', openModal);

}




/// click to close modal



btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);




///  close on escape key



document.addEventListener('keydown', function(event) {

    if (event.key === 'Escape' && !modal.classList.contains('hidden')) 
		
        closeModal();
}
)