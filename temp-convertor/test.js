const degree=document.querySelector('#degree')
const fahr=document.querySelector('output')
const btnConvert =document.querySelector('#btn-convert')

btnConvert.addEventListener('click',function(){ 
    const value = degree.value
    const number =Number(value)
    results =(number * 9/5)+32
    fahr.innerHTML = results
})



// degree=parseInt(prompt('Enter a number'))
//     fahr.innerHTML=(degree* 9/5)+32  
