// singleton --> made from constructors not from object literals


// object literals -->


//  defining  a symbol --> interview special
const mysymb = Symbol("lock1")

const myobj = {
    name: "devesh",
    "full name": "devesh kumar",
    [mysymb]: "mykey1",   // here mysymb denotes the upper symbol
    age:20,
    email:"restery@gmail.com",
    islogin: false,
    lastlogin: ["mondy", "tuesday"]
}

// console.log(myobj.email); // we can't access full name using this syntax.
// console.log(myobj["email"]);

// console.log(myobj[mysymb]);



// changing and freezing the value

// myobj.email = "ramsingh@gmail.com"
// Object.freeze(myobj)
// myobj.email = "hariram@gmail.com"
// console.log(myobj);




//   adding function in  myobj

// myobj.greeting = function(){
//     console.log("hello user's");
// }
// myobj.greeting2 = function(){
//     console.log(`hello user , ${this["full name"]}`);
// }
// console.log(myobj.greeting());
// console.log(myobj.greeting2());




// ```````````````````````````````````````` objects in singleton ``````````````````````````

const secondobj = {}
secondobj.name = "devesh"
secondobj.email= "dedcjwebv@gmail.com"
secondobj.age = 20
// console.log(secondobj);


// console.log(Object.keys(secondobj));
// console.log(Object.values(secondobj));
// console.log(Object.entries(secondobj));
// console.log(secondobj.hasOwnProperty('name'));



const thirdobj ={
    fullname: {
        userfullname:{
            firstname: "devesh",
            lastname:"kumar"
        }
    }
}

// console.log(thirdobj.fullname?.userfullname.firstname);



//  merging the objects
const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}
const obj4 = {5:"a", 6: "b"}


// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)        // {}  -> RETURNS A NEW OBJECT
// const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);


const user =[
    {
        email:"d@gmail.com",
        mobileno: 9876542344
    },
    {
        email:"de@gmail.com",
        mobileno: 9876543
    },
    {
        email:"dev@gmail.com",
        mobileno: 57863976843
    },
    {
        email:"devesh@gmail.com",
        mobileno: 9876542344
    }
]


// console.log(user[1].email);      



// --------------------------- api and objects -------------------------------------

//  destructuring
const course = {
    course :"alpha",
    price: 5699,
    courseInstructor: "shardha mam"
}

const {courseInstructor: instructor} = course
console.log(instructor);



// json
// {
//     "name": "devesh",
//     "coursename": "javascript",
//     "price":"free"
// }



//   or

[
    {},
    {},
    {}
]