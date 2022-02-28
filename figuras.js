console.log("Hello, world!");

//git add nombreArchivo


//Código del cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) { 
    return lado * 4;
}

//console.log("El perímetro del cuadrado es " + perimetroCuadrado + " cm");

function areaCuadrado(lado) {
    return lado * lado;
}

//console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");

console.groupEnd();

//Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();


//Código del círculo
console.group("Círculo");

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro =  diametroCirculo(radio);
    return diametro * Math.PI;
}

function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
}

console.groupEnd();

//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

