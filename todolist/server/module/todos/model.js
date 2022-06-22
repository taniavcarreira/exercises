const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
    text: String,
    },
    {
        timestamps: true,
    }
)

// const TodoModel = mongoose.model('Todo', schema)
// module.exports = TodoModel

module.exports = mongoose.model('Todo', schema)