const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://<user>:<password>@cluster0.p9acjwq.mongodb.net/employee_db?retryWrites=true&w=majority'

//mongoose.set('strictQuery', false)

// module.exports = () => {
//     return mongoose.connect(dbUri,
//         { useNewUrlParser: true, useUnifiedTopology: true})
// }

module.exports = () => {
    return mongoose.connect(dbUri)
}
