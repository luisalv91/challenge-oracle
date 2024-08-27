const areaTexto = document.querySelector(".area__texto");
const mensaje = document.querySelector(".mensaje");
const btnHtmlCopiar = document.querySelector(".btn-copiar");

// 'La letra "e" es convertida para "enter"'
// 'La letra "i" es convertida para "imes"'
// 'La letra "a" es convertida para "ai"'
// 'La letra "o" es convertida para "ober"'
// 'La letra "u" es convertida para "ufat"'

const codigoValido = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"]];
const codigoInvalido = new RegExp(/[^a-zA-ZñÑ\s]/);

function encriptar(stringEncriptado) {

    stringEncriptado = stringEncriptado.toLowerCase()

    for (let index = 0; index < codigoValido.length; index++){
        if(stringEncriptado.includes(codigoValido[index][0])){
            stringEncriptado = stringEncriptado.replaceAll(codigoValido[index][0], codigoValido[index][1])
        }
    }

    return stringEncriptado
}


function desencriptar(stringDesencriptado) {
 
    stringDesencriptado = stringDesencriptado.toLowerCase()
    
    for (let index = 0; index < codigoValido.length; index++){
        if(stringDesencriptado.includes(codigoValido[index][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(codigoValido[index][1], codigoValido[index][0])
        }
    }

    return stringDesencriptado

}

function postAction(){
    areaTexto.value = "";
    mensaje.style.backgroundImage = "none"
    btnHtmlCopiar.style.display="block";

}

function btnEncriptar(){

    if (accionValida(areaTexto.value)){
        const textoEncriptado = encriptar(areaTexto.value)
        mensaje.value =  textoEncriptado
        postAction()
    }
    else{
        accionInvalida();
    }
}

function btnDesencriptar(){
    if (accionValida(areaTexto.value)){
        const textDesencriptado = desencriptar(areaTexto.value)
        mensaje.value =  textDesencriptado
        postAction()
    }
    else{
        accionInvalida();
    }
}


function btnCopiar(){
    navigator.clipboard.writeText(mensaje.value).then(() => {
        console.log('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Fallo al copiar el texto: ', err);
    });
}


function accionValida(inputString){
    if (codigoInvalido.test(inputString)){
        return false;
    }
    else{
        return true;
    }
}

function accionInvalida(){
    alert('A ingresado un caracter invalido.');
}