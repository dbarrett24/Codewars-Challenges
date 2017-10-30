//.findIndex()
//The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
function isBigEnough(element) {
    return element >= 15;
  }
  [12, 5, 8, 130, 44].findIndex(isBigEnough); 
  // index of 4th element in the Array is returned,
  // so this will result in '3'


//.filter()
//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
[12,5,8,120,44,65].filter(function(element){
    return element > 12;
})


//.valueof()
//The valueOf() method returns the primitive value of the specified object.  example: object.valueOf()
/*JavaScript calls the valueOf method to convert an object to a primitive value. You rarely need to invoke the valueOf method yourself;
 JavaScript automatically invokes it when encountering an object where a primitive value is expected.*/
var object = {
    babies: 'forSale',
    mommies: 'notForSale'
}
object.valueOf()


//.split()
/*The split() method splits a String object into an array of strings by separating the string into substrings,
 using a specified separator string to determine where to make each split.*/
'string'.split('t');
'string'.split('');
'string with multiple words'.split(' ');


//.sort()
/*The sort() method sorts the elements of an array in place and returns the array. 
The sort is not necessarily stable. The default sort order is according to string Unicode code points.*/


//sorts by numbers, then words alphabetically
[12,15,'babies', 75,'autographs', 65].sort();


//.slice()
/*The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).
The original array will NOT be modified.

arr.slice()
arr.slice(begin)
arr.slice(begin, end)

if 'begin' is not defined, then it starts at index 0*/

[12,15,'babies', 75,'autographs', 65].slice(0,1);
var array = [12,15,16.55,21,42,'babies'];
array.slice(0,2)
console.log('original array unaffected', array)



//array.length
//returns the number of ITEMS in an array. Not based on 0 indexing, just returns the total number of items.

//get the last item in an array
//array[array.length-1]



//Math.round()
//The Math.round() function returns the value of a number rounded to the nearest integer.
Math.round(24.25);
Math.round(array[2]);


//.reverse()
//The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
//CAN'T be used on a string. ONLY arrays.
[12,15,4,78,65,21,'babies'].reverse();


//string.replace()
/*The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
 The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.

 SYNTAX**
str.replace(regexp|substr, newSubstr|function)*/
'babies'.replace('ies', 'mas');
//returns: 'babmas'


//string.repeat()
/*The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called,
 concatenated together.
 
 syntax: 
 * str: String
 * count: Number

let resultString = str.repeat(count);*/

'babies'.repeat(3)
//returns 'babiesbabiesbabies'



//.reduce()
/*The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.*/
/*syntax
array.reduce(function(accumulator, currentValue){
    
}, initialValue)*/

array.reduce(function(acc, currVal){
    return acc + currVal;
},2)

array.reduce(function(acc, currVal){
    return acc * currVal;
})


//Math.random()
/*The Math.random() function returns a floating-point, pseudo-random number in the range [0, 1);
that is, from 0 (inclusive) up to but not including 1 (exclusive), which you can then scale to your desired range.
The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.*/

Math.random()

//parseInt()
//The Number.parseInt() method parses a string argument and returns an integer of the specified radix or base.
parseInt('24');
parseInt('24', 10);
parseInt('24', 26); //second param is a "radix"

//numObj.toString()
//The toString() method returns a string representing the specified Number object.

//Math.pow()
//The Math.pow() function returns the base to the exponent power, that is, baseexponent.
//Math.pow(base, exponent)
Math.pow(7,2);


//.find()
// The find() method returns a value in the typed array, if an element satisfies the provided testing function. Otherwise undefined is returned. TypedArray is one of the typed array types here.
console.log('.find()')
[1,2,3].find(function(element){
    return element > 2;
})


//.map()
//The map() method creates a new array with the results of calling a provided function on every element in the calling array.
[12,15,'babies',32,84].map(function(element){
    return element > 32;
})

[12,15,'babies',32,84].map(function(element){
    return element + 32;
})

[12,15,'babies',32,84].map(Math.sqrt)



//typeof
//The typeof operator returns a string indicating the type of the unevaluated operand.
typeof 24;
typeof 'babies';
typeof true;
typeof {
    babies: function(things){
        return things
    }
}



//isNaN()
//The isNaN() function determines whether a value is NaN or not.
isNaN('string');
isNaN(24);



//.includes()
//The includes() method determines whether an array includes a certain element, returning true or false as appropriate.
[12,15,14,18,16,'babies'].includes('babies');
[12,15,14,18,16,'babies'].includes('strong');
[12,15,14,18,16,'babies'].includes(14);
[12,15,14,18,16,'babies'].includes('14');



//.toLowerCase()
//The toLowerCase() method returns the calling string value converted to lower case.
'StRInG'.toLowerCase()



//.toUpperCase()
//The toUpperCase() method returns the calling string value converted to upper case.
'StRInG'.toUpperCase()



//.indexOf()
//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
[12,15,16,17].indexOf(15);
[12,15,16,17].indexOf(15.5);
[12,15,16,17].indexOf(17);



//.splice()
//The splice() method changes the contents of an array by removing existing elements and/or adding new elements. It returns an array of the deleted elements.
/*array.splice(start)
array.splice(start, deleteCount)
array.splice(start, deleteCount, item1, item2, ...)*/

[12,13,14,15,161,7,98,54].splice(3, 2, 'babies', 'forSale')

//string.match()
//The match() method retrieves the matches when matching a string against a regular expression.
//use a RegEx as the param to specify what you're looking for;


//.pop()
//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
[12,15,16,18,17,'babies'].pop();



//.push()
//adds an item to the end of an array.



//.unshift()
//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
[12,12,12,12,12].unshift('babiesForSale', 'mommiesNotForSale');



//.shift()
//The shift() method removes the first element from an array and returns that element. This method changes the length of the array.
//Note*** like POP but at the beginning of the array
[12,13,14,51,64].shift();


