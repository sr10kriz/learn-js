/* 1. Basics in Js */
/* Used to create dynamic and more user interactive websites, and its a dynamically typed language */
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
  var shadow = shadow + 5; // here the outer one is inaccessible, it has no effect while the inner variable is in action
  /* 
     - here it will shadows the outer varible, but takes and logs the block scope variable
     - here the shadow variable will hoisted to the top the function and initialized as undefined, so the log will be NaN (undefined + 5)
     - if we shadow with let, we got ReferenceError: Cannot access 'shadow' before initialization
    */
  console.log("shadow", shadow);
}
callShadow();

/* # Hoisting
    - the variables we created in js, are hoisted to the top the scope with their respective nature
    - default behavior moving declarations (not initializations) to the top their respective scope (either functional or block scope) during the compilation phase
*/
/* i.e */
function hois() {
  // console.log("hois", hois); /* here we got ReferenceError: Cannot access 'hois' before initialization, this hois in TDZ */
  let hois = "hois";
  console.log("hois", hois);
}
hois();

/* # Temporal Dead Zone (TDZ) 
    - only applicable for let & const keywords
    - its a time between where a let or const variable is delcared or initialized 
    - A variable is in the TDZ from the start of its scope until it is declared
    - Accessing it during this zone results in an error.
  */

/* i.e
    {
      - TDZ is start from here for varible with let and const keyword
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

/* # Primitives are copied by Value - value type, the value will be stored only inside of this varible when we copy one variable to another the copied variable is passed to another varible | they are completely independent of each other */

/* # Non-Primitives are copied by their reference/memory location, reference types the value will be stored in some memory location and when we copy one variable to another, the value that is stored in memory location will be copied to another variable. if we modify any one variable that will be affect another too
 */

/* # Primitives types or value types | string | int(number) | BigInt | boolean | undefined | null */
let myName = "Josh"; // string
let age = 30; // integer
let isApproved = true; // boolean
let middleName; // undefined we didn't initialize value to middleName
let selectedColor = null; // defaultly we initialize variable with null, default value of null is 0

/* # checked in inspect console typeof a variable */

/* # typeof - is a unary operator, used to determine the datatype of its operand */
/* i.e syntax: typeof operand */

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

/* # in (operator) - is a operator that check if a property exists in an object (or an index exists in arrays) */
/* i.e syntax: "property" in object */

/* with objects */
// let carcar = {name: "city", model: 2001};
// console.log("in check obj", "color" in carcar) /* logs false */
// console.log("in check obj", "model" in carcar) /* logs true */

/* with arrays */
// let carcarArr = ["city", "swift"];
// console.log("in check arr", 0 in carcarArr) /* logs true */
// console.log("in check arr", 2 in carcarArr) /* logs false */

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

/* # Arrays (arrays is a data structure that represents list of items/data with any datatypes) */
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

/* # Types of Functions */

/* - Function Declaration or Named Functions */
/* hoisted, reusable, cannot use as an expression */
/* i.e */
function funcDec() {
  /* perform some tasks */
  console.log("Function Declaration");
}

/* - Function Expression */
/* anonymous, used as a variable, not hoisted like declarations even with var as a keyword */
/* i.e */
const funcExp = function () {
  /* perform some tasks */
  console.log("Function Expression");
};

/* - Arrow functions */
/* short syntax, doesn't have this, arguments keywords, usefull for callbacks */
/* i.e */
const arrFunc = () => {
  /* perform some tasks */
  console.log("Arrow Function");
};

/* - Anonymous functions - functions without a name (used in function expression or callbacks) */
/* i.e */
/* function () {} - refer callbacks and function expression */

/* - IIFE - Immediately Invoked Funtion Expression */
/* invoked immediately */
/* i.e */
(function () {
  /* perform some tasks */
  console.log("IIFE");
})();

/* - Constructor Functions - refer Constructor Functions part */

/* - Generator Function */
/* -- these function allows you to pause and resume execution using the yield keyword
   -- use function* - denotes its a generator function
   -- use .next() to execute/resume functin until the next yield
   -- while using next(), it return object with {value, done} - value (yielded value), done is a default property (either a true or false), when done its true the generator complete, for further calls its returns {value: undefined, done: true} refer below eg's
   -- useful for lazy evaluations 
*/
/* i.e */
function* genFun() {
  yield 1;
  yield 2;
  return 3;
}
const gf = genFun();

console.log("genFun", gf.next()); // yielded value 1 return {value: 3, done: false}
console.log("genFun", gf.next()); // yielded value 2 return {value: 3, done: false}
console.log("genFun", gf.next()); // yielded value 3 return {value: 3, done: true}
console.log("genFun", gf.next()); // yielded value undefined return {value: undefined, done: true}

