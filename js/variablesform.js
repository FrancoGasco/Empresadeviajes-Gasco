const inputNombre = document.querySelector("#inputNombre")
const inputTelefono = document.querySelector("#inputTelefono")
const inputEmail = document.querySelector("#inputEmail")
const inputMensaje = document.querySelector("#inputMensaje")
const btnSubmit = document.querySelector("#submit")

let datosDeInput = ""

function guardarDatosDeUsr() {
    debugger
    const datosDeUsr = {nombre: inputNombre.value,
                        telefono: inputTelefono.value,
                        email: inputEmail.value
    } 
    let str = JSON.stringify(datosDeUsr)
    localStorage.setItem("datosDeUsr", str)
}