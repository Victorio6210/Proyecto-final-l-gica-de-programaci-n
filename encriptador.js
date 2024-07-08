let inputTexto = document.getElementById('inputTexto');
let resultado = document.getElementById('resultado');

function cifrarTexto() {
    let texto = inputTexto.value.toLowerCase();
    let cifrado = '';
    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
            let newCharCode = ((charCode - 97 + 13) % 26) + 97;
            cifrado += String.fromCharCode(newCharCode);
        } else {
            cifrado += texto.charAt(i);
        }
    }
    resultado.innerHTML = `<p>Texto cifrado: ${cifrado}</p>`;
}

function descifrarTexto() {
    let texto = inputTexto.value.toLowerCase();
    let descifrado = '';
    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
            let newCharCode = ((charCode - 97 - 13 + 26) % 26) + 97;
            descifrado += String.fromCharCode(newCharCode);
        } else {
            descifrado += texto.charAt(i);
        }
    }
    resultado.innerHTML = `<p>Texto descifrado: ${descifrado}</p>`;
}

inputTexto.addEventListener('input', function() {
    let texto = inputTexto.value;
    let valido = true;
    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);
        if ((charCode < 97 || charCode > 122) && charCode !== 32) {
            valido = false;
            break;
        }
    }
    if (!valido) {
        inputTexto.setCustomValidity('No se aceptan mayúsculas ni caracteres especiales.');
        inputTexto.reportValidity();
    } else {
        inputTexto.setCustomValidity('');
    }
});

function copiarTexto() {
    let textoCifrado = resultado.textContent.trim().split(':')[1].trim();
    navigator.clipboard.writeText(textoCifrado)
        .then(() => alert('Texto copiado al portapapeles'))
        .catch(err => console.error('Error al copiar texto: ', err));
}
