
// function add(num1, num2) {
//     console.log(num1 +num2);
// }
// function add(num1, num2) {
//         // let result = num1 +num2;
//         // return result

//         return num1 + num2;
        
// }



// const result = add(4,5);
// console.log("result : ", result);

// function loginUserMessage(username){   // or we can also pass the value or rewrite the previous value here (username == "devesh")
//     if(username === undefined){  // if(!unddefined)
//         console.log("please enter the username");
//         return
//     }
//     return `${username} just log in`
// }

// console.log(loginUserMessage());



// example as in ecommerce

// function calculatecartPrice(...num1){       // rest operator which take whole values in an array
//     return num1  

// }
// console.log(calculatecartPrice(200,300,4000,12345678));



//   functions with objects -->


const user = {
    username : "devesh",
    price: 999
}

function handleobject(anyobj){
    console.log(`the username is ${anyobj.username} and the price is : ${anyobj.price}`);
}

handleobject(user)



// //  with array

// const newarray = [100, 200, 300, 400]
function returnsecondvalue(getarray){
    return getarray[1]

}
// console.log(returnsecondvalue(newarray));
console.log(returnsecondvalue([100, 200, 300, 400]));