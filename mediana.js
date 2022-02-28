let lista1 = [
    100,
    500,
    400,
    300,
    200,
    1000
];

//Ordena lista de mayor a menor
lista1.sort((a, b) => b - a);
console.log(lista1);

//Ordena lista de menor a mayor
lista1.sort((a, b) => a - b);
console.log(lista1);



const mitadLista1 = parseInt(lista1.length / 2);

function calcularMediaAritmetica(lista){
    
    // let sumaLista = 0;

    // for (let i = 0; i <  lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;

}

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1-1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2
    ]);
  
    mediana = promedioElemento1y2;

} else {
    mediana = lista1[mitadLista1];
}