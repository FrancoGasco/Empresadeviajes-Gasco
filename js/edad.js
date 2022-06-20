debugger
let nombre = prompt ("Ingrese su nombre y apellido")
let edad = parseInt(prompt("Hola, " + nombre + " ¿Cuantos años tienes?"))

let confirmarEdad = function () {
    do{
        if (restriccion=confirm("¿Tu edad es de " + edad + " años?")) {
            alert ("Se recominda supervicion de un mayor")
            break
        }else{
            alert("Vuelve a colocar tu edad")
            edad = parseInt(prompt(nombre + " , ¿Que edad tienes?"))
            if (edad>=18) {
                alert ("Ya puedes disfrutar de los mejores destinos y la mejor atencion con nosotros")
                restriccion=false
            } else {
                restriccion=true
            }
        }
    }while (restriccion); 
}

if (edad >=18) {
    alert("Ya puedes disfrutar de los mejores destinos y la mejor atencion con nosotros")
}else{
    confirmarEdad();
}


