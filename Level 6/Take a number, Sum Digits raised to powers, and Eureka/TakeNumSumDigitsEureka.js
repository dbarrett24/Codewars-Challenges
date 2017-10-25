function sumDigPow(a, b) {
    var eurekaNums = [];
        
    for(var i = a; i <= b; i++){
      let sum = 0;
      
      for (let j = 0; j <= String(i).length; j++) {
        sum += Math.pow(parseInt(String(i)[j]), j+1);  
        if (sum == i){
          eurekaNums.push(i)
        };
      }
    }
    if(eurekaNums[0]){
      return eurekaNums;
    } else{
      return [];
    }
    
  }


//tests
// sumDigPow(1, 10);
// sumDigPow(1, 100);