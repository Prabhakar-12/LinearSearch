// const array = [];
// const array1=new Array(); 
let array = [1, 2, 3, 4, 5, "Hello", { name: "Prabhakar", rollno: 527 }];
console.log(array.length);
console.log(array[4]);
console.log(array.push([]));
console.log(array)
console.log(array[6].name);
console.log(array[6]);
console.log(array.unshift(0));
console.log(array);
console.log(array.length);//O(1)
console.log(array[8]);
console.log(array.pop());
console.log(array);
console.log(array[array.length - 1]);
array.push(36);
console.log(array)
for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
}