/* # Type Conversion/Coercion - since js is dynamically language, so it can change any variables types at runtime */
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
/* == double equals denotes LOOSE equality (check only values) */
/* === triple equals denotes STRICT equality (check only values as well as datatypes) */
/* i.e
  '5' == 5      // true
  '5' === 5     // false
  null == undefined // true
  null === undefined // false
  false == 0    // true
  false === 0   // false
*/

/* 3. Operators => Arithmetic | Assignment | Bitwise | Comparison/Relational | Equality | Logical | Ternary/Conditional */

/* # Arithmetic operators */
let x = 2;
let y = 2;
console.log(x + y); // plus
console.log(x - y); // minus
console.log(x * y); // multiply
console.log(x / y); // division
console.log(x % y); // remainder of division
console.log(x ** y); // exponentiation new in Js means x to the power of y
console.log(x++); // post-increment
console.log(++x); // pre-increment
console.log(x); // after increment
console.log(x--); // post-decrement
console.log(--x); // pre-decrement

/* # Assignment operators = , += , *=, */
let a = 100;
a = a + 20; // a+=20
a = a * 10; // a*=10
console.log(a);

/* # Comparison operator/Relational operators >,>=,<,<= */
let m = 0;
console.log(m > 0);
console.log(x >= 0);
console.log(x < 0);
console.log(x <= 0);

/* # Equality operators */
console.log(0.1 === 0); // === indicates Strict equality (check datatype as well as value)
console.log(1 !== 0);
console.log("0" == 0); // == indicates loose equality (check only the values)
console.log(true == 1);

/* # Ternary / Conditional operator */
let points = 110;
let customerType = points > 100 ? "Gold" : "Silver";
console.log(customerType);

/* # Logical operators AND = && | OR = || | NOT ! */
let highIncome = true;
let goodCredits = true;
let eligibleForLoan = highIncome && goodCredits;
console.log("Application Approved", eligibleForLoan);
let applicationRefused = !eligibleForLoan;
console.log("Application Refused", applicationRefused);

/* Logical operators with Non-booleans, there are two falsy and truthy */
/* falsey values are undefined, null, 0, false, '', NaN */
/* false || '' or false or 0 or undefined or NaN then it is falsy value */

/* truthy values returns true abt that condition */
/* true || 'Josh' or 1 or true then it is truthy value */

/* # Operator Precedance - we give operation precedance to the operands/values using paranthesis */
let test = 5 + 3 * 10;
console.log(test); // output will be 35

let ttest =
  (5 + 3) *
  10; /* here we give precdance to the value with paranthesis, then while execution it will taken as first preference and so on */
console.log(ttest);

/* # Swapping of variables with third variable */
let first = 1;
let second = 2;
let third = first;
first = second;
second = third;
console.log("first", first);
console.log("second", second);

/* # Swapping of variables without third variable, use destructuring method */
let aaaa = 100,
  bbbb = 200;
console.log("aaaa bbbb", ([aaaa, bbbb] = [bbbb, aaaa]));

/* 4. Conditional Statements */

/* # if else */
/* syntax... */

// if(condition)
//     //statement; // this for single line statement...

// if(condition) {
//     //statement 1 ;
//     //statement 2;
//     // and so on...  //use curly braces for multiple statements...
// }
// else if(condition) {
//     // some statements here...
// }
// else{
//     // some statements here...
// }

let role = "guest";

/* i.e with if else */
if (role === "guest") console.log("Guest User");
else if (role === "admin") console.log("Admin User");
else if (role === "superadmin") console.log("Super Admin");
else console.log("Unknown User");

/* # Switch Case */
/* syntax... */

switch (role /* instead of condition we have to pass variable */) {
  case "guest" /* check case/condition */:
    console.log("Guest User"); /* statement */
    break; /* break keyword used to cut the execution and jump out of the iteration/condition */
  case "admin":
    console.log("Admin User");
    break;
  case "superadmin":
    console.log("Super Admin");
    break;
  default: /* default block will if all the case fails, then fall into default block i.e fallback option */
    console.log("Unknown User");
}

/* # Short-circuiting */
/* It means it check the condition until it gets True when it gets true then it will stop checking the condition. The remaining conditions remains unchecked. */
let userColor = undefined;
let defaultColor = "Black";
let currentColor = userColor || defaultColor;
console.log("currentColor", currentColor);

let userCColor = "Gold";
let defaultCColor = "Black";
let currentCColor = userCColor || defaultCColor; /* here its short-circuiting */
console.log("currentCColor", currentCColor);

/* 5. Loops for | while | do-while | for-in | for-of */

/* # for - syntax... */
/* for(initialExpression; Condition; incrementExpression) {
    // statements... multiple statements...
} */

