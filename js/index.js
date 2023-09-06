const inputNombre = document.getElementById("inputNombre")
const inputApellido = document.getElementById("inputApellido")
const inputMail = document.getElementById("inputMail")
const inputAsunto = document.getElementById("inputAsunto")
const inputComentario = document.getElementById("inputComentario")


const botonContacto = document.getElementById("boton-contacto")

const mensajeConfirmacion = document.getElementById("confirmacion-mensaje-enviado")

let mensaje = {
    nombre: "",
    apellido:  "",
    mail: "",
    asunto: "",
    comentario: ""
}

botonContacto.addEventListener("click", () => { 

    mensaje = {
        ...mensaje, 

        nombre: inputNombre.value,
        apellido:  inputApellido.value,
        mail: inputMail.value,
        mail: inputAsunto.value,
        mail: inputComentario.value
    }

    if (!mensaje.nombre || !mensaje.apellido || !mensaje.mail || !mensaje.mail || !mensaje.mail) {
        alert("Faltan datos por completar!")
        return
    }

    mensajeConfirmacion.innerHTML = `Gracias por interesarte en nosotros! En breve te vamos a contactar`

    setTimeout(() =>{
        mensajeConfirmacion.innerHTML = ``
    }, 2000)

    inputNombre.value = ""
    inputApellido.value = ""
    inputMail.value = ""
    inputAsunto.value = ""
    inputComentario.value = ""

})