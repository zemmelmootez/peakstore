const express = require('express')
const app = express()
const port = 8000
const cors=require('cors')
const connect =require('./helpers/dbConnect')
const shoesRoute=require('./routes/shoesRoute')
app.use(express.json())
app.use(cors())

connect()
app.use('/api/shoes',shoesRoute) 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))