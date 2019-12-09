function XO(str) {

  var array = str.toLowerCase().split("");
  
  var x = [];
  var o = [];
  
  for(var i = 0; i < array.length; i++){
    if(array[i] == "x"){
      x.push(array[i]);
    }
    else if(array[i] == "o"){
      o.push(array[i]);
    }
  }
  
  var allX = x.length;
  var allO = o.length;
  if(allX === allO){
    return true;
  }
  else{
    return false;
  }
}

//alternative solution:
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

//alternative solution:
const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}