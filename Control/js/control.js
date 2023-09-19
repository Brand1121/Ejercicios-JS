/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

function edadVotar (edad){
    if(edad >= 18){
        console.log("Si puedes votar");
    }else{
        console.log("No puedes votar");
    }
}

/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */

function promedioAlumno (cal1, cal2, cal3, cal4){
    let promedioFinal = ((cal1 + cal2 + cal3 + cal4)/4);
    if(promedioFinal >= 7){
        console.log("Aprobado");
    }else{
        console.log("Reprobado");
    }
} 
 
 /** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

function isDivisible (numero){
    let divSiete = numero % 7;
    let divOcho = numero % 8;
    if(numero != 0){
        if(divSiete === 0 && divOcho === 0){
            console.log("Verdadero");
        }else{
            console.log("Falso");
        }
    }else{
        console.log("Todo numero divisible por 0 es 0");
    }
}

/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

function divisibleDos (numero){
    let divCuatro = numero % 4;
    let divNueve = numero % 9;
    if(numero != 0){
        if(divCuatro === 0 || divNueve === 0){
            console.log("Verdadero");
        }else{
            console.log("Falso");
        }
    }else{
        console.log("Todo numero divisible por 0 es 0");
    }
}

/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */

function calculadoraSimple (operacion, numero, numero1){
    operacion = operacion.toUpperCase();
    operacion = operacion.toLowerCase();
    switch(operacion){
        case "suma": 
            let resultadoSuma = numero + numero1;
            console.log("El resultado de la suma es: ", resultadoSuma);
            break;
        case "resta":
            let resultadoResta = numero - numero1;
            console.log("El resultado de la resta es: ", resultadoResta);
            break;
        case "multiplicacion":
            let resultadoMulti = numero * numero1;
            console.log("El resultado de la multiplicacion es: ", resultadoMulti);
            break;
        case "division":
            let resultadoDivision = numero / numero1;
            console.log("El resultado de la division es: ", resultadoDivision);
            break;
        default:
            console.log("No existe operacion");
            break;
    }
}

/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */

function generoPelicula (categoria){
    categoria = categoria.toUpperCase();
    categoria = categoria.toLowerCase();
    switch (categoria) {
        case "accion":
            console.log("Te recomiendo la pelicula de accion: 'Die Hard'");
            break;
        case "drama":
            console.log("Te recomiendo la pelicula de drama:'Forrest Gump'");
            break;
        case "comedia":
            console.log("Te recomiendo la pelicula de comedia: 'The Grand Budapest Hotel'");
            break;
        case "romance":
            console.log("Te recomiendo la pelicula de romance: 'Before Sunrise'");
            break;
        case "suspenso":
            console.log("Te recomiendo la pelicula de suspenso: 'Seven'");
            break;
        case "terror":
            console.log("Te recomiendo la pelicula de terror: 'El Resplandor'");
            break;
        default:
            console.log("No existe genero de pelicula");
            break;
    }
}

/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 */

function cajeroATM(opcion){
    opcion = opcion.toUpperCase();
    opcion = opcion.toLowerCase();
    if(opcion === "retirar"){
        console.log("Selecciono la opcion de retirar dinero");
    }else if(opcion === "transferencia"){
        console.log("Selecciono la opcion de tranferencia");
    }else if(opcion === "deposito"){
        console.log("Selecciono la opcion de deposito");
    }else if(opcion === "pago"){
        console.log("Selecciono la opcion de pago");
    }else{
        console.log("Opcion no valida");
    }
}

/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 */

function conversor(opcion , pesos) { 
     opcion = opcion.toUpperCase();
     opcion = opcion.toLowerCase();
    switch (opcion) {
        case "dolares":
            let convDolar = pesos * 0.059;
            console.log("EL total de dolares estadounidenses que tienes son: $",convDolar);
            break;
        case "euros":
            let convEuro = pesos * 0.055;
            console.log("EL total de euros que tienes son: $",convEuro);
            break;
        case "yenes":
            let convYenes = pesos * 8.65;
            console.log("EL total de yenes japoneses que tienes son: $",convYenes);
            break;
        case "libra":
            let convLibra = pesos * 0.047;
            console.log("EL total de libras esterlinas que tienes son: $",convLibra);
            break;
        case "franco":
            let convFranco = pesos * 0.053;
            console.log("EL total de francos suizos que tienes son: $",convFranco);
            break;
        default:
            console.log("No existe la conversion correspondiente");
            break;
    }
}


/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */
function descuento (precio, codigo){
    if(codigo === "DESCUENTO10"){
        let descuentoPrecio = precio - (precio * 0.10);
        console.log("Descuento aceptado, tu nuevo precio es: $", descuentoPrecio);
    }else{
        console.log("No eres acreedor al descuento, tu precio es: $", precio);
    }
    
}