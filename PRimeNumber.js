function isprime(num) {
      if (num <= 1) {
            return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                  return false;
            }
      }
      return true;

}
console.log(isprime(5));
let a = 20;
console.log(Math.sqrt(10));