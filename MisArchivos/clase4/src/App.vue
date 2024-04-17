<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <componenteEjemplo mensaje="texto que puedo cambiar" materia="PNT2"/> -->
  <!-- <cambiarMensaje bienvenida="bienvenido" nroclase="PNT2"/> -->
  <!-- <Condicionales /> -->
  <!-- <Condicionales2 /> -->
  <!-- <ComponenteFor /> -->
  <!-- <MatrizNoMuta /> -->
  <!-- <EjercicioUno /> -->
  <EjercicioDos />
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import componenteEjemplo from './components/Bienvenida.vue'
//import cambiarMensaje from './components/cambiarMensaje.vue'
// import Condicionales from './components/Condicionales.vue'
// import Condicionales2 from './components/Condicionales2.vue'
// import ComponenteFor from './components/ComponenteFor.vue'
// import MatrizNoMuta from './components/MatrizNoMuta.vue'
 //import EjercicioUno from './components/EjercicioUno.vue
 import EjercicioDos from './components/EjercicioDos.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
    // componenteEjemplo,
    //cambiarMensaje
    // Condicionales,
    // Condicionales2,
    //MatrizNoMuta,
    //ComponenteFor
    //EjercicioUno
    EjercicioDos

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
