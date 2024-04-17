<template lang="">
    <div>
        <h1>{{Bienvenida}}</h1>
        <h3>Clase {{nroClase}}</h3>
        <p>{{mensaje}}</p>
        <button @click='mensajeCambia'> Cambiar Mensaje</button>
    </div>
</template>
<script>
export default {
    name: 'ComponenteCuatro', // Es Opcional
    props:{
        Bienvenida: String,
        nroClase: String
    },
    data(){
        return {
            mensaje: 'Introduccion VUE 3'
        }
    },
    methods:{
        mensajeCambia(){
            this.mensaje = 'Hola Vue!'
        }
    }
}
</script>
<style lang="">
    
</style>