// ******************** UNIDAD 1***************************

/* Ejercicio 1
let nombreEj1 = prompt ("Ingrese su nombre:")
let apellidoEj1 = prompt ("Ingrese su apellido:")
console.log("Bienvenido " +nombreEj1+" "+ apellidoEj1)
*/

/* Ejercicio 2
let diametroEj2 = prompt ("Ingrese el diametro del círculo:")
const pi = 3.1416;
let perimetro = 2*pi*(diametroEj2/2)
let area = pi*(diametroEj2/2)*(diametroEj2/2)
console.log("El perímetro es: "+ perimetro)
console.log("El área es: "+ area)
*/

/* Ejercicio 3
let num1Ej3 = prompt ("Ingrese el primer número:")
let num2Ej3 = prompt ("Ingrese el segundo número:")
let num3Ej3 = prompt ("Ingrese el tercer número:")
let num4Ej3 = prompt ("Ingrese el cuarto número:")

num1Ej3 = parseInt(num1Ej3)  // para convertirlo en int
num2Ej3 = parseInt(num2Ej3)
num3Ej3 = parseInt(num3Ej3)
num4Ej3 = parseInt(num4Ej3)

let sumEj3 = num1Ej3 + num2Ej3 + num3Ej3 + num4Ej3
console.log("La suma es igual a: "+ sumEj3)
var promedioEj3 = (num1Ej3 + num2Ej3 + num3Ej3 + num4Ej3)/4
console.log("El promedio es: "+promedioEj3)
*/

/* Ejercicio 4
let valorHora = prompt ("Ingrese el valor de la hora (en USD) del colaborador: ")
let cantHoras = prompt ("Ingrese la cantidad de horas laborales en el mes: ")
let sueldo = valorHora * cantHoras
console.log("El sueldo mensual en USD del colaborador es : "+sueldo)
*/

/* Ejercicio 5
let valorHora = prompt ("Ingrese el valor de la hora (en USD) del colaborador: ")
let cantHoras = prompt ("Ingrese la cantidad de horas laborales en el mes: ")
let antiguedad = prompt ("Ingrese sus años de antiguedad: ")
let sueldoSinAntigue = valorHora * cantHoras
alert("El sueldo mensual en USD del colaborador es sin Antiguedad es : "+sueldoSinAntigue)
let sueldoConAntigue = sueldoSinAntigue + (antiguedad*sueldoSinAntigue*0.15)
alert("El sueldo mensual en USD del colaborador es : "+sueldoConAntigue)
*/

/* Ejercicio 6
Realizar un sistema para el cálculo de sueldo de una empresa de seguros. Se le solicita que ingrese el valor de la hora, la cantidad de horas trabajadas en el mes, los años de antigüedad, la cantidad de seguros vendidos y el valor del seguro más caro vendido.
Realice un programa para calcular e informar el sueldo mensual del empleado, teniendo en cuenta que se le asigna un bono igual al 50% del seguro más caro vendido, un bono igual al 25% del sueldo por la cantidad de seguros vendidos y otro bono igual al 15% del sueldo por año de antigüedad. Una vez obtenido el sueldo final, calcular e informar el valor promedio de la hora del empleado.
*/

// ******************** UNIDAD 2 ***************************
/* Ejercicio 7 
let numero = prompt("Ingrese un numero: ");

function esPar(num)
{
return (num % 2) == 0;
}

numeroValidacion = esPar (numero);
if (numero == 0){
    alert ("Su numero es 0");
} else if(numeroValidacion == true){
    alert ("Es par");
    }  else  {
        alert ("Es impar");
}
*/

/* Ejercicio 8
let numero = prompt("Ingrese un numero: ");

function esMultiplo(num) {
    return (num % 3) == 0;
}

numeroValidacion = esMultiplo(numero);
if (numeroValidacion == true) {
    alert("Es multiplo")
} else {
    alert("No es multiplo");
}*/

/*Ejercicios 9
let letra = prompt("Ingrese una letra: ");
if(letra=="a" || letra=="e" || letra=="i" || letra=="o" || letra=="u"){
alert("Su letra ES una vocal");
} else {
    alert("Su letra NO es una vocal");
}*/

/*Ejercicios 10
alert("Suponga un rango de números con un principio y un final numérico")
let numInicial = parseInt(prompt("Ingrese el número inicial de ese rango: "));
let numFinal = parseInt(prompt("Ingrese el número final de ese rango: "));

if ((numFinal - numInicial) > 5) {
    function esPar(num) {
        if (num % 2 == 0) {
            return alert(num + " es par");
        } else {
            return alert(num + " es impar");
        }
    }
    //      1----------5                     10-----------5   
    let numeroValidacion = parseInt(prompt("Ingrese el número a validar: "));
    if ((numInicial <= numeroValidacion) && (numFinal >= numeroValidacion)) {
        alert("Estoy dentro");
        esPar(numeroValidacion);
    } else {
        alert("estoy fuera")
        esPar(numeroValidacion);
    }
} else {
    do {
        alert("El rango de numeros como minimo debe tener 5 numeros enteros");
        numInicial = parseInt(prompt("Ingrese el número inicial de ese rango: "));
        numFinal = parseInt(prompt("Ingrese el número final de ese rango: "));
    } while ((numFinal - numInicial) <= 5);
    if ((numInicial <= numeroValidacion) && (numFinal >= numeroValidacion)) {
        alert("Estoy dentro");
        esPar(numeroValidacion);

    } else {
        alert("estoy fuera")
        esPar(numeroValidacion);
    }
}*/

/*Ejercicios 11
let primerNumero = parseInt(prompt("Ingrese el primer numero: "));
let segundoNumero = parseInt(prompt("Ingrese el segundo numero: "));
let signo = prompt("ingrese la operacion matematica que desee hacer con ellos ( + o - o * o / ): ");
let resultado = 0;
switch (signo) {
    case "+":
        resultado = primerNumero + segundoNumero;
        alert("Su resultado es: " + resultado);
        break;
    case "-":
        resultado = primerNumero - segundoNumero;
        alert("Su resultado es: " + resultado);
        break;
    case "/":
        resultado = primerNumero / segundoNumero;
        alert("Su resultado es: " + resultado);
        break;
    case "*":
        resultado = primerNumero * segundoNumero;
        alert("Su resultado es: " + resultado);
        break;
}*/


