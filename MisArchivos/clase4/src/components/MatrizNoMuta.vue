<template lang="">
    <div>
        <h1>Matriz no muta</h1>
        <h2>lista de tareas</h2>
        <ul>    
            <li v-for="tare in tareasFiltradas" :key= "tare.id">{{tare.texto}}</li>
        </ul>
        <input type='text' v-model="filtro"  placeholder='Filtrar Tareas'>

    </div>
</template>
<script>
export default {
    data(){        
        return{
            tareas : [
                {id :1, texto : 'comprar', completada: true}
                ,{id :2, texto : 'estudiar',completada: true}
                ,{id :3, texto : 'entrenar',completada: false}
            ],
            filtro: ''
        }
    },
    computed:{
        tareasFiltradas(){
            return this.tareas.filter(tar => tar.texto.toLowerCase().includes(this.filtro.toLowerCase()));
        }
    }
}
</script>
<style scoped>
    h1{
        color : red;
    }
</style>