var isLessThan = function(num){ //calling the variable and giving it a function with a parameter
  if(num<25){ 									//conditional statment assessing parameter compared to specific value
    return true;								//state what you want returned if condition is met
  }
  else{													//second half of condition assessed if condition is not met
    return false;								//state what you want returned if condition is not met
}
console.log(isLessThan(45));		//directions for it to be read; need to specify variable name and pass in argument
