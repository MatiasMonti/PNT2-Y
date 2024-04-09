const obtenerDatos = () => {
    return new Promise((resolve, reject) =>     {
        setTimeout(() => {
            resolve('resolvio')
        }, 2000);
    })
}

const func = () => {
    const data = obtenerDatos()
    console.log(data)

    console.log('espero')

    setTimeout(() => {
        console.log(data)
    }, 3000)
}
//timeout no se usa, el await e mejor:


async function  funcAsync()
{
    let data = await obtenerDatos();    
    console.log(data)    
}

func()
funcAsync()
