//boolean 
var flag = true;
console.log("Value assigned to flag is: " + flag);
//number 
var decimal = 6;
console.log("Decimal value is: " + decimal);
var hex = 0xf00d;
console.log("Hex value is: " + hex);
var binary = 10;
console.log("Binary value is: " + binary);
var octal = 484;
console.log("Octal value is: " + octal);
/*let big: bigint = 100n;
console.log("Big value is: "+big);*/
//string
var color = "blue";
color = 'red';
console.log("Colour is: " + color);
var fullName = "Bob Bobbington";
console.log("Full name is: " + fullName);
var age = 37;
console.log("Age is: " + age);
var sentence = "Hello, my name is ".concat(fullName, " I'll be ").concat(age + 1, " years old next month.");
console.log(sentence);
var sentence = "Hello, my name is " +
    fullName +
    ".\n\n" +
    "I'll be " +
    (age + 1) +
    " years old next month.";
//Array
var list = [1, 2, 3];
console.log("List is: " + list);
var list = [1, 2, 3];
console.log("List is: " + list);
// OK
create({ prop: 0 });
create(null);
create(undefined); // with `--strictNullChecks` flag enabled, undefined is not a subtype of null
create(42);
create("string");
create(false);