for (let i = 0; i < 5; i++) {
  console.log("Josh here..", i);
}

/* # iteratin with conditional statements */
for (let a = 0; a < 5; a++) {
  if (a % 2 != 0) console.log("Odd", a);
  else console.log("Even", a);
}

/* # in while and do-while loops we have declare variable externally not in the condition... */

/* # while entry controlled loop */
let b = 0;
while (b < 5) {
  if (b % 2 != 0) console.log("Odd PEACE here...", b);
  else console.log("Even PEACE here...", b);
  b++;
}

// let b = 0; /* here is a syntax error identifier b is already declared...we declare b externally for while loop here for loop variable declaration and while loop variable declaration are differs...in for loop we declare internally in condition this is called scope.. */

/* # do while exit controlled loop it will execute the statement atleast once whether it is true or false coz this will be check the condition in the end thats why it is called as exit controlled loop */
let c = 0;
do {
  if (c % 2 == 0) console.log("Even PATIENCE here...", c);
  else console.log("Odd PATIENCE here...", c);
  c++;
} while (c < 5);

/* # infinite loops (inifinite or forever in iteration state) */
let d = 0;
while (d < 5) {
  console.log("Infinite loop", d);
  d++; /* infinite loops if increment didn't placed here it leads to infinite loop... */
}

/* i.e for inifinite loop */

// while(true) {

// }

// do {

// } while(true);

// for(i = 0; i >= 0; i++){

// }

/* # for-in loops designed to iterate object, but can able to iterate over arrays also */
/* # (for-in loops with object) for-in loop mainly used to iterate properties of an object and its value */
let testAgain = {
  name: "Cris",
  age: 35,
};

for (let key in testAgain) {
  /* in every iteration the key hold the property of testAgain object...using bracket notation we access object property with its value....if we use dot notation then we dont have a key property in testAgain object... */
  // console.log(key);
  console.log(`for-in with objects ${key}`, testAgain[key]);
}

/* # (for-in loops with arrays) */
let colors = ["gold", "white", "black"];
for (let index in colors) {
  // the index will store the index position of each element in an array
  console.log("for-in with array index", index);
  console.log("for-in with array", index, colors[index]);
}

/* # for-of loops only designed to iterate arrays only */
/* # (for-of) mainly used to iterate elements or items in an array */
for (let [i, color] of colors.entries()) {
  /* always use entries() to get index as well as the values */
  console.log("for-off with array index", i);
  console.log("for-off with array", color);
}

/* # break and continue keywords - these are loop controlled statements, used to alter normal loop execution flow */
/* break - used to exit the loop regardless of the condition */
/* continue - used to skip the current iteration block and move to the next iteration */

/* # labeled break keyword - its one of the advanced concepts in js */
/* i.e */
breakMe: for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    if (i == 1 && j === 1) break breakMe;
    console.log("labeled break", `i ${i} j ${j}`);
  }
}

/* # Objects ( mainly objects are collections of key value pairs {property: values} we want to encapsulate them inside of an object] ) */
/* why we create objects coz the varibles or properties we declare are highlt related to each other */
/* eg if a circle contains so many properties (below) */

// let radius = 3;
// let diameter = 6;
// let x = 2;
// let y = 1;

/* and so on may be 10 properties also possible, instead of creating like above, we have create circle object */
/* inside an object we create one or more key value pairs, the values in key-value pairs in javascript should be anything i.e function, array, null, '', undefined, true, false, 23, 'hello' and so on */

// let circle1 = {
//     radius : 2,
//     x : 1,
//     y : 4,
// };

/* # we can also create another object or array or function inside an object */
// above eg shows, instead of creating x and y key value pairs we create another object inside a object (below)

// let circle2 = {
//     radius : 2,
//     location : {
//         x : 1,
//         y : 2,
//     }
// };

/* # mainly purpose of an object is to group highly relates variables (details into a collection kindof) */

// function drawCircle() {} /* these functions are highly related to object circle so instead of declaring stand-alone functions ... */
// function moveCircle() {} /* we declare functions inside the objects (below) */

let circle1 = {
  radius: 2,
  location: {
    x: 1,
    y: 2,
  },
  draw: function () {
    console.log("Hello Circle.");
  },
};
// console.log(circle3.draw());
circle1.draw();

/* # these are style of OOP concept (above) */
/* # In OOP terms if a function is a part of an object then the function should be called as Method */

/* 6. Factory Functions */
/* if we need another circle object with same key value pairs and funtions */
/* instead of duplicate the same objects and change the object namee to circle2, */
/* we can use factory functions in js... */
/* these factory functions produce objects like factory produces products..... ( below eg ) */

