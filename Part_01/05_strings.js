// const name = "devesh"
// const age = 20;

// console.log(`my name is ${name} and age is ${age}`);



const newname = new String("hello")
// console.log(newname.__proto__);
// console.log(newname[0]);
// console.log(newname.length);
// console.log(newname.toUpperCase());
// console.log(newname.charAt(1));
// console.log(newname.indexOf("e"));



const newstr = newname.substring(0, 2)
console.log(newstr);
const newstr2 = newname.slice(-8, 2)
console.log(newstr2);


const different = "         world           "
console.log(different.trim());



const url = "https://devesh.com/devesh2000%tery";
console.log(url.replace('2000%', '-'));
console.log(url.includes('hiiiiii'));
console.log(url.split('-'));
