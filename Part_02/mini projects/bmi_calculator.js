const form = document.querySelector('form')
//  we need to submit the form button through which we calculate bmi, 
//  to submit form either we use post or get.



// this usecase will give us an empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()              // here we add this because if there is any default action already present on the button then prevent it.
    const height = parseInt(document.querySelector('#height').value)  // we got the input value in string type , so to convert it in int we apply parseint
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height <0 || height === '' || isNaN(height)){
        result.innerHTML = 'please give a valid height';

    }else if(weight <0 || weight === '' || isNaN(weight)){
        result.innerHTML = 'please give a valid weight';

    }
    else{
        const res = (weight /((height*height)/ 10000)).toFixed(2)   // here we apply tofixed to return only two value after decimal
        //  shiw the result
        result.innerHTML = `<span> your bmi is - ${res} </span>`

        if(res <18.6){
            result.style.color = 'blue'
            result.innerHTML += '- underweight'


        }else if(res >18.6 && res < 24.6){
            result.style.color = 'green'
            result.innerHTML += '- fit'
        }
        else{
            result.style.color = 'red'
            result.innerHTML += '- overweight'
        }
    }


})