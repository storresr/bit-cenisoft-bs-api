const router = require('express').Router()

const { createBook, getBooks , showBook , deleteBook , updateBook , createDetailBook} = require('./actions')




router.get('/' , getBooks )



router.get('/:id' , showBook)



router.post('/' , createBook)



router.put('/:id' , updateBook )

//DELETE bt ID

router.delete('/:id' , deleteBook)


module.exports = router