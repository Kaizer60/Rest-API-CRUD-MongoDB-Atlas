const express = require('express')
const bodyParser = require('body-parser')
const Port = 3000

//location imports
const connectDB = require('./db.js')
const employeeRoutes = require('./controllers/employee.controller.js')

const app = express()

const { errorConnection } = require('./middlewares')

//middleware
app.use(bodyParser.json())
app.use('/api/employees',employeeRoutes)
app.use(errorConnection)

//connection Db
connectDB()
    .then(() => {
        console.log('db connection successfully!')
        app.listen(Port, () => console.log(`server started at ${Port}`))
    })
    .catch(err => {
        console.log("Connection fail! " + err)
    })