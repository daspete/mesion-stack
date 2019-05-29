<template>
    <div class="page">
        <h1>PAGE</h1>
        <div>API_DATA: {{ apiData }}</div>
        <div>SOCKET_DATA: {{ socketData }}</div>
    </div>
</template>

<script>
const components = {}

export default {
    middleware: 'authenticated',

    async asyncData({ $axios }){
        let apiData = null
        
        try {
            apiData = await $axios.$get('')
        }catch(err){

        }

        return {
            apiData,
            socketData: {},
        }
    },

    sockets: {
        connect(){
            console.log('socket io connected')
        },
        'socket.data'(data){
            this.socketData = data
        }
    },

    mounted(){
        this.$socket.open()
    }

}
</script>
