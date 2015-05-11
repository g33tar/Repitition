var smallest = function(num){							//call the variable and give it a function
  var i = 0;															//define the iterator - your starting index
  small = num[0];													//small is whatever value is at index level 0 = so whatever value is at index 0 is considered "small" until proven otherwise.
  while(i<num.length){										//create a loop
    if(num[i]<small){										//input of condition
      small = num[i];											//small is whatever value at whatever level of index
    }
    i++;																	//incrementally up by 1 level of index
  }
	return small;														//return value established as small
}
var theSmallest = smallest([9,10,2,12]);		// call a variable with function and array of values
console.log(theSmallest);									// display smallest value from array
