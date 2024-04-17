<template>
    <h1>Lista de tareas</h1>
    <ul>
        <li v-for="tarea in tareasFiltradas" :key='tarea.id'>
            {{ tarea.texto }}
        </li>
    </ul>
    <input type='text' v-model='filtro' placeholder="Filtrar Tareas">
</template>
<script>
export default {
    data(){
        return {
            tareas:[
                {id: 1, texto: 'Hacer las compras', completada: true},
                {id: 2, texto: 'Estudiarh', completada: false},
                {id: 3, texto: 'Rendir examen', completada: false}
            ],
            filtro: ''
        }
    },
    computed:{
        tareasFiltradas() {
            return this.tareas.filter( tarea => tarea.texto.toLowerCase().includes(this.filtro.toLowerCase()))
        }
    }
}
</script>
<style scoped>
    h1{
        color: red
    }
</style>