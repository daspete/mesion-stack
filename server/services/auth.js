import passport from 'passport'
import bcrypt from 'bcrypt'
import { Strategy as LocalStrategy } from 'passport-local'
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt'

import authConfig from '~config/auth'

import UserModel from '~models/user'

export default () => {
    passport.use('login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, async (email, password, done) => {
        try {
            const user = await UserModel.findOne({
                email: { $regex: new RegExp('^' + email + '$', 'i') },
                active: true
            })
            if (!user) return done(null, false, { message: 'notfound' })

            let passwordCheck = await bcrypt.compare(password, user.password)
            if (!passwordCheck) return done(null, false, { message: 'wrongpass' })

            return done(null, user, { message: 'loginsuccess' })
        } catch (err) {
            return done(err)
        }
    }))

    passport.use(new JWTStrategy({
        secretOrKey: authConfig.secret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }, async (token, done) => {
        try {
            return done(null, token.user)
        } catch (err) {
            return done(err)
        }
    }
    ))
}
