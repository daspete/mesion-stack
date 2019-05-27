export default ({ store, redirect }) => {
    if(!store.getters['auth/Token']){
        redirect('/login')
    }
}