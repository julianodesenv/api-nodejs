import mongoose from 'mongoose'

const Category = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    }
})

export default mongoose.model('Category', Category)