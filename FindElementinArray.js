function FindElement(array, target) {
      for (let i = 0; i < array.length; i++) {
            if (array[i] === target) {
                  return true;
            }
      }
      return false;
}
let array = [1, 2, 3, 4, 5, 6, 7, 8];
let target = 6;
console.log(FindElement(array, target));
//Finding Element index
function targetElemntIndex(arr, target1) {
      for (let i = 0; i < arr.length; i++) {
            if (arr[i] === target1) {
                  return i;
            }
      }
      return "Element not Found";
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let target1 = 45;
console.log(targetElemntIndex(arr, target1));
function prabha(array6, target4) {
      for (let i = 0; i < array6.length; i++) {
            if (array6[i] == target4) {
                  return "The Eleiment is Found:Don't worry Eleiment is present";
            }
      }
      return "If Youn want to see the target eliment you just insert to array and it present in the array";

}
let array6 = [1, 2, 3, 4, 6];
let target4 = 89;
console.log(prabha(array6, target4))
