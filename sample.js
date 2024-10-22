function BinerySearch(array, target) {
      let left = 0;
      let right = array.length - 1;
      while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (array[mid] == target) {
                  return "Elimenet is Found";
            } else if (array[mid] > target) {
                  right = mid - 1;
            } else {
                  left = mid + 1;
            }

      }

      return "Eleiment is Not Found";
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 83;
console.log(BinerySearch(array, target));
function LinearSerach(array1, target1) {
      for (let i = 0; i < array1.length; i++) {
            console.log(array1.at(-5))
            if (array1.at(-i) === target1) {
                  return true;
            }
      }
      return false;
}
let array1 = [1, 5, 8, 3, 0, 3, 8, 9];
let target1 = 3;
console.log(LinearSerach(array1, target1));