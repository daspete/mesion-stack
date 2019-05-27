import commander from 'commander'
import mongoose from '~server/services/mongoose'

mongoose()

commander
    .arguments('<seed>')
    .action(async (seed) => {
        try {
            let seeder = require('~root/seeds/' + seed + '.js').default
            await seeder()
            process.exit(0)
        } catch (err) {
            console.log(err)
            process.exit(1)
        }
    })

commander.parse(process.argv)