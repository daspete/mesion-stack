import mongoose from 'mongoose'
import mongooseConfig from '~config/mongoose'

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error: ' + err)
})

export default () => {
    const mongooseOptionKeys = Object.keys(mongooseConfig.options)

    mongooseOptionKeys.forEach((mongooseOptionKey) => {
        mongoose.set(mongooseOptionKey, mongooseConfig.options[mongooseOptionKey])
    })

    mongoose.connect(mongooseConfig.mongoUrl)

    console.log('Mongo DB connected')
} 