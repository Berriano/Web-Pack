// --------------------------  DOM and Event Advanced  ------------------------- //
// --------------------------------- -------------- ---------------------------- //


'use strict';



// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {

	e.preventDefault();

	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');



};

const closeModal = function () {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');


};





/// use foreach loop instead of for loop on btnOpenModal



// for (let i = 0; i < btnsOpenModal.length; i++)

// 	/// does the same thing for both both btns/links

// 	btnsOpenModal[i].addEventListener('click', openModal);





btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));



btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);



document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModal();
	}
});


