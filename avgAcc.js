var avg = function(arr){					//call a variable and give it a function with single parameter of an array
  var result = 0;									//define the accumulator - you're starting with 0
  var i = 0;											//define the iterator - you're starting a 0 index
  while (i<arr.length){						//create your loop
    result = result + arr[i];			//re-define your accumulator - each loop will be adding on value from position in index to previous result
    i++														//incrementally up by 1 level of index
  }
  var avg = result/ arr.length;		//result is then divided by length of array to determine average
  return avg;											//return average
}
console.log(avg([10,7,4,2,]))			//display average for this variable's function's array
