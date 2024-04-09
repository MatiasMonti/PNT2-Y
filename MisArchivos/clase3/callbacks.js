 function principal (callb){
    //le paso una funcion por parametro
    callb()
 }

 principal(() => console.log('hola'))