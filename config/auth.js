import 'dotenv/config'

export default {
    secret: process.env.AUTH_SECRET || 'this-is-a-very-secure-string-which-protects-the-jwt',
    tokenLifeTime: parseInt(process.env.AUTH_TOKEN_LIFETIME) || 60 * 60
}
