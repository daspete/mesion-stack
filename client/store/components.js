export const state = () => ({
    components: []
})

export const mutations = {
    setComponents(state, components){
        state.components = components
    }
}

export const getters = {
    Components(state){
        return state.components
    }
}