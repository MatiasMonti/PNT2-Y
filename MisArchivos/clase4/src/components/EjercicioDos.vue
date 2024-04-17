<template lang="">
    <div>
        <h2>Lista de nombres</h2>
        <ul>    
            <li v-for="str in nombres" :key= "str">
                {{str}}
            </li>
        </ul>
        <input type='string' id='' v-model="nuevoNombre">
        <button @click='agregarNombre'>agregar Nombre</button>
    </div>
</template>

<script>
export default {    
    data(){
        return{
            nombres: ['Juan', 'Matias', 'Lucas', 'Jose'],
            nuevoNombre : null
        }
    },
    methods:{
        agregarNombre(){
            if(String.isNullOrEmpty(this.nuevoNombre)){
                this.nombres.push(this.nuevoNombre)
            }
        }
    }
}
</script>

<style lang="">
    
</style>