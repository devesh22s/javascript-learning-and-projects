// operation -->  ==, != , >, <, <=, >= , ==== 

// const temperature = 41;

// if(temperature <50){
//     console.log("temperature less then 50");

// }else{
//     console.log("temperature is greater then 50");
// }

// console.log("executed");


// const score = 200
// if(score> 100){
//     const power = "fly"
//     console.log(`user power ${power}`);
// }

// console.log(`user power ${power}`);  // not executed due to scope


const balance = 1000

// if(balance >500) console.log("greater then 500");  // good code
// if(balance >500) console.log("greater then 500") , console.log("test successful");  // bad code , do not write this

// if(balance <500){
//     console.log("less then 500");
// }
// else if( balance <750){
//     console.log("less then 750");
// }
// else{
//     console.log("less then 1200");
// }




// -------------------

// const userLoggedin = true
// const debitCard = true
// const loginfromgoogle = false
// const loginfromemail = true

// if(userLoggedin && debitCard  && 2 == 2){
//     console.log("allow to buy course");
// }

// if(loginfromemail  || loginfromgoogle){
//     console.log("user logged in");
// }


//  --------------------


//  switch -->

// const month = 6
// switch (month) {
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("febraury");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;
//     case 5:
//         console.log("may");
//         break;
//     case 6:
//         console.log("june");
//         break;

//     default:
//         console.log("enter correct month");
//         break;
// }

// const mont = "june"
// switch (month) {
//     case "jan":
//         console.log("january");
        
//         break;
//     case "june":
//         console.log("june");
        
//         break;

//     default:
//         break;
// }


// -----------------------

// const useremail = "devesh@gmail.com"
// if(useremail){
//     console.log("got email");
// }else{
//     console.log("do not get");
// }


// const useremail2 = ''
// if(useremail){
//     console.log("got email");
// }else{
//     console.log("do not get");
// }



// const useremail3 = []
// if(useremail){
//     console.log("got email");
// }else{
//     console.log("do not get");
// }


// Falsy value 
// false, 0, -0, BigInt ->0n, "", null, undefined, NaN


//  Truthy value
// "0", 'false', " ", [], {}, function(){}  ,  any value in string sre tuuthy value


// if(useremail3.length === 0){
//     console.log("array is empty");
// }




// const emptyobj = {}
// if(Object.keys(emptyobj).length === 0){
//     console.log("object is empty");
// }


//  while we comparing -->
//  false == 0 --> it will true
//  false == '' --> it will true
//  '' == 0 --> it will true

// --------------------------
// Nullish Coalescing operator  (??): based on null and undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = undefined ?? 10 ??20

console.log(val1);



//  ternary operator
// condition ?? true : false 

const price = 10
price >= 5 ? console.log("more then 5") : console.log("less then 5");