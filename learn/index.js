/* 1. Basics in Js */
/* Used to create more dynamic and user interactive websites, and its a dynamically types language */
/* i.e */
let jsD = 10;
console.log("jsD", jsD);
console.log("typeof jsD", typeof jsD); /* number */

jsD = "PEACE";
console.log("jsD", jsD);
console.log("typeof jsD", typeof jsD); /* string */

/* here above in runtime, we may able to change any type */

/* # why we use js ?
    - adds interactivity to the websites
    - enables dynamic contents without refreshing the browser/window
    - used for client side scripting, now server-side too
    - works well with html & css to build an fully functional app
*/

/* # advantages of js */
/*
  - real-time interactions without server loads
  - cross-browser support
  - fast execution
  - easy to learn and implement
  - supports both client side as well as server side  
*/

// console.log('Welcome to JavaScript');
// console.log('Make Webpage more interactive');

/* # variable declaration 
  - variables are container to store data values, like a labeled box with names where data is kept and retrieve later
  - to declare a variable, in js we use keywords var, let, const
  # var - function scoped, can be redeclared and updated, hoisted (move to top while execution, initialized as undefined), mutable values
  # let - block scoped, can be updated but cannot be re-declared in the same scope, hoisted (not initialized == TDZ), mutable values
  # const - block scoped, cannot be updated or re-declared, hoisted (not initialized == TDZ), immutable values
*/

/* # use var */
var needPeace = "Noise";
var needPeace = "Peace"; /* redeclared and updated */
console.log("needPeace", needPeace);

/* # use let */
let nameJs = "Welcome to JavaScript!";
nameJs = "Peace begins expectations ends!"; /* updated */
// let nameJs = "check redeclaration"; /* here we cannot re-declare */
console.log("nameJs", nameJs);
let firstName = "Josh";
let lastName = "Portialla";
console.log(firstName + " " + lastName);

/* # use const */
const interestRate = 0.4; /*  if we declare const as a variable type, then the value can't be changed */
// interestRate = 1.0; /* if we do we got - Type Error: Assignment to constant variable. */
console.log("interestRate", interestRate);

/* # Lexical Scope - js uses lexical scoping, means scope of a variable determined by code structure at write-time, not in runtime */
/* i.e */
function outer() {
  let a = "Peace";
  function inner() {
    console.log("Lexical", a); // scoped by parent
  }
  inner();
}
outer();

/* # Shadowing - a variable declared in local scope/block scope with the same name as one in outer scope shadows the outer variable */
/* i.e */
var shadow = 10;

function callShadow() {
  var shadow = shadow + 5;
  /* 
     - here it will shadows the outer varible, but takes and logs the block scope variable
     - here the shadow variable will hoisted to the top the function and initialized as undefined, so the log will be NaN (undefined + 5)
     - at the if we shadow with let, we got ReferenceError: Cannot access 'shadow' before initialization
    */
  console.log("shadow", shadow);
}
callShadow();

/* # Hoisting - var declarations keywords are hoisted to the top of their scope (but not initialized) leads to bugs/unexpected behaviours */
/* i.e */
function hois() {
  // console.log("hois", hois); /* here we got ReferenceError: Cannot access 'hois' before initialization, this hois in TDZ */
  let hois = "hois";
  console.log("hois", hois);
}
hois();

/* # Temporal Dead Zone (TDZ) 
    - only applicable for let & const
    - its a time between where a let or const variable is delcared or initialized 
    - A variable is in the TDZ from the start of its scope until it is declared
    - Accessing it during this zone results in an error.
  */

/* i.e
    {
      // TDZ is start from here for varible with let and const
      console.log("tdz", tdz); this leads to ReferenceError: Cannot access 'tdz' before initialization, because its in dead zone
      let tdz = "tdz";
    }
*/

/* # Closures - is a function that REMEMBERS its outer lexical environment even after the outer function has finished execution */
/* i.e */
function clo_outer() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}
const he = clo_outer();
console.log("he", he()); /* log as 1 */
console.log("he", he()); /* log as 2 */
console.log("he", he()); /* log as 3 */
/* inner function still acess to the count event after the outer function finished execution, thats closure in action */
/* Closure memory behaviour - the inner function holds a reference to the variable, not the copy, Thats why the (persistent state) is preserved between calls */

/* # Currying - Transforming a function with multiple arguments into a series of functions, each take one argument at a time */
/* i.e */
function curryiedFunc(param1) {
  return function (param2) {
    return function (param3) {
      return `${param1} ${param2} ${param3}`;
    };
  };
}
const cur = curryiedFunc("Hello");
console.log("cur", cur("Sri")("Srii"));
// console.log("cur", cur("Srii"));

/* 2. Datatypes */
/* In js we have two types of Datatypes Primitive (value types), Non-Primitive (reference types) */

/* # Primitives types or value types | string | int(number) | BigInt | boolean | undefined | null */
let myName = "Josh"; // string
let age = 30; // integer
let isApproved = true; // boolean
let middleName; // undefined we didn't initialize value to middleName
let selectedColor = null; // defaultly we initialize variable with null, default value of null is 0

/* # checked in inspect console typeof a variable */

// typeof myName
// 'string'
// typeof age
// 'number'
// typeof isApproved
// 'boolean'
// typeof middleName
// 'undefined'
// typeof null
// 'object'
// typeof {}
// 'object'
// typeof []
// 'object'
// typeof function () {}
// 'function'

/* # Non-primitive (Reference types) | objects | arrays | functions */

/*  # objects */
/* objects literal syntax {..........} */
let person = {
  name: "Josh",
  age: 25,
};
console.log(person);
/* # person = object | name,age = property */

person.name = "Portialla";
/* # dot notation (this is better choice) */
console.log(person.name);

/* # OR bracket notation */
person["name"] = "JoshPortialla";
console.log(person["name"]);

/* # if property had a value only after the user selection then the bracket notation will be more helpfull */
let selectedName = "Josh Portialla";
person["name"] = selectedName;
console.log(person["name"]);

/* # Arrays (arrays is a data structure that represents list of items/data) */
/* arrays literal syntax [..........] */

let selectedProducts = []; // set selectedProducts variable as array
selectedProducts = ["Boots", "Guards", "Gloves"];
selectedProducts[3] = "ShinGuards";
console.log(selectedProducts);
console.log(selectedProducts.length);
// typeof selectedProducts;
// console.log(selectedProducts[0]);
// console.log(selectedProducts[1]);
// console.log(selectedProducts[2]);

/* # Functions - used to perform some operations wheenever needed */
function welcom() {
  console.log("Hi from Js");
}

welcom(); /* call a function */

function greet(name, myAdjective) {
  /* name is a parameter we pass to greet function | parameter is at the time of declaration | multiple parameters also possible */
  console.log("Hi this is " + name + " you can call me " + myAdjective);
}
greet("LionelMessi", "LittleGenius"); // here LionelMessi is a argument to a greet function | argument is the actual value of supply for that parameter

/* # parameter - the variables listed in function defintion */
/* # argument - the actual value passed to the function when its invoked/executed */
/* # arguments - in non-arrow functions, without decclaring parameters we may able to get argument using arguments keyword, that arguments keyword doesn't work on arrow functions */
/* # rest parameters - use ... to collect remaining arguments and return as array */

