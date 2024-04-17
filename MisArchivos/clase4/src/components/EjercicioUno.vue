<template lang="">
    <div>
        <h2>Lista de numeros</h2>
        <ul>    
            <li v-for="num in numeros" :key= "num">
                {{num}}
            </li>
        </ul>
        <input type='number' id='' v-model="nuevoNumero">
        <button @click='agregarNumero'>agregar Numero</button>
    </div>
</template>
<script>
export default {    
    data(){        
        return{
            numeros : [4,6,7,10,20],
            nuevoNumero : null
        }
    },
    methods:{
        agregarNumero(){
            if(this.nuevoNumero !== null && !isNaN(this.nuevoNumero)){
                this.numeros.push(this.nuevoNumero)
            }
        }
    }
}
</script>
<style lang="">
    
</style>