//string concatenation using + symbol
//old method
let str1="nimisha";
let str2="agnihotri";
console.log(str1+ str2);

//string interpolation using dollar symbol and backticks to concatenate more that one strings and use it as a place holder.

console.log(`hyy my first name is ${str1} and my last name is ${str2}`);
console.log(str1[0]);

// JavaScript String Object Functions – Full Revision File
// All examples in simple language with outputs in comments

// 1. length property
let myStr = "JavaScript";
console.log(myStr.length); // OUTPUT: 10

// 2. toUpperCase()
console.log(myStr.toUpperCase()); // OUTPUT: JAVASCRIPT

// 3. toLowerCase()
console.log(myStr.toLowerCase()); // OUTPUT: javascript

// 4. charAt()
console.log(myStr.charAt(4)); // OUTPUT: S

// 5. charCodeAt()
console.log(myStr.charCodeAt(0)); // OUTPUT: 74 (ASCII of J)

// 6. indexOf()
console.log(myStr.indexOf("a")); // OUTPUT: 1

// 7. lastIndexOf()
console.log(myStr.lastIndexOf("a")); // OUTPUT: 3

// 8. includes()
console.log(myStr.includes("Script")); // OUTPUT: true

// 9. startsWith()
console.log(myStr.startsWith("Java")); // OUTPUT: true

// 10. endsWith()
console.log(myStr.endsWith("pt")); // OUTPUT: true

// 11. slice(start, end)
console.log(myStr.slice(0, 4)); // OUTPUT: Java

// 12. substring(start, end)
console.log(myStr.substring(4, 10)); // OUTPUT: Script

// 13. substr(start, length) (deprecated but used)
console.log(myStr.substr(4, 6)); // OUTPUT: Script

// 14. replace()
console.log(myStr.replace("Java", "Type")); // OUTPUT: TypeScript

// 15. replaceAll()
let text = "hello hello world";
console.log(text.replaceAll("hello", "hi")); // OUTPUT: hi hi world

// 16. trim()
let spaced = "   hello   ";
console.log(spaced.trim()); // OUTPUT: "hello"

// 17. trimStart()
console.log(spaced.trimStart()); // OUTPUT: "hello   "

// 18. trimEnd()
console.log(spaced.trimEnd()); // OUTPUT: "   hello"

// 19. padStart()
console.log("5".padStart(3, "0")); // OUTPUT: 005

// 20. padEnd()
console.log("5".padEnd(3, "0")); // OUTPUT: 500

// 21. repeat()
console.log("ha".repeat(3)); // OUTPUT: hahaha

// 22. split()
console.log("a-b-c".split("-")); // OUTPUT: ["a", "b", "c"]

// 23. concat()
console.log("Hello ".concat("World")); // OUTPUT: Hello World

// 24. valueOf()
console.log(myStr.valueOf()); // OUTPUT: JavaScript

// 25. toString()
console.log(myStr.toString()); // OUTPUT: JavaScript