const Sale = require('./model')


const createSale = (req,res) => {

    var date = new Date;

    const newSale = new Sale({
        fecha : date,
        total: 89000,
        idCliente : '6021aad8246af236a4504079',
    })
    
    newSale.save((err, saleSaved) => {
    if(err)
    {
        res.status(500).send(err)
    }
    else
    {
        res.status(200).send(saleSaved)
    }
    })

    
}

const getSales = async (req,res) => {

    const sales = await Sale.find()

    res.status(200).send(sales)
}

const showSale = async (req,res) => {

    let id = req.params.id
    const sale = await Sale.find({_id : id})

    res.status(200).send(sale)
}



const deleteSale = async (req,res) => {

    let id = req.params.id
    const sale = await Sale.remove({_id : id})

    res.status(200).send(sale)
}


const updateSale = async (req,res) => {
    let id = req.params.id
    const sale = await Sale.update(
        { _id: id },
        {
          $set: {
            total: 350000
          }
        }
     )

    res.status(200).send(sale)
}

module.exports = { createSale , getSales , showSale , deleteSale , updateSale}