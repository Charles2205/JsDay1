
var counter =0
// Targeting elements
const timer=document.querySelector('#timer')
const startBtn=document.querySelector('#start-btn')
const stopBtn=document.querySelector('#stop-btn')
const resetBtn =document.querySelector('#reset-btn')

// Event handlers
startBtn.addEventListener('click',start)
stopBtn.addEventListener('click',stop)

// functions for handle events
function start(){
    setInterval(Counter, 1000)
}

function Counter(){
    counter++
    console.log(counter)
}
// function stop(){
//     clearTimeout()
// }
function(){
   console.log() 
}