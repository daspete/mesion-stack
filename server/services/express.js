import express from 'express'
import cors from 'cors'
import compression from 'compression'
import morgan from 'morgan'
import helmet from 'helmet'
import bodyParser from 'body-parser'

import corsConfig from '~config/cors'
import serverConfig from '~config/server'

import api from '~api'

export default () => {
    const app = express()

    app.use(helmet())
    app.use(cors(corsConfig))
    app.use(compression())
    app.use(morgan(serverConfig.logFormat))

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    app.use(api)

    return app
}
