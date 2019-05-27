import 'dotenv/config'

let secure = process.env.SERVER_HTTPS == 'true'
let apiUrl = 'http' + (secure ? 's' : '') + '://' + process.env.SERVER_HOST + ':' + process.env.SERVER_PORT

export default {
    env: {
        SOCKET_URL: apiUrl
    },

    server: {
        port: process.env.CLIENT_PORT || '3002',
        host: process.env.CLIENT_HOST || '127.0.0.1'
    },

    buildDir: 'build/client',

    build: {
        extractCSS: true,

        splitChunks: {
            layouts: true,
            pages: true,
            commons: true
        },

        loaders: {
            scss: {
                data: ``
            },
            vue: {
                compilerOptions: {
                    preserveWhitespace: false
                }
            }
        }
    },

    axios: {
        baseURL: apiUrl + process.env.API_PREFIX
    },

    srcDir: 'client',

    globalName: 'mesion',

    css: ['~/assets/scss/app.scss'],

    plugins: [
        '~plugins/axios',
        { src: '~plugins/socketio', ssr: false }
    ],

    modulesDir: ['./node_modules'],

    modules: [
        '@nuxtjs/axios',
    ],

}