const obtenerDatos = () => {
    return new Promise((resolve, reject) =>     {
        setTimeout(() => {
            resolve('resolvio')
        }, 2000);
    })
    ///promise es la forma manual de mostrar como se haria un fetch a un endpoint
    //fetch('https:/ramdomuser.me/api/')
}

const func = () => {
    const data = obtenerDatos()
    console.log(data)

    console.log('espero')

    setTimeout(() => {
        console.log(data)
    }, 3000)
}
//timeout no se usa, el then e mejor:

const funcThen = () => {
    obtenerDatos()
    .then((data) => console.log(data))
}


func()
funcThen()
