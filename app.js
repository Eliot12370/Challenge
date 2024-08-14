
function validarTexto(texto) {
    let regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

function encriptar(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function desencriptar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function procesarTexto(accion) {
    let texto = document.getElementById("input-text").value;

    if (!validarTexto(texto)) {
        alert("Por favor, ingresa solo letras minúsculas, sin acentos ni caracteres especiales.");
        return;
    }

    // Crear mensaje enviado
    agregarMensaje("sent", texto);

    // Encriptar o desencriptar según la acción
    let resultado;
    if (accion === "encriptar") {
        resultado = encriptar(texto);
    } else if (accion === "desencriptar") {
        resultado = desencriptar(texto);
    }

    // Crear mensaje recibido
    agregarMensaje("received", resultado);

    // Limpiar campo de texto
    document.getElementById("input-text").value = "";
}

function agregarMensaje(tipo, texto) {
    let chatWindow = document.getElementById("chat-window");
    let mensaje = document.createElement("div");
    mensaje.classList.add("message", tipo);
    let contenido = document.createElement("p");
    contenido.textContent = texto;
    mensaje.appendChild(contenido);
    chatWindow.appendChild(mensaje);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll al final
}

function copiarTexto() {
    let mensajes = document.querySelectorAll('.message.received p');
    if (mensajes.length > 0) {
        let ultimoMensaje = mensajes[mensajes.length - 1].textContent;
        navigator.clipboard.writeText(ultimoMensaje).then(function() {
            alert("Texto copiado al portapapeles: " + ultimoMensaje);
        }, function(err) {
            alert("Error al copiar: " + err);
        });
    } else {
        alert("No hay texto para copiar.");
    }
}
