import jwt from 'jsonwebtoken'
import authConfig from '~config/auth'

export default (user) => {
    let jwtUser = {
        _id: user._id,
        email: user.email
    }

    let token = jwt.sign(
        { user: jwtUser },
        authConfig.secret,
        { expiresIn: authConfig.tokenLifeTime }
    )

    return token
}