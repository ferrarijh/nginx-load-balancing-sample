const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000

console.log(__dirname)

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/views/index.html')
})

app.listen(PORT, ()=>{
    console.log('listening on port '+PORT+'...')
})