const celebs = require('../../src/array')
// let currentPlayer = []


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }


module.exports = {
    play: (req, res) => {
        let opponents = []
        let overall = req.body.currentPlayer.overall
        let {wins, losses, money} = req.body.summary;
        //for loop for each index in opponents array.  random name and random attributes.  
        //compare to currentPlayer, if currentPlayer overall is >= then increase money by 1. 
        //increment wins and losses as well.  
        for(let i=0; opponents.length < 50; i++) {
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
    
            
            opponents.push(player)
           
        }
        
        for(let i=0; i < opponents.length; i++){

            if(overall >= opponents[i].overall){
                money++
                wins++
            } else {
                losses++
            }
            console.log("summary info in loop", money, wins, losses)
        }

        res.status(200).send({money, wins, losses})
    }
}