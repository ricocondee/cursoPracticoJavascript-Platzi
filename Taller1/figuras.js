//PI
const PI = Math.PI;

/* codigo cuadrado. */

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

/* codigo triangulo. */

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function alturaTriangulo(lado1, lado2, base) {
    if (lado1 != lado2) {
        alert("Un triangulo Isosceles debe tener ambos lados iguales")
    }
    else {
        alturaCuadrada = (lado1 ** 2) - (base ** 2);
        altura = Math.sqrt(alturaCuadrada);
    }

    return altura;
}
/*codigo circulo.*/

//Diametro
function diametroCirculo(radio) {
    return radio * 2;
}

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

function calcularPerimetroCuadrado() {
    const input = document.getElementById('cuadrado');
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById('cuadrado');
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularAlturaTrianguloIsosceles() {
    const inputLado1 = document.getElementById('ladoTriangulo1');
    const inputLado2 = document.getElementById('ladoTriangulo2');
    const inputBase = document.getElementById('baseTriangulo');
    const value1 = inputLado1.value;
    const value2 = inputLado2.value;
    const value3 = inputBase.value;
    const altura = alturaTriangulo(value1, value2, value3);
    alert(altura);
    /*   console.log(altura); */
}