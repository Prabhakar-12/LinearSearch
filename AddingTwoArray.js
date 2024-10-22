//Using deep cloning method
const array = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8, 9];
const array3 = [...array, ...array2];
console.log(array3);
function ArraysLength(arr1, arr2) {
      if (arr1.length != arr2.length) {
            return false;
      }
      for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                  return false;

            }
      }
      return true;

}
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
console.log(ArraysLength(arr1, arr2));
const a = ["name", "RollNo", true, false];
const b = [1, 4, 6, 7, 9];
const c = [...a, ...b];
console.log(c);