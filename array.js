// CHANGE A FOR LOOP TO A WHILE LOOP

// for (var i=0; i<10; i++){
//   console.log(i);
// }
//
// function rewrite (){
//     var i = 0;
//     while (i < 10) {
//     console.log(i);
//     i++;
//   };
// }


// REWRITE FOR WHILE LOOP TO FOR LOOP

// var a = 10;
// while (a >0) {
//   console.log(a);
//   a = a -1;
// }
//
// for (var a = 10; a > 0; a--){
//   console.log(a);
// }

// DUPLICATE ARRAY - returns an array
//
// function mergeArray () {
//   var array1 = [1 ,2 ,3];
//   var array2 = [2, 30, 1];
//   var concatArray = array1.concat(array2);
//   var unique = concatArray.filter(function(elem, index, self){
//     return index == self.indexOf(elem);
//   })
//   return unique;
// }
//
//
// DUPLICATE ARRAY: returns Object
//
// function mergeArray () {
//   var array1 = [1 ,2 ,3];
//   var array2 = [2, 30, 1];
//   var concatArray = array1.concat(array2);
//   console.log(concatArray);
//   var something = new Set(concatArray)
//   console.log(something);
//   console.log(typeof something);
// }

// PRE-FILL

//  function fillArray (x, y){
//   var amount = []
//   for (var index = 0; index<x; index++){
//     amount.push(y);
//   };
//   return amount;
// };

//CLEAR function

// var array = [58, "", "abcd", true, null, false, 0]
//
// function filterArrayValues (array) {
//     var unique = array.filter(function(elem, index){
//       return elem != 0 && elem != undefined;
//     })
//     return unique;
//   };


//SUM TARGET

// function findPair(x, y){
//
// }



// ARRAYS OF NUMBERS
//
// HIGHEST NUMBER
//
// function highestNumber (array) {
//     var sortedArray = array.sort();
//     return sortedArray.pop()
// }
//
// LOWEST NUMBER
//
// function lowestNumber (array) {
//     var sortedArray = array.sort();
//     return sortedArray.shift()
// }
//
// CLOSEST TO ZERO (SKIPPED)


// var array = [ 2, 1, -5, 7, -8];
// function distanceFromZero(x){
//   if (x>=0){
//     return x;
//   } else{
//     return 0-x;
//   }
// }
//
//
//
//
// function smallestNumber (array) {
//   var smallestNumber;
//   array.forEach(function(element){
//     if (element >= 0 && element < smallestNumber){
//       var smallestNumber = element;
//       console.log(element);
//     } else{
//       console.log(0 - element);
//     }
//   })
// }

//SUM OF AN ARRAY


// function sum (array) {
//   var start = 0;
//   array.forEach(function(element) {
//     start += element;
//   });
//   return start;
// }

//MEAN VALUE

// function mean (array) {
//   var start = 0;
//   array.forEach(function(element) {
//     start += element;
//   });
//   var end = start/array.length;
//   return end;
// }


//ORDER THE SIBLINGS

// var siblings = ["David", "Rob", "Liana", "Debbie", "Alli", "Danny"]
// var parents = ["Janet", "Howard", "Ted", "Ceil"]
//
// function siblingOrder () {
//   var siblings = ["David", "Rob", "Liana", "Debbie", "Alli", "Danny"]
//   var parents = ["Janet", "Howard", "Ted", "Ceil"]
//   console.log(siblings.sort());
//   console.log(parents.sort().reverse());
//   console.log(siblings.concat(parents).sort());
//   console.log(siblings.concat(parents).sort().reverse());
// }
//
// function callName (name) {
//   var siblings = ["David", "Rob", "Liana", "Debbie", "Alli", "Danny"];
//   var parents = ["Janet", "Howard", "Ted", "Ceil"];
//   var family = siblings.concat(parents);
//   var familyMember = family.filter(function(element) {
//     return name === element;
//   })
//   return familyMember;
// };


// ADVANCED FUNCTIO NS

// function evenElements (array){
//   array.forEach(function())
//   var evens = array.filter(function(element){
//     return element%2 === 0;
//   });
//   return evens;
// }
