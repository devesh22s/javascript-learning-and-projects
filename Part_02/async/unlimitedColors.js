//  generate a random color


const randomColor = ()=>{
    const hex = '0123456789ABCDEF'
    let color = '#'

    for(let i =0; i <6; i++){
        color += hex[ Math.floor(Math.random ()* 16)]
    }

    return color;
}


let intervel;
const startChangingColor = function(){
    if(!intervel){
        intervel = setInterval(change_bg, 1000)
    }
    function change_bg(){
        document.body.style.backgroundColor = randomColor()

    } 
}



const stopChangingColor = function(){
    clearInterval(intervel)
    intervel = null  
}
document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)