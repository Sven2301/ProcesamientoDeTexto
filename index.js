const express       = require('express')
const dotenv        = require('dotenv')
dotenv.config({path: '.env-local'}) // Para usar las variables de entorno
const PORT          = process.env.PORT || '3000'
const app           = express()
const searchRouter  = require('./routes/search')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Rutas de la pagina
app.get('/', (request, response) => {
    response.status(200).send("Pagina de inicio")
})

app.use('/search', searchRouter)

// Empieza a escuchar al puerto especificado
app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`)
})