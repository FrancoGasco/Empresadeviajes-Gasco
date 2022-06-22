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
    auto.push (new autos("Auto", dias, 50, 2000));
    auto.push (new autos("Deportivo", dias, 15, 6000));
    auto.push (new autos("Camioneta", dias, 25, 4000));
}
var tipo = document.getElementById("tipo")
var dias = document.getElementById("dias")
