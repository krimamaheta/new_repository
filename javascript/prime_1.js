function isPrime(num)
 {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function findNthPrime(n) {
    if (n === 1) return 2; // The first prime number is 2
  
    let count = 1;
    let candidate = 3;
  
    while (count < n) {
      if (isPrime(candidate)) {
        count++;
      }
  
      if (count < n) {
        candidate += 2; // Move to the next odd number
      }
    }
  
    return candidate;
  }
  
  // Example usage:
  const nthPrime = 9;
  const result = findNthPrime(nthPrime);
  
  console.log(`The ${nthPrime}th prime number is: ${result}`);