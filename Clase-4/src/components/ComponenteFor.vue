<template >
    <div>
        <h2>Lista de Usuarios:</h2>
        <ul>
            <li v-for="user in usuarios" :key="user.id">{{user.name}}</li>
            <button @click='fetchUsuarios'></button>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            usuarios: []
        }
    },
    // mounted(){
    //     this.fetchUsuarios()
    // },
    methods:{
        async fetchUsuarios(){
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json();
                this.usuarios = data;
            } catch (error) {
                console.error('Error al hacer el fetch', error)
            }
        }
    }
}
</script>
<style >
    
</style>