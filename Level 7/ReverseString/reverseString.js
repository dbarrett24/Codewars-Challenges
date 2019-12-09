// Input: "I hate whiteboard problems"
// Output: "I etah draobetihw smelborp"

function reverseWords(str){
    var result = [];
    var broken = str.split(" ");
    console.log("Split by spaces",broken)
   
    for(var i = 0; i < broken.length; i++){
      var reversedWord = broken[i].split('').reverse().join('');
      result.push(reversedWord);
      
    }
    
    return result.join(' ');
    
  }
  reverseWords("I hate whiteboard problems")