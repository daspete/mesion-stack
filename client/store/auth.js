const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => ({
    token: null,
    user: null
})

export const mutations = {
    setToken(state, token){
        state.token = token
    },

    setUser(state, user){
        state.user = user
    }
}

export const actions = {
    async FetchTokenFromCookie({ commit }, { req }){
        let token = null
        
        if(req.headers.cookie){
            const parsedCookie = cookieparser.parse(req.headers.cookie)

            try {
                token = parsedCookie.token
            }catch(err){}
        }

        if(token){
            commit('setToken', token)

            try{
                let me = await this.$axios.$get('user/me')
                commit('setUser', me)
            }catch(err){
                token = null
            }
        }

        commit('setToken', token)

        
    }
}

export const getters = {
    Token(state){
        return state.token
    },
    User(state){
        return state.user
    }
}