function square(number) {
  return number * number;
}
// calci(9);
console.log(square(5));
/*  the above line have two functions 1. square(5) 2. is console.log() the log() */
console.log("Passing Argument"); /* we passing argument in this line */
console.log(square(5));
/* in this we passing an expression eg. square() inside this expression we passing argument 5 as a value supply for the parameter */

/* # Type Conversion - since js is dynamically language, so it can any variables types at runtime */
/* we have two main types Implicit, Explicit */

/* # Implicit Type Conversion - Js automatically converts types when needed (js uses context operator to choose this conversion) */
/* i.e */
/* 
  '5' + 2      // '52'  → number is coerced to string (string concatenation)
  '5' - 2      // 3     → string is coerced to number
  true + 1     // 2     → true becomes 1
  false + '1'  // 'false1' → false becomes string 'false'
*/

/* # Explicit Type Conversion - We manually convert a value from one type to another using built-in-functions */
/* i.e, we have Number, String, Boolean conversion */

/* # Number Conversion */
console.log("Number", Number("123")); /* logs 123 */
console.log("Number", Number(true)); /* logs 1 */
console.log("Number", Number(false)); /* logs 0 */
console.log("Number", Number("abc")); /* logs NaN */
console.log("Number", parseInt("10.5")); /* logs 10 */
console.log("Number", parseFloat("10.5")); /* logs 10.5 */

/* # String Conversion */
console.log("String", String(123)); /* logs '123' */
console.log("String", String(true)); /* logs true */
console.log("String", String(false)); /* logs false */
console.log("String", String(null)); /* logs 'null' */
console.log("String", (112233).toString()); /* logs '112233' */

/* # Boolean Conversion - has truthy and falsy values */
/* # Truthy values (evaluated as true)
  - non empty string: "test" etc...
  - non zero number: 1, -6, 10.5 etc...
  - {object}, [arrays]
*/

/* # Falsy values (evaluated as false) 
  - 0, '' (empty string), null, undefined, NaN, false
*/
console.log("Boolean", Boolean(0)); /* logs false */
console.log("Boolean", Boolean("hello")); /* logs true */
console.log("Boolean", Boolean([])); /* logs true */
console.log("Boolean", Boolean(null)); /* logs false */

/* # Equality Comparison */
/* == double equals denotes LOOSE equality */
/* === triple equals denotes STRICT equality */
/* i.e
  '5' == 5      // true
  '5' === 5     // false
  null == undefined // true
  null === undefined // false
  false == 0    // true
  false === 0   // false
*/

// operators => Arithmetic | Assignment | Comparison | Logical | Bitwise

// Arithmetic operators

let x = 2;
let y = 2;
console.log(x + y); //plus
console.log(x - y); //minus
console.log(x * y); //multiply
console.log(x / y); //division
console.log(x % y); //remainder of division
console.log(x ** y); //exponentiation new in Js means x to the power of y
console.log(x++); //post-increment
console.log(++x); //pre-increment
console.log(x); //after increment
console.log(x--); //post-decrement
console.log(--x); //pre-decrement

//Assignment operators = , += , *=
let a = 100;
a = a + 20; // a+=20
a = a * 10; // a*=10
console.log(a);

//Comparison operator
// relational operators >,>=,<,<=
let m = 0;
console.log(m > 0);
console.log(x >= 0);
console.log(x < 0);
console.log(x <= 0);

//equality operators
console.log(0.1 === 0); // === indicates Strict equality (check datatype as well as value)
console.log(1 !== 0);
console.log("0" == 0); // == indicates loose equality (check only the values)
console.log(true == 1);

// Ternary / Conditional operator
let points = 110;
let customerType = points > 100 ? "Gold" : "Silver";
console.log(customerType);

//logical operators AND = && | OR = || | NOT !
let highIncome = true;
let goodCredits = true;
let eligibleForLoan = highIncome && goodCredits;
console.log("Application Approved", eligibleForLoan);
let applicationRefused = !eligibleForLoan;
console.log("Application Refused", applicationRefused);

// Logical operators with Non-booleans
// there are two falsy and truthy

// falsey values are undefined,null,0,false,'',NaN
// false || '' or false or 0 or undefined or NaN then it is falsy value

// truthy values returns true abt that condition
// false || 'Josh' or 1 or true then it is truthy value

// short-cicuiting
// It means it check the condition until it gets True when it gets true then it will stop checking the condition. The remaining conditions remains unchecked.
let userColor = undefined;
let defaultColor = "Black";
let currentColor = userColor || defaultColor;
console.log("currentColor", currentColor); // falsy statement

let userCColor = "Gold";
let defaultCColor = "Black";
let currentCColor = userCColor || defaultCColor;
console.log(currentCColor); // truthy statement

// Operator Precedance

let test = 5 + 3 * 10; // It means
console.log(test); // output will be 35

let ttest = (5 + 3) * 10; // It means
console.log(ttest); // output will be 80 because we give operator precedance using paranthesis ( ) then first it will take values inside the paranthesis.....and so on

// swapping of variables

let first = 1;
let second = 2;
let third = first;
first = second;
second = third;

console.log(first);
console.log(second);

// if else
// if(condition)
//     //statement; // this for single line statement......

// if(condition) {
//     //statement 1 ;
//     //statement 2;
//     // and so on.....  //use curly braces for multiple statements.........
// }
// else if(condition) {
//     // some statements here.....
// }
// else{
//     // some statements here.........
// }

// Switch Case
// syntax...

let role = "guest";

switch (
  role // instead of condition we have to pass variable
) {
  case "guest": //statement ;
    console.log("Guest User");
    break;
  case "admin":
    console.log("Admin User");
    break;
  case "superadmin":
    console.log("Super Admin");
    break;
  default:
    console.log("Unknown User");
}

if (role === "guest") console.log("Guest User");
else if (role === "admin") console.log("Admin User");
else if (role === "superadmin") console.log("Super Admin");
else console.log("Unknown User");

// loops for | while | do while | for in | for off

// for(initialExpression; Condition; incrementExpression) {
//     // statements..... multiple statements....
// }

for (let i = 0; i < 5; i++) {
  console.log("Josh here..", i);
}

for (let a = 0; a < 5; a++) {
  if (a % 2 != 0) console.log("Odd", a);
  else console.log("Even", a);
}

// in while and do while loops we have declare variable externally not in the condition.......

//while entry controlled loop
let b = 0;
while (b < 5) {
  if (b % 2 != 0) console.log("Odd Mosh here...", b);
  else console.log("Even Mosh here...", b);
  b++;
}

//let b = 0; // here is a syntax error identifier b is already declared....we declare b externally for while loop here for loop variable declaration and while loop variable declaration are differs....in for loop we declare internally in condition this is called scope..

// do while exit controlled loop it will execute the statement atleast once whether it is true or false coz this will be check the condition in the end thats why it is called as exit controlled loop
let c = 0;
do {
  if (c % 2 == 0) console.log("Even Fuji here...", c);
  else console.log("Odd Fuji here...", c);
  c++;
} while (c < 5);

//infinite loops // inifinite or forever
let d = 0;
while (d < 5) {
  console.log("Infinite loop", d);
  d++; // infinite loops if increment didn't placed here it leads to infinite loop...
}
//eg's for inifinite loop

// while(true) {

// }

// do {

// } while(true);

// for(i = 0; i > 0; i++){

// }

