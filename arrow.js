// Print odd numbers in an array
(function (arr) {
    for (var num of arr) {
      if (num % 2 !== 0) {
        console.log(num);
      }
    }
  })([21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);

  // Convert all the strings to title caps in a string array
  (function (arr) {
    function isPrime(num) {
      if (num <= 1) return false;
      for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    let primeNums = arr.filter((num) => isPrime(num));
    console.log(primeNums);
  })([91, 92, 93, 94, 95, 96, 97, 98, 99, 100]);

  // Sum of all numbers in an array ( using forEach method)
var arr = [105,210,320,430,540];
let sum = 0;
arr.forEach( num => {
  sum += num;
})

console.log(sum); 

// Return all the prime numbers in an array
var isPrime = num => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    var i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    
    return true;
  };
  
  var getPrimes = arr => arr.filter(isPrime);
  var numbers = [31, 42, 53, 64, 75, 86, 97, 88, 19, 101];
var primes = getPrimes(numbers);
console.log("Prime numbers in the array:", primes);

// Return all the palindromes in an array
var isPalindrome = str => {
    var cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    var reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  };
  
  var getPalindromes = arr => arr.filter(isPalindrome);
  
  // Example usage:
  var words = ["level", "racecar", "hello", "madam", "world", "deified"];
  var palindromes = getPalindromes(words);
  console.log("Palindromes in the array:", palindromes);