//[1,3,5,2]; 1+3+5+2=9/2=4;
// function MissingNumber(nums) {
//       let sum = 0;
//       for (let i = 0; i < nums.length; i++) {
//             sum += nums[i];
//       }
//       let result = nums.length * (nums.length + 1) / 2 - sum;
//       console.log(Math.abs(result));

// }
// let nums = [0, 1, 2, 3, 4, 6];
// console.log(MissingNumber(nums))
function MissingNumber(array) {
      let presentElementsSum = 0;
      for (let i = 0; i < array.length; i++) {
            presentElementsSum += array[i];
      }
      let Totalsum = array.length * (array.length + 1) / 2;
      console.log("Sum total array element is", Totalsum);
      let missingElement = Totalsum - presentElementsSum;
      console.log("The missing Element is", missingElement);
      return missingElement;
}
let array = [0, 1, 3, 4, 5];
console.log(MissingNumber(array));
//IF the array Elements are in not range .We have to specifies the total sum First after the we have to calculate the sum of Element  present in the array. after the we have subtracts the Total sum of Elemets  to present Elements sum. We get the missing Element;;;;
// function prabhakar(number) {
//       let Sumofnumbers = 0;
//       for (let i = 0; i < number.length; i++) {
//             Sumofnumbers += number[i];
//       }
//       let TotalSumOfElemenets = 30;
//       let MissingNumber = TotalSumOfElemenets - Sumofnumbers;
//       return MissingNumber;
// }
// let number = [5, 6, 7, 8];
// console.log(prabhakar(number))
function fn(nums) {
      let arr = [];
      for (let i = 1; i < nums; i = i * 2) {
            arr.push(i);
      }
      return arr;
}
console.log(fn(1024));
