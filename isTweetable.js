var isTweetable = function(a){				//calling a variable and giving it a function and single parameter
  if(a.length<144){										//conditional statment assessing parameter's length compared to tweet max characters
    return 'This is tweetable.';			//state what you want returned if condition is met
  }
  else{
    return 'This is not tweetable';	//second half of condition assessed if condition is not met
  }
}
console.log(isTweetable(345));		//directions for it to be read; need specific varible name and to pass in argument
