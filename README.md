Defining an Anonymous Function:

     * When a function is defined, you often give it a name and then invoke it using that name, like so.
   
        foo();
          function foo(){
            // ...
           }

      * Supplying an Anonymous Function as a Parameter to Another Function.

           Some functions may accept a reference to a function as a parameter. These are sometimes referred to as
       "dependency injections" or "callbacks", because it allows the function your calling to "call back" to your code, giving
        you an opportunity to change the way the called function behaves. For example, the Array object's map function
        allows you to iterate over each element of an array, then build a new array by applying a transform function to each
        element.
            var nums = [0,1,2];
            var doubledNums = nums.map( function(element){ return element * 2; } ); // [0,2,4].

Defining an Arrow function:

       * In JavaScript, functions may be anonymously defined using the "arrow" (=>) syntax, which is sometimes referred to
         as a lambda expression due to Common Lisp similarities.
         The simplest form of an arrow function has its arguments on the left side of => and the return value on the right
         side:

         item => item + 1 // -> function(item){return item + 1}.

       * An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences 
         and deliberate limitations in usage.

       * Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
       * Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have 
         access to the new.target keyword.
       * Arrow functions cannot use yield within their body and cannot be created as generator functions.    

         const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

         console.log(materials.map((material) => material.length));
         // Expected output: Array [8, 6, 7, 9]

Questions:

         Do the below programs in anonymous function & IIFE.

            1.Print odd numbers in an array
            2.Convert all the strings to title caps in a string array
            3.Sum of all numbers in an array
            4.Return all the prime numbers in an array
            5.Return all the palindromes in an array
            6.Return median of two sorted arrays of the same size.
            7.Remove duplicates from an array
            8.Rotate an array by k times


        Do the below programs in arrow functions.

           1.Print odd numbers in an array.
           2.Convert all the strings to title caps in a string array.
           3.Sum of all numbers in an array.
           4.Return all the prime numbers in an array.
           5.Return all the palindromes in an array.
 

IIFE defining:(Immediately Invoked Function Expressions).

          Sometimes you don't want to have your function accessible/stored as a variable. You can create an Immediately
        Invoked Function Expression (IIFE for short). These are essentially self-executing anonymous functions. They have
        access to the surrounding scope, but the function itself and any internal variables will be inaccessible from outside.
        An important thing to note about IIFE is that even if you name your function, IIFE are not hoisted like standard
        functions are and cannot be called by the function name they are declared with.
        
          (function() {
          alert("I've run - but can't be run again because I'm immediately invoked at runtime,
          leaving behind only the result I generate");
          }());
  
