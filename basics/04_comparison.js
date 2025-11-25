console.log("---- COMPARISON OPERATORS ----");

// >  (greater than)
// <  (less than)
// >= (greater or equal)
// <= (less or equal)
// == (checks only value)
// === (checks value + datatype)
// != (not equal - value)
// !== (not equal - value + datatype)


// ----------------------
// Basic number comparison
// ----------------------
console.log(5 > 3);   // true
console.log(5 < 3);   // false
console.log(5 >= 5);  // true
console.log(3 <= 2);  // false


console.log("---- == vs === ----");

// == (loose equality) → only checks value, not datatype
console.log("5" == 5);   // true (string becomes number)

// === (strict equality) → checks value AND datatype
console.log("5" === 5);  // false (string ≠ number)


// ----------------------
// != vs !==
// ----------------------

// != → only checks value
console.log("10" != 10);   // false (values same)

// !== → checks value + datatype
console.log("10" !== 10);  // true (string ≠ number)


// ----------------------
// Comparison with string
// ----------------------
console.log("b" > "a"); // true (alphabet order)
console.log("apple" < "banana"); // true


console.log("---- SPECIAL CASES ----");

// Comparing null
console.log(null == undefined); // true (both considered empty)
console.log(null === undefined); // false (datatype different)

console.log(null == 0);  // false
console.log(null > 0);   // false
console.log(null >= 0);  // true (weird rule in JS)


// Comparing undefined
console.log(undefined == 0);  // false
console.log(undefined > 0);   // false
console.log(undefined < 0);   // false


console.log("---- BOOLEAN COMPARISON ----");

console.log(true == 1);  // true (true becomes 1)
console.log(false == 0); // true (false becomes 0)

console.log(true === 1); // false (datatype different)
console.log(false === 0); // false
