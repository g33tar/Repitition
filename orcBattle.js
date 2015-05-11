var orcA = {																													//first object created -curly brackets denoting "object"
  name: 'Wesley',																											//contains three properties and corresponding values ending with comma's to
  strength: 255,																											//separate properties out
  secretMove: 'the Splish Splash'
};
var orcB ={																														//second object created - also noted with curly brackets
  name: 'Dudley',																											//also containing three properties and corresponding values
  strength: 15,
  secretMove: 'the Quake and Run'
};

var fight = function(A, B){																						//variable now called and given function with two parameters
  if(A.strength>B.strength){																					//conditional statement comparing two parameters values referenced from objects
    return A.name + ' wins with his secret move of ' + A.secretMove;	//state what you want returned if condition is met
  }
  else{																																//second half of condition assessed if condition is not met
    return B.name + ' wins with his secret move of ' + B.secretMove;	//state what you want returned if condition is not met
  }
}

console.log(fight(orcA, orcB));																				//directions for it to be read; variable needs to be specified and variables
																																			//each object passed in as arguments.
