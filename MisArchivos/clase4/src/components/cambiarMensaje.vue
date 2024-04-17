<template lang="">
    <div>
        <h1>{{bienvenida}}</h1>
        <h3>clase {{nroclase}}</h3>
        <p>{{mensaje}}</p>
        <button @click='mensajeCambia'>cambiar mensaje</button>
    </div>
</template>
<script>
export default {
    name : 'CambiarMensaje',
    props:{
        bienvenida : String,
        nroclase : String
    },
    data(){
        return {
            mensaje : 'Introduccion vue 3'
        }
    },
    methods: {
        mensajeCambia(){
            this.mensaje = 'Hola vue3'
        }
    },
}
</script>
<style lang="">
    
</style>