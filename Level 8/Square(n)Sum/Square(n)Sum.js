function squareSum(numbers){
    for(var i = 0; i < numbers.length; i++){
      numbers[i] = numbers[i] * numbers[i];
    }
    let result =  numbers.reduce(function(a, b){
      return a + b;
    });
    return result;
  }

  //Tests
  squareSum([1, 7.25, 2]);
  squareSum([7, 4, 2, 5]);
  squareSum([8, 2, 0, 24]);
  squareSum([3, 4]);