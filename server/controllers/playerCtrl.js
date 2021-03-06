const celebs = require('../../src/array')
let currentPlayer = []
let saved = []

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

module.exports ={
    getStarter: (req, res) => {

        if(currentPlayer.length === 0){
        const randIndex = Math.ceil(Math.random() * celebs.length-1)
        // const randArm = Math.ceil(Math.random() * 100)
        // const randDec = Math.ceil(Math.random() * 100)
        // const randSpeed = Math.ceil(Math.random() * 100)
        // const rating = Math.ceil((randArm + randDec + randSpeed)/ 3)
        let randName = celebs[randIndex].name

        let starter = {
            name: randName,
            speed: 30,
            arm: 30,
            decision: 30,
            overall: 30,
        }
        
        currentPlayer.push(starter)
    }

        res.status(200).send(currentPlayer)
    },

    newPlayer: (req, res) => {

        let {money} = req.body.summary

        if(money >= 50){
        money -= 50;

        const randIndex = Math.ceil(Math.random() * celebs.length-1)
        const randArm = getRandomInt(1, 100)
        const randDec = getRandomInt(1, 100)
        const randSpeed = getRandomInt(1, 100)
        const rating = Math.ceil((randArm + randDec + randSpeed)/ 3)
        let randName = celebs[randIndex].name

        let player = {
            name: randName,
            speed: randSpeed,
            arm: randArm,
            decision: randDec,
            overall: rating,
        }


        currentPlayer.push(player)
        currentPlayer.splice(0, 1)
        }   
 
        res.status(200).send({currentPlayer, money})
    },

    trainPlayer: (req, res) => {
        // let {arm, speed, decision} = req.body
        let {money} = req.body.summary

        if(money >= 5){
        money -= 5;

        currentPlayer[0].arm += getRandomInt(1,3)
        currentPlayer[0].speed += getRandomInt(1,3)
        currentPlayer[0].decision += getRandomInt(1,3)
        currentPlayer[0].overall = Math.ceil((currentPlayer[0].arm + currentPlayer[0].speed + currentPlayer[0].decision) / 3)

        // console.log(currentPlayer)
        }
        res.status(200).send({currentPlayer, money})
    },

    add: (req, res) => {
        const {player} = req.body
        player.id = id
        id++
        saved.push(player)
        res.status(200).send(saved)
    },

    edit: (req, res) => {
        const {name} = req.body
        const updateID = req.params.id
        const savedIndex = saved.findIndex(element => element.id == updateID)
        let saved = saved[savedIndex]

        saved[savedIndex]= {
            id: saved.id, 
            name: name || saved.name
        }

        res.status(200).send(saved)
    },

    delete: (req,res) => {
        const {id} = req.params
        const index = saved.findIndex(e => e.id === +id)
        saved.splice(index, 1)
        res.status(200).send(saved)
    }

}