const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1
];

const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento])
        {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
);

// const lista1Array= Object.entries(lista1Count).sort(function (valorAcumulado, nuevoValor){
//     valorAcumulado - nuevoValor;
// });

const lista1Array= Object.entries(lista1Count).sort(function (elementoA, elementoB){
    return elementoA[1] - elementoB[1];
});

const moda = lista1Array[lista1Array.length-1];


// lista1Count.sort(function (a, b){
//     return elementoA - elementoB;
// });


//Método propuesto por usuario pero es muy lento
function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}