debugger
class autos {
    constructor(tipo, dias, stock, precio){
        this.tipo = tipo;
        this.dias = dias;
        this.stock = stock;
        this.precio = precio;
    }
    precioTotal() {
        let precioFinal = this.precio * this.dias;
        return precioFinal.toFixed(2);
    }
    descontarStock() {
        this.stock -= 1
    }
}

const generarArray =()=>{
    pasaje.push (new pasajes("Auto", dias, 50, 2000));
    pasaje.push (new pasajes("Deportivo", dias, 15, 6000));
    pasaje.push (new pasajes("Camioneta", dias, 25, 4000));
}