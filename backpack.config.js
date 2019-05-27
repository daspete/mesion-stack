require('dotenv').config()

const path = require('path')

module.exports = {
    webpack: (config, options, webpack) => {
        const rootPath = path.resolve(process.cwd())
        const srcPath = rootPath

        switch (process.env.BACKPACK_ENV) {
            case 'seeder':
                config.output.path = path.join(rootPath, 'build', 'tools', 'seeder')
                config.entry.main = ['./tools/seeder/index.js']
                break;
            default:
                config.output.path = path.join(rootPath, 'build', 'server')
                config.entry.main = ['./server/index.js']
        }

        config.resolve = {
            alias: {
                '~root': srcPath,
                '~config': srcPath + '/config',
                '~server': srcPath + '/server',
                '~client': srcPath + '/client',
                '~api': srcPath + '/api',
                '~sockets': srcPath + '/sockets',
                '~utils': srcPath + '/utils',
                '~models': srcPath + '/models',
            }
        }

        return config
    }
}