// function createCircle(radius) {
//     return {  /* just return the object inside the factory function whenever call the function its return a object. */
//         radius : radius, /* here we pass radius as parameter */
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
    /* just return the object inside the factory function whenever call the function its return a object. */
    radius /* here we pass radius as parameter, this line exactly equivalent to this => radius : radius => 1st radius->key/property | 2nd radius->value */,
    // draw : function() {
    //     console.log('Hello Js.');
    // }
    /* we create function like this also */
    draw() {
      console.log("Draw a Circle");
    },
  };
}

/* createCircle.  after dot it shows a popup purple inidcates methods, blue indicates properties of an object */

let drawCircle1 = createCircle(1);
console.log("drawCircle1", drawCircle1);

let drawCircle2 = createCircle(2);
console.log("drawCircle2", drawCircle2);

/* # factory functions working like this */
/* instead of duplicate the same objects and change the object namee to circle2 here */
/* we can use factory functions in js... */
/* we can pass different argument to get desired output */
/* in Factory Functions we use naming conventions-> camelNotations like oneTwoThree() {   } ... */

/* 7. Constructor Funtions - it is similar to factory functions */
/* in Constructor Functions use naming conventions-> PascalNotation like OneTwoThree() {   } ... */

/* # camelcased => oneTwoThree() -> this for factory functions */
/* # pascalcased => OneTwoThree() -> this for Constructor functions */

function ConstructObj(radius) {
  /* job of the function is to construct or create object, instead of return a object we use different approach, in javascript we have KEYWORD called this */
  this.radius =
    radius; /* this keyword is a reference to the below mentioned Constructor object that is executing this piece of code */
  /* above line this.radius => this->keyword, radius->property, = radius-> passing a argument to parameter */
  this.draw = function () {
    console.log("Good to see JS in action.");
  };
}

/* to create circle object using Constructor function */
const ConstructCircle = new ConstructObj(2);

/* # here new is a keyword three things gonna happen (below) */

/* 1-> new keyword creates an empty javascript object eg: let x = { }; => empty object */
/* 2-> this -> keyword point the empty object, it means its points out radius property and draw function from ConstructObj() function */
/* 3-> finally, the new keyword return the new object from ConstructObj() function  eg: return this; but we dont want to explicitly use the return this; it will done under new keyword (Constructor Function) */

console.log("ConstructCircle", ConstructCircle);

/* # Next Dynamic Objects -> objects are always dynamic */
const dynamicObj = {
  radius: 5,
};

dynamicObj.color =
  "Red"; /* we can add more properties and methods in the objects */
(dynamicObj.drawCir = function () {
  console.log("Draw a Circle with Radius with Radius");
}),
  (dynamicObj.rectSide = 4),
  (dynamicObj.squ = 4) /* we can also delete properties of an object using delete keyword */,
  delete dynamicObj.rectSide;
delete dynamicObj.squ;

console.log("dynamicObj", dynamicObj);

/* 8. Constructor Property */
/* In javascript every object has a constructor property and that references a function that used to create a object. */
/* let mnb = {}; // the javascript engine take like this let mnb = new Object(); this method is kind of a Constructor Functions */

/* In javascript few built-in Constructors are there */
new String(); /* for creating Strings */
/* instead of using this we use string literals like => '',"",`` by using this simple & cleaner than using Constructor. */

new Boolean(); /* either true or false */

new Number(); /* 1,2,3... */

new Date(); /* returns current date as Date Object */

/* 9. Spread Operator - 
      - the spread operator expands iterables like (arrays, objects, strings) into individual elements 
      - spread operator doesn't mutate the original object, it creates new one
      - when property overlaps i.e age: 21, age: 24, last one wins and its make shallow copy
      - when cloning/expanding how deeply the data is copied matters i.e spread only copies the top level properties, and nested objects/arrays are still referenced (not copied) - what does that mean, if we update the top-level properties it wont affect the original one, but if we update the nested properties it will affect the original one (because its copied by reference/memory location (heap)) 
*/
/* # denoted as ... (three dots) */

/* # Use cases of Spread Operator */
/* # with arrays */
let spreadArr = [1, 2, 3];
let spreadArr2 = [...spreadArr, 4, 5]; /* logs [1,2,3,4,5] */
console.log("spreadArr", spreadArr);
console.log("spreadArr2", spreadArr2);
/* changes spreadArr2 wont affect the spreadArr, its a shallow copy not deep copy  */

/* # array (merging using spread) */
console.log("spreadArr Merge", [...spreadArr, ...spreadArr2]);

/* with objects */
let spreadObj = { name: "sri" };
let spreadObj2 = { ...spreadObj, age: 21 };
let spreadObj3 = { ...spreadObj2, age: 24 };
console.log("spreadObj", spreadObj);
console.log("spreadObj2", spreadObj2);
console.log("spreadObj3", spreadObj3);
console.log("spreadObj2", spreadObj2);

