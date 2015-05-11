var sub = function(arr){				//calling the variable and giving it a function with an array parameter
 var result = 0;								//define the accumulator- you're starting at 0
 var i = 0;											//define the iterator - you're starting at index 0
  while (i< arr.length){				//create the loop
    result = result - arr[i];		//re-define accumulator through each loop - each loop will be subtracting value from position in index from previous result
    i++;												//incrementally up by 1 level of index
  }
			return result;						//after loop finishes return accumulator - subtracted total of each round of index values
}
var myTotal = sub([5,6,7]);			//variable given with function with an array of numbered values
console.log(myTotal);						//display subtracted total
