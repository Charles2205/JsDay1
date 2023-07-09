function counter() {
    for (i=1;i<=60;i++){
        ;
    }    
}
counter()
// Targeting elements
const timer=document.querySelector('#timer')
const startBtn=document.querySelector('#start-btn')
const stopBtn=document.querySelector('#stop-btn')
const resetBtn =document.querySelector('#reset-btn')

// Event handlers
startBtn.addEventListener('click',start)

// functions for handle events
function start(){
    alert('hello World')
}