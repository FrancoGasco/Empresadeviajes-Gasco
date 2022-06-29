debugger
class asistencias {
    constructor (tipo, dias, precio){
        this.tipo = tipo;
        this.dias = dias;
        this.precio = precio;
    }
    precioTotal() {
        let precioFinal = this.precio * this.dias;
        return precioFinal.toFixed(2);
    }
}

const generarArray =()=>{
    asistencia.push (new asistencias("Robo", dias, 8000));
    asistencia.push (new asistencias("Todo riesgo", dias, 13000));
    asistencia.push (new asistencias("Lesiones medicas", dias, 10000));
}

var tipo = document.getElementById("tipo")
var dias = document.getElementById("dias")

btnSubmit.addEventListener("mousemove", ()=> {
    btnSubmit.title = "Complete los datos para que pueda contratar una asistencia"
})