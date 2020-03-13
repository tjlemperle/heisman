const express = require('express')
const cors = require('cors')
const playerCtrl = require('./controllers/playerCtrl')
const summaryCtrl = require('./controllers/summaryCtrl')
const favoriteCtrl = require('./controllers/favoriteCtrl')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/startingPlayer', playerCtrl.getStarter)
app.post('/api/newPlayer', playerCtrl.newPlayer)
app.put('/api/trainPlayer', playerCtrl.trainPlayer)

app.post('/api/play', summaryCtrl.play)
app.post('/api/favorite', favoriteCtrl.add)
app.delete('/api/favorite/:id', favoriteCtrl.delete)


const port = 3333

app.listen(port, ()=> console.log(`Server running on port: ${port}`))