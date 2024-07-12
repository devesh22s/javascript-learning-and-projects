//  object literals

// const user = {
//     username: "devesh",
//     logincount: 4,
//     signIn: true,

//     getUserDetail: function () {
//         // console.log("got user details from database");
//         // console.log(`username: ${this.username}`);
//         console.log(this);
        
//     }
// }


// console.log(user.username);
// console.log(user.getUserDetail());


// -------------------------------------------
//  constructor --> the function is called due to new keyword



function User(username, logincount, islogin){
    this.username = username;
    this.logincount = logincount;
    this.signIn = islogin;  // here signIn is variable name and islogin is the parameter coming from functional argument
    this.greating = function(){
        console.log(`welcome ${this.username}`);            // this abstraction
    }
    return this
}


const one_user = User("devesh", 30, true)
const user_two = User("chai", 23, false)  // that's why we use new keyword because throgh new keyword it the other variable do not rewrite the first one
console.log(one_user);  // here user_two rewrite the first one, to avoid  from it apply new keyword in starting
console.log(one_user.constructor);  