/* # objects (merging using spread) */
console.log("spreadObj Merge", {
  ...spreadObj,
  ...spreadObj2,
  ...spreadObj3,
}); /* logs {name: "sri", age: 24} */

/* # with string */
let spreadStr = "BELOVED";
console.log("spreadStr", [...spreadStr]);

/* 10. Exception Handling with try and catch, finally these are used to handle runtime errors without crashing the application */
/* syntax... */
try {
  // in try syntax errors are not caught, only runtime errors will be caught
} catch (e) {
  // to handle exceptions (if errors occurs in try block then catches the error and gives access to the Error object)
} finally {
  // executes this block regardless of the errors
}

/* # use throw keyword to customly through a error with custom message */
/* i.e
  try {
    let a = 1;
    if (a === 1) throw new Error("Some went wrong, kindly check"),  this will caught in catch block
  } catch (e) {
    console.log("error", e.message); 
    // here do any operations showing any errors to the users using alert boxes
  }
*/

/* # Types of Exceptions */
/* - Reference Error = occurs when you use variable that hasn't been declared (undefined variables) */
/* - Type Error = occurs when a value is not of the expected type (incorrect datatypes) */
/* - Syntax Error = occurs when using incorrect syntax, these arise before the code runs (invalid syntax) */
/* - Range Error - occurs when the value is not in set or range of allowed values (number out of range) */
/* - Custom Error = manually throw custom errors (use throw new Error()) */

/* 11. Destructuring - used to unpack/extract values from arrays / properties from object to a distinct variables */

/* with arrays */
let [da1, da2, da3] = [1, 2, 3];
// let [, , da3] = [1, 2, 3]; /* its for skip elements, only destructure third element */
// let [da1, da2, da3 = 3] = [1, 2]; /* its for default value, if array have third element then value taken else its default value */
console.log("da1", da1);
console.log("da2", da2);
console.log("da3", da3);

/* with objects */
let { nameDt, skill } = { nameDt: "buddha", skill: "wisdom" };
console.log("destruc name", nameDt);
console.log("destruc skill", skill);

let { nameDt: buddha, skill: wisdom } = {
  nameDt: "buddha",
  skill: "wisdom",
}; /* here we unpack properties with desired variable names */
console.log("destruc buddha", buddha);
console.log("destruc wisdom", wisdom);

/* # Destructuring Nested Use Cases */
const {
  profile: {
    contact: { email },
  },
} = {
  id: 1,
  profile: {
    username: "sri",
    contact: {
      email: "sri@example.com",
    },
  },
};

console.log("nested destructuring", email);

/* 12. GC (Garbage Collector) */
/* 
  - js has automatic memory management, we dont need to manually allocate or free up memory, GC will handles automatically under the hood
  - GC, more powerfull for Non-primitives because these types stored by reference/memory location (heap)
  - What GC will do? - taking care of cleaning un-used or un-reachable varibales (applicable for all datatypes, but play a big role in reference types)
*/

/* 13. Template Literals - introduced in ES6 uses `` backticks for multi-line strings, string interpolation, expression embedding */
/* i.e */
let temLit = `Patience and Peace`; /* default */
let temLit1 = `Patience
               And 
               Peace`; /* multi-line strings */
let temLit2 = `${temLit}`; /* interpolation */

/* 14. Deep vs Shallow Copy - when you copy object or array, how deeply the data is copied that matters the most. */

/* # Shallow Copy */
/* 
  - copies only top-level properties
  - nested objects/arrays are still referenced (not copied)
*/
/* i.e */
let scOriginal = {
  nickName: "god",
  nested: {
    color: "red",
  },
};
console.log("scOriginal", scOriginal); /* here the color will changes to pink */

let scCopy = { ...scOriginal };
scCopy.nickName = "goddess";
scCopy.nested.color =
  "pink"; /* here it will affect the original one, this is shallow copy  */
console.log("scCopy", scCopy);

/* eg's of shallow
      - Object.assing({}, obj)
      - {...spread_operator}
*/

/* # Deep Copy */
/* 
  - copies everything recursively
  - create entirely new instances of nested objects/arrays
*/
let dcOriginal = {
  nickName: "god",
  nested: {
    color: "red",
  },
};
console.log("dcOriginal", dcOriginal);

let dcCopy = JSON.parse(
  JSON.stringify(dcOriginal)
); /* here its deep cloning/copy */
dcCopy.nested.color = "pink"; /* here it wont affect the original one */
console.log("dcCopy", dcCopy);

/* eg's of deep
      - JSON.parse
      - structuredClone (built-in-method)
      - lodash (library)
*/

