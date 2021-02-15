const router = require('express').Router()

const { createClient, getClients , showClient , deleteClient , updateClient} = require('./actions')


//get Clients

router.get('/' , getClients )

//GET by ID

router.get('/:id' , showClient)

//POST create a client 

router.post('/' , createClient)

//PUT Update a client0s info

router.put('/:id' , updateClient )

//DELETE bt ID


router.delete('/:id' , deleteClient)

module.exports = router