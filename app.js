
const display = document.getElementById('dis');
let isEvaluated = false;

function valueBox(value) {
    if (isEvaluated) {
        display.value = '';
        isEvaluated = false;
    }
    display.value += value;
    
}

function clearbtn() {
    display.value = '';
    
}

function deletbtn() {
    display.value = display.value.slice(0, -1);
   
}


function evalute() {
   
    display.value = eval(display.value);
    isEvaluated = true;
}
// display.value ='';

let allBtn = document.querySelectorAll('input[type="button"]')
allBtn.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.value;

        
        if (value === 'AC') {
            clearbtn();
        } else if (value === 'DEL') {
            deletbtn();
        } else if (value === '=') {
            evalute();
        } else {
            valueBox(value);
        }
    });
});
