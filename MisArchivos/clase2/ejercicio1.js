const alumnos = [
    {nombre : "Matias",
     apellido : "Perez",
     edad : 27
    },
    {nombre : "Lucia",
     apellido : "Sanchez",
     edad : 22
    },
    {nombre : "Lucas",
     apellido : "Gomez",
     edad : 41
    }
]

function obtenerMayorEdad(alumnos){
    let mayor = alumnos[0];

    alumnos.forEach(alu => {
        if(alu.edad > mayor.edad){
            mayor = alu;
        }
    });
    return mayor;
}

const mayorEdad = obtenerMayorEdad(alumnos);
console.log(mayorEdad);