import repl from 'repl'

const replServer = repl.start({
    prompt: '> '
})

export const AddToReplContext = (key, value) => {
    replServer.context[key] = value
}

export default () => {

}