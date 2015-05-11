var largest = function(num){							//call the variable and give it a function
  var i = 0;															//define the iterator - your starting index
  large = num[0];													//large is whatever value is at index level 0 = so whatever value is at index 0 is considered "large" until proven otherwise.
  while(i<num.length){										//create a loop
    if(num[i]> large){										//input of condition -if index value > large, then
      large = num[i];											//large is redefined to whatever value at whatever level of index has been assessed as large
    }
    i++;																	//incrementally up by 1 level of index
  }
	return large;														//return value established as large
}
var theLargest = largest([9,10,11,12]);		// call a variable with function and array of values
console.log(theLargest);									// display largest value from array
