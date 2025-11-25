
// JavaScript has 7 primitive data types:
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. BigInt
// 7. Symbol
//
// And 1 non-primitive data type:
// Object (includes arrays and functions)


// 1. NUMBEr
// Used for any number (whole or decimal)
let num = 10;
let price = 99.99;

console.log(num, typeof num);         // 10 "number"
console.log(price, typeof price);     // 99.99 "number"


// --------------------
// 2. STRING
// --------------------
// Used for text/words
let name = "Bhumi";

console.log(name, typeof name);       // Bhumi "string"


// --------------------
// 3. BOOLEAN
// --------------------
// Only true or false
let isOnline = true;

console.log(isOnline, typeof isOnline);  // true "boolean"


// --------------------
// 4. UNDEFINED
// --------------------
// Variable created but no value given
let a;   // JS automatically makes it undefined

console.log(a);              // undefined
console.log(typeof a);       // "undefined"


// --------------------
// 5. NULL
// --------------------
// You give null when you want to empty a value
let b = null;

console.log(b);              // null

// Important: typeof null gives "object"
// This is a mistake/bug in JavaScript
console.log(typeof b);       // "object"


// --------------------
// DIFFERENCE: undefined vs null
// --------------------
//
// undefined → value not given
// null → value is empty (given by programmer)
// types are different
console.log(a == b);     // true  (both empty)
// == checks only value

console.log(a === b);    // false (type different)
// === checks value + type


// --------------------
// 6. BIGINT
// --------------------
// For VERY big numbers. Add 'n' at the end.
let big = 12345678901234567890123456789n;

console.log(big, typeof big); // bigint


// --------------------
// 7. SYMBOL
// --------------------
// Symbol creates a unique value
let id = Symbol("myId");

console.log(id, typeof id); // Symbol(...) "symbol"


// --------------------
// 8. OBJECT (Non-primitive)
// --------------------
// Used for key-value data
let person = { name: "Bhumi", age: 22 };

console.log(person, typeof person); // {…} "object"


// --------------------
// typeof Special Cases
// --------------------

// typeof null → "object" (JavaScript bug)
console.log(typeof null); // "object"

// Arrays are also objects
console.log(typeof [1,2,3]); // "object"

// Plain object
console.log(typeof {}); // "object"

// NaN is also a number
console.log(typeof NaN); // "number"

// Functions have their own type
console.log(typeof function(){}); // "function"


//
// typeof number   -> "number"
// typeof string   -> "string"
// typeof boolean  -> "boolean"
// typeof undefined -> "undefined"
// typeof null     -> "object" (bug)
// typeof bigint   -> "bigint"
// typeof symbol   -> "symbol"
// typeof object   -> "object"
// typeof array    -> "object"
// typeof function -> "function"
