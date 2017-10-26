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

//Math.round()

//.reverse()

//.replace()

//.repeat()

//.reduce()

//Math.random()

//.parseInt()

//.find()
// The find() method returns a value in the typed array, if an element satisfies the provided testing function. Otherwise undefined is returned. TypedArray is one of the typed array types here.
console.log('.find()')
[1,2,3].find(function(element){
    return element > 2;
})

//.map()

//typeof

//isNaN()

//.includes()

//.toLowerCase()
//The toLowerCase() method returns the calling string value converted to lower case.
'StRInG'.toLowerCase()

//.toUpperCase()
//The toUpperCase() method returns the calling string value converted to upper case.
'StRInG'.toUpperCase()

//.indexOf()

//.push()

//.splice()
//The splice() method changes the contents of an array by removing existing elements and/or adding new elements. It returns an array of the deleted elements.
/*array.splice(start)
array.splice(start, deleteCount)
array.splice(start, deleteCount, item1, item2, ...)*/

[12,13,14,15,161,7,98,54].splice(3, 2, 'babies', 'forSale')

//.match()

//.pop()

//.unshift()
//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
[12,12,12,12,12].unshift('babiesForSale', 'mommiesNotForSale');

//.shift()

//.pop()

//.push()

