checkPalindrom('wordthatwillbechecked');					//no idea what this line is for, and when removed, it still runs
var checkPalindrom = function(str){								//called a variable given a function with 1 parameter
  if (str === str.split('').reverse().join('')){	//conditional statement comparing initial parameter with the 'split' apart, reversed and rejoined version of the original parameter for strict equality
    return 'This is a palindrom';									//state what you want returned if condition is met
  }
  else{																						//second half of condition assessed if condition is not met
    return 'This is not a palindrom';							//state what you want returned if condition is not met
  }
}
console.log(checkPalindrom('zoom'));							//directions to be read; need to specify variable and pass in single argument
