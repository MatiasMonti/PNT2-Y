<template lang="">
    <div>
        <h1>Componente for</h1>
        <h2>Lista de usuarios </h2>
        <ul>    
            <li v-for="user in usuarios" :key= "user.id">{{user.name}}</li>
        </ul>

    </div>
</template>
<script>
export default {
    data(){        
        return{
            usuarios : []
        }
    },
    mounted() {
      this.fetchUsuarios();  
    },
    methods:{
        async fetchUsuarios(){
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json();
                this.usuarios = data;
            } catch (error) {
                console.error('error en el fetch', error)
            }
        }
    }
}
</script>
<style lang="">
    
</style>