// for in loop in object   || for in loop mainly used to iterate properties of an object and its value
let testAgain = {
  name: "Cris",
  age: 35,
};
for (let key in testAgain) {
  // in every iteration the key hold the property of testAgain object...using bracket notation we access object property with its value....if we use dot notation then we dont have a key property in testAgain object......
  //console.log(key);
  console.log(key, testAgain[key]);
}

// for in loop (in array)
let colors = ["gold", "white", "black"];
for (let index in colors) {
  // the index will store the index value of each element in an array
  console.log("for of**", index);
  console.log("for of*", index, colors[index]);
}

// for of loop || mainly used to iterate elements or items in an array
for (let color of colors) {
  console.log(color);
}

//let speedLimit = 70;
myFunction(78);
function myFunction(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  const maxPoints = 12;
  if (speed <= speedLimit + kmPerPoint) {
    console.log("ok");
    return; // if condition satisfies then it will stop checking the remaining codes outside the if condition
  }
  let points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= maxPoints) console.log("License Suspended");
  else console.log("Points", points);
}

// get count of truthy value as results
const myArray = [undefined, null, "", 0, false, 1, 2, 5, true];

console.log("getTruthyCount", getTruthyCount(myArray));

function getTruthyCount(myArray) {
  let count = 0;

  for (let value of myArray) if (value) count++;

  return count;
}

// get the property of an object with the type of string....
const movie = {
  mTitle: "a",
  releaseYear: 2007,
  rating: 8.9,
  director: "b",
  plot: "c",
  storyLine: "d",
};
console.log(showList(movie));

function showList(movie) {
  for (let key in movie) {
    if (typeof movie[key] == "string") console.log(key, movie[key]);
  }
}

// get multiples of 2 & 4 limit 10

function getSum() {
  let sum = 0;
  const limit = 10; // initialization

  for (let i = 0; i <= limit; i++) {
    if (i % 2 == 0 || i % 4 == 0) sum += i;
  } // here condition

  return sum; // return statement
}

console.log(getSum());

// get which grade
// const getMarks = [80,90,70,50,60];

// console.log(getGrade());
// function getGrade(getMarks) {
//     let average = getCalculation(getMarks);

//     if(average < 60) return 'Grade F';
//     if(average < 70) return 'Grade D';
//     if(average < 80) return 'Grade C';
//     if(average < 90) return 'Grade B';
//     return 'Grade A'
// }

// function getCalculation(array) {
//     let sum = 0;
//     for(let value of array)
//     console.log(value);
//     sum += value;
//     return sum / array.length;
// }    /// not completed have to work

// stars progrAM
getStar(7);
function getStar(stars) {
  for (let row = 1; row <= stars; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) pattern += "*";
    console.log(pattern);
  }
}

// prime numbers divisible by 1 and the given number itself
getPrime(10);
function getPrime(primes) {
  for (let number = 2; number <= primes; number++)
    if (isPrime(number)) console.log("primenumber*", number);
}

function isPrime(number) {
  //let isPrime = true;
  for (let factor = 2; factor < number; factor++)
    if (number % factor == 0) return false;
    else return true;
}
// these named as single responsibility principle each function carries their own functionality ( getPrime() & isPrime() based on single responsiblity principle)
// getStar() based on normal function

/// Objects  ( mainly objects are collections of key value pairs {property : values} we want to encapsulate them inside of an object] )
// why we create objects coz the varibles or properties we declare are highlt related to each other
// eg if a circle contains so many properties (below)

// let radius = 3;
// let diameter = 6;
// let x = 2;
// let y = 1;

// and so on may be 10 properties also possible
// instead of creating like above, we have create circle object
//inside an object we create one or more key value pairs (below) the values in key-value pairs in javascript should be anything eg function,array,null,'',undefined,true,false,23,'hello',......and so on

// let circle1 = {
//     radius : 2,
//     x : 1,
//     y : 4,
// };

// we can also create another object or array or function inside an object
// above eg shows, instead of creating x and y key value pairs we create another object inside a object (below)

// let circle2 = {
//     radius : 2,
//     location : {
//         x : 1,
//         y : 2,
//     }
// };

// mainly purpose of an object is to group highly relates variables

//function drawCircle() {} // these functions are highly related to object circle so instead of declaring stand-alone functions ...
//function moveCircle() {} // we declare functions inside the objects (below)

let circle1 = {
  radius: 2,
  location: {
    x: 1,
    y: 2,
  },
  draw: function () {
    console.log("Hello Js.");
  },
};
//console.log(circle3.draw());
circle1.draw();

// these are style of OOP concept (above)
// In OOP terms if a function is a part of an object then the function should be called as Method

// next Factory Functions
// if we need another circle object with same key value pairs and funtions
// instead of duplicate the same objects and change the object namee to circle2 instead to doing like this here
// we can use factory functions in js.........
// these factory functions produce objects like factory produces products..... ( below eg )

// function createCircle(radius) {
//     return {  // just return the object inside the factory function whenever call the function its return a object.
//         radius : radius, // here we pass radius as parameter
//         location : {
//             x : 1,
//             y : 2,
//         },
//         draw : function() {
//             console.log('Hello Js.');
//         }
//     };
// }

function createCircle(radius) {
  return {
    // just return the object inside the factory function whenever call the function its return a object.
    radius, // here we pass radius as parameter ||  this line exactly equivalent to this => radius : radius => 1st radius->key/property | 2nd radius->value
    // draw : function() {
    //     console.log('Hello Js.');
    // }
    // we create function like this also
    draw() {
      console.log("Draw a Circle");
    },
  };
}

//createCircle.  after dot it shows a popup purple inidcates methods
// blue indicates properties of an object

let drawCircle1 = createCircle(1);
console.log(drawCircle1);
let drawCircle2 = createCircle(2);
console.log(drawCircle2);
// factory functions working like this
//instead of duplicate the same objects and change the object namee to circle2 here
// we can use factory functions in js.........
// we can pass different argument to get desired output
// in Factory Functions we use naming conventions-> camel notations like oneTwoThree() {   } ......

// Next Constructor Funtions similar to factory functions
// in Constructor Functions use naming conventions-> PascalNotation like OneTwoThree() {   } ......

// camelcased => oneTwoThree() -> this for factory functions
// pascalcased => OneTwoThree() -> this for Constructor functions

function ConstructObj(radius) {
  // job of the function is to construct or create object
  // instead of return a object we use different approach
  // in javascript we have KEYWORD called this
  this.radius = radius; // this keyword is a reference to the below mentioned Constructor object that is executing this piece of code
  // above line this.radius => this->keyword, radius->property, = radius-> passing a argument to parameter
  this.draw = function () {
    console.log("Good to see JS in action.");
  };
}
// to create circle object using Constructor function
const ConstructCircle = new ConstructObj(2);
// here new is a keyword three things gonna happen (below)
// 1-> new keyword creates an empty javascript object eg: let x = { }; => empty object
// 2-> this -> keyword point the empty object  it means its points out radius property and draw function from ConstructObj() function
// 3-> finally, the new keyword return the new object from ConstructObj() function  eg: return this; but we dont want to explicitly use the return this; it wwill done under new keyword (Constructor Function)
console.log(ConstructCircle);

// Next Dynamic Objects ->  objects are always dynamic
const dynamicObj = {
  radius: 5,
};

