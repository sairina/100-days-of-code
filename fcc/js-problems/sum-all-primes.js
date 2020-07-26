/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
  let sum = 2;
  
  for (let i = 3; i <= num; i++){
    if(isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

sumPrimes(10);
//2, 3, 5, 7

/* using sieve of eratosthenes */

function sumPrimes(num) {
  //with sieve of eratosthenes
  
  let sieve = [];
  let primes = [];

  //make sieve
  for (let i = 0; i <= num; i++) {
    sieve.push(true);
  }
  
  //check sieve for multiples
  for (let i = 2; i <= num; i++) {
    for (let j = i * i; j <= num; j += i) {
      if (sieve[j]) {
        sieve[j] = false;
      }
    }
  }

  //push to array of primes and sum
  for (let i = 2; i <= num; i++) {
    if (sieve[i]) {
      primes.push(i);
    }
  }

  return primes.reduce((val, acc) => val + acc, 0);
}

sumPrimes(10); //2, 3, 5, 7

