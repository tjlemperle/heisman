const celebs = require('../../src/array')
let currentPlayer = []
const options = []

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

module.exports ={
    getStarter: (req, res) => {

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

        res.status(200).send(currentPlayer)
    },

    newPlayer: (req, res) => {

        const randIndex = Math.ceil(Math.random() * celebs.length-1)
        const randArm = getRandomInt(1, 100)
        const randDec = getRandomInt(1, 100)
        const randSpeed = getRandomInt(1, 100)
        const rating = Math.ceil((randArm + randDec + randSpeed)/ 3)
        let randName = celebs[randIndex].name

        const player = {
            name: randName,
            speed: randSpeed,
            arm: randArm,
            decision: randDec,
            overall: rating,
        }


        currentPlayer.push(player)
        currentPlayer.splice(0, 1)
 
        res.status(200).send(currentPlayer)
    },

    // trainPlayer: (req, res) => {
    //     let {arm, speed, decision} = req.body
    //     player[arm] = arm + getRandomInt(1,3)
    //     speed = speed + getRandomInt(1,3)
    //     decision = decision + getRandomInt(1,3)

    //     res.status(200).send(currentPlayer)
    // },

}