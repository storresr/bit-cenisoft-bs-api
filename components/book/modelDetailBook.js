const mongoose = require('mongoose')


const DetailBook = mongoose.model('details', { idLibro: Object, nombre: String , valorUnitario: Number,  cantidad : Number})


module.exports = DetailBook 