/* 15. Strict Mode in Js - its a restricted variant of js, used to catch common coding mistakes */
/* you can activate strict mode by "use strict"; at the top of your script or function */
/* advantages:
    - avoid silent js bugs
    - more secure code
*/

/* 16. this keyword - this refer to the context in which a function is executed, its based on how the function is called, not based on where it is declared */
/* i.e */

/* global context */
console.log("this", this); /* points window object */

/* inside a function */
function thisFun() {
  console.log("this", this); /* points window object */
}

/* inside a function (in strict mode) */
function thisFun() {
  console.log("this", this); /* undefined */
}

/* inside a object */
let thisObj = {
  namee: "god",
  nested: {
    nickName: this.name /* points current object */,
  },
};

/* event listeners */
/* document.querySelector("button").addEventListener("click", function () {
  console.log("this", this); // points current element
}) */

/* 17. Modules in js - modules allows you to split your codes into re-usable pieces */
/* 
how it works (key notes wwhile working with modules)
  - export = expose those variables, functions from a file
  - import = import to use those exported variables, functions in another file
  - import must be at top-level, not inside loops/functions
*/

/* 18. Event Loop */
/* 
  - since js is single-threaded scripting language, meaning it can do one thing/task at a time
  - but you still see async behavior (like timers, api-calls, dom events) happening without blocking the page
  - how? - achieved with help of Event Loop 
*/

/* # Key Components of Event Loop
      1* call stack (all the functions)
        - where all functions are pushed and popped
        - it follows LIFO (last-in, first-out)
        - only one function executes at a time

      2* web apis / browser apis (async tasks are handled by web apis)
        - provided by browser / node js i.e setTimeout, api-calls, dom events etc...
        - they run outside the call stack, and hand control when ready

      3* callback queue (task queue)
        - stores async callbacks waiting to pushed into the call stack
        - once the web apis complete it tasks, then it will put the callbacks in callback queue, if its a promise .then(), it will be moved to microtask queue
        - it follow FIFO (first-in, first-out)

      4* microtask queue
        - higher priority than callback queue
        - stores .then() from promises
*/
/* # visualized eg's, see below */
console.log("Event Loop", "Starts"); // this will move to call-stack

setTimeout(() => {
  // this will move to web-apis, once its completed then moved to callback queue
  console.log("Event Loop", "Callbacks");
}, 2000);

Promise.resolve().then(() => {
  // this will move to the web-apis, once its completed then moved to micro task queue
  console.log("Event Loop", "Promises");
});

console.log("Event Loop", "End"); // this will move to call-stack

/* # output will be
  - console.log("Event Loop", "Starts");
  - console.log("Event Loop", "End");
  - console.log("Event Loop", "Promises");
  - console.log("Event Loop", "Callbacks");
*/

/* # Event Loop Understanding
  - first call stack (all the functions pushed to call stack)
  - second all the async behaviors are moved to web-apis 
  - third if web-apis completed its task, then it will move to callback queue (if it is async callbacks then moved to callback queue, if it is promises from .then(), will moved to microtask queue)
  - fourth if call stack is empty, then call stack give first priority to microtask queue (Promises), then callback queue (setTimeout())
*/

/* # Event Loop Cycle
  - check call stack - if its empty, move to the next step
  - empty all microtask queue - run all microtasks until its empty
  - run one macrotask/callback queue - take the first task from callback queue and push to it to the call stack
  - repeat the cycle from call stack...
*/

/* ref-links to see event loop in action 
    - https://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
*/

/* 19. Synchronous vs asynchronous */

/* synchronous
    - tasks that are performed one at a time, in order
    - each task wait for previous one to complete before executing
    - i.e standing in a queue (first in, first out) (ssee below eg)
*/
console.log("sync", "1st");
console.log("sync", "2nd");
console.log("sync", "3rd");

/* above will execute line by by (from top to bottom (in order)) */

/* asynchronous
    - tasks that do not wait for previous task to finish
    - js hand over time consuming tasks i.e (api-calls, timers) to the browser or node js runtime, and continues running the rest of the code
    - once the async task completes, then it will be queued via event loop (see below eg)
    - i.e ordered food (food is preparing), but meanwhile eating starters
    - setTimeout(), setInterval(), fetch(), XMLHttpRequest, promises (.then(), .catch()), async/await, event listeners 
*/
console.log("async", "1st");
setTimeout(() => {
  console.log("async", "timers");
}, 2000);
console.log("async", "2nd");

/* 20. Callbacks Functions */
/* - a callback is a function passed as an argument to another function, which is then invoked */
function callBuckBeak(param, callback) {
  console.log("callBuckBeak", param);
  callback(param);
}

function callChildBuckBeak(param) {
  console.log("callChildBuckBeak", param);
}

callBuckBeak("BuckBeak", callChildBuckBeak);

