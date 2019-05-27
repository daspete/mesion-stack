import { Router } from 'express'
import v1 from './v1'

import serverConfig from '~config/server'

const router = new Router()

router.use(serverConfig.apiPrefix, v1)

export default router