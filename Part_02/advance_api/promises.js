const promisOne = new Promise(function (resolve, reject){
    // Do any async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log('async task is completed');
        resolve()
        
    }, 1000);
})

promisOne.then(function(){              // .then direct connection is with resolve
    console.log("promise consumed");
})



// -----

new Promise(function (resolve, reject){
    setTimeout(() => {

        console.log("async tack 2 completed");
        resolve()
        
    }, 1000);
    
}).then(function(){
    console.log("asyn 2 promises ");
})



// ------------------

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username:"devesh", contact:9439482989})
        
    }, 1000);

})

promiseThree.then(function(user){   // from the above function, resolve is coming in user parameter
    console.log(user);
})



// ---------------------

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username:"vijay", password:12902})
        }
        else{
            reject("error: something went wrong")
        }
        
    }, 1000);
})

promiseFour.then(function(user){
    console.log(user);
    return user.username
})
.then(function(username){  // it is chaining , the above function return username that will be store in this function as username parameter
    console.log(username);
})
.catch((error)=>{
    console.log(error)  // if the main function return reject then it will work
})
.finally(()=>{console.log("the promise either is resolved or rejected");})


// -----------------------------------

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username:"javascript   ", password:12902})
        }
        else{
            reject("error: js went wrong")
        }

        
    }, 1000);
})

async function consumed(){
   try {
    const response = await promiseFive
   console.log(response);
    
   } catch (error) {
    console.log(error);
    
   }
}

consumed()


// ----------------------
// async function getallusers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log("error: ", error);
    
//    }
// } 
// getallusers()



//  same work through then catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{ return response.json()})
.then((data)=>{console.log(data);})
.catch((error)=>{console.log(error);})