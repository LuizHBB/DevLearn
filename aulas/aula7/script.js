function calcVolume(){
    const jsAltura = parseFloat(document.getElementById('altura').value);
    const jsRaio = parseFloat(document.getElementById('raio').value);
    let jsVolume = 0

    if(isNaN(jsAltura)|| isNaN(jsRaio)){
        alert('Insira um valor valido!');
        return
    }
    jsVolume = 3.14*jsRaio*jsRaio*jsAltura;
    document.getElementById('volume').textContent = jsVolume;
}

function trocaCor(){
    const jsCor = document.getElementById('cor');
    const jsChangeColor = document.getElementById('changeColor');
    const cor = jsCor.value; // Pegar o valor do input

    // Atualizar o texto do span
    jsChangeColor.textContent = cor;

    // Alterar a cor do texto na div
    document.querySelector('.container-ex2').style.color = cor;

    return false; // Prevenir o comportamento padrão do formulário
}

let collectedData = [];
let collectedDataAge = [];
let collectedDataPeso = [];

function collectData() {
    // Obtenha os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const peso = document.getElementById('peso').value;

    // Verifique se os campos estão preenchidos
    if (!nome || !idade || !peso) {
        alert('Por favor, preencha todos os campos.');
        return false; // Impede o envio do formulário
    }

    // Crie um objeto com os dados coletados
    const formData = {
        nome: nome,
        idade: idade,
        peso: peso
    };

    // Adicione o objeto ao array
    if(idade > 35){
        collectedDataAge.push(formData);
    }else if(peso < 60){
        collectedDataPeso.push(formData);
    }
    collectedData.push(formData);

    const outputSelectAge = document.getElementById('outputSelectAge');
    outputSelectAge.innerHTML = '<div class="dataOutput"><h3>Dados Coletados:</h3>';
    collectedDataAge.forEach((data, index) => {
        outputSelectAge.innerHTML += `<p><strong>Entrada ${index + 1}</strong></p>`;
        outputSelectAge.innerHTML += `<p>Nome: ${data.nome}</p>`;
        outputSelectAge.innerHTML += `<p>Idade: ${data.idade}</p>`;
        outputSelectAge.innerHTML += `<p>Peso: ${data.peso}</p>`;
        outputSelectAge.innerHTML += `<p>----------------------------------</p></div>`;
    });


    const outputSelectPeso = document.getElementById('outputSelectPeso');
    outputSelectPeso.innerHTML = '<div class="dataOutput"><h3>Dados Coletados:</h3>';
    collectedDataPeso.forEach((data, index) => {
        outputSelectPeso.innerHTML += `<p><strong>Entrada ${index + 1}</strong></p>`;
        outputSelectPeso.innerHTML += `<p>Nome: ${data.nome}</p>`;
        outputSelectPeso.innerHTML += `<p>Idade: ${data.idade}</p>`;
        outputSelectPeso.innerHTML += `<p>Peso: ${data.peso}</p>`;
        outputSelectPeso.innerHTML += `<p>----------------------------------</p></div>`;
    });

    // Atualize a exibição dos dados no HTML
    const outputDiv = document.getElementById('outputData');
    outputDiv.innerHTML = '<div class="dataOutput"><h3>Dados Coletados:</h3>';
    collectedData.forEach((data, index) => {
        outputDiv.innerHTML += `<p><strong>Entrada ${index + 1}</strong></p>`;
        outputDiv.innerHTML += `<p>Nome: ${data.nome}</p>`;
        outputDiv.innerHTML += `<p>Idade: ${data.idade}</p>`;
        outputDiv.innerHTML += `<p>Peso: ${data.peso}</p>`;
        outputDiv.innerHTML += `<p>----------------------------------</p></div>`;
    });

    

    // Impede o envio do formulário
    return false;
}