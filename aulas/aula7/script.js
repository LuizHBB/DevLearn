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