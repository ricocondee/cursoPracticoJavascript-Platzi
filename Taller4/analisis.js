//============================UTILS======================
function esPar(numero) {
    return (numero % 2 == 0);
}

function calcularPromedio(lista) {
    const sumaLista = lista.reduce(
        function (contador = 0, nuevoElemento) {
            return contador + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / lista.length;

    return promedioLista
}

//=======================================================


const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);/*recorrido del array colombia en salarios.js y retorno del salario*/

const salariosColSort = salariosCol.sort(
    function (a, b) {
        return a - b;
    }
);/* salariosColSort ordenado con sort() */

/* mediana de salarios en la lista haciendo uso de los UTILS */
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2)
    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad]

        const mediana = calcularPromedio([personaMitad1, personaMitad2]);
        return mediana;
    }
    else {
        const personaMitad = lista[mitad]
        return personaMitad;
    }
}

const medianaGeneralCol = medianaSalarios(salariosColSort)
//-------------------------------------------------------------------------------

//mediana top 10%
const firstSplice = (salariosColSort.length * 90) /100;
const countSplice = salariosColSort.length - firstSplice;

const top10Salarios = salariosColSort.splice(
    firstSplice, countSplice
);
const medianaTop10 = medianaSalarios(top10Salarios)



console.log(medianaGeneralCol, medianaTop10);