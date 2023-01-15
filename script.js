/* Oculta el botón copiar*/
document.getElementById("copiar").style.display = 'none';

/* cifrar el texto ingresado por el usuario*/
const botonCifrar = document.getElementById("encripta");
    botonCifrar.addEventListener("click", () => {
        let textProceso = document.getElementById("textEncriptar").value;                         
            let vocalesTilde = ['á','é','í','ó','ú'];;
                    for (i=0; i<textProceso.length; i++) {
                        for (j=0; j<textProceso.length; j++) {
                            if (vocalesTilde[i] === textProceso.charAt(j)) {
                                return document.getElementById("advertenciaMensaje").innerHTML = "Escriba sin acentos, por favor.";
                                  
                            }
                        }
                    } 
                    if (textProceso.length == 0) {
                        document.getElementById("advertenciaMensaje").innerHTML = "Ningún mensaje fue encontrado.";
                    } else if (textProceso !== textProceso.toLocaleLowerCase()) {
                                document.getElementById("advertenciaMensaje").innerHTML = "Escriba en minúscula, por favor.";
                            } else {
                                document.getElementById("advertenciaMensaje").innerHTML = "";
                                textProceso = textProceso.replace(/a/g, "ai");
                                textProceso = textProceso.replace(/e/g, "enter");
                                textProceso = textProceso.replace(/i/g, "imes");
                                textProceso = textProceso.replace(/o/g, "ober");
                                textProceso = textProceso.replace(/u/g, "ufat");
                                document.getElementById("encriptado").innerHTML = textProceso;
                                document.getElementById("advertenciaMensaje").innerHTML = "";
                                document.getElementById("copiar").style.display = 'inline'; 
                                document.getElementById("copiar").style.justifyContent = 'center';
                            }
    })
/*decifrar el texto ingresado por el usuario*/
const botonDecifrar = document.getElementById("desencritar");
    botonDecifrar.addEventListener("click", () => {
        let textDecodificado = document.getElementById("textEncriptar").value;
        if (textDecodificado.length == 0) {
            document.getElementById("advertenciaMensaje").innerHTML = "Ningún mensaje fue encontrado.";

        } else {
                textDecodificado = textDecodificado.replace(/enter/g, "e");
                textDecodificado = textDecodificado.replace(/imes/g, "i");
                textDecodificado = textDecodificado.replace(/ober/g, "o");
                textDecodificado = textDecodificado.replace(/ufat/g, "u");
                textDecodificado = textDecodificado.replace(/ai/g, "a");
                document.getElementById("encriptado").innerHTML = textDecodificado;
                }
        }) 
 /* Se usa el método remplazar,con el apoyo de Regex: "global". Fuente: "JavaScript replace: manipulando Strings y regex"; Mario Souto, https://www.aluracursos.com/blog/javascript-replace-manipulando-strings-regex--amp?.-*/

 /*copia el texto encriptado en el input en el input type="text"*/      
 const botonCopiar = document.getElementById("copiar");
        botonCopiar.addEventListener("click", () => {
                document.getElementById("textEncriptar").value = document.getElementById("encriptado").innerHTML;

            })
       
    



    
