import jwt from 'jsonwebtoken'
import UserModel from '~models/user'

export default async (authorization) => {
    let token = jwt.decode(authorization.replace('Bearer ', ''))

    let user = token.user
    user = await UserModel.findOne({ _id: user._id })

    return user
}
