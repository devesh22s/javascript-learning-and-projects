const clock = document.getElementById('clock')





setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
    
}, 1000)         // it control events of js, 1st para1 = function, para2 = milisecond
