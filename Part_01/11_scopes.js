//  avoid var because it is global scope 

// let a =500;
//  if(true){
//     let a = 90
//     const b = 890

//     console.log("inner a: ", a);
//  }

//  console.log(a);



// function one(){
//    const username = "devesh"
   
//    function two(){
//       const website = "tipsg"
//       console.log(username);
//    }

//    // console.log(website);
//    two()
// }

// one()


//  scope in if and else condition --> 

// if(true){
//    const username = "devesh"
//    if(username === "devesh"){
//       const website = " instagram "
//       console.log(website + username);
//    }
//    // console.log(website);
// }
// // console.log(username);



// `````````````````````````````````

// console.log(addone(5))        // also run when we declare it without it's intialization
// function addone(num){
//    return num +1
// }


const addtwo = function(num){
   return num +1
}
console.log(addtwo(15))       // can't declare without intialization because the function is stored in a variable.
