const mongoose = require ('mongoose')

const roomSchema = new mongoose.Schema ({

    name: String
}, {timestamps: true})

module.exports = mongoose.model('room', roomSchema)