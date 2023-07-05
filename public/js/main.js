// JavaScript is  synchronous 
// Accessing tags in javascript
                        // getElementsByTagName
// const heading = document.body.getElementsByTagName('h1')[0]
// heading.innerHTML='Hi Charles This is your first javascript instruction'

//                      getElementsById
// const headingID= document.getElementById('hello');
// headingID.innerHTML='THis is a second javascript instruction'

// const heading = document.querySelector('h1');
// heading.innerText='Charles';
// heading.style.textAlign='center';

// Day 2:Event Handling

// 1.System Event(Load event)
// 2.User Event

// User Event (Mouse events)
/*
click event
drag event 
Hover event 
Double click
*/
// User Event (Mouse events)
// Keydown
//keyup event
// KeyPress

// Handling (Ways to handle events)
// Attributes Event
// Eventhandler


const btnClick = document.querySelector('#btn-click');
btnClick.addEventListener('click', () => {
//    accessing the body
    let body = document.body.style.backgroundImage;
    // splitting the directory to get 'imageName'
    const currentImg= body.split("\"")[1].split("/")[3];

    // Checking the current image or stage
    if(currentImg==='lighton.png'){
        document.body.style.backgroundImage = 'url("./public/imgs/turnoff.jpeg")'
        btnClick.innerHTML = 'Turn on';
    }else{
        document.body.style.backgroundImage = 'url("./public/imgs/lighton.png")'
        btnClick.innerHTML = 'Turn off';
    }
});