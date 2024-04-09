async function obtenerUsuariosAleatorios() {

    const usuarios = [];

    for(i = 0; i< 3; i++ ){
        const response = await fetch("https://randomuser.me/api/");

        const data = await response.json();

        const nombreCompleto = data.results[0].name;

        const usuarioFormateado = `${nombreCompleto.first} ${nombreCompleto.last}`;
        
        usuarios.push(usuarioFormateado);
    }
    return usuarios;
}

// Obtener 3 usuarios aleatorios

const func = async () => {
  const usuarios = await obtenerUsuariosAleatorios();

  // EJEMPLO DEL LOG: [ 'Sibille Tausch', 'Zdravko Katanić', 'Zinzi Wobbes' ]
  console.log(usuarios);
}

func();
