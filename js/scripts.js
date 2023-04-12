// validação
function validarDados() {
    var nomecliente = frmRegistro.inCli.value;
    var erro = document.getElementById('mensagem-erro')
    var tel = frmRegistro.inFone.value;
    var email = frmRegistro.inMail.value;
    var produ = frmRegistro.inProd.value;
    var quant = frmRegistro.inQtd.value;
    var variavel = frmRegistro.inVal.value;
    var data = frmRegistro.inData.value;

    erro.style.display = 'none';
    erro.innerHTML = "Mensagem de erro:";



    if (nomecliente.trim() == '' || nomecliente.length < 5) {
        frmRegistro.inCli.focus();
        erro.style.display = 'block';
        erro.innerHTML += " O campo nome não esta preenchido corretamente, por favor preencha. "
    }

    else if (tel.trim() == '') {
        frmRegistro.inFone.focus();
        erro.style.display = 'block';
        erro.innerHTML += " O campo telefone não esta preenchido corretamente, por favor preencha. "
    }

    else if (email.trim() == '') {
        frmRegistro.inMail.focus();
        erro.style.display = 'block';
        erro.innerHTML += " O campo email não esta preenchido corretamente, por favor preencha. "
    }

    else if (produ.trim() == '') {
        frmRegistro.inProd.focus();
        erro.style.display = 'block';
        erro.innerHTML += " O campo produtos não esta preenchido corretamente, por favor preencha. "
    }
    else if (quant.trim() == '' || quant < 0) {
        frmRegistro.inQtd.focus();
        erro.style.display = 'block';
        erro.innerHTML += " O campo quantidade de produtos não esta preenchido corretamente, por favor preencha e não coloque numeros negativos."
    }
    else if (variavel.trim() == '' || variavel < 0) {
        frmRegistro.inVal.focus();
        erro.style.display = 'block';
        erro.innerHTML += " O campo valor unitario não esta preenchido corretamente, por favor preencha e não coloque numeros negativos."
    }
    else if (data.trim() == '') {
        frmRegistro.inData.focus();
        erro.style.display = 'block';
        erro.innerHTML += " O campo data não esta preenchido corretamente, por favor preencha. "
    }
    else {
        alert('Obrigado!!!')
    }

}
// mult img
function multiplicarImg() {
    let qtdImg = parseInt(document.getElementById('inQtdImg').value);
    let canvas = document.getElementById('canvas');
    canvas.innerHTML = '';

    for (let i = 0; i < qtdImg; i++) {
        canvas.innerHTML += '<img src="img/fuleco.jpeg" alt="fuleco">';
    }
    if (qtdImg < 0)
        alert('sem numeros abaixo de zero faz favor!!')

}

// acender lampada
function acenderLampada() {
    let imagem = document.getElementById('lampada');
    let caminho = imagem.src;
    let arquivo = caminho.substring(caminho.lastIndexOf('/') + 1);

    let btn = document.getElementById('btnEnviar');
    if (arquivo == 'apagada.jpg' || arquivo == '') {
        imagem.src = 'img/acesa.jpg'
        btn.textContent = 'apagar';
    }
    else {
        imagem.src = 'img/apagada.jpg'
        btn.textContent = 'acender';
    }
}
// cauculador
function calculeDesc() {
    let preco = parseInt(document.getElementById('inValorPedido').value);
    let desc = 0;

    if (preco >= 2000)
        desc = 1.5;
    else if (preco >= 1500)
        desc = 1.0;
    else if (preco >= 1000)
        desc = 0.8;
    else if (preco >= 500)
        desc = 0.5;

    let conta = preco * desc / 100;
    let final = preco - conta;
    inPercDesc.value = desc;
    inValDesc.value = conta;
    inValFinal.value = final;

}

