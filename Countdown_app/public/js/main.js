
let counter =0
// Targeting elements
const timer=document.querySelector('#timer')
const startBtn=document.querySelector('#start-btn')
const stopBtn=document.querySelector('#stop-btn')
const resetBtn =document.querySelector('#reset-btn')

// Event handlers
startBtn.addEventListener('click',start)

// functions for handle events
function start(){
   setTimeout(() => {
    counter++
    timer.innerText(00:00:{counter})
   }, timeout);
}