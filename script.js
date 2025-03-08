let texto = prompt("Ingresa tres numeros y separalos con , "); 
const numeros = texto.split(",").map(num => parseInt(num));
// .split me permite separar los numeros y .map los cambia de texto a numeros enteros 

// para ver los nuemros ingresados
document.getElementById("entrada").innerHTML = `Números ingresados: ${numeros.join(", ")}`;

// verificar si los numeros son iguales 

if(numeros[0] === numeros[1] && numeros[1] === numeros[2]){

    document.getElementById("mensaje").innerHTML = "Son iguales tus numeros";
}else {

    // si no son iguales ahora pasa a ordenarlos 
    let mayorAMenor = [...numeros].sort((a, b) => b - a); // mayor a menor
    let menorAMayor = [...numeros].sort((a, b) => a - b); // menor a mayor
    // .sort lo hace en automatico y es mas corto que hacerlo con if 

    // imprime 
    document.getElementById("resultado-mayor-a-menor").innerHTML = `De mayor a menor: ${mayorAMenor.join(", ")}`;
    document.getElementById("resultado-menor-a-mayor").innerHTML = `De menor a mayor: ${menorAMayor.join(", ")}`;

}