//stack memory (primitive type) and heap memory(non primitive type)

//example for stack memory, the copy of object is sent thts why the value of user=nimisha didnt changed. 
let user="nimisha";
let user2=user;
user2="agnihotri";
console.log(user);
console.log(user2);

/*example for heap memory,,here object is a non-primitive datattype so heap memory is used here the original 
value of user1 is also changed because in heap the reference of the object is passed.
*/
let user1={
    email:"abc@gmail.com",
    name:"nish"
}
let user3=user1;
user3.name="agnihotri";
console.log(user1);
console.log(user3);