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
/*codigo circulo.*/

//Diametro
function diametroCirculo(radio){
    return radio * 2;
}

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area
function areaCirculo(radio) {
   return (radio * radio) * PI;
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById('cuadrado')
    const value = input.value;
    const perimetro = perimetroCuadrado(value)
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById('cuadrado')
    const value = input.value;
    const area = areaCuadrado(value)
    alert(area);
}