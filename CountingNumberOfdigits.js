
function NumberDigits(number) {
      number = Math.abs(number);
      let count = 0;
      do {
            count++;
            number = Math.floor(number / 10);
      } while (number > 0);
      return count;
}
console.log(NumberDigits(3553));
function prabhakar(AnyNumber) {
      AnyNumber = Math.abs(AnyNumber);
      let count = 0;
      do {
            count++;
            AnyNumber = Math.floor(AnyNumber / 10);
      } while (AnyNumber > 0);
      return count;
}
console.log(prabhakar(47638393.67));
function NumberofDigit(num1) {
      num1 = Math.abs(num1);
      let AnyNumber1;
      AnyNumber1 = num1;
      let count = 0;
      do {
            count++;
            AnyNumber1 = Math.floor(
                  AnyNumber1 / 10);
      } while (AnyNumber1 > 0);
      return count;
}
console.log(NumberofDigit(3456));