dynamicObj.color = "Red"; // we can add more properties and methods in the objects
(dynamicObj.drawCir = function () {
  console.log("Draw a Circle with Radius with Radius");
}),
  (dynamicObj.rectSide = 4),
  (dynamicObj.squ = 4), // we can also delete properties of an object using delete keyword
  delete dynamicObj.rectSide;
delete dynamicObj.squ;

console.log(dynamicObj);

// by using const keyword we cant reassign const variable
// let dynamicObj = {};
// we face Uncaught SyntaxError: Identifier 'dynamicObj' has already been declared (at index.js:552:5)

// Next Constructor Property
// In javascript every object has a constructor property and that references a function that used to create a object.
// eg:
//let mnb = {}; // the javascript engine take like this let mnb = new Object(); this method is kind of a Constructor Functions

// In javascript few built-in Constructors are there
// eg :
new String(); // for creating Strings //
// instead of using this we use string literals like => '',"",`` by using this simple & cleaner than using Constructor.
new Boolean(); // either true or false
new Number(); // 1,2,3...
new Date(); // returns current date as Date Object

// NExt Functions and Objects

function ConstructObj(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Good to see JS in action.");
  };
}

//const ConstructCircle1 = new ConstructObj(2);
// instead of using the above line we use below
ConstructObj.call({}, 1); // {} -> represents an empty objects also refers this keyword in an object , 1 -> arguments passed explicitly
// call -> method is to call object

// after call the constructor object in console.. below

// ConstructObj.constructor
//      ƒ Function() { [native code] }
// ConstructObj.name
//      'ConstructObj' // name of the object
// ConstructObj.length
//      1  // length of the argument

// we have another method also
ConstructObj.apply({}, [1, 2, 3]); // exactly like the call method
// butt instead of passing all the arguments explicitly we pass them in an array
// main takeaway IN Javascript Functions are Objects

// NExt Value Types and Reference Types
// IN Value types we declare a primitive
let one = 2;
let two = one;
one = 1;
// result will be like
one;
1;
two;
2;
// in value type the value will be stored only inside of this varible when we copy one variable to another the copied variable is passed to another varible |  they are completely independent of each other

// In Reference types we declare a Non-Primitive / Objects
let onee = {
  value: 1,
};
let twoo = onee;
onee.value = 10;
// results will be like
onee;
{
  value: 10;
}
twoo;
{
  value: 10;
}
// in reference types the vaalue will be stored in some memory location aand when we copy one variable to another ..
// the value that is stored in memory location will be copied to another variable.
// if we modify any one variable that will be affect another if we copy the varibable to one another

// takeaway Primitives are copied by Value
// Non-Primitives/Objects are copied by their reference / memory location

// eg : IN Primitives / Value types
let nums = 10;
function callValue(_nums) {
  nums++;
}
callValue(nums);
console.log("nums*", nums); // we get 10 as the output coz ,this is a Primitive

// eg: In Non-Primitives / Reference types / Objects

let numss = {
  value: 10,
};
function callValue(numss) {
  numss.value++;
}
callValue(numss);
console.log("numss*", numss); // here we get the output => {value: 11}

// NExt enumurate the properties of an object in -> for in and -> for of loop

let circle2 = {
  radius: 2,
  location: {
    x: 1,
    y: 2,
  },
  draw: function () {
    console.log("Hello Js.");
  },
};

for (let key in circle2) {
  console.log("enumerate properties*", key, circle2[key]); // this for iterate properties of an object
}

// for(let key of circle2) {
//     console.log(key); // if we use like this we get a Uncaught TypeError: circle2 is not iterable
//      // bcoZ the for of loop is for iterate over an array
// }

// but also possible to access properties of object using (for of loop) by using like this ( below)
for (let key of Object.keys(circle2)) {
  console.log(key, circle2[key]); // this will get the objects property, also get properties value
}

// Object.keys(circle2) in this method we used above
// Object is a built in constructor function
//Object.keys // already used above eg's using dot notation its shows a popup that list of methods and properties
// on the list we use keys method that returns String[] string array / strings properties and methods of an object

// and also have another method
//Object.entries // instead of return String[], it returns key value pairs  (below)

for (let key of Object.entries(circle2)) {
  console.log(key, circle2[key]); // this will get the objects property, also get properties value
}

// above we get properties of an object in array key value pairs
// finally to check the given property are exist in an object
if ("radius" in circle2) console.log("Circle has radius"); // using in -> operator

// NEXt Cloning an object
// it means copy properties of one object to another object

let circle3 = {
  radius: 2,
  location: {
    x: 1,
    y: 2,
  },
  draw: function () {
    console.log("Hello Js.");
  },
}; //

// let circleClone = {}; // here we create a empty object;
// // need to iterate properties of an circle3 object
// for(let key in circle3) {
//     circleClone[key] = circle3[key];
// // this line exactly equivalent to
// // circleOne['radius'] = circle3['radius'];  we copy object circle3 property radius to circleClone object property;
// // we read the circle3['radius'] property and assign it to circleClone property of an object
// }
//console.log(circleClone); // this will clone object to another object but its a little bit old approach

// in modern JS we have another ways to do that here

// let circleClone = {};
// // for(let key in circle3) {
// //     circleClone[key] = circle3[key];
// // }

let circleClone = Object.assign({}, circle3); // THIS LINE exactly equivalent to above three lines
// in assign method there is no need to be empty object {} (it can be a existing object,one or more property or methods)
//eg: above line -> let circleClone = Object.assign({ color : 'white' }, circle3);
console.log(circleClone);
// Object -> is a built in constructor function
// . -> denotes popup shows methods and properties...
// assign method copies all enumerable own properties from one or more source objects to a target object.
// It returns the modified target object. we can use this for clone or combine multiple objects to a single object.
// circle3 is object we want to clone

// here also we have simple method than assign methods -> its using SPREAD operator
let circleClone1 = { ...circleClone };
// the ... -> the three dots denotes spread operator
// what it does it takes all the properties of an object and put in circleClone1 object
// it mainly spread an object -> gets all properties and methods of an object & putting them in another object
console.log(circleClone1);

// NExt garbage collector
// the job of this is to find the variables or constants that are no longer used and de-allocate the memory that
// was allocated to them before
// just to know what is garbage collector it will run automatically by Js engine'
// if a variable is not used then js engine automatically de-allocate them yb default
// its runs under the hood

// nExt some built in objects in Js
// 1 -> Math. object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math || for reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// 2 -> String object

let str = "Messi"; // String Primitive

let strOb = new String("Messi"); // String Object
console.log(strOb);

// typeof(str)
// 'string'
// typeof(strOb)
// 'object' // output of above two lines
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String || for reference

let myMess = "        A fine Evening        ";
console.log(myMess.length); // length of the given string including whitespaces
console.log(myMess.includes("Evening")); // to check whether its available or not. its case-sensitive.
// above line returns boolean as results
console.log(myMess.startsWith("A")); // case-sensitive
console.log(myMess.endsWith("g")); //
console.log(myMess.indexOf("f"));
console.log(myMess.replace("fine", "bad")); // it replaces fine with bad but it doesn't affect the original one.
// in log it just print bad intead of fine
console.log(myMess.toUpperCase());
console.log(myMess.toLowerCase());
console.log(myMess.trim()); // its get rid of all the white spaces before and after the string
// eg : " A fine day "; // in this only removes white spaces before & after the string not the middle ones.
console.log(myMess.trimStart()); // removes only left side whitespaces // instead of trimLeft we use this method coz,trimLeft is deprecated
console.log(myMess.trimEnd()); // removes only right side whitespaces // instead of trimRight we use this method coz,trimRight is deprecated

