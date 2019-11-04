
const express = require('express')


const bogApi = require('../models/bog.js')


const bogRouter = express.Router()


bogRouter.get('/', (req, res) => {
  res.json('hello')
})
//getAll
bogRouter.get('/bog', (req, res) => {
  bogApi.getAllBogs()
    .then((allBogs) => {
      res.json(allBogs)
    })
})

// getOne
bogRouter.get('/bog/:id', (req, res) => {
  bogApi.getOneBog(req.params.id)
    .then((singleBog) => {
     res.json(singleBog)
      // res.json(singleBog)
    })
})

// update
bogRouter.put('/bog/:id', (req, res) => {
  bogApi.updateBog(req.params.id, req.body)
    .then((updatedBog) => {
      // res.json(updatedBog)
      res.redirect(`/bog/${req.params.id}`)
    })
})

// create
bogRouter.post('/bog/', (req, res) => {
  console.log(req.body)
  bogApi.createBog(req.body)
    .then((createdBog) => {
      res.redirect('/bog')
    })
  })

// delete
bogRouter.delete('/bog/:id', (req, res) => {
  bogApi.deleteBog(req.params.id)
    .then((deletedBog) => {
      res.redirect('/bog')
      // res.json(deletedBog)
    })
})

module.exports = {
  bogRouter
}
