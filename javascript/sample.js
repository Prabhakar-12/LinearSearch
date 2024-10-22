const comapnies = [
      { name: "Comapny one", category: "Finace", start: 1981, end: 2003 },
      { name: "Comapny two", category: "Finace", start: 1981, end: 2003 },
      { name: "Comapny Three", category: "Finace", start: 1981, end: 2003 },
      { name: "Comapny four", category: "Finace", start: 1981, end: 2003 },
      { name: "Comapny Five", category: "Finace", start: 1981, end: 2003 },
      { name: "Comapny six", category: "Finace", start: 1981, end: 2003 },
      { name: "Comapny seven", category: "Finace", start: 1981, end: 2003 },
];

for (let i = 0; i < comapnies.length; i++) {
      console.log(comapnies[i]);
}
// forEach
comapnies.forEach(function (comapnies) {
      console.log(comapnies.name);
      console.log(comapnies.start);
})
let sum = 0;
const numbers = [65, 442, 12, 4];
numbers.forEach(myFunction);


function myFunction(item) {
      console.log(item);
      sum += item;

}
console.log(sum);
