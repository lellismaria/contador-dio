var currentNumberWrapper = document.getElementById('currentNumber');
var btnAdd = document.getElementById('add')
var btnSub = document.getElementById('sub')
var currentNumber = 0;

//modificando cor quando numero for negativo
function changeColor() {
    currentNumber >= 0 ? currentNumberWrapper.style.color = '#000' : currentNumberWrapper.style.color = '#f00' 
}

//Utilizando addEventListener
btnAdd.addEventListener('click', () => {    
        currentNumber++;
        changeColor();
        currentNumberWrapper.innerHTML = currentNumber;   
    
})

btnSub.addEventListener('click', () => {    
        currentNumber--;
        changeColor();
        currentNumberWrapper.innerHTML = currentNumber;   
})