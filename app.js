// Função para criptografar o texto
function encryptText(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// Função para descriptografar o texto
function decryptText(text) {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// Função que verifica se o texto tem acentos ou letra maiusculas
function verificarTexto(texto) {
    const regexAcentos = /[ÁÀÂÃÉÈÊÍÌÎÓÒÔÕÚÙÛÇáàâãéèêíìîóòôõúùûç]/;
    const regexMaiusculas = /[A-Z]/;
    return regexAcentos.test(texto) || regexMaiusculas.test(texto);
}

// Criptografar o texto
document.getElementById('criptografar').addEventListener('click', function (criptografar_texto) {
    const textoCriptografar = document.getElementById('texto').value;
    const textoDescriptografar = document.getElementById('textoCripto').value;

    // Verifica se o texto esta sem acento, letra maiuscula ou vazio
    if(textoCriptografar != '' && verificarTexto(textoCriptografar) == false) {
        const encryptedText = encryptText(textoCriptografar);
        document.getElementById('textoCripto').value = encryptedText;
        document.getElementById('textoCripto').disabled = false;
        document.getElementById('texto').value = '';
        document.getElementById('textoCripto').disabled = true;

        // Oculta os elementos e exibi o botão copiar
        document.querySelector('.decodificador__elementosDir__detalhes').style.opacity = 0;
        document.getElementById('copiar').style.display = 'block';
    } else {
        if(verificarTexto(textoCriptografar)) {
            alert('O texto deve conter apenas letras minúsculas e sem acentos.');
        } else if (textoCriptografar == '' && textoDescriptografar == '') {
            alert('Digite algo para poder criptograr');
        }
    }
});

// Descriptografar o texto
document.getElementById('descriptografar').addEventListener('click', function () {
        const textoCriptografar = document.getElementById('texto').value;
        const textoDescriptografar = document.getElementById('textoCripto').value;
        textoDescriptografar != ''

            if(textoDescriptografar != ''){
                const decryptedText = decryptText(textoDescriptografar);
                document.getElementById('texto').value = decryptedText;
                document.getElementById('textoCripto').value = '';
                // Põe a sobreposição e bloqueia o botão copiar
                document.querySelector('.decodificador__elementosDir__detalhes').style.opacity = 100;
                document.getElementById('copiar').style.display = 'none';
            } else {
                const decryptedText = decryptText(textoCriptografar);
                document.getElementById('textoCripto').value = decryptedText;
                document.getElementById('texto').value = '';
                // Oculta os elementos e exibi o botão copiar
                document.querySelector('.decodificador__elementosDir__detalhes').style.opacity = 0;
                document.getElementById('copiar').style.display = 'block';
            }
});
// Copiar o texto criptografado
document.getElementById('copiar').addEventListener('click', function () {
    const outputText = document.getElementById('textoCripto');
    outputText.select();
    navigator.clipboard.writeText(outputText.value).then(function() {
        alert("Texto copiado!");
    });
});