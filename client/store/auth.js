const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => ({
    token: null
})

export const mutations = {
    setToken(state, token){
        state.token = token
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

        commit('setToken', token)
    }
}

export const getters = {
    Token(state){
        return state.token
    }
}