'use strict';

/// JS fundamentals 2 


// ----- challenge 3 ----- //


/// add function as a property: function and use this.keyword BUT...
/// set new property by return this.property = execution code block


const mark = {
			fullName:"Mark Miller",
			mass:78,
			height: 1.69,

///                                                  /// 

			calcBMI: function(){
			return this.BMI = this.mass / this.height ** 2
			}

///                                                   /// 

};


const john = {
			fullName:"John Smith",
			mass:92,
			height: 1.95,

///                                                  /// 

calcBMI: function(){
	return this.BMI = this.mass / this.height ** 2
	}

///                                                   /// 

}

/// then call the function to add the property,
/// with the correct computed value

mark.calcBMI();
john.calcBMI();

/// check object for added prop:value

///? console.log(mark);
///? console.log(john);

console.log(`${mark.BMI > john.BMI ? "Marks" : "Johns"} BMI(${mark.BMI > john.BMI 
							? Math.trunc(mark.BMI) :Math.trunc(john.BMI)}) 
is higher than ${Math.trunc(mark.BMI) > Math.trunc(john.BMI) 
							? "Johns" : "Marks"} BMI(${mark.BMI < john.BMI ? Math.trunc(mark.BMI) : Math.trunc(john.BMI)}) `);



// ---- challenge 4 ---- //


/// array of values

const bills = [45,50,55,60,65,100,150,200,300,350,400];

/// empty array to push calculatios to

const totals = [];

/// function for working out tip

const calcTip = bill => bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

/// loop for calculating tip, then adding to bill for total
/// then pushing to total array
for(let i=0;i<bills.length;i++){

	totals.push(calcTip(bills[i])+bills[i])
}

///? console.log(totals);

/// Bonus

///? 1,2,3.

/// create a function to pass any array to find average

const calcAverage = (arr) => arr.reduce((a,b) => a + b)/arr.length;

///? console.log(calcAverage(totals));



// -------------------------- Developer Skills --------------------------------- //


///? Challenge 1

const tempArr = [17,21,23]
let str ='';

for (let i=0;i<tempArr.length;i++){

	/// 1st iteration ...17 
	/// 2nd iteration ...17...21
	/// 3rd iteration ...17... 21...23

	///( str doesnt reset to '',because it declared outside loop)

	str = str +  `...${tempArr[i]}oC in ${+[i]+1} days`;

}

/// finally ...17...21...23...
///? console.log(str + '...');

