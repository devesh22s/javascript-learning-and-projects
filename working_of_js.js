//javascript is single threaded language


 //   javascript execution context
 //1. Global execution context  and we allocated it in this keyword.
 //2. Function execution context
 //3. Eval execution context



 //   {}  --> Memory Creation Phase  or   Creation Phase
  //        --> Execution Phase




//example of all -->.
let val1 = 10
let val2 = 20

function add(num1, num2){
    let total = num1 + num2
    return total

}
let result1 = add(val1, val2)
let result2 = add(12, 21)


//  how it work -->
// 1. global phase
// 2. memory phase ->
        // val1 = undefined
        // val2 = undefined
        // add = defination of all function
        // result1 = undefined
        // result2 = undefined


//  3. exeution phase ->
        val1 <- 10
        val2 <- 20
        //  in result1 ==> a new variable environment +execution thread created
        //  then new memory and execution phase also created in it

        //  memory phase ->
        val1 = undefined
        val2 = undefined
        total = undefined

        // execution phase =>
          // num1 -> 10
          // num2 -> 20
          // total = 30  // it will return to global exeution context

// ********  after execution  add the new environment will be deleted  *********
        // in result2 ==> same work as in  result1





//   call stacks -->
function one(){
  console.log("one")
  two()
}
function two(){
  console.log("two")
  three()
}
function three(){
  console.log("three")
}

one()
two()
three()



//  when one() is called so in callstacks

//  |               |
//  |               |
//  |               |
//  |               |
//  |     three()   |     // according to lifo --> three( ) executes first then two() then one()
//  |     two()     |
//  |___one()_______|      
