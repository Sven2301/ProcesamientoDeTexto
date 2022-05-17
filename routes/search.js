const express = require("express")
const pool = require("../helpers/database")
const router = express.Router()

router.get('/:name', async function(req, res){

    pool.query(`SELECT id, nombre, url FROM webpage WHERE nombre="${req.params.name}"`, (err, result, fields) => {
        if(err){
            return console.log(err)
        }
        return console.log(result)
    })
})

module.exports = router