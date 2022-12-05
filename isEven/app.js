let resultDisplay = document.getElementById("result")
let result;

function isEven(n){
    if(n % 2 === 0){
        result = "Your number is Even."
    }else{
        result = "Your number is Odd."
    }
    resultDisplay.innerHTML = result
}

