const mongoose = require('mongoose')

const Sale = mongoose.model('sales', { fecha: Date, total: Number , idCliente: Object})

module.exports = Sale
