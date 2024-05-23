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
trocaCor();