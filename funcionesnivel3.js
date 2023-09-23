/*Modifique la funcion userIdGenerator. Declare un nombre de funcion
userIdGeneratedByUser. No toma ningun parametro pero toma dos entradas
usando prompt(). Una de las entradas es la cantidad de caracteres y la
segunda entrada es la cantidad de ID que se supone que se generaran.
*/
/*
function userIdGeneratedByUser(){
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!#%&/()=?![]*_-:;"
    let usuario="";
    let cantCaracteres = Number(prompt("Ingrese cuantos caracteres tendra el usuario"));
    let cantId = Number(prompt("Ingrese cuantos ID desea generar"));
    let usuarios = [];

    for(let i = 0; i <= cantId; i ++){
        usuario ="";
        for(let x = 0; x <=cantCaracteres; x ++){
            usuario += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
        }
        usuarios.push(usuario);

    }
    return usuarios;
}
console.log(userIdGeneratedByUser());
*/

//Escribe un nombre de función rgbColorGenerator y genera colores rgb.
/*
function generarColorRgb(){
    
    let maximo = 255
    let arrayRGB =[];
    let colorGenerado = 0;
    for(let i= 0; i < 3; i ++){
        colorGenerado= Math.floor(Math.random() * maximo);
        arrayRGB.push(colorGenerado);
    }
    
    return `El color obtenido es R: ${arrayRGB[0]}, G: ${arrayRGB[1]}, B: ${arrayRGB[2]}`;

}

console.log(generarColorRgb());
*/
//Escriba una funcion arrayOfHexaColors que devuelva cualquier cantidad de colores hexadecimales en una matriz.

