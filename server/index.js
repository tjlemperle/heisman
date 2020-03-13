const express = require('express')
const cors = require('cors')
const playerCtrl = require('./controllers/playerCtrl')
const summaryCtrl = require('./controllers/summaryCtrl')


const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/startingPlayer', playerCtrl.getStarter)
app.post('/api/newPlayer', playerCtrl.newPlayer)
app.put('/api/trainPlayer', playerCtrl.trainPlayer)

app.post('/api/play', summaryCtrl.play)
app.post('/api/add', playerCtrl.add)
app.delete('/api/delete/:id', playerCtrl.delete)


const port = 3333

app.listen(port, ()=> console.log(`Server running on port: ${port}`))