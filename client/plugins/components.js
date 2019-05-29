import Vue from 'vue'

let components = []
let componentFiles = []

export default ({ store }) => {
    if(process.server){
        const find = require('find')

        componentFiles = find.fileSync(/\.vue$/, './client/components')
        components = componentFiles.map((componentFile) => {
            return {
                name: componentFile.split('/').reverse()[0].replace('.vue', ''),
                path: componentFile.replace('client/components/', '').replace('.vue', '')
            }
        })

        store.commit('components/setComponents', components)
    }else{
        components = store.getters['components/Components']
    }

    for(let i = 0; i < components.length; i++){
        Vue.component(components[i].name, () => import(`~/components/${ components[i].path }`))
    }
}
