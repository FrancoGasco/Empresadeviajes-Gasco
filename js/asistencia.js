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
    asistencia.push (new asistencias("Robo", 1, 8000));
    asistencia.push (new asistencias("Todo riesgo", 1, 13000));
    asistencia.push (new asistencias("Lesiones medicas", 1, 10000));
}
