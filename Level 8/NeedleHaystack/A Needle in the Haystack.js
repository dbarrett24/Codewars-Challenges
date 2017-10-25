//input or tests
let haystack = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'];

//Solution
function findNeedle(haystack) {
    for(var i = 0; i < haystack.length; i++){
      if(haystack[i]=== "needle"){
        return "found the needle at position " + [i];
      }
    }
}

//Alternative Solution:
function findNeedle2(haystack){
  return "found the needle at position " + haystack.indexOf('needle');
}

//Run the functions:
findNeedle(haystack);
findNeedle2(haystack);