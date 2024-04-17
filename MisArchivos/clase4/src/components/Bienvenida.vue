<template lang="">
    <div>
        <h1>Clase 4</h1>
        <h3>Practicando en Vue</h3>
        <h4>{{mensaje}}</h4>
        <h4>materia: {{materia}}</h4>
    </div>
</template>
<script>
export default {
    name: 'componenteEjemplo',
    props : {
        materia : String,
        mensaje : String
    }
}
</script>
<style lang="">
    
</style>