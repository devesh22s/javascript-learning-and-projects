//  for loop -->

// for (let i = 0; i <=10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("number is 5");
//     }
//     console.log(element);
    
// }



// for (let i = 1; i <=10; i++) {
//     console.log(`outer loop ${i}`);
//     for(let j =1; j <=10; j++){
//         // console.log(`inner loop ${j}`);
//         console.log(i +"*"+ j +' = '+ i*j);

//     }
     
// }



// let myarr = ["spiderman", "superman", "thor"]
// for(let i =0; i < myarr.length; i++){
//     const element = myarr[i]
//     console.log(element);

// }

//  break and continue
// for (let index = 1; index <= 10; index++) {
//     if(index == 5){
//         console.log("5 is detected");
//         break
//     }
//     console.log(`value of index is ${index}`);
    
// }


// for (let index = 1; index <= 10; index++) {
//     if(index == 5){
//         console.log("5 is detected");
//         continue
//     }
//     console.log(`value of index is ${index}`);
    
// }

let index = 0

while (index <= 12) {
    console.log(`the index is ${index}`);
    index = index +2

    
}


let myarr = ["spiderman", "superman", "thor"]
let arr = 0
while(arr <myarr.length){
    console.log(`the heros are ${myarr[arr]}`);
    arr += 1
}


let score = 1
do{
    console.log(`the score is ${score}`);
    score++
}while(score <= 10)