/* # Named callbacks vs Anonymous callbacks */
/* named callbacks */
function done() {
  console.log("named callback done");
}
setTimeout(done, 1000);

/* anonymous callbacks */
setTimeout(() => {
  console.log("anonymous callback done");
}, 1000);

/* 21. Promises */
/* 
  - a promise is an object, that represents eventual completion or failure of a asynchronous function
  - it acts as a placeholder for a value that will be known in the future
  - promise has three states
    1. pending - initial state, neither full-filled nor rejected
    2. fulfilled - operation completed successfully
    3. rejected - operation failed
*/
/* syntax with basic eg's */
let promise = new Promise((resolve, reject) => {
  let success = false;
  if (success) resolve("operation done");
  reject("operation failed");
});

promise
  .then((res) => console.log("promise resolve res", res))
  .catch((res) => console.log("promise reject res", res));

/* 
  - resolve() = is called when the async operation succeeds
  - reject() = is called when the async operation fails
  - .then() = handles resolved values
  - .catch() = handles rejected/errors values
  - finally() = runs no matter what, usefull for clean-ups
*/

/* # Chaining Promises
    new Promise((resolve, reject) => {
      resolve(10);
    }).then(num => num * 2).then(num => num + 5).then(final => console.log(final)); // logs: 25
*/

/* # Promise.all - runs multiple promises in parallel, resolves when all completes, if one fails, then .all() fails */
/* syntax */
Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]).then(
  (res) => console.log("promise all res", res) // logs [1,2,3]
);

/* # Promise.race - returns result of a first settled (resolved/rejected) promise */
/* syntax */
Promise.race([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2secs");
    }, 2000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1secs");
    }, 1000);
  }),
]).then((res) => console.log("promise race res", res));

/* # Promise.allSettled - when you want to wait for all promises to settled (regardless of resolve or reject) and get status of each */
/* syntax */
Promise.allSettled([
  Promise.resolve(1),
  Promise.reject(2),
  Promise.resolve(3),
  Promise.reject(4),
]).then((res) => console.log("promise allsettled res", res));
/* 
  - here above it returns array of promises/objects, 
  - resolved promises have {status: 'fulfilled', value: 1 (resolved value)}
  - rejected promises have {status: 'rejected', reason: 2 (rejected value)}
*/

/* # Promise.any - returns first resolved promise and ignores all the rejections */
/* syntax */
Promise.any([
  Promise.reject(4),
  Promise.resolve(3),
  Promise.reject(2),
  Promise.resolve(1),
]).then((res) => console.log("promise any res", res));
/*
  - here it only returns the first resolved promise i.e 3
  - ignores all the rejections as well as next resolved promises also
*/

/* 22. Async / Await */
/* - async/await is a cleaner way to handle asynchronous operations in js */
/* - async = is a keyword is used to declare a function that always returns a promise */
/* - await = is used inside async functions only to pause execution until a promise rejects/resolves */
/* eg's */

