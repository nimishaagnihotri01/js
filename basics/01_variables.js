// var → old way to make variables (can be used anywhere inside a function)
// let → modern way (works only inside its block {} )
// const → value cannot be changed once given

let name = "Bhumi";     // use let when value can change
const age = 22;         // use const when value should NOT change
var city = "Indore";    // var works but not recommended

console.log(name, age, city);
console.table([name, age, city]);   //used to print a table structure

// If we try to change the value of age, it will give an error
// age = 25;   Not allowed because const cannot be changed
