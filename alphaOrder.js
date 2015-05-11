var alphaOrder = function(a,b){						//call a variable giving it a function with two parameters
  if(a.toLowerCase() < b.toLowerCase()){	//conditional statment comparing 2 parameters; .toLowerCase bringing both values to same level
    return a + ',' + b;										//state what you want returned if condition is met
  }
  else{																		//second half of condition assessed if condition is not met
    return b + ',' + a;										//state what you want returned if condition is not met
  }
}
console.log(alphaOrder('zelda', 'Apple'));
console.log(alphaOrder('t','k'));
