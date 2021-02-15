const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

// Carga y abre la conexión con la base de datos
require('./db')

// Rutas
const clientRoutes = require('./components/client/routes')
const bookRoutes = require('./components/book/routes')
const saleRoutes = require('./components/sales/routes')

const PORT = process.env.PORT || 3000

// Middleware para permitir recibir solicitudes HTTP desde cualquier dominio
app.use(cors())

// Middleware para leer datos en JSON desde el body de la petición
app.use(bodyParser.json())

// Instalación de rutas en el router principal
app.use('/clients', clientRoutes)
app.use('/books', bookRoutes)
app.use('/sales', saleRoutes)

app.listen(PORT, () => {
  console.log(`Server APP listening at localhost:${PORT}`)
})
