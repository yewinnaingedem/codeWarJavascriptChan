// code War Changelle javascript
// function isPrime(num) {
//   if (num <= 0) {
//     return false ;
//   }
//   if (Math.sqrt(num)) {
//     return Math.sqrt(num);
//   }
//   if (num % 2 == 0) {
//     return true ;
//   }
//   return false ;
// }
function isPrime(num) {
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
console.log(isPrime(2));

// is_prime(2)  /* true  */
// is_prime(-1) /* false */

// console.log(isPrime(73));
