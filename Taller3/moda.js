const lista = [
    1,
    2,
    3,
    4,
    1,
    5,
    2,
    6,
    7,
    1,
    5,
    8,
    9,
    10
];

const countLista = {};
lista.map(
    function(elemento){
       if(countLista[elemento]){
           countLista[elemento] += 1;
       }  
       else{
           countLista[elemento] = 1
       }

    }
);

const listaArray = Object.entries(countLista).sort(function (a, b){
    return a[1] - b[1]
});

const moda = listaArray[listaArray.length - 1]