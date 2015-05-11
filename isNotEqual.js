var isNotEqual = function(a, b){	//calling a variable and giving it a function with 2 parameters
  if(a!==b){											//conditional statement comparing 2 parameters for strict inequality
    return true;									//state what you want returned if condition is met
  }
  else{														//second half of condition assessed if condition is not met
    return false;									//state what you want returned if condition is not met
  }
}
isNotEqual('a','b');							//NO IDEA IT'S PURPOSE, removing doesn't seem to change anything
console.log(isNotEqual(2,5));			//directions for it to be read; need to specify variable and pass in arguments
