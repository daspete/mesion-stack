import passport from 'passport'

import UserModel from '~models/user'

import GetUserByToken from '~utils/GetUserByToken'
import HashPassword from '~utils/HashPassword'
import CreateJWTToken from '~utils/CreateJWTToken'

export const index = async (req, res, next) => {
    let users = await UserModel.find({})
    res.json(users)
}

export const create = async (req, res, next) => {
    try{
        let userData = req.body
        userData.password = await HashPassword(userData.password)
        let user = await new UserModel(req.body).save()
        res.json(user)
    }catch(err){
        res.status(500).json(err)
    }
}

export const login = async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try{
            if(!user) return res.status(401).json(info)
            if(err) return next(new Error(info))

            req.login(user, { session: false }, async (error) => {
                if(error) return next(error)
                let token = CreateJWTToken(user)
                return res.json({ token })
            })
        }catch(err){
            return next(err)
        }
    })(req, res, next)
}

export const me = async (req, res, next) => {
    let user = await GetUserByToken(req.headers.authorization)
    res.json(user)
}


export const refreshToken = async (req, res, next) => {
    let user = await GetUserByToken(req.headers.authorization)
    let token = CreateJWTToken(user)
    res.json({ token })

}