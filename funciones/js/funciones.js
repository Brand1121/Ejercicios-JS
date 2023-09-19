/**Ejercicios para esta sesion
 * 
 * Declara una funcion para cada problema planteado
 * 
 * calcular el perimetro de un circulo
 * calcular el area de un rectangulo
 * calcular el cuadrado de un numero
 * calcular la conversion de grados celsius a farenheit
 * calcular el valor del voltaje dadas la resistencia y la corriente
 * calcular el volumen de una esfera
 * 
 * CONSIDERACIONES: poner en practica las mejores practicas para declarar funciones
 * Los ejercicios se entregan tanto en funciones con nombre como funciones flecha
 */

//Constantes declaradas
const pi = 3.1416;

//Funciones Perimetro Circulo
//Funcion con nombre para calcular perimetro de circulo
function perimetroCirculo (diametro){
    let perimetroTotalCirculo = pi * diametro;
    console.log("El perimetro del circulo es: ", perimetroTotalCirculo); 
}

// //Funcion de flecha para calcular perimetro de circulo
const flechaPerimetroCirculo = (diametroFlecha) => (flechaPerimetroTotalCirculo = pi * diametroFlecha, 
    console.log("El perimetro del circulo es: ", flechaPerimetroTotalCirculo));
//Fin Funciones Perimetro Circulo


//Funciones Area de un rectangulo
//Funcion con nombre para calcular area de triangulo
function areaTriangulo (base, altura){
    let areaTotalTriangulo = (base*altura)/2;
    console.log("El area del triangulo es: ", areaTotalTriangulo); 
}

//Funcion de flecha para calcular perimetro de circulo
const flechaAreaTriangulo = (flechaBase, flechaAltura) => (flechaAreaTotalTriangulo = (flechaBase * flechaAltura)/2,
console.log("El area del triangulo es: ", flechaAreaTotalTriangulo));
//Fin Funciones Area de un rectangulo

//Funciones cuadrado de un numero
//Funcion con nombre para el cuadrado de un numero
function cuadradoNumero (numero) {
    let totalNumeroCuadrado = Math.pow(numero,2);
    console.log("El cuadro del numero es: ", totalNumeroCuadrado); 
}

//Funcion de flecha para el cuadrado de un numero
const flechaCuadradoNumero = (flechaNumero) => (flechaTotalNumeroCuadrado = Math.pow(flechaNumero, 2),
console.log("El cuadro del numero es: ", flechaTotalNumeroCuadrado));
//Fin funciones cuadrado de un numero.

//Funnciones calcular conversion de grados Celsius a farenheit
//Funcion con nombre para calcular conversion de grados Celsius a farenheit
function conversionGrados (grados){
    let conversionFarenheit = (grados* 1.8) + 32;
    console.log("La conversion de grados es: ", conversionFarenheit,"°F"); 
}

//Funcion flecha para calcular conversion de grados Celsius a farenheit
const flechaConversionGrados = (flechaGrados) => (flechaConversionTotal = (flechaGrados* 1.8) + 32,
console.log("La conversion de grados es: ", flechaConversionTotal,"°F"));
//Fin Funnciones calcular conversion de grados Celsius a farenheit

//Funciones calcular el valor del voltaje dada la resistencia y la corriente
//Funcion con nombre calcular el valor del voltaje dada la resistencia y la corriente
function valorVoltaje (resistencia, corriente) {
    let voltajeTotal = resistencia * corriente;
    console.log("El valor del voltaje es: ", voltajeTotal,"V");
}

//Funcion flecha calcular el valor del voltaje dada la resistencia y la corriente
const flechaValorVoltaje = (flechaResistencia, flechaCorriente) => (flechaVoltajeTotal = flechaResistencia * flechaCorriente,
    console.log("El valor del voltaje es: ", flechaVoltajeTotal,"V"));
//Fin Funciones calcular el valor del voltaje dada la resistencia y la corriente

//Funciones Calcular volumen de una esfera
//Funcion con nombre para Calcular volumen de una esfera
function calcularVolumen (radio){
    let volumenTotal = ((4/3)* pi * Math.pow(radio, 3));
    console.log("El volumen de la esfera es: ", volumenTotal);
}

//Funcion flecha para Calcular volumen de una esfera
const flechaCalcularVolumen = (flechaRadio) => (flechaVolumenTotal = ((4/3)* pi * Math.pow(flechaRadio, 3)),
console.log("El volumen de la esfera es: ", flechaVolumenTotal));
//Fin Funciones Calcular volumen de una esfera