<template>
    <div class="login">
        <form v-on:submit.prevent="Login">
            <input type="text" v-model="credentials.email">
            <input type="password" v-model="credentials.password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
    middleware: 'notAuthenticated',

    asyncData(){
        return {
            credentials: {
                email: '',
                password: ''
            }
        }
    },

    methods: {
        async Login(){
            try {
                let response = await this.$axios.$post('user/login', this.credentials)
                Cookie.set('token', response.token)
                await this.$store.commit('auth/setToken', response.token)
                this.$router.push('/')
            }catch(err){
                console.log(err)
            }
        }
    }
}
</script>
