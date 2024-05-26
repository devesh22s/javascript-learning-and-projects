// arrays makes shallow copies --> copies referances of one to another

// const myarr = [0,1,2,3,4,5]
// console.log(myarr[3]);

// const myarr2 = new Array(1,2,3,4,5)
// console.log(myarr2[3]);



//  arary methods ->

// myarr.push(6)
// myarr.push(69)
// myarr.pop()



// myarr.unshift(9) // add in starting 
// myarr.shift()  // remove from starting



// console.log(myarr.includes(9));
// console.log(myarr.indexOf(2));




// const newarr = myarr.join();   // it join the previous array and converts the whole array in string
// console.log(newarr);

// console.log(myarr);



// console.log("a: " , myarr);

// const myn1 = myarr.slice(1,3)
// console.log(myn1);
// console.log("b: ", myarr);



// const myn2 = myarr.splice(1,3)  // it cuts the value from index  1 to 3 store in myn2 array
// console.log("c: ", myarr);

// console.log(myn2);









const hero1 = ["ironman", "thor", "spiderman"]
const hero2 = ["superman", "flash", "batman"]

// hero1.push(hero2)
// console.log(hero1);



// const allhero = hero1.concat(hero2);
// console.log(allhero);



// const all_new_hero = [...hero1, ...hero2];      // spread method
// console.log(all_new_hero);


// const anotherarrey = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_another_array = anotherarrey.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("devesh"));
console.log(Array.from("devesh"));
console.log(Array.from({name: "devesh"})); // special case 


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));