// Escape Notations in Js
// \' -> to add single quotes
// \n -> new line
// escape notations js need to learn

console.log(myMess.split(" ")); // split string to array
// ['', '', '', '', '', '', '', '', 'A', 'fine', 'Evening', '', '', '', '', '', '', '', '']
console.log(myMess.split(""));
// (30) [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'A', ' ', 'f', 'i', 'n', 'e', ' '
// , 'E', 'v', 'e', 'n', 'i', 'n', 'g', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

// NEXt Template Literals
// In js there are literals there
// Object literal {};
// Boolean literal true or false
// String '' or ""
// we have template literals these are comes under ES6 ...// Js didn't have the feature
// template literals are denoted by `` -> backticks
let jsName = "This is my\n" + "New page"; // if we want like this we want add \n escape notations and need to concat them or else it shows a error.
let esName = `This is my
New Page`; // in es6 there is no neeed to use escape notations.
console.log(jsName);
console.log(esName);

// template literals very usefull eg:
let myFirstName = "Josh";
let receiverName = "Manager";
let emailSubject = `Hii 

Thank you for your Support ${receiverName}

Regards 
${myFirstName}`;
console.log(emailSubject);
// we can add expression like this when we need as per our wish
// using es6 template literals ``.
// in js it should little bit complicated

//NExt date object
let now = new Date(); // this returns
//let date = new Date('March 21 2022 16.30'); // current date as objects
let date1 = new Date(2022, 2, 21, 6, 30); // in this the second argument we pass is month it denoted by 0's
// it means 0-> january and 11-> December

console.log(now);
//console.log(date);
console.log(date1);
// in js Date object there are get and set methods are there
//date1. // using in a pop-up its shows list of set an get methods
// toDateString()
// toTimeString()
// ISOString()

let address = {
  street: "West Street",
  city: "Chennai",
  zipcode: 613701,
  phoneNum: 9988776655,
  alternatephoneNum: {
    phoneNum: 6677889900,
  },
};

function showAddress(test) {
  for (let key in test) console.log(key, address[key]);
}
showAddress(address);

function setAddress() {
  return {
    street: address.street,
    city: address.city,
    zipcode: address.zipcode,
    phoneNum: address.phoneNum,
    alternatephoneNum: address.alternatephoneNum,
  };
} // eg for factory function
console.log(setAddress());

function GetAddress() {
  this.street = address.street;
  this.city = address.city;
  this.zipcode = address.zipcode;
  this.phoneNum = address.phoneNum;
  this.alternatephoneNum = address.alternatephoneNum;
}

let getAddress = new GetAddress(); // eg for constructor function
console.log(getAddress);

// function areEqual(address,getAddress) {
//     for(let key in address)
//     if(address[key] === getAddress[key])
//         return true;
//     else
//         return false;
// }

function areEqual(address, getAddress) {
  return (
    address.street === getAddress.street &&
    address.city === getAddress.city &&
    address.zipcode === getAddress.zipcode &&
    address.phoneNum === getAddress.phoneNum &&
    address.alternatephoneNum === getAddress.alternatephoneNum
  );
}

console.log(areEqual(address, getAddress));

// function areSame(address,getAddress) {
//     return address === getAddress;
// }

// console.log(areSame(address,getAddress));

// need to go through once the above Object Equality exercise

// Blog post Object

let blogPostObject = {
  title: "a",
  body: "b",
  author: "c",
  views: 3,
  comments: [
    {
      author: "author1",
      body: "body1",
    },
    {
      author: "author2",
      body: "body2",
    },
  ], // why we declare an array here -> multiple comments are there...so
  isLive: true,
}; // this object denotes as blog post object

console.log(blogPostObject);

// NEXt constructor function exercise
// using constructor function to create a post object

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  isLive = false;
}

let Postt = new Post("a", "b", "c");
console.log(Postt); // need to look up once again

// Price Range exercise
let priceRange = [
  { label: "$", tooltip: "LessExpensive", minRate: 0, maxRate: 30 },
  { label: "$$", tooltip: "Moderate", minRate: 31, maxRate: 70 },
  { label: "$$$", tooltip: "MoreExpensive", minRate: 71, maxRate: 100 },
];

let restraurents = [
  { resname: "a", resrating: 4, resavgprice: 20 },
  { resname: "b", resrating: 3, resavgprice: 50 },
  { resname: "c", resrating: 4, resavgprice: 80 },
];

console.log(priceRange);
console.log(restraurents);

// NEXT Arrays and its operations/functionalities
// adding elements in an array
let lookUp = [3];
console.log(lookUp);
// adding at start of an array
lookUp.unshift(1);
console.log(lookUp);

// adding elements in the middle of an array
lookUp.splice(1, 0, 2);
// 1-> for which index position to add | 0-> deletecount from the index position we specify just before
// 2 -> the value we want add in thee middle of an array at the index position of 1
console.log(lookUp);

// adding elements in the end of an array
lookUp.push(3, 4);
console.log(lookUp);
//  there so many methods out there we need to check documentations

// finding primitives / value types in array
let lookDown = [1, 2, 3, 1, 4];
console.log(lookDown.indexOf(1));
// 1->denotes if 1 is available in the array then it returns the index position of 1, its case-sensitive
// if not in the array then its returns -1 as result
console.log(lookDown.lastIndexOf(1));
// it returns last index position of a specified number , if it available then it returns its index position
// else it returns -1

// to check the given number in an array
console.log(lookDown.indexOf(1) !== -1); // it returns boolean result
console.log(lookDown.includes(5)); // this will also returns the exact same results of the above line
// it also returns a boolean result

// note : all these methods have second parameter=> optional // eg:
console.log(lookDown.indexOf(1, 3));
//The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
//Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
// 3-> denotes which index position to start the search

// Finding reference types / non-primitives elements in an array
let lookSide = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];
// in this the includes method doesn't help us , we have another method to use
let getLookSide = lookSide.find(function findLookSide(getSide) {
  return getSide.name == "a";
  // return getSide.name == 'c'; if we pass like this it returns undefined
});

let getLookSide1 = lookSide.findIndex(function findLookSide(getSide) {
  // this function is represented as predicate function it return either true or false
  return getSide.name == "a";
  // return getSide.name == 'c'; if we pass like this it returns -1 insetad of undefined
});
// using findIndex method exactly same gonna haappen but return index position of the the object instead of the object

console.log(getLookSide); // this is the method to find reference types in an array
console.log(getLookSide1);

var greet = function () {
  console.log("Welcome to EcmaScript");
};
//console.log(greet);
greet(); // anonymous function example

let callMe = function () {
  let starring = `Leo`;
  let event = `World Cup`;
  let year = 2022;
  let callMe = `This is ${starring}, here are you ready to see me in ${event} ${year}`;
  console.log(callMe);
};

callMe(); // anonymous function

// NEXt Arrow Functions its comes under ES6
let usingArrow = [
  { id: 1, direction: "right" },
  { id: 2, direction: "left" },
  { id: 3, direction: "top" },
  { id: 4, direction: "right" },
];

