function calcularPromedio(lista) {
    const sumaLista = lista.reduce(
        function (contador = 0, nuevoElemento) {
            return contador + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / lista.length;

    return promedioLista
}

let lista1 = [100,500, 7000000,200]
let lista1Ordenda = lista1.sort()
console.log(lista1)

const mitadLista1 = parseInt(lista1.length / 2);

function esPar() {
    const elemento1 = lista1[mitadLista1]
    const elemento2 = lista1[mitadLista1 - 1];
    const promedioElementos = calcularPromedio([elemento1, elemento2]);

    mediana = promedioElementos;
}

function mediana(mediana){

if (esPar(lista1.length)) {

}
else {
    mediana = lista1[mitadLista1]
}

return mediana;
}
