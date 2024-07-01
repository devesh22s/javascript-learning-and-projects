# projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code
## project1
```
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

body.style.backgroundColor = 'royalblue'


buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(e){  // here we add a event of click and apply callback function on it
           console.log(e);
           console.log(e.target);

           if(e.target.id === 'grey'){
            body.style.backgroundColor = 'grey';
           }
           if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
           }
           if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
           }
           if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
           }
    })
})
```



## project 2
```
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
```


## project 3

```
const clock = document.getElementById('clock')





setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
    
}, 1000)         // it control events of js, 1st para1 = function, para2 = milisecond

```


## project 4
```

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;   // counting how many time a person  guess   

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      cleanupGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      cleanupGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function cleanupGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');   // through this the input will be disable 
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}



```