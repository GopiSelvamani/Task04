// Programs in anonymous function & IIFE 

// print odd number in an array
var arr = [10,20,30,40,50,60,70,80,90,100];
arr.forEach(num=>{
    if (num % 20!==0){
        console.log(num);
    }
});

// convert all the strings to title caps in a string array
function titleCase(str) {
    return str.toLowerCase().split(' ').map(function (word){
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
console.log(titleCase("printing machine not operating"));

// sum of all numbers in array
var arr4 = [111,222,333,444,555];
var sum = arr4.reduce((total, num) => total+num,0);
console.log(sum);

// Return all the prime numbers in an array
var arr10 = [1,2,3,4,5,6,7,8,9,10];
var primeNums = arr10.filter(num =>{
    if (num <= 1) return false;
    for ( var i=2; i <= Math.sqrt(num); i++){
        if (num % i === 0) return false;
    }
    return true;
});
console.log(primeNums);

// Return all the palindromes in an array
var def = ["come","level","up","javascript","files"];
var palindromes = def.filter(str =>{
    var reversed = str.split("").reverse().join("");
return str === reversed;
});
console.log(palindromes);

// Return median of two sorted arrays of the same size
(function (arr1, arr2) {
    function findMedian(arr) {
      var length = arr.length;
      var mid = Math.floor(length / 2);
      if (length % 2 === 0) {
        return (arr[mid - 1] + arr[mid]) / 2;
      } else {
        return arr[mid];
      }
    }
  
    var merged = arr1.concat(arr2);
    var sorted = merged.sort((a, b) => a - b);
    var median = findMedian(sorted);
    console.log(median);
  })([10, 30, 50], [20, 40, 60]);

  // Remove duplicates from an array
  (function (arr) {
    var uniqueArr = arr.filter(
      (value, index, self) => self.indexOf(value) === index
    );
    console.log(uniqueArr);
  })([11, 22, 33, 33, 44, 55, 55]);

  // Rotatae an array by k times
  (function (arr, k) {
    k = k % arr.length;
    let rotated = arr.slice(k).concat(arr.slice(0, k));
    console.log(rotated);
  })([1, 2, 3, 4, 5], 2);
