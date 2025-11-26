// JavaScript Array Concepts - Full Revision File
// All concepts explained with comments + examples + outputs

// -------------------------------------------------------
// 1. Creating Arrays
// -------------------------------------------------------

let arr1 = [1, 2, 3, 4];
console.log(arr1); // OUTPUT: [1, 2, 3, 4]

let arr2 = new Array(5);
console.log(arr2); // OUTPUT: [empty × 5]

// -------------------------------------------------------
// 2. Accessing Elements
// -------------------------------------------------------

console.log(arr1[0]); // OUTPUT: 1
console.log(arr1[3]); // OUTPUT: 4

// -------------------------------------------------------
// 3. Length of Array
// -------------------------------------------------------

console.log(arr1.length); // OUTPUT: 4

// -------------------------------------------------------
// 4. Push() – Add at end
// -------------------------------------------------------

arr1.push(5);
console.log(arr1); // OUTPUT: [1,2,3,4,5]

// -------------------------------------------------------
// 5. Pop() – Remove from end
// -------------------------------------------------------

arr1.pop();
console.log(arr1); // OUTPUT: [1,2,3,4]

// -------------------------------------------------------
// 6. Unshift() – Add at start
// -------------------------------------------------------

arr1.unshift(0);
console.log(arr1); // OUTPUT: [0,1,2,3,4]

// -------------------------------------------------------
// 7. Shift() – Remove from start
// -------------------------------------------------------

arr1.shift();
console.log(arr1); // OUTPUT: [1,2,3,4]

// -------------------------------------------------------
// 8. Includes() – Check if value exists
// -------------------------------------------------------

console.log(arr1.includes(3)); // OUTPUT: true
console.log(arr1.includes(10)); // OUTPUT: false

// -------------------------------------------------------
// 9. IndexOf() – Get index of value
// -------------------------------------------------------

console.log(arr1.indexOf(2)); // OUTPUT: 1
console.log(arr1.indexOf(10)); // OUTPUT: -1

// -------------------------------------------------------
// 10. Slice() – Extract part (does not modify original)
// -------------------------------------------------------

console.log(arr1.slice(1, 3)); // OUTPUT: [2, 3]
console.log(arr1); // OUTPUT: [1,2,3,4]

// -------------------------------------------------------
// 11. Splice() – Remove/Replace elements (modifies original)
// -------------------------------------------------------

let nums = [10, 20, 30, 40, 50];
nums.splice(2, 2);  // Remove 2 items starting from index 2
console.log(nums); // OUTPUT: [10,20,50]

// Replace values
nums.splice(1, 1, 99);
console.log(nums); // OUTPUT: [10,99,50]

// -------------------------------------------------------
// 12. Concat() – Merge arrays
// -------------------------------------------------------

let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c); // OUTPUT: [1,2,3,4]

// -------------------------------------------------------
// 13. Join() – Convert array to string
// -------------------------------------------------------

console.log(a.join("-")); // OUTPUT: "1-2"

// -------------------------------------------------------
// 14. Reverse() – Reverse array
// -------------------------------------------------------

let rev = [1, 2, 3];
rev.reverse();
console.log(rev); // OUTPUT: [3,2,1]

// -------------------------------------------------------
// 15. Sort() – Sort array
// -------------------------------------------------------

let sortArr = [3, 1, 10, 2];
sortArr.sort();
console.log(sortArr); // OUTPUT: [1,10,2,3] (lexical sort)

// Correct numeric sort
sortArr.sort((a, b) => a - b);
console.log(sortArr); // OUTPUT: [1,2,3,10]

// -------------------------------------------------------
// 16. Map() – Transform each element
// -------------------------------------------------------

let squares = [1, 2, 3].map(x => x * x);
console.log(squares); // OUTPUT: [1,4,9]

// -------------------------------------------------------
// 17. Filter() – Filter values
// -------------------------------------------------------

let evens = [1,2,3,4,5].filter(x => x % 2 === 0);
console.log(evens); // OUTPUT: [2,4]

// -------------------------------------------------------
// 18. Reduce() – Accumulate values
// -------------------------------------------------------

let sum = [1,2,3,4].reduce((acc, val) => acc + val, 0);
console.log(sum); // OUTPUT: 10

// -------------------------------------------------------
// 19. ForEach() – Loop through array
// -------------------------------------------------------

["a","b","c"].forEach((item) => console.log(item)); // OUTPUT: a b c

// -------------------------------------------------------
// 20. Find() – Returns first matching value
// -------------------------------------------------------

console.log([10,20,30].find(x => x > 15)); // OUTPUT: 20

// -------------------------------------------------------
// 21. FindIndex() – Returns index of match
// -------------------------------------------------------

console.log([10,20,30].findIndex(x => x > 15)); // OUTPUT: 1

// -------------------------------------------------------
// 22. Flat() – Flatten nested arrays
// -------------------------------------------------------

let nested = [1, [2, 3], [4, [5]]];
console.log(nested.flat()); // OUTPUT: [1,2,3,4,[5]]
console.log(nested.flat(2)); // OUTPUT: [1,2,3,4,5]

// -------------------------------------------------------
// 23. Array.isArray() – Check if value is array
// -------------------------------------------------------

console.log(Array.isArray([1, 2])); // OUTPUT: true
console.log(Array.isArray("hello")); // OUTPUT: false

// -------------------------------------------------------
// 24. Fill() – Fill array with a value
// -------------------------------------------------------

let fillArr = [1,2,3,4];
fillArr.fill(0);
console.log(fillArr); // OUTPUT: [0,0,0,0]

// -------------------------------------------------------
// 25. From() – Convert string or iterable to array
// -------------------------------------------------------

console.log(Array.from("hello")); // OUTPUT: ["h","e","l","l","o"]
