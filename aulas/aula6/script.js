let counter = 0;
function incrementa (){
    counter ++;
    document.getElementById('counter').textContent = counter;
}


function multiplicar(){
    const numberContent = document.getElementById('number');
    const resultContent = document.getElementById('resultado');
    const number = parseFloat(numberContent.value);
    
    if(isNaN(number)){
        resultContent.textContent = "Por favor, insira um numero valido!";
    }else {
        const resultado = number * 2;
        resultContent.textContent = resultado;
    }
}

function operadores(event){
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const resposta = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resposta.value = 'Erro: Entrada inválida';
        return;
    }

    const operador = event.target.textContent;
    let resultado=0;

    if (operador === '+') {
        resultado = num1 + num2;
    } else if (operador === '-') {
        resultado = num1 - num2;
    } else if (operador === '*') {
        resultado = num1 * num2;
    } else if (operador === '/') {
        if (num2 === 0) {
            resultado = 'Erro: Divisão por zero';
        } else {
            resultado = num1 / num2;
        }
    }

    resposta.textContent = resultado;

}
