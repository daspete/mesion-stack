export const state = () => ({
    counter: 0
})

export const mutations = {
    increment(state){
        state.counter++
    }
}

export const actions = {
    async nuxtServerInit({ commit, dispatch }, { req }){
        await dispatch('auth/FetchTokenFromCookie', { req })
    }
}