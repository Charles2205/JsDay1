const btnClick = document.body.querySelector('#btn-click');
const numCheck = document.querySelector('#check')
btnClick.addEventListener('click',randomNumbers);

// function randomNumbers(){
//     const randomNum=Math.floor(Math.random()*5)
//     if (randomNum===0){
//         document.body.style.backgroundColor='blue'
//         numCheck.innerText = 'Blue'
//     }else if(randomNum===1){
//         numCheck.innerText='Green'
//         document.body.style.backgroundColor='green'
//     }
//     else if(randomNum===2){
//         numCheck.innerText = 'Yellow'
//         document.body.style.backgroundColor='Yellow'
//     }else if(randomNum===3){
//         numCheck.innerText = 'Pink'
//         document.body.style.backgroundColor='Pink'
//     }else if(randomNum===4){
//         numCheck.innerText = 'Orange'
//         document.body.style.backgroundColor='orange'
//     }
// }


// Using arrow functions but it didn't work 😒
// const randomNumbers=()=>{
//     const randomNum=Math.floor(Math.random()*3)
//     switch (randomNum) {
//         case 1:
//             numCheck.innerText = 'Red'
//             document.body.style.backgroundColor='Red'
//             break;
//         case 2:
//             numCheck.innerText = 'Yellow'
//             document.body.style.backgroundColor='Yellow'
//             break;
//         case 3:
//             numCheck.innerText = 'Blue'
//             document.body.style.backgroundColor='Blue'
//             break;

//         default:
//             document.body.style.backgroundColor='Red'
//             break;
//     }
// }

// Using normal function with SwitchCase
function randomNumbers() {
    const randomNum=Math.floor(Math.random()*6)
    switch (randomNum) {
        case 0:
            numCheck.innerText = 'blue'
            document.body.style.backgroundColor='Blue'
            break;
        case 1:
            numCheck.innerText = 'Green'
            document.body.style.backgroundColor='green'
            break;
        case 2:
            numCheck.innerText = 'Yellow'
            document.body.style.backgroundColor='Yellow'
            break;
        case 3:
            numCheck.innerText = 'Pink'
            document.body.style.backgroundColor='Pink'
            break;
        case 4:
                numCheck.innerText = 'Orange'
                document.body.style.backgroundColor='orange'
                break;
        case 5:
                numCheck.innerText = 'Red'
                document.body.style.backgroundColor='Red'
                break;

        default:
            document.body.style.backgroundColor='Red'
            break;
}
}