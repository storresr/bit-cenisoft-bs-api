const { where } = require('./model')
const Client = require('./model')


const createClient = (req,res) => {
    const newClient = new Client({
        name : 'Steven',
        address: 'Calle 17',
        mobile : '3207904072',
        email : 'strcm@hotmail.com'
    })
    
    newClient.save((err, clientSaved) => {
    if(err)
    {
        res.status(500).send(err)
    }
    else
    {
        res.status(200).send(clientSaved)
    }
    })

    
}

const getClients = async (req,res) => {

    const clients = await Client.find()

    res.status(200).send(clients)
}

const showClient = async (req,res) => {

    let id = req.params.id
    const client = await Client.find({_id : id})

    res.status(200).send(client)
}



const deleteClient = async (req,res) => {

    let id = req.params.id
    const client = await Client.remove({_id : id})

    res.status(200).send(client)
}


const updateClient = async (req,res) => {
    let id = req.params.id
    const client = await Client.update(
        { _id: '6021aad8246af236a4504079' },
        {
          $set: {
            name: "Dylan Torres"
          }
        }
     )

    res.status(200).send(client)
}

module.exports = { createClient , getClients , showClient , deleteClient , updateClient}