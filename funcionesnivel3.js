/*Modifique la funcion userIdGenerator. Declare un nombre de funcion
userIdGeneratedByUser. No toma ningun parametro pero toma dos entradas
usando prompt(). Una de las entradas es la cantidad de caracteres y la
segunda entrada es la cantidad de ID que se supone que se generaran.
*/

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

/*
function userIdGeneratedByUser(){
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!#%&/()=?![]*_-:;"
    let usuario="";
    let usuarios = [];
    let cantCaracteres = 10;
    
        for(let x = 0; x <cantCaracteres; x ++){
            usuario += caracteres.charAt(Math.floor(Math.random()* caracteres.length));
            
        }
        usuarios.push(usuario);

    
    
    
    
    return usuarios;
}
console.log(userIdGeneratedByUser());
*/
