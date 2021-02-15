const Book  = require('./model')
const DetailBook  = require('./modelDetailBook')
  
const createBook = (req,res) => {
    const newBook = new Book({
        caratula : 'Azul',
        nombre: 'Pideme lo que quieras y te lo dare',
        descripcion : 'asdfghjk',
        valorUnitario : 10,
        categorias : ['Sexo', 'Amor']
    })
    
    newBook.save((err, bookSaved) => {
    if(err)
    {
        res.status(500).json(err)
    }
    else
    {

        const detailBook  = new DetailBook({
            idLibro : newBook._id,
            nombre: newBook.nombre,
            valorUnitario : newBook.valorUnitario,
            cantidad : 10
        })
    
        detailBook.save()

        res.status(200).json(bookSaved)

        
    }
    })



    

    
}






const getBooks = async (req,res) => {

    const books = await Book.find()

    res.status(200).send(books)
}

const showBook = async (req,res) => {

    let id = req.params.id
    const book = await Book.find({_id : id})

    res.status(200).send(book)
}



const deleteBook = async (req,res) => {

    let id = req.params.id
    const book = await Book.remove({_id : id})

    res.status(200).send(book)
}


const updateBook = async (req,res) => {
    let id = req.params.id
    const book = await Book.update(
        { _id: id },
        {
          $set: {
            caratula: "Roja"
          }
        }
     )

    res.status(200).send(book)
}

module.exports = { createBook , getBooks , showBook , deleteBook , updateBook }