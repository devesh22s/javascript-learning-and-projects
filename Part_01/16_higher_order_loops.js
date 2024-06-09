//  maps -->  maps are know for unqiue value, and return the value in objects

// const country =  new Map()
// country.set("IN", "India")
// country.set("UK", "United Kingdom")
// country.set("Fr", "France")

// console.log(country);

// for (const[ key, value] of country) {  // here we use [] because we need both keys and values
//     console.log(key +" -->  "+ value);
    
// }

 
// --------------------------------------------
//  for of loop is not working on objects -->


// const myobj = {
//     game1: "superman",
//     game2: "spiderrman"
// }
// for (const [keys, values] of myobj) {
    
//     console.log(keys +" -->  "+ values);
// }


// -------------------------------------------------------------

//  for in


// const myobj = {
//     js: 'javascript',
//     py: 'python',
//     cpp: 'c++',
//     swift: 'swift by apple'
// } 

// for (const key in myobj) {
   
//     console.log(`${key} is defined as  ${myobj[key]}` );
// }

// const myarr = ["js", "py", "java", "cpp"]

// for (const key in myarr) {
//     console.log(myarr[key]);
   
// }



// -----------------------------------------------------------
// for each loop

// const coding = ["js", "py", "java", "cpp"] 

// coding.forEach( function(item, index, arrlist){
//     console.log(item);
// })

// coding.forEach((val)=>{
//     console.log(val);
// })


// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)



// const mycoding = [
//     {
//         langaugename: 'javascript',
//         languagefile:'js'
//     },
//     {
//         langaugename: 'python',
//         languagefile:'py'
//     },
//     {
//         langaugename: 'java',
//         languagefile:'java'
//     }
// ]

//  const value = mycoding.forEach((item)=>{
//     console.log(item.langaugename );
//     return item;

//  })

//  console.log(value);


//  for each not returing the value

// ------------------------------