let findArrows = usingArrow.find((putArrows) => {
  // => denotes the arrow function
  // if we use single parameter then no need to use parathesis (putArrows) => putArrows ,
  // if we don't have parameters use like this () before Arrow functions ( => )
  // if it has a single statement then no need to use curly braces {}
  // rg: usingArrow.find(putArrows) => putArrows.direction === 'right';
  // also we avoid return too...
  // this will make code simpler and cleaner
  return putArrows.direction === "right";
});

console.log(findArrows);

// NExt deleting elements in an Array
// push -> to add elements in end of the array
// splice -> to add elements in middle of an array
// unshift -> to add elements in beginning of an array

// to delete
// pop -> to delete end of an array
// splice -> to delete middle of an array
// eg:
let delArray = [1, 2, 3, 4, 5];
console.log(delArray.pop(5));
console.log(delArray);
console.log(delArray.shift(1));
console.log(delArray);
console.log(delArray.splice(0, 1));
// above line 0 denotes -> which position to start search, 1 denotes-> deleteCount

//console.log(delArray.splice(0,0,0)); if we pass third parameter than it denotes an element going to add
//if we didn't use third parameter than it going to be delete element in an array
console.log(delArray);

// NExt emptying an array// to remove all the elements in an array

let emptyingArray = [1, 2, 3, 4, 5];
let storeEmptyingArray = emptyingArray;
// if we use const instead of let then wew can't emptying this one
// emptying an array possible by below

//emptyingArray = []; // solution 1 to emptying an array
// use above method, only if we didn't have reference variable pointing out the original one

// using this we can emptying an array , but if this array poiting to another variable then the
// original array variable deleted but the pointing variable contains the value eg:

//console.log(emptyingArray); // output => []
//console.log(storeEmptyingArray); // => [1, 2, 3, 4, 5]

// Solution 2 to emptying an array
//if we have multiple references pointing out original array variable use this way
emptyingArray.length = 0; // it will truncate all elements in an array, including the refernce variable elements too

console.log(emptyingArray); // output => []
console.log(storeEmptyingArray); // output => [] // get the same result

// Solution 3
//emptyingArray.splice(0,emptyingArray.length); // this will also similar to => emptyingArray.length = 0;

// Solution 4
//  while(emptyingArray.length >= 0)
//  emptyingArray.pop(); // it will delete the last element in an array
//  // finally solution 2 is the better approach

// NEXt combining & slicing an array
// combining = array + array
// slicing = slicing an array to two parts

let firstA = [1, 2, 3];
let secondA = [4, 5, 6];

let combinedArray = firstA.concat(secondA); // it will combine to arrays using concate method
console.log(combinedArray);

let sliceArray = combinedArray.slice(2, 5); // it will output from index position 2 to index position 5
// and exclude all other indexes eg: output => [3,4,5]
// if we slice method without any argument it returns the copy of an array
console.log(sliceArray);

// in primitives these values are copied by values
// in reference / non-primitives these value are copied by references

// if its non-primitive eg:

let nonP = [{ id: 1 }];
let nonP1 = [{ id: 3 }];
nonP[0].id++;

let combineNonP = nonP.concat(nonP1);
console.log(combineNonP);

// NExt using Spread Operator to concat array eg:
let arrayOne = [10, 11, 12];
let arrayTwo = [13, 14, 15];

let arrayCombined = [...arrayOne, 1000, ...arrayTwo, "hii", { label: "dude" }];
console.log(arrayCombined);
// it returns this without adding new elements [10, 11, 12, 13, 14, 15] , we can add more elements also

// using spread operator to copy an array
let copyArray = [...arrayCombined];
console.log(copyArray);

// NExt iterate arrays using foreach and inside forEach we use Arrow function also possible
let iterate = ["Zero", "One", "Two"];
// for(let index of iterate) {
//     console.log(index,iterate[index]);
// }

// Soluion 1
iterate.forEach(function (iterateArray, index) {
  // callback Function
  console.log(index, iterateArray);
});

// Soluion 2
iterate.forEach((iterateArray, index) => console.log(index, iterateArray));
// we get exactly the same result using ES6 Arrow Function

// NEXt joining Arrays using join operator eg:
let joinArray = [100, 200, 300];
console.log(joinArray.join("|")); // it returns a String
// whenever we see ? in a parameter its optional

// String - > split method similar to this
let myString = "create object in js";
let splitToArray = myString.split(" ");
console.log(splitToArray); /// it returns a Array we split string using whiteSpaces
// eg: ['This', 'is', 'Kevin', 'here.']

// then we join myString
console.log(splitToArray.join("-")); // here we join a splitted array to a String using -
// it returns => create-object-in-js -> if we join like this then,it should be referred as URL slug

// URL slug means below
// https://stackoverflow.com/questions/6843951
// /which-way-is-best-for-creating-an-object-in-javascript-is-var-necessary-befor
// this should be joined using - => this we call as URL slug

// the slug references heaing of the page content
// Which way is best for creating an object in JavaScript? Is `var` necessary before an object property

// NEXt Sorting Arrays
let sortArray = [2, 4, 1, 5];
sortArray.sort(); // it returns [1, 2, 4, 5]
console.log(sortArray);

sortArray.reverse(); // it returns [5, 4, 2, 1]
console.log(sortArray);

// this only if we have numbers in an array

// if we have object in an array we have follow below
let sortArrayOfObjects = [
  { id: 1, name: "React" },
  { id: 2, name: "Javascript" },
];

// sortArrayOfObjects.sort(); if we use this like this it wouldn't work soluion below
sortArrayOfObjects.sort(function (a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 2;
  return 0;
});
// the sort will based on AScii value of the property value
// refer : https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html
console.log(sortArrayOfObjects);

// NEXt every() and some() methods in latest Javascript
let checkPositive = [1, 2, 3, 4, 5, 6];
let allPositive = checkPositive.every(function (param) {
  // callback function
  return param >= 0;
});
// the every() method checks every single elements of an array for a positive number
// if a single negative value are there then it returns false else it returns true

console.log(allPositive);

let checkleastPositive = [-1, 2, -3, 4, 5, -6];
let checkAtleastPositive = checkleastPositive.some(function (param) {
  // callback function
  return param >= 0;
});
// some() method check every elments of an until its gets an positive number
// if it gets positive number then it returns true and stop checking the remaining elements in an array

console.log(checkAtleastPositive);

// every() => check all elements in an array tobe positive then only it returns true
// eg: [1,2,3,4] => true

// some() => check whether it contains an positive number in an elements of an array then its returns true
// and stop checking the remaining elements in an array
//rg: [-1,-4,1,2,3,-9] => true

// NEXT filtering an array in Primitives

let filterPositive = [1, -2, 2, -7, 3, 4, 5, -1, -10];
let getPositive = filterPositive.filter(function (getPositive) {
  // callback function
  return getPositive >= 0;
});
// the filter() method checks each & every elements in an array and returns the positive numbers

console.log(getPositive);

// using arrow Function
// let filterPositive = [1,-2,2,-7,3,4,5,-1,-10];
// let getPositive = filterPositive.filter((getPositive) => getPositive >= 0);
// // the filter() method checks each & every elements in an array and returns the positive numbers

// console.log(getPositive);

