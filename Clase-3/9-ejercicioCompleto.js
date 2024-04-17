const obtenerUsuarios = async () => {
    // Hace la consulta al fetch
    // const respuesta = await fetch("https://randomuser.me/api/?results=10");
    
    // // dentro de la funcion
    // const datos = await respuesta.json();

    // const usuarios = datos.results;

    // male or female
 

    // Retornamos un objeto con los arrays
    return { hombres, mujeres };
  };
  
  async function funcionPadre() {
    // La desestructuració un objeto
    const { hombres, mujeres } = await obtenerUsuarios();

    // const hombresYMujeres = await obtenerUsuarios();

    // let hombres = hombresYMujeres.hombres

    // let mujeres = hombresYMujeres.mujeres
    
    console.log(hombres, mujeres);
    // console.log();
  
    // console.log("Hombres:");
    // hombres.forEach((hombre) => {
    //   console.log(`- ${hombre.name.first} ${hombre.name.last}`);
    // });
  
    // console.log("\nMujeres:");
    // mujeres.forEach((mujer) => {
    //   console.log(`- ${mujer.name.first} ${mujer.name.last}`);
    // });
  }
  
  funcionPadre();
  