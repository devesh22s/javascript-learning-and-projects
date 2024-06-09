//  filter --> it returns the value 

// const num = [1,2,3,4,5,6,7,8,9,10]

// const myval = num.filter((number)=> number >4)  // when we use {} then we also need to use return keyword -> explicit return
// console.log(myval);

//  same work through for each 

// const newnums = []

// num.forEach((number)=>{
//     if(number >4){
//         newnums.push(number)
//     }
// })
// console.log(newnums);



// -----------------------------------------------------------

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];


//   let userbook = books.filter((bk) => bk.genre === 'History')
//    userbook = books.filter((bk) => bk.publish >= 1995 && bk.genre === 'History')
//   console.log(userbook);


// ----------------------------------------------------------------------------
//  filter as map with chaining

// const mynum = [1,2,3,4,5,6,7,8,9,10]
// // const num = mynum.map((numbers) => numbers +1)
// // console.log(num);

// const newnums = mynum
//                     .map((num) => num *10)
//                     .map((num) => num +1)
//                     .filter((num) => num >40)

// console.log(newnums);



// -------------------------------------------------------------------------------
//  reduce -->


const mynums = [1,2,3]
// const mytotal = mynums.reduce(function(acc, currval){
//     console.log("accumulator value: " +acc);
//     console.log("current value: " +currval);
//     return acc +currval
// }, 0)
// const mytotal = mynums.reduce((acc, currval) => acc + currval , 0)
// console.log(mytotal);

//  first time the accumulator take the value that we passed then it will take the value that are returned


const shooping = [
    {
        itemName : 'js_course',
        price: 999
    },
    {
        itemName : 'data_science',
        price: 199
    },
    {
        itemName : 'python',
        price: 599
    },
]

const total = shooping.reduce((acc, item)=> acc +  item.price, 0)
console.log(total);