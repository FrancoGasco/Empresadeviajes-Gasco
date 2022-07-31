//Base de datos
const tipoAuto = [{"tipo": "Auto", "factor": 1.05},
                    {"tipo": "Deportivo", "factor": 1.15},
                    {"tipo": "Camioneta", "factor":1.10}]


const cantidadDias = 25.6


//Variables
const selectTipoAuto = document.querySelector("#selectTipoAuto")
const dias = document.querySelector ("#dias")
const btnDisponibilidad  = document.querySelector ("#btnDisponibilidad")
const valorAuto = document.querySelector("#valorAuto")

//Cotizacion

class CotizadorAuto{
    constructor (jsonTA, costoDia) {
        this.arraytipoAuto = jsonTA
        this.dias = costoDia
    }
    valorDeAuto(factorAuto, dias){
        let valorPolizaFinal = (parseFloat(this.dias) * parseFloat(dias)   * parseFloat(factorAuto)).toFixed(2)
        return valorPolizaFinal || "Error"
    }
}

//Logica

const cotizador = new CotizadorAuto(tipoAuto, cantidadDias)

const cargoTipoDeAuto = ()=> {
    let optionTA
        tipoAuto.forEach(element=> {
            optionTA += `<option value="${element.factor}">${element.tipo}</option>`
        });
        return optionTA
}

const faltanCargarDatos = ()=> {
    return (isNaN(parseInt(dias)) ||   selectTipoAuto.value.trim() == "" )
}

const muestroCotizacion = ()=> {
    let tipoAut = selectTipoAuto.value
    let dia = dias.value
    let valorDeAuto = cotizador.valorDeAuto(tipoAut, dia)
        valorAuto.innerText = `$ ${valorDeAuto}`
}

const cotizarDatosAuto = ()=> {
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
selectTipoAuto.innerHTML = cargoTipoDeAuto()


btnDisponibilidad.addEventListener("click", ()=> cotizarDatosAuto())