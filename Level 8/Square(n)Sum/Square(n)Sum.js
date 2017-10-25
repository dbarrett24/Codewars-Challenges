function squareSum(numbers){
    for(var i = 0; i < numbers.length; i++){
      numbers[i] = numbers[i] * numbers[i];
    }
    let result =  numbers.reduce(function(a, b){
      return a + b;
    });
    return result;
  }

//alternative solution:
function square_sum(numbers){
    return numbers.reduce(function(sum, n){
        return (n*n) + sum;
    }, 0)
}



//alternative solution:
function squareSum2(numbers){
    return numbers.map(square).reduce(sum);
}
function square(number){
    return number * number;
}
function sum(firstNum, secondNum){
    return firstNum + secondNum;
}



//alternative solution:
function squareSum3(numbers){
    numbers.forEach(function(n){
        sum += n * n;
    });
    return sum;
}

  //Tests
  squareSum([1, 7.25, 2]);
  squareSum([7, 4, 2, 5]);
  squareSum([8, 2, 0, 24]);
  squareSum([3, 4]);