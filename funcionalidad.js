function recogerdatos(){
    var txtIngresado=document.getElementById("txt").value;
    return txtIngresado;
}
function encriptarMensaje(){
    var input = document.getElementById("txt");
    var erro= document.getElementById("erro");
    var imagen=document.getElementById("log");
    mensaje=recogerdatos();
    var mensajeEncriptado="";

    if (mensaje == ""){
        document.getElementById("erro").innerHTML = "Ningún mensaje fue encontrado";
        document.getElementById("expl").innerHTML = "Ingresa el texto que desea encriptar o desencriptar";
    }
    else{
        if (erro != "") {
            document.getElementById("erro").innerHTML = "";
            document.getElementById("expl").innerHTML = "";
            imagen.parentNode.removeChild(imagen);
        }
        for (var i = 0; i < mensaje.length; i++) {
            var codigoASCII = mensaje.charCodeAt(i);
            if(codigoASCII==101){
                var caracterEncriptado = String("enter");
                mensajeEncriptado += caracterEncriptado;
            }
            else if(codigoASCII==105){
                var caracterEncriptado = String("imes");
                mensajeEncriptado += caracterEncriptado;
            }
            else if(codigoASCII==97){
                var caracterEncriptado = String("ai");
                mensajeEncriptado += caracterEncriptado;
            }
            else if(codigoASCII==111){
                var caracterEncriptado = String("ober");
                mensajeEncriptado += caracterEncriptado;
            }
            else if(codigoASCII==117){
                var caracterEncriptado = String("ufat");
                mensajeEncriptado += caracterEncriptado;
            }
            else{
                var caracterEncriptado = String.fromCharCode(codigoASCII);
                mensajeEncriptado += caracterEncriptado;
            }
          }
          document.getElementById("texto_encriptado").innerHTML = mensajeEncriptado;
          input.value = "";
          input.focus();
    }
}
function desencriptarMensaje(){
    var input = document.getElementById("txt");
    var erro= document.getElementById("erro");
    mensaje=recogerdatos();
    var mensajeEncriptado="";
    if (mensaje == "") {
        document.getElementById("erro").innerHTML = "Ningún mensaje fue encontrado";
        document.getElementById("expl").innerHTML = "Ingresa el texto que desea encriptar o desencriptar";
    }
    else{
        if (erro != "") {
            document.getElementById("erro").innerHTML = "";
            document.getElementById("expl").innerHTML = "";
        }
        for (var i = 0; i < mensaje.length; i++) {
            var codigoASCII = mensaje.charCodeAt(i);
            var a = mensaje.charCodeAt(i+1);
            var b = mensaje.charCodeAt(i+2);
            var c = mensaje.charCodeAt(i+3);
            var d = mensaje.charCodeAt(i+4);
            if((codigoASCII==101)&&(a==110)&&(b==116)&&(c==101)&&(d==114)){
                var caracterEncriptado = String("e");
                mensajeEncriptado += caracterEncriptado;
                i+=4;
            }
            else if((codigoASCII==105)&&(a==109)&&(b==101)&&(c==115)){
                var caracterEncriptado = String("i");
                mensajeEncriptado += caracterEncriptado;
                i+=3;
            }
            else if((codigoASCII==97)&&(a==105)){
                var caracterEncriptado = String("a");
                mensajeEncriptado += caracterEncriptado;
                i+=1;
            }
            else if((codigoASCII==111)&&(a==98)&&(b==101)&&(c==114)){
                var caracterEncriptado = String("o");
                mensajeEncriptado += caracterEncriptado;
                i+=3;
            }
            else if((codigoASCII==117)&&(a==102)&&(b==97)&&(c==116)){
                var caracterEncriptado = String("u");
                mensajeEncriptado += caracterEncriptado;
                i+=3;
            }
            else if(codigoASCII){
                var caracter = String.fromCharCode(codigoASCII);
                mensajeEncriptado += caracter;
            }
        }
        document.getElementById("texto_encriptado").innerHTML = mensajeEncriptado;
        input.value = "";
        input.focus();
    }
}
function copiar(){
    var elemento = document.getElementById("texto_encriptado");
    var seleccion = document.getSelection();
    seleccion.removeAllRanges();
    var rango = document.createRange();
    rango.selectNodeContents(elemento);
    seleccion.addRange(rango);

    // Copiar el contenido seleccionado al portapapeles
    document.execCommand("copy");
}