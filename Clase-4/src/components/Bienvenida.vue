<template>
    <div>
        <h1>Clase 4</h1>
        <h3>Introduccion a {{materia}}</h3>
        <h4>{{mensaje}}</h4>
    </div>
</template>
<script>
export default {
    name: 'BienvenidaClase',
    props:{
        materia: String,
        mensaje: String,
    }
}
</script>
<style>
    
</style>