function delayAsync(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

async function asyncFunc() {
  console.log("async Start");

  await delayAsync(3000);
  console.log("async delay 3secs");

  await delayAsync(1000);
  console.log("async delay 1secs");

  return "async Done!";
}

asyncFunc().then((res) => console.log("async await", res));

/* while using async/await use always try...catch... instead of .then() and .catch() */

/* 23. Debouncing, Throttling */

/* # Debouncing
    - a function only called after a certain period of inactivity
    - eg: someone knocking the door, you going to open the door once they stop knocking the door for 3secs
*/

/* # Throttling
    - a function is executed in a specified time interval, no matter how many times you trigger the event
    - eg: you decide to open th every 3secs, no matter how many times they knock, after 3secs you ready to open again
*/

/* 24. DOM - Document Object Model
        - mainly focus on the html content, each and every element represented as node (tree of nodes)
*/

/* # single element selection */
/* 
  - document.getElementById('id_name');
  - document.querySelector('#id_name' or '.class_name') ;
*/

/* # multiple element selection */
/* 
  - document.getElementsByClassName('class_name');
  - document.querySelectorAll('.class_name');
  - document.getElementsByTagName('div');
*/

/* # manipulating elements */
/* 
  - element.textContent = "peace";
  - element.innerHTML = "<p>peace</p>"
  - element.style.color = "white";
     etc...
*/

/* # attributes */
/* 
  - element.setAttribute("href", "https://google.com");
  - element.getAttribute("href");
  - element.removeAttribute("disabled");
*/

/* # Creating and Removing elements */
/* 
  let newDiv = document.createElement("div");
  newDiv.textContent = "peace";
  document.body.appendChild(newDiv);

  element.remove() // to remove a element
*/

/* # Event Handlers */
/* 
  button.addEventListener('click', function () {
    // perform some task
  })
*/

/* # Event Delegation
  - add a single event listener to parent element instead oof addind each of the child elements
  - usefull dynamic addition of the child elements

  document.getElementById("peace").addEventListener('click', function (event) {
    if (event.target.tagName == "LI") {
      // perform some task
    }
  })
*/

/* 25. LocalStorage, SessionStorage */

/* # Local Storage
  - data persists even after page reload or browser restart
  - shared across all the tabs/windows of same origin
  - memory limit: 5 to 10 mb
  
  - setItem = localStorage.setItem("name_of_the_property", "value")
  - getItem = localStorage.getItem("name_of_the_property")
  - removeItem = localStorage.removeItem("name_of_the_property")
*/

/* # Session Storage
  - data is cleared when tab/browser closed
  - specific to a tab/window
  - memory limit: 5 to 10 mb

  - setItem = sessionStorage.setItem("name_of_the_property", "value")
  - getItem = sessionStorage.getItem("name_of_the_property")
  - removeItem = sessionStorage.clear()
*/

/* 26. Timers (setTimeout, setInterval, clearTimeout, clearInterval) */
/* # setTimeout - runs a function once after a delay */
/* syntax - setTimeout(callbackfunction, delayInMs, ...agruments (if any)) */
setTimeout(
  (param) => {
    console.log(`perform some tasks setTimeout ${param}`);
  },
  1000,
  "PEACE"
);

/* # clearTimout - stops/prevent the setTimeout before it executes */
let timerI = setTimeout(() => {
  console.log("try to prevent me");
}, 2000);

clearTimeout(timerI); // prevents/stops the above timer

/* # setInterval - runs a function repeatedly at intervals */
/* syntax - setInterval(callbackfunction, delayInMs, ...arguments (if any)) */
let timerII = setInterval(
  (param) => {
    console.log(`perform some tasks setInterval ${param}`);
  },
  1000,
  "PEACEE"
);

/* # clearInterval - stops/prevent the above interval */
clearInterval(timerII);

/* 27. Optional Chaining
    - avoids run-time errors while trying to access deeply nested properties, that may or may not be exists
    - we can use this methods also
    - syntax: ?.
*/
/* without optional chaining */
let optCha = {};
console.log(
  "optionalChaining",
  optCha.name
); /* leads to app crash/sometimes leads to unexpected behavior */

/* with optional chaining */
console.log(
  "optionalChaining",
  optCha?.name
); /* return undefined, no app crashes, silently ignores the error */

/* 28. Nullish Coalescing Operator 
    - provide default value if left-hand side is null or undefined (not falsy like 0, false, "")
    - syntax: ??, ||
*/
/* use case */
let nullCoal = null;
let nullCoal1 = 0;
console.log("nullish coalscing", nullCoal ?? "peace"); /* logs peace */
console.log("nullish coalscing1", nullCoal1 || "peace"); /* logs peace */
console.log("nullish coalscing1", nullCoal1 ?? "peace"); /* logs 0 */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* train some logics section */

// let speedLimit = 70;
myFunction(78);
function myFunction(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  const maxPoints = 12;
  if (speed <= speedLimit + kmPerPoint) {
    console.log("ok");
    return; /* if condition satisfies then it will stop checking the remaining codes outside the if condition */
  }
  let points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= maxPoints) console.log("License Suspended");
  else console.log("Points", points);
}

/* # get count of truthy value as results */
const myArray = [undefined, null, "", 0, false, 1, 2, 5, true];
console.log("getTruthyCount", getTruthyCount(myArray));
function getTruthyCount(myArray) {
  let count = 0;
  for (let value of myArray) if (value) count++;
  return count;
}

/* # get the property of an object with the type of string... */
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

/* # get multiples of 2 & 4 limit 10 */
function getSum() {
  let sum = 0;
  const limit = 10; /* initialization */
  for (let i = 0; i <= limit; i++) {
    if (i % 2 == 0 || i % 4 == 0) sum += i;
  } /* here condition */

  return sum; /* return statement */
}
console.log("getSum()", getSum());

/* # get which grade */
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

/* # stars program */
getStar(7);
function getStar(stars) {
  for (let row = 1; row <= stars; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) pattern += "*";
    console.log(pattern);
  }
}

/* # prime numbers divisible by 1 and the given number itself */
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

/* # these named as single responsibility principle each function carries their own functionality ( getPrime() & isPrime() based on single responsiblity principle) */

/* # getStar() based on normal function */

/* train some logics section */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
// Object.keys // already used above eg's using dot notation its shows a popup that list of methods and properties
// on the list we use keys method that returns String[] string array / strings properties and methods of an object

// and also have another method
// Object.entries // instead of return String[], it returns key value pairs  (below)

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
