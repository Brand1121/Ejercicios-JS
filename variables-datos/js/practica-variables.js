/** Ejercicio para esta sesion
 * 
 * Declarar 10 variables de cada tipo de dato sin tomar en cuenta objetos, arrays y null
 * Pueden variar entre las palabras reservadas var, let y const
 *      -number
 *      -string
 *      -boolean
 * 
 * Declarar variables numericas y realizar las operaciones aritmeticas basicas
 *      -suma
 *      -resta
 *      -multiplicacion
 *      -division
 * 
 * Declarar variables que concatenen cadenas de texto
 *      -5 mensajes diferentes en pantalla, sin limite de palabras.
 * 
 * Declarar 5 variables y convertirlas a otro tipo de dato
 * 
 *  CONSIDERACIONES: poner en practica las mejores practicas para declaracion de variables.
 * Imprimir los resultados en pantalla con un console.log()
 */

//Variables number 
let edadBran = 25;
let añoActual = 2023;
let diaActual = 18;
let numeroFav = 3;
let diasAño = 365;
let diasMayo = 31;
let diasSemana = 7;
let numCohorte = 32;
let numIntegrantes = 34;
let horaActual = 1236;

//Variables string
var hola = "Hola ";
var mundo = "Mundo ";
var como = "Como ";
var estan = "Estan? ";
var estas = "Estas ";
var progamando = "Programando? ";
var toma = "Toma ";
var agua = "Agua ";
var cuidate = "Cuidate ";
var tqm = "tqm ";

//Variables boolean
let isMaestroPokemon = false;
var isProgramador = true;
let isIngeniero = false;
var isVerdadero = true;
let isFalso = false;
var aceptado = true;
let rechazado = false;
var encendido = true;
let apagado = false;
var isDiaLaboral = true;

//Inicio operaciones aritmeticas basicas
//Operaciones (suma)
let sumaDiasAñoMayo = diasAño + diasMayo;
var sumaEdadHora = edadBran + horaActual;
console.log("La suma de dias de un año y mayo es: ", sumaDiasAñoMayo);
console.log("La suma de edad y hora es:", sumaEdadHora);

//Operaciones (resta)
let restaIntegrantesAño = numIntegrantes - añoActual;
let restaSemanaHora = diasSemana - horaActual;
console.log("El resultado de la resta de integrantes y año es: ", restaIntegrantesAño);
console.log("La resta entre dias semana y hora es: ", restaSemanaHora)

//Operaciones (multiplicacion)
let multiMayoSemana = diasMayo * diasSemana;
let multiHoraAño = horaActual * añoActual;
console.log("El resultado de la multiplicacion de mayo y semana es: ", multiMayoSemana);
console.log("La multiplicacion entre hora y año es: ", multiHoraAño)

//operaciones (Division)
let diviMayoSemana = (diasSemana / diasMayo);
let diviDiaAño = (diaActual / añoActual);
console.log("El resultado de la division entre dias mayo y dias semana es: ", diviMayoSemana);
console.log("La division entre dia y año actual es: ", diviDiaAño);
//Fin operaciones aritmeticas basicas


//Declaracion variables que concatenen cadenas de texto
let saludo = hola + mundo;
console.log(saludo);

let pregunta = como + estan;
console.log(pregunta);

let tomaAgua = toma + agua;
console.log(tomaAgua)

let estasProgramando = estas + progamando;
console.log(estasProgramando)

let cuidateTqm = cuidate + tqm;
console.log(cuidateTqm)
//Fin variables que concatenen cadenas de texto


//Declaracion de variables y convertirlas a otro tipo de dato
//De number a String
let edadBranString = String (edadBran);
console.log("El tipo es: ",typeof(edadBran));
console.log("Valor: ",edadBran)
console.log("Se paso a: ",typeof(edadBranString));
console.log("Nuevo valor: ",edadBranString);

//De String a Boolean
let holaBoolean = Boolean(hola);
console.log("El tipo es: ", typeof(hola));
console.log("Valor: ", hola);
console.log("Se paso a: ", typeof(holaBoolean));
console.log("Nuevo valor: ",holaBoolean);

// de String a Number
let comoNumber = Number (como);
console.log("El tipo es: ", typeof(como));
console.log("Valor: ", como);
console.log("Se paso a: ", typeof(comoNumber));
console.log("Nuevo valor: ",comoNumber);

//De Boolean a String
let aceptadoString = String (aceptado);
console.log("El tipo es: ", typeof(aceptado));
console.log("Valor: ", aceptado);
console.log("Se paso a: ", typeof(aceptadoString));
console.log("Nuevo valor: ", aceptadoString);

//De Number a Boleean
let diasAñoBoleean = Boolean(diasAño);
console.log("El tipo es: ", typeof(diasAño));
console.log("Valor: ", diasAño);
console.log("Se paso a: ", typeof(diasAñoBoleean));
console.log("Nuevo valor: ", diasAñoBoleean);
//Fin declaracion de variables y convertirlas a otro tipo de dato