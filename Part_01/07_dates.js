//  dates
//  dates are objects


// const mydate = new Date();
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString());
// console.log(typeof mydate);


// // const another = new Date(2024, 4, 26, 10, 8)
// // console.log(another.toLocaleDateString());


// const another = new Date("05-26-2024")
// console.log(another.toLocaleDateString());


// let mytimestamp = Date.now()   // specially used when creating a poll, quizes(for deciding winner who gave the correct answers less time) 
// console.log(mytimestamp);


let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth()+1); // month index start from 0
console.log(newdate.getDay()); 



//  uses of toLocalDateString

newdate.toLocaleDateString('default',{
    weekday:"long"
})
