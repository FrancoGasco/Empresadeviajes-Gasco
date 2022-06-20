debugger
class pasajes {
    constructor(tipo, cantidad, stock, precio){
        this.tipo = tipo;
        this.cantidad = cantidad;
        this.stock = stock;
        this.precio = precio;
    }
    precioTotal() {
        let precioFinal = this.precio * this.cantidad;
        return precioFinal.toFixed(2);
    }
    descontarStock(cantidad) {
        this.stock -=cantidad
    }
}

const generarArray =()=>{
    pasaje.push (new pasajes("Standard", 1, 250, 8000));
    pasaje.push (new pasajes("VIP", 1, 25, 13000));
    pasaje.push (new pasajes("Premium", 1, 100, 10000));
}