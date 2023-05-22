const express = require('express')
const router = express.Router()

const Employee = require('../models/employee.model.js')

const { validateDbId, raiseRecord404Error} = require('../middlewares')
const { generateCrudMethods } = require('../services')
const employeeCrud = generateCrudMethods(Employee)

//Read all
router.get('/', (req, res, next) => {
    employeeCrud.getall()
        .then(data => {
            data ? res.send(data):raiseRecord404Error(req, res)
        })
        .catch(err => next(err))
})

//Read by id
router.get('/:id', validateDbId, (req, res, next) => {
    employeeCrud.getByid(req.params.id)
        .then(data => {
            data ? res.send(data):raiseRecord404Error(req, res)
        })
        .catch(err => next(err))
})

//Create
router.post('/', (req, res, next) => {
    employeeCrud.create(req.body)
        .then(data => {
            data ? res.send(data):raiseRecord404Error(req, res)
        })
        .catch(err => next(err))
})

//Update
router.put('/:id', validateDbId, (req, res, next) => {
    employeeCrud.update(req.params.id ,req.body)
        .then(data => {
            data ? res.send(data):raiseRecord404Error(req, res)
        })
        .catch(err => next(err))
})

//Delete
router.delete('/:id', validateDbId, ( req, res, next) => {
    employeeCrud.delete(req.params.id)
        .then(() => {
            data ? res.json({ message: "Deleted successfully!" }):raiseRecord404Error(req, res)
        })
        .catch(err => next(err))
})


module.exports = router