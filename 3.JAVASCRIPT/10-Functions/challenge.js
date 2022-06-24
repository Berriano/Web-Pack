//---------------------------------- Functions --------------------------------- //
//---------------------------------- --------- --------------------------------- //


'use strict';



const poll = {


    question: "What is your favourite programming language?",

    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],

    answers: new Array(4).fill(0),




    registerNewAnswer() {


        let answer = Number(prompt(`${this.question} \n ${this.options.join('/\n')} \n (Write option number)`));


        answer >= 0 && answer < this.options.length ? this.answers[answer]++ : prompt('Not an Option')


        this.displayResults();
        this.displayResults('string');


    },


    displayResults(type = 'array') {


        type === 'array' ? console.log(this.answers) :

            console.log(`Poll results are ${this.answers.join(',')}`);


    }

};



document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));



// ----------------------------   challenge 2  ----------------------------------- //


(function() {

    const header = document.querySelector('h1');

    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function() {

        header.style.color = 'blue';

    })




})();