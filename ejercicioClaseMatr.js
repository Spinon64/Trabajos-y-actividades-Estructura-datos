let matriz = [['a','b','c','d','e','f'],
['g', 'h', 'i', 'j', 'k', 'l'], 
['m', 'n', 'o', 'p', 'q', 'r'],
['s', 't', 'u', 'v', 'w', 'x'],
['y', 'z', 'aa', 'ab', 'ac', 'ad'],
['ae', 'af', 'ag', 'ah', 'ai', 'aj']]

let resultado = []
console.log(matriz);

function diagonalPrincipal(matriz){
    let resultado = []
    for(let i = 0; i < matriz.length; i++){
        resultado.push(matriz[i][i]);     
    }
    console.log(resultado);
}
diagonalPrincipal(matriz);


function diagonalSecundaria(matriz){
    let resultado = []
    for(let i = 0, j = matriz.length-1; i < matriz.length;i++, j--){
        resultado.push(matriz[i][j]);     
    }
   console.log(resultado);
}
diagonalSecundaria(matriz);


function superiorPrincipal(matriz){
    let resultado=[];
    let aux=1;
    for(let i=0;i<matriz.length-1; i++) {
        for(let j = aux; j < matriz.length; j++) {
            resultado.push(matriz[i][j]);
        }
        aux++;
    }
    console.log(resultado);
}
superiorPrincipal(matriz);


function inferiorPrincipal(matriz){
    let resultado=[];
    let aux=1;
    for(let i = 1; i < matriz.length; i++) {
        for(let j = 0; j < aux; j++) {
            resultado.push(matriz[i][j]);
        }
        aux++;
    }
    console.log(resultado);
}
inferiorPrincipal(matriz);


function superiorSecundaria(matriz){
    let resultado=[]
    let aux = matriz.length-1;
    for(let i = 0; i < matriz.length-1; i++){
        for(let j = 0; j < aux; j++){
            resultado.push(matriz[i][j]);
        }
        aux--;
    }
    console.log(resultado);
}
superiorSecundaria(matriz);


function inferiorSecundaria(matriz){
    let resultado=[]
    let aux = matriz.length-1;
    for(let i = 1; i < matriz.length; i++){
        for(let j = aux; j < matriz.length; j++){
            resultado.push(matriz[i][j]);
        }
        aux--;
    }
    console.log(resultado);
}
inferiorSecundaria(matriz);