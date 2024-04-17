<template lang="">
    <div>
        <h2>Lista de Numeros</h2>
        <ul>
            <li v-for="numero in numeros" :key="numero">{{numero}}</li>
        </ul>
        <label>Ingrese un nuevo numero</label>
        <input type="Number" id="" v-model="nuevoNumero">
        <button @click="agregarNumero">Agregar Numero</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            numeros: [4, 6, 7, 10, 20],
            nuevoNumero: null
        }
    },
    methods:{
        agregarNumero(){
            if(this.nuevoNumero !== null && !isNaN(this.nuevoNumero)){
                this.numeros.push(Number(this.nuevoNumero))
                this.nuevoNumero = null
            }else{
                alert('Por favor ingrese un numero')
            }
        }
    }
}
</script>
<style lang="">
    
</style>