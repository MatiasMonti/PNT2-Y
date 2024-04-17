<template lang="">
    <div>
        <p v-if="mostrar">este parrafo se muestra si es verdaderos</p>
        <button @click = 'EstadoCambia'>cambiar estado</button>

    </div>
</template>
<script>
export default {
    name : 'CondicionalesIfElse',
    mostrar : false,
    data(){        
        return{
            mostrar : true
        }
    },
    methods: {
        EstadoCambia(){
            this.mostrar = !this.mostrar
        }

    }
}
</script>
<style lang="">
    
</style>