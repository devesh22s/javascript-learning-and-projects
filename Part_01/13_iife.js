// Immediately Invoked Funtion Expression (IIFE)

// function check(){
//     console.log(`connected`);
// }
// check()

// problems occured  due to global scope pollution , so to remove it , or for fast execution we use iife  --> ()()

// (function check(){
//     console.log(`connected`);
// })
// ();   // ; it should be compulsary to end the context



((name)=>{
    console.log(`arrow function through iife, my name is ${name}`);
})
('devesh');
