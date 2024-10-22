// function AddDigits(num) {
//       let sum = 0;
//       while (num > 0) {
//             lastNumber = num % 10;
//             sum += lastNumber;
//             num = Math.floor(num / 10);
//       }
//       return sum;
// }
// console.log(AddDigits(234));
// function AddingDigitsofNumber(number) {
//       let sum = 0;
//       while (number > 0) {
//             LastDigit = number % 10;
//             sum += LastDigit;
//             number = Math.floor(number / 10);
//       }
//       return sum;
// }
// console.log(AddingDigitsofNumber(4567));

// function prabhakar(num) {
//       let sum1 = 0;
//       while (num > 0) {
//             LastNumber = num % 10;
//             sum1 += LastNumber;
//             num = Math.floor(num / 10);
//       }
//       return sum1;
// }
// console.log(prabhakar(2345));
// function addnumber(num) {
//       let sum = 0;
//       while (num > 0) {
//             lastNumber = num % 10;
//             sum += lastNumber;
//             num = Math.floor(num / 10);
//       }
//       return sum;
// }
// console.log(addnumber(12345));
function prabhakar(number1) {
      let sum = 0;
      let lastNumber;
      while (number1 > 0) {
            lastNumber = number1 % 10;
            sum += lastNumber;
            number1 = Math.floor(number1 / 10);
      }
      return sum;

}
console.log(prabhakar(1234));
function prabha(a) {
      let sum = 0;
      let LastDigit;
      while (a > 0) {
            LastDigit = a % 10;
            sum = sum + LastDigit;
            a = Math.floor(a / 10);
      }
      return sum;
}
console.log(prabha(123));