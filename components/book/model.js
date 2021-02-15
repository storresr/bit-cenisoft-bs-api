const mongoose = require('mongoose')

const Book = mongoose.model('books', { caratula: String, nombre: String , descripcion: String , valorUnitario: Number, categorias: [String] })

module.exports = Book
