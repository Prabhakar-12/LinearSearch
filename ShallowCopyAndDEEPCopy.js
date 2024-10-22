//Shallow clone when you copy the elemenet s form aone array to another array.
//The both arrays have same memeoty locations.when you update any from those,the another array automtically updated,,,,
const array1 = [1, 2, 3, 4, 5];
const array2 = array1;
array2.push(0);
console.log(array2);//[1,2,3,4,5,0]
console.log(array1);//[1,2,3,4,5,0]
//Deep  clone of array.. It is technique for duplicating arrays and object without data lose.when duplicated array or object is modified it affec to the original array or object;;;
const a = ["prabhakar", 2, 3.5, true, undefined];
const b = [...a];
b.push("JBIET");
console.log(a, b);
const number = [...a, ...b];
console.log(number);
