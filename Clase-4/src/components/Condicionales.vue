<template>
    <div>
        <p v-if="true">Este parrafo se muestra si es verdadero</p>
        <!-- v-if: es la condicion con la cual yo voy a mostrar el texto o no -->
        <button @click='EstadoCambia'>Cambiar Estado</button>
    </div>
</template>
<script>
export default {
    name: 'CodicionalesIf',
    data(){
        return {
            mostrar: true
        }
    },
    methods:{
        EstadoCambia(){
            this.mostrar = !this.mostrar
        }
    }
}
</script>
<style>
    
</style>