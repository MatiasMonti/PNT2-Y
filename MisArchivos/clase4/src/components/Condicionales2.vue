<template lang="">
    <div>
        <h1>Editor de texto simple</h1>
        <p v-if="mensaje ==='hola'">Hola Curso!</p>
        <p v-else-if="mensaje ==='adios'">Adios Curso!</p>
        <p v-else>no entendi tu mensaje</p>
        <input type='text' v-model="mensaje"  >

    </div>
</template>
<script>
export default {
    name : 'Condicionales2IfElse',
    mostrar : false,
    data(){        
        return{
            mensaje : 'hola'
        }
    }
}
</script>
<style lang="">
    
</style>