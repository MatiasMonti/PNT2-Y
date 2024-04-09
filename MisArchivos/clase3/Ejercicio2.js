const obtenerUsuarios = async () => {
    
    const respuesta = await fetch("https://randomuser.me/api/?results=10");    
    
    const datos = await respuesta.json();

    let usuarios = datos.results;

    //opcion a:
    const hombres = [], mujeres = [];

    usuarios.forEach(usuario =>
    {
        if(usuario.gender == 'male'){
            hombres.push(usuario);
        }
        else mujeres.push(usuario);
    })

    //opcion b:
    //const hombres = usuarios.filter(u => u.gender == 'male');
    //const mujeres = usuarios.filter(u => u.gender == 'female');   

    return { hombres, mujeres };
  };
  
  async function funcionPadre() {
    const { hombres, mujeres } = await obtenerUsuarios();
    
    console.log();
  
    console.log("Hombres:");
    hombres.forEach((hombre) => {
      console.log(`- ${hombre.name.first} ${hombre.name.last}`);
    });
  
    console.log("\nMujeres:");
    mujeres.forEach((mujer) => {
      console.log(`- ${mujer.name.first} ${mujer.name.last}`);
    });
  }
  
  funcionPadre();
