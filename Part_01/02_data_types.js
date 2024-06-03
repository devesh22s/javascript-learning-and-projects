//  primitive data types --> 7 types


// bigInt = manally use in trading , facebook etc for long data
// string = " "
// boolean = true/false
// null --> standalone value
// undefined --> 
// symbol
// number

// console.log(typeof "devesh");
// console.log(typeof null);

// const bignum = 123456788765432124567n
// console.log(typeof bignum);



// //  non primitive datatypes --> 3 types 

// //  array
// //  object
// //  functions



// const hero = [ "batman", "ironman", "thor"]
// let myobj = {
//     name: "devesh",
//     age: 20,
//     enrolledin : "software engineer"
// }


// const myfunction = function(){
//     console.log("hello world");
// }




//  ``````````````````````````````````   memory in javascript ````````````````````````````````````

// Stacks --> all primitive data types  use stack memory
//  Heap memory --> all non primitive data types


// stacks example

let name = "devesh"
let anothername  = name;
anothername = "ram"

console.log(anothername);
console.log(name);




//  heaps example

let obj = {
    email: "djaudfewiu@gmail",
    age: 20
}


let user = obj;
user.email = "devesh@gmail.com"
console.log(obj.email);
console.log(user.email);
