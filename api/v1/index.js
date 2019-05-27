import { Router } from 'express'
// import passport from 'passport'

import user from './user'

// const AuthMiddleware = passport.authenticate('jwt', { session: false })
const router = new Router()

router.use('/user', user)
router.get('/', async (req, res, next) => { res.json({ hello: 'api' }) })

export default router