
//     document.getElementById('owl').onclick = function(){
//         alert("owl checked")

//     }

//     // addEventListener can add multiple events to a particular element. onclick can add only a single event to an element.

//     //  best approach

//     document.getElementById('owl').addEventListener('click', function(e){   // we get certain events on addeventlistener
//         console.log(e);
        
//     }, false)  // here false(eventbubling) is event propagation, true(eventcapturing), by default value - false
 

//     //  some events -->
//     //  type, timestamp, defaultPrevented
//     //  target, toElement, srcElement, currentTarget
//     //  clientX, clientY, screenX, screenY
//     // altKey, ctrlKey, shiftKey, keyCode


//     document.getElementById('images').addEventListener('click', function(e){
//         console.log("clicked inside the ul")
//     }, false)
//     document.getElementById('owl').addEventListener('click', function(e){
//         console.log("owl clicked")
//         // e.stopPropagation()  // due to this the bubling propagation is stopped
//     }, false)

// //  in this case owl clicked shows first because of bubling, if we do true here then clicked inside the ul shows first




// // ----------------------------------------------------------------
// //  we do not want to go on google when click on link

// document.getElementById('google').addEventListener('click', function(e){
//         console.log("google clicked");
//         e.preventDefault()
//         e.stopPropagation()
// }, false)



// -------------------------------------------------------------------------------------------------------------


document.querySelector('#images').addEventListener('click', function(e){
    // console.log(e);
    // console.log(e.target.parentNode); // the parentNode of image - li will bw selected
    //  or
    console.log(e.target.tagName);
    if(e.target.tagName ==='IMG'){
         console.log(e.target.id);

        const removing = e.target.parentNode;
        removing.remove()
        //  or
        // removing.parentNode.removeChild(removing)
    }





}, false)