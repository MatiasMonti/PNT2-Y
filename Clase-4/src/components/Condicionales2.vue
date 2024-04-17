<template lang="">
    <div>
        <h1>Condicionales 2 </h1>
        <p v-if="mensaje === 'Hola'"> Hola Curso</p>
        <p v-else-if="mensaje === 'Adios'">Adios Curso</p>
        <p v-else>No entendi tu mensaje</p>
        <input type='text' v-model='mensaje'>
    </div>
</template>
<script>
export default {
    name: 'CondicionalesIfElse',
    data(){
        return{
            mensaje: ''
        }
    }
}
</script>
<style lang="">
    
</style>