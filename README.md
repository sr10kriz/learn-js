This repository contains a high-level overview of essential JavaScript concepts commonly asked in technical interviews. It serves as a quick reference and revision guide for frontend developers and interview candidates.

# 💡 JavaScript Interview Preparation Guide

---

## ✅ Covered Topics (High-Level)

### 🚀 JavaScript Basics

- What is JavaScript?
- Why use JavaScript?
- Advantages of JavaScript

---

### 📦 Variables & Scoping

- Variable declarations: `var`, `let`, `const`
- Function scope vs Block scope vs Global scope
- Shadowing and Lexical Scoping
- Hoisting
- Temporal Dead Zone (TDZ)
- Closures
- Currying

---

### 🔤 Data Types

- **Primitive Types**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
- **Non-Primitive Types**: `object`, `array`, `function`
- Parameters vs Arguments
  - Rest parameters (`...args`)
- Type Conversion
  - Implicit & Explicit
- Equality Comparison: `==` vs `===`

---

### ➕ Operators

- Arithmetic Operators: `+`, `-`, `*`, `/`, `%`, `**`
- Assignment Operators: `=`, `+=`, `-=`, etc.
- Comparison/Relational Operators: `<`, `>`, `<=`, `>=`
- Equality Operators: `==`, `===`, `!=`, `!==`
- Bitwise Operators: `&`, `|`, `^`, `~`, `<<`, `>>`
- Logical Operators: `&&`, `||`, `!`
- Ternary Operator: `condition ? expr1 : expr2`
- Operator Precedence

---

### 🧭 Conditional Statements

- `if`, `else if`, `else`
- `switch`
- Short-circuiting (`||`, `&&`)

---

### 🔁 Loops

- `for`, `while`, `do...while`
- `for...in` (keys in object)
- `for...of` (values in iterable)
- Infinite loops: Common mistakes and prevention

---

### 🏭 Factory Functions

- Functions that return objects
- Useful for creating multiple similar objects

---

### 🏗️ Constructor Functions

- Capitalized functions using `new`
- Assign properties and methods with `this`

---

### 🛠️ Constructor Property

- Built-in constructors: `String`, `Number`, `Boolean`, `Date`, etc.
- `constructor` reference in objects

---

### 🔹 Spread Operator

- Merging arrays/objects
- Copying data without reference
- Overriding values

---

### 🔹 Try-Catch (Error Handling)

- Synchronous error handling
- `try`, `catch`, `finally`
- Optional `catch` binding

---

### 🔹 Destructuring

- Array destructuring
- Object destructuring
- Nested destructuring
- Function parameter destructuring
- Default values & aliasing

---

### ⚙️ Functions (In-Depth)

- Named functions
- Anonymous functions
- Arrow functions
- Function expressions
- First-class & Higher-order functions
- IIFE (Immediately Invoked Function Expressions)
- Generator functions
- Callback functions

---

### 🧠 Memory & Performance

- Garbage Collection (GC)
  - Mark-and-Sweep algorithm
  - Applies to all non-primitive values (objects, arrays, functions)
- Deep vs Shallow Copy
  - `Object.assign()`, spread `...`, JSON techniques, lodash

---

### 📜 Strings & Templates

