const squares=document.querySelectorAll('.square')
const startScore=document.querySelector('.start_score')
const startTimer=document.querySelector('.start_timer')
let molePosition
let result=0
let randSquare
let timerStart=60

function start() {              // start with remove any moles and add the mole in random square
    squares.forEach(square=> {
         square.classList.remove('mole') 
    }) 
 randSquare=squares[Math.floor(Math.random()*9)]  // <div class = "square mole" id ="(random)">
 randSquare.classList.add('mole')
 molePosition=randSquare.id                        //  id ="(random)" 
}
// grab each square and put alistener for listen to the mouseover
squares.forEach(square=>{
    square.addEventListener('mouseover',()=>{
   if (square.id===molePosition){               //increasing the score
        result++
        startScore.textContent=result
        molePosition=null                         // emoty the moleposition
     }   
})})

// decreasing the timer and check if the time out 
function stop(){               
     timerStart--
     startTimer.textContent=timerStart
   if (timerStart===0){                       //stop all the repeated functions from intervals until i refresh the page again
     clearInterval(timerInterval)
    alert("Game Over "+"You Got : "+result)
    clearInterval(scoreId) // after 500ms repeat the stop fun.

  }
}  

let scoreId=setInterval(start, 1000)              // after 100ms repeat the start fun.
let timerInterval=setInterval(stop, 500)  