// NEXT filtering an array in Non - Primitives
let filterObjRest = [
  { id: 1, RestName: "A", openingTime: "7.00 AM", closingTime: "9.00 PM" },
  { id: 2, RestName: "B", openingTime: "6.00 AM", closingTime: "11.00 PM" },
  { id: 3, RestName: "C", openingTime: "8.00 AM", closingTime: "8.00 PM" },
];
console.log(filterObjRest);

let nowDate = new Date();
console.log(nowDate);

// NEXt mapping an Array
let mapPositive = getPositive.map(
  (mapPositive) => "<li>" + mapPositive + "</li>"
); // callback function
console.log(mapPositive);
let joinMapPositive = "<ul>\n" + mapPositive.join("\n") + "\n</ul>";
console.log(joinMapPositive); // this we said Html Markup
// map() method => to map each element in an array into something else..
// the above code we map elements to String ,

// we can also map elements to objects here below

// Solution 1
let postiveToObject = getPositive.map((getPostiveToObject) => {
  let positiveObj = { id: getPostiveToObject };
  return positiveObj;
});
console.log(postiveToObject);

// Solution 2
let postiveToObject1 = getPositive.map((getPostiveToObject) => ({
  id: getPostiveToObject,
}));
console.log(postiveToObject1);

// ({id : getPostiveToObject}) if we do like this , js engine considered it as a object

// { id : getPostiveToObject} if we do like this , js engine considered it as a block of code not a object

// { let positiveObj = {id : getPostiveToObject}; }  or we do like this js engine considered it as a object

// here takeaway filter() and map() both are create new array with existing elements of a array and doesn't modify the existing one

// chaining also possible  eg:

const chainingArrays = filterPositive
  .filter((getPositiveOne) => {
    return getPositiveOne >= 0;
  })
  .map((getPositiveOneMap) => ({ id: getPositiveOneMap }))
  .filter((getPositiveEven) => {
    return getPositiveEven.id % 2 == 0;
  })
  .map((getFilteredObjToArray) => {
    return getFilteredObjToArray.id;
  });
// finally it returns a array

console.log(chainingArrays);
// this is called Chaining method

// NEXT reduce method in Js
let cartItems = [10, 20, -10, 30, 40]; // it like a shopping cart products prices we want show the total price of your cart.
// in old way
let sum = 0;
// for(let keys of cartItems) {
//    sum += keys;
// }
//console.log(sum); // we use reduce method to do the same thing

// using reduce method it take all the elements in an array into single value or string or object or it can be anything
//let storeCount = cartItems.reduce((value) => { return sum+=value });
//console.log(storeCount); doubt need to check

let storeCount = cartItems.reduce((a, b) => {
  return a + b;
}, 0);
console.log(storeCount);
// in this reduce() we pass two arguments
// reduce((a,b) => { return a + b },0)
// 1 => is callback function -> (a,b) => { return a + b } //
// 2 => is a initialize to 0 -> ,0 => set to a
// if we didn't initialize a, by default it will take first element of a array

let cartCount = [
  { id: 1, productName: "a", price: 10 },
  { id: 2, productName: "b", price: 30 },
  { id: 3, productName: "c", price: 50 },
  { id: 4, productName: "d", price: 20 },
];

// let getCartCount = cartCount.reduce((getPrice, sum) => {
//   return getPrice.price + sum;
// }, 0);
// console.log(getCartCount);

let aabbcc = cartCount
  .map((a) => {
    return a.price;
  })
  .reduce((b, c) => {
    return b + c;
  }, 0);
console.log(aabbcc);

// cartCount.forEach((getCartCount) => {
//     for(let {} in getCartCount) { // {} denotes unused declaration here keys declared but not used
//         let countPrice = getCartCount.price;
//         const totalCartPrice = countPrice.reduce((getCountPrice,totalSum) => {return getCountPrice + totalSum},0);
//         console.log(totalCartPrice);
//     }
// });

// EXercises

// 1 -> ArrayRange
const arrayResult = arrayFromRange(-4, 4);
console.log(arrayResult);

function arrayFromRange(min, max) {
  const arrayRange = [];
  for (let i = min; i <= max; i++) arrayRange.push(i);
  return arrayRange;
}

// 2 -> find search Elements in an array
let arrayOfNumbers = [1, 2, 3, 4, 5];

// Solution 1
let show = findSearchElement(arrayOfNumbers, 3);
console.log(show);

function findSearchElement(originalArray, searchElement) {
  return originalArray.includes(searchElement);
}

// Solution 2
// let show1 = findSearchElement1(arrayOfNumbers,10);
// console.log(show);
// function findSearchElement1(originalArray,searchElement) {
//     for(let element of originalArray)
//         if(element == searchElement)
//             return true;
//         return false;
// } doubt need to check

// 3 -> exclude elements in array and addded the excluded elements to new array
let getExclude = excludedArray(arrayOfNumbers, [1, 2, 3]);
console.log(getExclude);

function excludedArray(originalArray, excludedArray) {
  let excludedOutput = [];
  for (let element of originalArray)
    if (!excludedArray.includes(element)) excludedOutput.push(element);
  return excludedOutput;
} // need to concentrate more // once again need to work

// 4 -> moving element to different index position in an array

let moveElements = moveArray(arrayOfNumbers, 1, 2);
console.log(moveElements);

function moveArray(originalArray, index, offset) {
  let cloneOriginalArray = [...originalArray];
  let deleteElement = cloneOriginalArray.splice(index, 1)[0];
  cloneOriginalArray.splice(index + offset, 0, deleteElement);
  return cloneOriginalArray;
} // need to check // once again need to work

// NExt Count element occurances in an array

//let arrayOfNumbers = [1,2,3,4,5];
// Solution 1
let countOccur = countOccurance(arrayOfNumbers, 1);
console.log(countOccur);

function countOccurance(originalArray, passValue) {
  let occuranaceCount = 0;
  for (let element of originalArray)
    if (element == passValue) occuranaceCount++;
  return occuranaceCount;
}

// Solutiion 2 using reduce method

function countOccurs(originalArray, passValue) {
  return originalArray.reduce((a, b) => {
    let asd = b === passValue ? 1 : 0;
    return a + asd;
  }, 0);
}

let occuranceCount = countOccurs(arrayOfNumbers, 1);
console.log(occuranceCount); // need to work

// 5 -> get max of array

let getMaxElement = getMax(arrayOfNumbers);
console.log(getMaxElement);

function getMax(originalArray) {
  if (originalArray.length === 0) return false;
  // let max = originalArray[0];
  // for(i = 1;i < originalArray.length; i++) {
  //     if(originalArray[i] > max)
  //         max = originalArray[i];
  //     return max;
  // }

  return originalArray.reduce((a, b) => {
    return a > b ? a : b;
  });
}

let movies = [
  { id: 1, title: "A", year: 2021, rating: 4.7 }, //
  { id: 2, title: "B", year: 2018, rating: 4.2 }, //
  { id: 3, title: "C", year: 2014, rating: 3.6 },
  { id: 4, title: "D", year: 2019, rating: 5 }, //
  { id: 5, title: "E", year: 2022, rating: 3 },
  { id: 6, title: "F", year: 2021, rating: 4.9 }, //
];

let getMovi = movies
  .filter((param) => {
    if (param.rating >= 4 && param.year >= 2018) return true;
  })
  .map((params) => {
    return params.title;
  });
