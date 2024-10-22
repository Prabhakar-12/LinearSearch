//Sumof natural number
function SumofNaturalNumber(num) {
      let sum = 0;
      for (let i = 0; i <= num; i++) {
            sum += i;
      }
      return sum;
}
console.log(SumofNaturalNumber(50));
//Using Formula
function SumofNaturalNumber2(num) {
      return num * (num + 1) / 2;
}
console.log(SumofNaturalNumber2(100));
//Adding digits of the number
function addDigitsOFNumber(num) {
      let sum = 0;
      while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
      }
      return sum;
}
console.log(addDigitsOFNumber(2344));
//Counting number of digits
function countDigits(num) {
      num = Math.abs(num);
      let count = 0;
      do {
            count++;
            num = Math.floor(num / 10)
      } while (num > 0);
      return count;
}
console.log(countDigits(436));
function coundigits(num) {
      var num = Math.abs(num);
      let count = 0;
      do {
            count++;
            num = Math.floor(num / 10);
      } while (num > 0); {
            return count;
      }
}
console.log(coundigits(734));

//ppolindrome number
function Polindrome(x) {
      let copyNum = x;
      let reversenum = 0;
      while (copyNum > 0) {
            const lastDigit = copyNum % 10;
            reversenum = reversenum * 10 + lastDigit;
            copyNum = Math.floor(copyNum / 10);
      }
      console.log(copyNum);
      return copyNum === reversenum;
};
console.log(Polindrome(128821));
