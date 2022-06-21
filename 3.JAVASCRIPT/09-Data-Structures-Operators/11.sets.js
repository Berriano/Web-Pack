// -------------------------------------- Sets ------------------------------------ //
// ------------------------------- ---------------- ------------------------------- //



///  A Set is a  “set of values” (without keys), where each value may occur only once...
/// the data types can be mixed



//---------- Array --------//



const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Spagetti', 'Meatballs', 'Pasta']);


console.log(ordersSet);


// {'Pasta', 'Pizza', 'Spagetti', 'Meatballs'} only one occurance no matter how many in set





//---------- String --------//


/// A set breaks a string into separate values


const markSet =  new Set('Mark');


console.log(markSet);


//  {'M', 'a', 'r', 'k'}





//----------  Size  --------//


/// get the size of a set


console.log(ordersSet.size);

// 4


console.log(markSet.size);

// 4





//----------  has()  --------//


/// get booleans using has()



console.log(ordersSet.has('Pizza'));

// true

console.log(ordersSet.has('Burger'));

// false




//----------  add()  --------//


/// add to the end of a set



ordersSet.add('Burger');


console.log(ordersSet);


// {'Pasta', 'Pizza', 'Spagetti', 'Meatballs', 'Burger'}




//---------- delete() --------//


/// to delete from the set



ordersSet.delete('Burger');


console.log(ordersSet);


// {'Pasta', 'Pizza', 'Spagetti', 'Meatballs'}




//----------  clear()  --------//


/// to empty the set


// ordersSet.clear();

// {size: 0}





/// Looping a set


for(const order of ordersSet){

	///? console.log(order);

} 


// Pasta Pizza Spagetti Meatballs





/// use the set on an array to remove the duplicates

//! a whole football team, but just want the positions


const footyTeam = ['Gk','Def','Def','Def','Def','Mid','Mid','Mid','Fwd','Fwd','Fwd'];




/// get just the positions of a team using a set method


const footyPositions = new Set(footyTeam);


console.log(footyPositions);


// {'Gk', 'Def', 'Mid', 'Fwd'}




/// to put them into an array, use spread operator


const footyArrPositions = [...new Set(footyTeam)];


console.log(footyArrPositions);


//  ['Gk', 'Def', 'Mid', 'Fwd']



/// get the size


console.log(footyPositions.size);


// 4







