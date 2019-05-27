import 'dotenv/config'

export default {
    ip: process.env.SERVER_HOST || '127.0.0.1',
    port: process.env.SERVER_PORT || '3000',
    logFormat: process.env.SERVER_LOG_FORMAT || 'web',
    apiPrefix: process.env.API_PREFIX || '/api/v1/'
}