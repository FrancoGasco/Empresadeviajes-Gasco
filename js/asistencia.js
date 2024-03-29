//Base de datos
const tipoAsistencia = [{"tipo": "Robo", "factor": 1.05},
                    {"tipo": "Todo riesgo", "factor": 1.15},
                    {"tipo": "Lesiones medicas", "factor":1.10}]


const cantidadDias = 25.6


//Variables
const selectTipoAsistencia = document.querySelector("#selectTipoAsistencia")
const dias = document.querySelector ("#dias")
const btnDisponibilidad  = document.querySelector ("#btnDisponibilidad")
const valorAuto = document.querySelector("#valorAsistencia")

//Cotizacion

class CotizadorAsistencia{
    constructor (jsonTA, costoDia) {
        this.arraytipoAsistencia = jsonTA
        this.dias = costoDia
    }
    valorDeAuto(factorAuto, dias){
        let valorPolizaFinal = (parseFloat(this.dias) * parseFloat(dias)   * parseFloat(factorAsistencia)).toFixed(2)
        return valorPolizaFinal || "Error"
    }
}

//Logica

const cotizador = new CotizadorAsistencia(tipoAsistencia, cantidadDias)

const cargoTipoDeAsistencia = ()=> {
    let optionTA
        tipoAsistencia.forEach(element=> {
            optionTA += `<option value="${element.factor}">${element.tipo}</option>`
        });
        return optionTA
}

const faltanCargarDatos = ()=> {
    return (isNaN(parseInt(dias)) ||   selectTipoAsistencia.value.trim() == "" )
}

const muestroCotizacion = ()=> {
    let tipoAsis = selectTipoAsistencia.value
    let dia = dias.value
    let valorDeAsistencia = cotizador.valorDeAsistencia(tipoAsis, dia)
        valorAsistencia.innerText = `$ ${valorDeAsistencia}`
}

const cotizarDatosAsistencia = ()=> {
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
selectTipoAsistencia.innerHTML = cargoTipoDeAsistencia()


btnDisponibilidad.addEventListener("click", ()=> cotizarDatosAsistencia())
