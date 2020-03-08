const express = require('express')
const cors = require('cors')
const playerCtrl = require('./controllers/playerCtrl')


const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/startingPlayer', playerCtrl.getStarter)
app.post('/api/newPlayer', playerCtrl.newPlayer)
app.put('api/trainPlayer', playerCtrl.trainPlayer)
const port = 3333

app.listen(port, ()=> console.log(`Server running on port: ${port}`))