//.join(" ")
console.log(getMovi);

// for(let index of movies) {
//     for(let key in index) {
//         console.log(key,index[key]);
//     }
// }

// movies
//     .filter((passMovies) => passMovies.year === 2021 ) // need to continue

// function callHere() {
//   console.log("I'm here");
// }

// callHere();

// NEXt Functions

function aa() {
  console.log("Im here through AA");
} // function declaration

aa();

let bb = function () {
  console.log("Im here through PP");
}; // Function Expression (or) Anonymous Function Expression

bb();

let cc = function () {
  console.log("Im here through CC");
}; // Named Function Expression

cc();
let dd = cc;
dd();

// NEXt Hoisting

// Using Function Declaration syntax we can call a function anywhere in the file, then the Js engine performs hoisting
// hoisting means -> It is process of moving function declarations to the top of the file whether
// the function call on before or after the function declaration, automatically done by Js Engine

// Using Function Expression syntax we get an reference error if function call before the function expression
// it like log the variable before it's declared
// function expression eg:

// cc(); // reference error
// let cc = function () {
//   console.log("Im here through CC");
// };

// let cc = function () {
//   console.log("Im here through CC");
// };

// cc(); //  we can only call function after the function expression if we use function expression syntax...

// NExt passing Arguments

function sumUp(a, b) {
  return a + b;
}

console.log(sumUp(1, 2));

function sumUp(a, b) {
  return a + b;
}
// if we do like this => in return 1 + undefined coz, we pass a one argument for two parameters,
// 1 + undefined results to NaN
console.log(sumUp(1));

function sumUp() {
  // console.log(arguments); // arguments built-in js Object we easily access arguments of a function
  // then we use for of loop to iterate object in js , technically we use for in loop to iterate over object
  // but this arguments objects have a {Symbol.iterator} in built-in so we able iterate object using for of loop
  let totalUp = 0;
  for (let key of arguments) {
    console.log(key);
    totalUp += key;
  }
  return totalUp;
}

console.log(sumUp(1, 2, 3, 4, 5, 100));

// NEXt rest operator

function sumUpp(...args) {
  const asd = args.reduce((a, b) => a + b);
  return asd;
}
let sumUppp = sumUpp(1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
console.log(sumUppp);

// inside the parameter of a function we use ... means its a REST operator
// why we use REST operator if a parameter contains varying numbers of arguments then we use REST operator
// the REST operator takes all the arguments in an array
// we get array of arguments => [1, 2, 3, 5, 6, 8, 9]

// multiple parameters also possible with REST operator but the REST operator must be the last parameter.
// eg

function sumUpp(discountRate, xValue, ...args) {
  // function sumUpp(discountRate, ...args, xValue) {
  // the above line results => Rest parameter must be last formal parameter
  // function sumUpp(discountRate, xValue, ...args) {
  const asd = args.reduce((a, b) => a + b);
  return asd;
}
let sumUpppp = sumUpp(0.5, 30, 55, 1);
console.log(sumUpppp);

// NEXT default parameters

function caliInt(principal, rate, years) {
  return ((principal * rate) / 100) * years;
}

console.log("INTEREST RATE :", caliInt(10000, 4, 5));

function caliInt(principal, rate = 4, years = 5) {
  // default parameters above line and default parameter must be last parameter as like rest operator
  // eg : function caliInt(principal, rate = 4, years) { // if we use like we get an error instead we use like this below line
  // eg : function caliInt(principal, years,rate = 4) { then we argument like  caliInt(10000,5);
  return ((principal * rate) / 100) * years;
}

console.log("INTEREST RATE :", caliInt(10000));

// NEXT getters and setters

// using getters for accessing properties
// using setters for change / modify / mutate them

const profileMakeUp = {
  firstName: "Mark",
  lastName: "Antony",
  get fullName() {
    return `${profileMakeUp.firstName} ${profileMakeUp.lastName}`;
  },
  set fullName(params) {
    const updatedName = params.split(" ");
    this.firstName = updatedName[0];
    this.lastName = updatedName[1];
  },
};

profileMakeUp.fullName = "Manic Batsha";
// console.log(profileMakeUp);

// NEXt error handling / exception handling

const profileMakeUpOne = {
  firstName: "Mark",
  lastName: "Antony",
  get fullName() {
    return `${profileMakeUpOne.firstName} ${profileMakeUpOne.lastName}`;
  },
  set fullName(params) {
    if (typeof params !== "string") throw new Error("Value must be a string");
    // when we throw a exception then the remaining lines of code doesn't execute directly jump to the catch block
    if (params.length !== 2)
      throw new Error("FirstName and LastName are Mandatory");
    const updatedName = params.split(" ");
    this.firstName = updatedName[0];
    this.lastName = updatedName[1];
  },
};

try {
  profileMakeUpOne.fullName = "";
} catch (e) {
  // alert(e);
  console.log("eeeeee*", e);
}

console.log(profileMakeUpOne);

// NExt var, let, const
// Javascript----> var ----- Function scoped
// ES6 -----> let and const ----- block scoped

var uColor = "black"; // using var it will add the variable to window object
// In console you can able to see it => window.uColor => 'black'
let uAge = 21; // this will not
// window.uAge => 'undefined'

function sayHello() {
  console.log("Say Helloo to the world");
}
sayHello();

// window.sayHello
// ƒ sayHello() {
//   console.log("Say Helloo to the world");
// }

// the function will also added to window object, its a bad practice we want to prevent them

// NEXT [this] keyword

// if we use [this] keyword inside an function that function is a part of object => then the [this] keyword references the
// parent object that contains the method (a function inside the object,then we said as a method)

// if we use [this] keyword in stand-alone function => then the [this] keyword references the window object

// if we use [this] keyword in Constructor function => then the [this] keyword references the empty object we created
// using new keyword in Constructor function

let testObj = {
  name: "TestingStage",
  stage: ["Unit", "Functional", "Xyz"],
  showStage() {
    let i = 1;
    this.stage.forEach(function (stage) {
      console.log(this.name + i, stage);
      i++;
    }, this); // in this we passing second argument to the foreach so the second object will be a object
    // so we use [this] to point a parent object
  },
};

testObj.showStage();

let testObjOne = {
  name: "TestingStage",
  stage: ["Unit", "Functional", "Xyz"],
  showStage() {
    let i = 1;
    this.stage.forEach((stage) => {
      console.log(this.name + i, stage);
      i++;
    }); // in this eg: if we use arrow function there is no need to pass second argument
  },
};

testObjOne.showStage();

// let numbersArr = [1,2,3,4,5];
// Array.isArray(numbersArr) // to checkj whether its array or not.

var qwer = [
  {
    id: 1,
    title: "test_1",
    titleArr: [
      {
        titleArr_id: 101,
        titleArr_name: "nested_test_1",
      },
      {
        titleArr_id: 102,
        titleArr_name: "nested_test_2",
      },
    ],
  },
  {
    id: 2,
    title: "test_2",
    titleArr: [
      {
        titleArr_id: 103,
        titleArr_name: "nested_test_3",
      },
      {
        titleArr_id: 104,
        titleArr_name: "nested_test_4",
      },
    ],
  },
];

for (const index of qwer) {
  // console.log(index);
  index.titleArr.map((e) => {
    console.log(e);
  });
}
