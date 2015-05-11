var logAll = function(num){		//call variable and give function with a single parameter of an array
  i=0													//define iterator, ie reference the starting index position
  while(i<num.length){				//create the loop
    console.log(num[i]);			//display each sequencial index value
 		i++												//incrementally up by 1
  }
}
logAll([1,2,3,4,5])						//variable with function of an array of 5 values
