<template>
    <div class="login">
        <form v-on:submit.prevent="Login">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1>Login</h1>
                        <input class="d-block w-100 mb-2 p-2" type="text" v-model="credentials.email" placeholder="E-Mail">
                    </div>
                    <div class="col-12">
                        <input class="d-block w-100 mb-2 p-2" type="password" v-model="credentials.password" placeholder="Password">
                    </div>
                    <div class="col-12 text-right">
                        <button type="submit">Login</button>
                    </div>
                </div>
            </div>
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
            },
        }
    },

    mounted(){
        Cookie.remove('token')
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
