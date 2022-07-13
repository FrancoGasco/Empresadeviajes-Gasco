const faltanCargarDatos = ()=> {
    return (isNaN(parseInt(cantidad.value)) || tipo.value.trim() == "" || email.value.trim() == ""|| phone-number.value.trim() == "")
}

const muestroDatos = ()=> {
    let cantidad = cantidad.value
    let tipo = tipo.value
    let email = email.value
    let phone = phone-number.value
    let valorDePasaje = pasaje.precioTotal(cantidad, tipo, email,phone)
        valorPasaje.innerText = `$ ${valorDePasaje}`

}

const cotizarSeguroVivienda = ()=> {
    faltanCargarDatos() ? toastSA("Complete todos los datos solicitados.", 'darkred') : muestroDatos()
}

const toastSA = (mensaje, bgColor, tiempo)=> {
    Swal.fire({
        icon: 'error',
        title: mensaje,
        position: 'top-end',
        showConfirmButton: false,
        toast: true,
        timer: tiempo || 3000,
        timerProgressBar: true,
        background: bgColor || 'white',
        color: '#ffffff'
    })
}