
const express = require('express')


const bogApi = require('../models/bog.js')


const bogRouter = express.Router()



//getAll
bogRouter.get('/bog', (req, res) => {
  bogApi.getAllBogs()
    .then((allBogs) => {
      res.json(allBogs)
      console.log(allBogs)
    })
})

// getOne
bogRouter.get('/bog/:id', (req, res) => {
  bogApi.getBogById(req.params.id)
    .then((singleBog) => {
     res.json(singleBog)
      // res.json(singleBog)
    })
})

// update
bogRouter.put('/bog/:id', (req, res) => {
  bogApi.updateBogById(req.params.id, req.body)
    .then((updatedBog) => {
      // res.json(updatedBog)
      res.json(updatedBog)
    })
})

// create
bogRouter.post('/bog/', (req, res) => {
  console.log(req.body)
  bogApi.createBog(req.body)
    .then((createdBog) => {
      res.json(createdBog)
    })
  })

// delete
bogRouter.delete('/bog/:id', (req, res) => {
  bogApi.deleteBogById(req.params.id)
    .then((deletedBog) => {
      res.json(deletedBog)
      // res.json(deletedBog)
    })
})

module.exports = {
  bogRouter
}
