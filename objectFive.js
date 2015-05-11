var Five = {											//calling a varible with an object
  uppercase: function(){					//there are nine properties within the object, each with an undefined function
    return 'FIVE';								//to return a specific value
  },
  lowercase: function(){
  	return 'five';
	},
  upHigh: function(){
    return '⁵';
  },
  downLow: function(){
    return '₅';
  },
  roman: function(){
    return 'V';
  },
  morseCode: function(){
    return 'di-di-di-di-dit';
  },
  negative: function(){
    return -5;
  },
  loud: function(){
    return 'FIVE';
  },
  smooth: function(){
    return 'S';
  }
}
console.log(Five.uppercase());	//directions to read each properties value for the variable Five
console.log(Five.lowercase());
console.log(Five.upHigh());
console.log(Five.downLow());
console.log(Five.roman());
console.log(Five.morseCode());
console.log(Five.negative());
console.log(Five.loud());
console.log(Five.smooth());
