//Syntax::
//Object={key:valuee.......KeyN:valueN};
//Objects can be created in various ways
//1.Creating object Literals

let person = { name: "Raju", age: 45, Branch: "CSE" };
//2.Using new Key words
let car = new Object();
//assining values to the objects
car.name = "BMW";
car.color = "White";
car.model = "Latest 680";
console.log(car);
//Retriving Key value sfrom car object
//Syntax :: objectname.propertyname
console.log(car.name);
//Using Function Constructor
function FamilyMember(First, Last, age, hobbies) {
      this.First = First;
      this.Last = Last;
      this.age = age;
      this.hobbies = "Farming";
}
let Dad = new FamilyMember("  surya", " kanth", 56,);
console.log(Dad);
let Mom = new FamilyMember(" surya ", " Laxmi", 45,);
console.log(Mom)
let MySelf = new FamilyMember("surya", "Prabha", 25, "Coding");
let a = Mom.First.toLowerCase;
let b = Dad.First.toLowerCase;
if (a == b) {
      console.log("Both are belonging to the same Family");
} else {
      console.log(" Both are different Family menber");
}