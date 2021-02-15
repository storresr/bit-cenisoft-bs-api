const router = require('express').Router()

const { createSale, getSales , showSale , deleteSale , updateSale} = require('./actions')




router.get('/' , getSales )



router.get('/:id' , showSale)



router.post('/' , createSale)


router.put('/:id' , updateSale )


router.delete('/:id' , deleteSale)

module.exports = router