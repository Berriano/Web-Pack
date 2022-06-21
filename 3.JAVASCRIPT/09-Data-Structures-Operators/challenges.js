// ---------------------------------  Challenges  --------------------------------- //
// ------------------------------- ---------------- ------------------------------- //


'use strict';

// ---------------------------------  Challenge 1 --------------------------------- //



/// 1

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],

        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],

    ],

    score: '4:0',

    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'
    ],

    date: 'Nov 9th, 2037',

    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },

};



const [player1, player2] = game.players;


// console.log(player1);
// console.log(player2);


/// 2


const [gk, ...fieldPlayers] = player1;

// console.log(gk, fieldPlayers);


/// 3


const allPlayers = [...player1, ...player2];

// console.log(allPlayers);


/// 4


const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];

// console.log(players1Final);


/// 5



const {
    team1,
    x: draw,
    team2
} = game.odds;

// console.log(draw, team1, team2);


/// 6



const printGoals = function(...playerNames) {

    console.log(`${playerNames} : ${playerNames.length} goals scored`);

}


// printGoals('Davies', 'Muller', 'Lewandowski' ,'Kimmich');

// printGoals(...game.scored);


/// 7


// team1 < team2 && console.log('team 1 is more likley') 
// team1 > team2 && console.log('team 2 is more likley') ;






// ---------------------------------  Challenge 2 --------------------------------- //



///  1 


const scored = Object.entries(game.scored);


for (const [goal, scorer] of scored) {

    let goalNum = Number(goal);

    // console.log(`Goal ${goalNum + 1}: ${scorer}`);


}


/// 2 


const odds = Object.values(game.odds);

let total = 0;


for (const odd of odds) {

    total += odd;

}


total /= odds.length;


// console.log(total);




/// 3 






for (const [team, odd] of Object.entries(game.odds)) {

    let str = game[team] ? `Odd of ${game[team]} victory : ${odd}` : `Odd of draw ${odd}`;



    // console.log(str);


}




/// bonus 


let scorers = {};



for (const name of Object.values(game.scored)) {

    scorers[name]++ || (scorers[name] = 1);

}

scorers.player = 10;

scorers.nationality = "English";


// console.log(scorers);



// ---------------------------------  Challenge 3 --------------------------------- //




const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
]);



///  1


const events = [...new Set(gameEvents.values())];

console.log(events);



///  2



gameEvents.delete(64);


/// 3



console.log(`An event happened,on average, every ${90 / gameEvents.size} minutes`);




/// 4  



for(const [minute,event] of gameEvents){

	console.log(minute <= 45 ? `[FIRST HALF] ${minute}:${event}` : `[SECOND HALF] ${minute}:${event}`);


}