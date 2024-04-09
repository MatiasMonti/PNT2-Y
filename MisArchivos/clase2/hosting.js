console.log(nombre);
//console.log(nombre2); esto cancela al ejecutar, el de arriba no, primero compila todo y toma el valor que encuentra abajo
var nombre = "mati";
let nombre2 = "mati";
console.log(nombre);
console.log(nombre2);

setTimeout(() => {
    console.log('timeout');
},500)


const apellido  = (valor) => console.log(valor)
apellido('monti');