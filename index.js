const express       = require('express')
const dotenv        = require('dotenv')
dotenv.config({path: '.env-local'}) // Para usar las variables de entorno
const PORT          = process.env.PORT || '3000'
const app           = express()
const searchRouter  = require('./routes/search')
const path          = require('path')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Rutas de la pagina
app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.use('/search', searchRouter)

// Empieza a escuchar al puerto especificado
app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`)
})