//Base de datos
const tipoButaca = [{"tipo": "Standard", "factor": 1.05},
                    {"tipo": "VIP", "factor": 1.15},
                    {"tipo": "Premium", "factor":1.10}]

const lugarDestino = [{"area": "Brasil", "factor": 1.03},
                    {"area": "Mexico", "factor": 1.07},
                    {"area": "Estados unidos", "factor":1.10},
                    {"area": "italia", "factor":1.15 }]

const costoPersona = 29.75
const cantidadDias = 25.6


//Variables
const selectlugarDestino = document.querySelector("#selectlugarDestino")
const selectTipoButaca = document.querySelector("#selectTipoButaca")
const numero = document.querySelector ("#cantidad")
const dias = document.querySelector ("#dias")
const btnDisponibilidad  = document.querySelector ("#btnDisponibilidad")
const valorViaje = document.querySelector("#valorViaje")

//Cotizacion

class CotizadorBoletosAereos{
    constructor (jsonTB, jsonLD, costoPersona) {
        this.arraytipoButaca = jsonTB
        this.arratlugarDestino = jsonLD
        this.cantidad = costoPersona
    }
    valorDePasaje(personas, factorButaca, factorDestino, dias){
        let valorPolizaFinal = (parseFloat(this.cantidad) * parseInt(personas) * parseInt(dias) * parseFloat(factorButaca) * parseFloat (factorDestino)).toFixed(2)
        return valorPolizaFinal || "Error"
    }
}

//Logica

const cotizador = new CotizadorBoletosAereos(tipoButaca, lugarDestino, costoPersona)

const cargoLugarDeDestino = ()=>{
    let optionLD
        lugarDestino.forEach(element =>{
            optionLD += `<option value="${element.factor}">${element.area}</option>`
        });
        return optionLD
}

const cargoTipoDeButaca = ()=> {
    let optionTB
        tipoButaca.forEach(element=> {
            optionTB+= `<option value="${element.factor}">${element.tipo}</option>`
        });
        return optionTB
}

const faltanCargarDatos = ()=> {
    return (isNaN(parseInt(dias)) || isNaN(parseInt(cantidad.value)) || selectTipoButaca.value.trim() == "" || selectlugarDestino.value.trim() == "" )
}

const muestroCotizacion = ()=> {
    let pasajeros = cantidad.value
    let tipoBut = selectTipoButaca.value
    let lugarDest = selectlugarDestino.value
    let dia = dias.value
    let valorDeViaje = cotizador.valorDePasaje(pasajeros, tipoBut, lugarDest, dia)
        valorViaje.innerText = `$ ${valorDeViaje}`
}

const cotizarDatosAereo = ()=> {
    faltanCargarDatos() ? toastSA("Complete todos los datos solicitados.", 'darkred') : muestroCotizacion()
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

//app
selectTipoButaca.innerHTML = cargoTipoDeButaca()
selectlugarDestino.innerHTML = cargoLugarDeDestino()

btnDisponibilidad.addEventListener("click", ()=> cotizarDatosAereo())