'use strict';

const game = {
	team1: 'Bayern Munich',
	team2: 'Borrussia Dortmund',
	// x:"draw",
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
	'Hummels'],
	date: 'Nov 9th, 2037',
	odds: {
	team1: 4.33,
	x: 2.55,
	team2: 2.5,
	},
	};


/*
 ///? 1. Create one player array for each team


	const [players1, players2] = game.players; //! destructure arrays

	// console.log(players1, players2);


///? 	2. For Bayern Munich (team 1) create one variable ('gk') with the
///?	goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
///?	field players.

const [gk, ...fieldPlayers] = players1; //! use destructured players1

// console.log(gk, fieldPlayers);


///? 3. Create an array 'allPlayers' for all players of both teams (22 players)

const allPlayers = [...players1, ...players2]; //! spread both players arrays into 1

// console.log(allPlayers);


///? 4. Create a new array ('players1Final') containing all the original team1 players
///? plus 'Thiago', 'Coutinho' and 'Perisic'

const playersFinal = [...players1, 'Thiago', 'Coutinho' ,'Perisic'];

// console.log(playersFinal);


///? 5. Based on the game.odds object, create one variable for each odd 
///? (called	'team1', 'draw' and 'team2')

const {team1,x:draw,team2} = game.odds;

console.log(team1,draw,team2);

///? 6. Write a function ('printGoals') that receives an arbitrary number of player
///? names (not an array) and prints each of them to the console, along with the
///? number of goals that were scored in total (number of player names passed in)

const printGoals = function(...players){
console.log(`Players names: ${players}  
Goals scored:${players.length}`);
}

printGoals( 'Davies', 'Muller', 'Lewandowski' , 'Kimmich');
printGoals( 'Davies', 'Kimmich');
printGoals(...game.scored);



///? 7. The team with the lower odd is more likely to win. Print to the console which
///? team is more likely to win, without using an if/else statement or the ternary
///? operator.



team1 > team2 && draw > team2  && console.log('team2 is more likely to Win');
team1 < team2 && team1 < draw && console.log('team1 is more likely to Win');
draw < team1 && draw < team2 && console.log('draw more likely');
*/



/// Challenge 2 : Data structures  
/*


///? 1.1. Loop over the game.scored array and print each player name to the console,
///? 			along with the goal number (Example: "Goal 1: Lewandowski")



// scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels']

const goals = Object.entries(game.scored);

// console.log(goals);

for (const [goalNum,scorer] of goals){

	console.log(`Goal ${+goalNum + 1}: ${scorer}`);
}



///? 2. Use a loop to calculate the average odd and log it to the console (We already
///?		 studied how to calculate averages, you can go check if you don't remember)

const odds = Object.values(game.odds);

// console.log(odd);



let total = 0;

for (const odd of odds){

total += odd;

}

let average = total/odds.length;

console.log(average);


///? 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:

//  Odd of victory Bayern Munich: 1.33
//  Odd of draw: 3.25
//  Odd of victory Borrussia Dortmund: 6.5

///? Get the team names directly from the game object, don't hardcode them 
///? (except for "draw").


const winners = Object.entries(game.odds);
console.log(winners);

for (const [team,odd] of winners){

console.log(game[team]);
	console.log(game[team] 

		? `Odd of victory  ${game[team]} : ${odd}`
		: `odd of draw ${odd}`);


}

*/


///?  4. Bonus: Create an object called 'scorers' which contains the names of the
///?  	players who scored as properties, and the number of goals as the value. 

const players = Object.values(game.scored);



let scorers = {};

for ( const player of players){

			if(scorers[player]){

//!	 if scorers include current player

			scorers[player]++;

//!	then add 1
	}

			else scorers[player] = 1;

//! else scorers.player = 1

}

// console.log(scorers);


/// Challenge 3


const gameEvents = new Map(

	[
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

	]
	
);


///? 		1. Create an array 'events' of the different game events that happened (no
///? 			duplicates)



const events = [...new Set(gameEvents.values())];

console.log(events);



///? 2. After the game has finished, is was found that the yellow card from 
///? 		minute 64 was unfair. So remove this event from the game events log.



gameEvents.delete(64);

console.log(gameEvents);



///? 3. Compute and log the following string to the console: "An event happened, on
///?		 average, every 9 minutes" (keep in mind that a game has 90 minutes)


console.log(`An event happened on average every ${90/gameEvents.size} minutes`);



///?	4. Loop over 'gameEvents' and log each element to the console, marking
///?	 	 whether it's in the first half or second half (after 45 min) of the game,
///? 		 like this:[FIRST HALF] 17: ⚽ GOAL


for (const [key,value] of gameEvents){
key < 45 ? console.log(`[FIRST HALF] ${key} : ${value}`) 
				 : console.log(`[SECOND HALF] ${key} : ${value}`);
	
}