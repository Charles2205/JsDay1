
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