- Template literals using backticks (`` ` ``)
- Multi-line strings
- Embedded expressions (`${}`)

...

### ⏱️ Asynchronous JavaScript

- Synchronous vs Asynchronous
- Event Loop
- Call Stack
- Callback Queue (Macrotask Queue)
- Microtask Queue
- Promises: `then`, `catch`, `finally`
  - `Promise.all`, `Promise.race`, `Promise.allSettled`, `Promise.any`
- `async` / `await`

---

### ⚡ Performance Optimization

- Debouncing
- Throttling

---

### 🌐 DOM

- DOM Manipulation
- Event Handling
- Event Delegation
- Timers and Animation (`setTimeout`, `setInterval`, `clearTimeout`, `clearInterval`)
- LocalStorage / SessionStorage

---

### ❓ Optional Chaining & Nullish Coalescing

- **Optional Chaining (`?.`)**:  
  Safely access deeply nested properties without throwing an error if a reference is `null` or `undefined`.  
  Example: `user?.profile?.email`

- **Nullish Coalescing (`??`)**:  
  Returns the right-hand operand only when the left-hand operand is `null` or `undefined` (unlike `||`, which also considers `0`, `''`, or `false` as falsy).  
  Example: `value ?? 'default'`

---

### 🧩 Set & Map

#### ✅ Set

- A collection of **unique values** (no duplicates allowed)
- Maintains insertion order
- Can store **any data type**: primitives, objects, arrays, functions
- Common Methods:
  - `add(value)` – Adds a value
  - `has(value)` – Checks existence
  - `delete(value)` – Deletes a value
  - `clear()` – Empties the set
  - `forEach(callback)` – Iterates the set
  - `.values()` / `.keys()` / `.entries()` – Iteration helpers (keys and values are same)

#### ✅ Map

- A collection of **key-value pairs**
- Keys can be **any type** (not just strings like objects)
- Maintains insertion order
- Common Methods:
  - `set(key, value)` – Adds or updates an entry
  - `get(key)` – Retrieves a value
  - `has(key)` – Checks if key exists
  - `delete(key)` – Removes a key-value pair
  - `clear()` – Clears the map
  - `.keys()` / `.values()` / `.entries()` – Iterators

---

### 🔤 String Methods (Essential)

- `length` – Get string length
- `charAt(index)` / `at(index)` – Get character at index
- `indexOf(substring)` / `lastIndexOf()` – Find position
- `includes()` – Check presence
- `startsWith()` / `endsWith()` – Prefix/suffix check
- `slice()` / `substring()` / `substr()` – Extract parts
- `toLowerCase()` / `toUpperCase()` – Change case
- `trim()` / `trimStart()` / `trimEnd()` – Remove spaces
- `replace()` / `replaceAll()` – Replace parts
- `split()` – Split into array
- `repeat()` – Repeat string
- `padStart()` / `padEnd()` – Pad to length

---

### 🔢 Number Methods (Important)

- `Number.isInteger(value)` – Check for integer
- `Number.isNaN(value)` – Check for NaN
- `parseInt(str)` / `parseFloat(str)` – Convert strings to numbers
- `toFixed(n)` – Fixed decimal places
- `toString()` – Convert number to string
- `Math.round()` / `Math.floor()` / `Math.ceil()` – Round numbers
- `Math.random()` – Generate random number
- `Math.min()` / `Math.max()` – Get min/max value

---

### 🧱 Object Methods (Essentials)

- `Object.keys(obj)` – Returns array of own property names (keys)
- `Object.values(obj)` – Returns array of values
- `Object.entries(obj)` – Returns array of `[key, value]` pairs
- `Object.assign(target, source)` – Copies values from one or more source objects to a target object
- `Object.hasOwn(obj, key)` – Checks if the object has the property (alternative to `hasOwnProperty`)
- `Object.freeze(obj)` – Makes the object immutable
- `Object.seal(obj)` – Prevents adding/removing properties, but allows editing existing ones
- `delete obj.key` – Removes a property from object
- Spread syntax `{ ...obj }` – Creates a shallow copy

---

### 🔢 Array Methods (Essentials)

- `push(val)` – Add to end
- `pop()` – Remove from end
- `shift()` – Remove from start
- `unshift(val)` – Add to start
- `concat(arr)` – Combine arrays
- `slice(start, end)` – Returns shallow copy (does not modify original)
- `splice(start, deleteCount, ...items)` – Add/remove elements (modifies original)
- `map(fn)` – Returns new array after applying `fn` to each item
- `filter(fn)` – Returns new array with items that pass condition
- `reduce(fn, initial)` – Reduces array to single value
- `forEach(fn)` – Executes function for each element (no return)
- `find(fn)` – Returns first element that matches condition
- `findIndex(fn)` – Returns index of first matching element
- `some(fn)` – Returns `true` if at least one element matches
- `every(fn)` – Returns `true` if all elements match
- `includes(val)` – Checks if value is in array
- `indexOf(val)` – Returns index of first match (or -1)
- `lastIndexOf(val)` – Index of last match
- `join(sep)` – Joins elements into string with separator
- `reverse()` – Reverses array in-place
- `sort(compareFn)` – Sorts array (can mutate)
- `flat(depth)` – Flattens nested arrays
- `flatMap(fn)` – Map + flatten (depth = 1)
- `toSorted(compareFn)` – Returns new sorted array (non-mutating)
- `toReversed()` – Returns new reversed array (non-mutating)

---

### 🧠 Logical Value Forcing

- `!!value` – Converts a value to its boolean equivalent
  - `!!0 → false`
  - `!!'hello' → true`
  - `!!undefined → false`
  - Useful in condition checks or type coercion

---

### ✅ JavaScript vs TypeScript

1. Typing:

   - JavaScript: Dynamically typed (types inferred at runtime)
   - TypeScript: Statically typed (types checked at compile time)

2. Error Detection:

   - JavaScript: Errors are caught at runtime
   - TypeScript: Errors are caught during compilation

3. Compilation:

   - JavaScript: Runs directly in the browser or Node.js
   - TypeScript: Needs to be compiled to JavaScript before running

4. Type Definitions:

   - JavaScript: No explicit type definitions for variables or functions
   - TypeScript: Supports explicit type annotations for variables, parameters, return types, etc.

5. OOP Support:

   - JavaScript: Limited OOP (Object-Oriented Programming) features
   - TypeScript: Better OOP support using classes, interfaces, access modifiers (public/private/protected)

6. Tooling:

   - JavaScript: Basic tooling support
   - TypeScript: Rich IDE support (auto-completion, refactoring, type checking)

7. Learning Curve:
   - JavaScript: Easier to start with
   - TypeScript: Slightly steeper learning curve but better for large codebases

---

## 📚 Purpose

Use this guide as a revision sheet before JavaScript technical rounds or as a structured reference while learning JavaScript.

---

## 👨‍💻 Maintained By

**Sridharakrishnan R**  
https://github.com/sr10kriz

---
