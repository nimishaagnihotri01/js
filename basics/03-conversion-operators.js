
// JS can convert values using:
// 1. + (unary plus)
// 2. - (unary minus)
// 3. Number()
// 4. String()
// 5. Boolean()
// ----------------------------------------------------



// ----------------------------------------------------
// 1. UNARY PLUS (+) → Converts value to NUMBER
// ----------------------------------------------------
//
// +value changes strings, booleans into numbers
console.log(+ "10");     // 10
console.log(+ "5.5");    // 5.5
console.log(+ true);     // 1
console.log(+ false);    // 0
console.log(+ "abc");    // NaN
console.log(+ null);     // 0
console.log(+ undefined); // NaN



// ----------------------------------------------------
// 2. UNARY MINUS (-) → Also converts to NUMBER
// ----------------------------------------------------
//
// Same as + but result is negative
console.log(- "10");     // -10
console.log(- true);     // -1
console.log(- false);    // -0
console.log(- null);     // -0
console.log(- "abc");    // NaN



// ----------------------------------------------------
// 3. NUMBER() → Converts anything to number
// ----------------------------------------------------
console.log(Number("20"));    // 20
console.log(Number("20abc")); // NaN
console.log(Number(true));    // 1
console.log(Number(false));   // 0
console.log(Number(null));    // 0
console.log(Number(undefined)); // NaN



// ----------------------------------------------------
// 4. STRING() → Converts anything to string
// ----------------------------------------------------
console.log(String(100));     // "100"
console.log(String(true));    // "true"
console.log(String(null));    // "null"
console.log(String(undefined)); // "undefined"



// ----------------------------------------------------
// 5. BOOLEAN() → Converts anything to true/false
// ----------------------------------------------------
//
// TRUE → all numbers except 0, all strings except empty, objects
console.log(Boolean(10));     // true
console.log(Boolean("hello")); // true
console.log(Boolean({}));      // true

// FALSE → 0, "", null, undefined, NaN
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false



// ----------------------------------------------------
// 6. Comparison Operators that cause conversion
// ----------------------------------------------------
//
// == → converts values before comparing
console.log("10" == 10);   // true
console.log(true == 1);    // true
console.log(false == 0);   // true

// === → DOES NOT convert values
console.log("10" === 10);  // false
console.log(true === 1);   // false



// ----------------------------------------------------
// 7. Arithmetic operators that cause conversion
// ----------------------------------------------------
console.log("5" - 2);    // 3   (string → number)
console.log("10" * 2);   // 20  (string → number)
console.log("8" / 2);    // 4   (string → number)

console.log("5" + 2);    // "52" (number → string) → because + prefers string
