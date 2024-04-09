const numeros = [10,21,22,55,58,12,4]


function devolverPares(numeros){
    let pares = numeros.filter(num => num % 2 == 0);
    return { pares, obstaculo : 1 };
}

let {pares, loQueNoMeInteresa} = devolverPares(numeros);

console.log(pares);