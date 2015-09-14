/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

// function sumOfArray(arr){
    
// }

// console.assert(sumOfArray([1, 2]) === 3);
// console.assert(sumOfArray([]) === 0);
// console.assert(sumOfArray([1, 2, 3]) === 6);
// console.assert(sumOfArray([10, 9, 8]) === 27);

/**
 * PART 1
 *
 * Write a function that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

function sum(a, b){
    return a + b;
}

console.assert(sum(8, 11) === 19);
console.assert(sum(4, 100) === 104);

/**
 * PART 2
 *
 * write a function that finds the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

function GCD(a, b){
    var divisor = 1;
    var maxFactor = 1;
        while(divisor<=a && divisor<=b){
            if(a%divisor===0 && b%divisor===0){
                maxFactor=divisor;
            }
            
        divisor++;
        }
        return maxFactor;
    }
        

console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);    


/**
 * PART 3
 *
 * write a function that prints out the Least Common Multiple of two numbers
 */

function LCM(a, b){
    var multiple = a*b;
    var leastMultiple;
        if(a===0)
            return b;
        if(b===0)
            return a;
        else 
        while(multiple >= a && multiple >= b){
            if(multiple%a===0 && multiple%b===0){
              leastMultiple=multiple;  
            }
            multiple--;
        }
        return leastMultiple;
    }

console.assert(LCM(10,10) === 10)
console.assert(LCM(2,5) === 10)
console.assert(LCM(3,6) === 6)
console.assert(LCM(0,1) === 1)

/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
 */

function fizzbuzz(N){
    var integer = 0
    var result = ""
    while(integer < N){
    	integer += 1;
    	if(integer%3!==0 && integer%5!==0) {
    		result = result + ".";
    	}
    	else if(integer%3===0 && integer%5!==0){
    		result = result + "fizz";
    	}
    	else if(integer%5===0 && integer%3!==0) {
    		result = result + "buzz";
    	}
    	else {
    		result = result + "fizzbuzz";
    	}
    }
    return result;
}

console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")









