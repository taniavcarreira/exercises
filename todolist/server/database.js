const mongoose = require('mongoose')
mongoose.connect('mongodb://root:example@localhost:27017/api?authSource=admin', {
    useNewUrlParser: true,
})

mongoose.connection.on('error', (err) => console.log(err + 'ERROR: Database not Connected'))
mongoose.connection.on('open', () => console.log('SUCCESS: Database Connected'))