debugger
class pasajes {
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
    pasaje.push (new pasajes("Robo", 1, 8000));
    pasaje.push (new pasajes("Todo riesgo", 1, 13000));
    pasaje.push (new pasajes("Lesiones medicas", 1, 10000));
}