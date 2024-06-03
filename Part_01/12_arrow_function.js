// const user ={
//     username: "devesh",
//     price: 999,
     
//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to the website`);
//         console.log(this);
//     }
// }

// user.welcomeMessage()
// user.username = "ram"  // here we can change the inner context
// user.welcomeMessage()
// console.log(this);  // here we got an empty object , but in browser we get window



// function hello(){
//     let username = "devesh"
//     console.log(this.username);  // this keyword is used in object, not in particular function 
//     console.log(this);   // when we used this keyword inside the function then it will return some value
// }
// hello()



// ```````````````````````````````````````````````````````````````````````

// const learn = function(){
//     let username = "devesh"
//     console.log(this.username);
//     console.log(this);
// }
const learn = () =>{
    let username = "devesh"
    console.log(this);   // iin arraw function this will again give an empty object
}


// learn()


// const add = (num1, num2) =>{
//     return num1 +num2

// }

// const add = (num1, num2) =>(num1 +num2 )  // when we use single line statement then there is no need of return and {}

const add = (num1, num2) => ({username: "hitesh"}) 
console.log(add(3, 7));




